<style lang="less">
live-pusher {
  display: flex;
  margin: 11px auto;
  height: 325px;
}

.page-body-button {
  margin-bottom: 15px;
}
.page-url {
  margin: 0 auto 15px;
  width: 90%;
}

input {
  width: 90%;
  margin: 0 auto 15px;
}
</style>
<template>
  <div class="container">
    <head title="live-pusher" />
    <div class="page-body">
      <div class="page-section">
        <live-pusher
          id="pusher"
          v-bind:url="videoSrc"
          mode="RTC"
          autopush
          @statechange="handleLivePusherStateChange"
          @error="handleLivePusherError"
        ></live-pusher>
      </div>
      <div class="page-section">
        <div class="page-url">视频地址 (支持rtmp):</div>
        <input
          name="input"
          placeholder="视频推送链接"
          v-model="videoSrc"
          @input="handleVideoSrcInput"
        />
        <button type="primary" @tap="handleScanQRCode">扫码</button>
      </div>

      <div class="page-section">
        <button @tap="handleStart" class="page-body-button" type="primary">
          开始
        </button>
        <button @tap="handlePause" class="page-body-button" type="primary">
          暂停
        </button>
        <button @tap="handleStop" class="page-body-button" type="primary">
          停止
        </button>
        <button @tap="handleResume" class="page-body-button" type="primary">
          恢复
        </button>
        <button
          @tap="handleSwitchCamera"
          class="page-body-button"
          type="primary"
        >
          切换摄像头
        </button>
      </div>
    </div>

    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'live-pusher',
      path: 'page/component/pages/live-pusher/live-pusher',
    };
  },
  data: {
    videoSrc: '',
    ctx: {} as WechatMiniprogram.LivePusherContext,
  },
  onReady() {
    this.ctx = wx.createLivePusherContext();
  },
  methods: {
    handleLivePusherStateChange(e: WechatMiniprogram.LivePusherStateChange) {
      console.log('live-pusher code:', e.detail.code);
    },
    handleLivePusherError(e: WechatMiniprogram.LivePusherError) {
      console.error('live-pusher error:', e.detail.errMsg);
    },
    handleStart() {
      this.ctx.start({
        success: (res) => {
          console.log('start success');
        },
        fail: (res) => {
          console.log('start fail');
        },
      });
    },
    handleScanQRCode() {
      wx.scanCode({
        complete: (res: any) => {
          this.videoSrc = res.result;
        },
      });
    },
    handlePause() {
      this.ctx.pause({
        success: (res) => {
          console.log('pause success');
        },
        fail: (res) => {
          console.log('pause fail');
        },
      });
    },
    handleStop() {
      this.ctx.stop({
        success: (res) => {
          console.log('stop success');
        },
        fail: (res) => {
          console.log('stop fail');
        },
      });
    },
    handleResume() {
      this.ctx.resume({
        success: (res) => {
          console.log('resume success');
        },
        fail: (res) => {
          console.log('resume fail');
        },
      });
    },
    handleSwitchCamera() {
      this.ctx.switchCamera({
        success: (res) => {
          console.log('switch camera success');
        },
        fail: (res) => {
          console.log('switch camera fail');
        },
      });
    },
    handleVideoSrcInput(e: WechatMiniprogram.Input) {
      this.videoSrc = e.detail.value;
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "live-pusher"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>