<style lang="wxss">
@import '../../../common/lib/weui.wxss';
video {
  width: 345px;
}

.weui-cells {
  margin: 20px 15px 0;
  text-align: left;
}
.weui-label {
  width: 5em;
}
.auto-rotate-container {
  margin: 20px 20px 0;
  display: flex;
  justify-content: space-between;
}

.video-container {
  margin: 11px 3px;
  display: flex;
  justify-content: center;
}
</style>
<template>
  <div class="container">
    <head title="video" />
    <div class="page-body">
      <div class="page-section tc">
        <video
          id="myVideo"
          src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
          @error="videoErrorCallback($event.$wx)"
          v-bind:danmu-list="danmuList"
          enable-danmu
          danmu-btn
          show-casting-button
          show-screen-lock-button
          v-bind:show-center-play-btn="false"
          v-bind:show-play-btn="true"
          controls
          picture-in-picture-mode="{{['push', 'pop']}}"
          @enterpictureinpicture="bindVideoEnterPictureInPicture"
          @leavepictureinpicture="bindVideoLeavePictureInPicture"
          v-bind:enable-auto-rotation="enableAutoRotation"
        ></video>
        <div class="auto-rotate-container">
          <div>开启自动旋转</div>
          <div>
            <switch
              model:checked="{{ enableAutoRotation }}"
              @change="handleSwitchChange($event.$wx)"
            />
          </div>
        </div>
        <div class="weui-cells">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">弹幕内容</div>
            </div>
            <div class="weui-cell__bd">
              <input @blur="bindInputBlur($event.$wx)" class="weui-input" type="text" placeholder="在此处输入弹幕内容" />
            </div>
          </div>
        </div>
        <div class="btn-area">
          <button @tap="bindSendDanmu($event.$wx)" class="page-body-button" type="primary" formType="submit">
            发送弹幕
          </button>
        </div>
        <div class="btn-area">
          <navigator url="picture-in-picture" hover-class="other-navigator-hover">
            <button type="primary" class="page-body-button" @tap="bindPlayVideo($event.$wx)">
              小窗模式
            </button>
          </navigator>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length === 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}

wepy.page({
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/video/index',
    };
  },
  onReady() {
    this.videoContext = wx.createVideoContext('myVideo');
  },
  onHide() {},
  data: {
    enableAutoRotation: true,
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1,
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3,
      },
    ],
    inputValue: '',
    videoContext: {} as WechatMiniprogram.VideoContext
  },

  methods: {
    bindInputBlur(e: WechatMiniprogram.InputBlur) {
      this.inputValue = e.detail.value;
    },
    bindVideoEnterPictureInPicture() {
      console.log('进入小窗模式');
    },
    bindVideoLeavePictureInPicture() {
      console.log('退出小窗模式');
    },
    bindPlayVideo() {
      this.videoContext.play();
    },
    bindSendDanmu() {
      this.videoContext.sendDanmu({
        text: this.inputValue,
        color: getRandomColor(),
      });
    },
    videoErrorCallback(e: WechatMiniprogram.VideoError) {
      console.log('视频错误信息:');
      console.log(e.detail.errMsg);
    },
    handleSwitchChange(e: WechatMiniprogram.SwitchChange) {
        this.enableAutoRotation = e.detail.value
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "video",
    "usingComponents": {
        "head": "../../../common/head",
        "foot": "../../../common/foot"
    }
}
</config>