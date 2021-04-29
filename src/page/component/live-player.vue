<style lang="less">
live-player {
  display: flex;
  width: 100%;
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
    <head title="live-player" />
    <div class="page-body">
      <div class="page-section">
        <live-player
          id="player"
          v-bind:src="videoSrc"
          mode="RTC"
          autoplay
          @statechange="handleLivePlayerStateChange"
          @error="handleLivePlayerError"
        ></live-player>
      </div>
      <div class="page-section">
        <div class="page-url">视频地址 (支持flv, rtmp):</div>
        <input
          class="input"
          name="input"
          placeholder="视频播放链接"
          v-model="videoSrc"
          @input="handleVideoSrcInput"
        />
        <button type="primary" @tap="handleScanQRCode">扫码</button>
      </div>
      <div class="page-section">
        <button @tap="handlePlay" class="page-body-button" type="primary">
          播放
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
        <button @tap="handleMute" class="page-body-button" type="primary">
          静音
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
      title: 'live-player',
      path: 'page/component/pages/live-player/live-player',
    };
  },
  data: {
    videoSrc: '',
    ctx: {} as WechatMiniprogram.LivePlayerContext,
  },
  onReady() {
    this.ctx = wx.createLivePlayerContext('player');
  },
  methods: {
    handleScanQRCode() {
      wx.scanCode({
        complete: (res:any) => {
          this.videoSrc = res.result;
        },
      });
    },
    handleLivePlayerStateChange(e: WechatMiniprogram.LivePlayerStateChange) {
      console.log('live-player code:', e.detail.code);
    },
    handleLivePlayerError(e: WechatMiniprogram.LivePusherError) {
      console.error('live-player error:', e.detail.errMsg);
    },
    handlePlay() {
      this.ctx.play({
        success: (res) => {
          console.log('play success');
        },
        fail: (res) => {
          console.log('play fail');
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
    handleMute() {
      this.ctx.mute({
        success: (res) => {
          console.log('mute success');
        },
        fail: (res) => {
          console.log('mute fail');
        },
      });
    },
    handleVideoSrcInput(e: WechatMiniprogram.Input) {
      this.videoSrc = e.detail.value
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "live-player"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>