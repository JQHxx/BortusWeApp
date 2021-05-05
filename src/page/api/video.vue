<style lang="wxss">
@import '../../common/lib/weui.wxss';

.page-body-info {
  display: flex;
  margin-top: 20px;
  padding: 0;
  height: 330px;
  border-top: 1px solid var(--weui-FG-3);
  border-bottom: 1px solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div class="container">
    <head title="chooseVideo" />
    <div class="page-body">
      <div class="page-section">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">视频来源</div>
            </div>
            <div class="weui-cell__bd">
              <picker
                v-bind:range="sourceType"
                @change="sourceTypeChange"
                v-model="sourceTypeIndex"
              >
                <div class="weui-input">{{ sourceType[sourceTypeIndex] }}</div>
              </picker>
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">摄像头</div>
            </div>
            <div class="weui-cell__bd">
              <picker
                v-bind:range="camera"
                @change="cameraChange"
                v-model="cameraIndex"
              >
                <div class="weui-input">{{ camera[cameraIndex] }}</div>
              </picker>
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">拍摄长度</div>
            </div>
            <div class="weui-cell__bd">
              <picker
                v-bind:range="duration"
                @change="durationChange"
                v-model="durationIndex"
              >
                <div class="weui-input">{{ duration[durationIndex] }}</div>
              </picker>
            </div>
          </div>
        </div>
        <div class="page-body-info">
          <block v-if="src === ''">
            <div class="image-plus image-plus-nb" @tap="chooseVideo">
              <div class="image-plus-horizontal"></div>
              <div class="image-plus-vertical"></div>
            </div>
            <div class="image-plus-text">添加视频</div>
          </block>
          <block v-if="src != ''">
            <video v-bind:src="src" class="video"></video>
          </block>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
const sourceType: Array<Array<'camera' | 'album'>> = [
  ['camera'],
  ['album'],
  ['camera', 'album'],
];
const camera: Array<'front' | 'back'> = [
  'front',
  'back'
];

// eslint-disable-next-line
const duration = Array.apply(null, [{ length: 60 }]).map(function (n, i) {
  return i + 1;
});
wepy.page({
  onShareAppMessage() {
    return {
      title: '拍摄/选择视频',
      path: '/page/api/video',
    };
  },

  data: {
    sourceTypeIndex: 2,
    sourceType: ['拍摄', '相册', '拍摄或相册'],

    cameraIndex: 2,
    camera: ['前置', '后置', '前置或后置'],

    durationIndex: 59,
    duration: duration.map(function (t) {
      return t + '秒';
    }),

    src: '',
  },
  methods: {
    sourceTypeChange(e: WechatMiniprogram.PickerChange) {
      this.sourceTypeIndex = parseInt(e.detail.value as string)
    },
    cameraChange(e: WechatMiniprogram.PickerChange) {
      this.cameraIndex = parseInt(e.detail.value as string)
    },
    durationChange(e: WechatMiniprogram.PickerChange) {
      this.durationIndex = parseInt(e.detail.value as string)
    },
    chooseVideo() {
      const that = this;
      wx.chooseVideo({
        sourceType: sourceType[this.sourceTypeIndex],
        camera: camera[this.cameraIndex],
        maxDuration: duration[this.durationIndex],
        success: (res) => {
          this.src = res.tempFilePath
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "拍摄/选择视频",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>