<style lang="less">
</style>
<template>
  <div>
    <audio v-bind:src="src" id="myAudio"></audio>
    <button type="primary" @tap="audioPlay">播放</button>
    <button type="primary" @tap="audioPause">暂停</button>
    <button type="primary" @tap="audio14">设置当前播放时间为14秒</button>
    <button type="primary" @tap="audioStart">回到开头</button>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'Audio',
      path: '/page/api/audio',
    };
  },
  onReady() {
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.setSrc(
      'https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a'
    );
    this.audioCtx.play();
  },
  data: {
    src: '',
    audioCtx: {} as WechatMiniprogram.AudioContext,
  },
  methods: {
    audioPlay() {
      this.audioCtx.play();
    },
    audioPause() {
      this.audioCtx.pause();
    },
    audio14() {
      this.audioCtx.seek(14);
    },
    audioStart() {
      this.audioCtx.seek(0);
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "音频",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>