<style lang="wxss">
@import '../../common/lib/weui.wxss';
</style>
<template>
  <div class="container">
    <head title="choose/predivImage" />
    <div class="page-body">
      <form>
        <div class="page-section">
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">图片来源</div>
              </div>
              <div class="weui-cell__bd">
                <picker
                  v-bind:range="sourceType"
                  @change="sourceTypeChange"
                  v-model="sourceTypeIndex"
                  mode="selector"
                >
                  <div class="weui-input">
                    {{ sourceType[sourceTypeIndex] }}
                  </div>
                </picker>
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">图片质量</div>
              </div>
              <div class="weui-cell__bd">
                <picker
                  v-bind:range="sizeType"
                  @change="sizeTypeChange"
                  v-model="sizeTypeIndex"
                  mode="selector"
                >
                  <div class="weui-input">{{ sizeType[sizeTypeIndex] }}</div>
                </picker>
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">数量限制</div>
              </div>
              <div class="weui-cell__bd">
                <picker
                  v-bind:range="count"
                  @change="countChange"
                  v-model="countIndex"
                  mode="selector"
                >
                  <div class="weui-input">{{ count[countIndex] }}</div>
                </picker>
              </div>
            </div>
          </div>
          <div class="weui-cells">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                <div class="weui-uploader">
                  <div class="weui-uploader__hd">
                    <div class="weui-uploader__title">点击可预览选好的图片</div>
                    <div class="weui-uploader__info">
                      {{ imageList.length }}/{{ count[countIndex] }}
                    </div>
                  </div>
                  <div class="weui-uploader__bd">
                    <div class="weui-uploader__files">
                      <block v-for="image in imageList" v-bind:key="image">
                        <div class="weui-uploader__file">
                          <image
                            class="weui-uploader__img"
                            v-bind:src="image"
                            v-bind:data-src="image"
                            @tap="predivImage"
                          ></image>
                        </div>
                      </block>
                    </div>
                    <div class="weui-uploader__input-box">
                      <div
                        class="weui-uploader__input"
                        @tap="chooseImage"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const sourceType: Array<Array<'album' | 'camera'>> = [["camera"], ["album"], ["camera", "album"]];
const sizeType: Array<Array<'original' | 'compressed'>> = [['compressed'], ['original'], ['compressed', 'original']];

wepy.page({
  onShareAppMessage() {
    return {
      title: '图片',
      path: '/page/api/image',
    };
  },

  data: {
    imageList: [] as string[],
    sourceTypeIndex: 1,
    sourceType: ['拍照', '相册', '拍照或相册'],
    sizeTypeIndex: 1,
    sizeType: ['压缩', '原图', '压缩或原图'],
    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  methods: {
    sourceTypeChange(e: WechatMiniprogram.PickerChange) {
      this.sourceTypeIndex = parseInt(e.detail.value as string)
    },
    sizeTypeChange(e: WechatMiniprogram.PickerChange) {
      this.sizeTypeIndex = parseInt(e.detail.value as string)
    },
    countChange(e: WechatMiniprogram.PickerChange) {
      this.countIndex = parseInt(e.detail.value as string)
    },
    chooseImage() {
      let st = sourceType[this.sourceTypeIndex]
      wx.chooseImage({
        sourceType: ["album", "camera"],
        sizeType: sizeType[this.sizeTypeIndex],
        count: this.count[this.countIndex],
        success: (res) => {
          console.log(res);
          this.imageList = res.tempFilePaths
        },
      });
    },
    previewImage(e: WechatMiniprogram.ControlTap) {
      const current = e.target.dataset.src;
      wx.previewImage({
        current,
        urls: this.imageList,
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "图片",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>