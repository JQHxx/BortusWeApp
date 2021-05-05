<style lang="wxss">
image {
  width: 75px;
  height: 75px;
}

.page-body-wrapper {
  margin-top: 0;
}
.page-body-info {
  padding-bottom: 25px;
}
.time-big {
  font-size: 30px;
  margin: 10px;
}
.slider {
  width: 90%;
}
.play-time {
  font-size: 14px;
  width: 350px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.page-body-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.page-body-button {
  width: 225px;
  text-align: center;
}
</style>
<template>
  <div class="container">
    <head title="backgroundAudio" />
    <div class="page-section">
      <div class="page-body-info">
        <text class="time-big">{{ formatedPlayTime }}</text>
        <slider
          class="slider"
          min="0"
          max="269"
          step="1"
          v-model="playTime"
          @change="seek"
        ></slider>
        <div class="play-time">
          <text>00:00</text>
          <text>04:29</text>
        </div>
      </div>
      <div class="page-body-text tc">
        注意：离开当前页面后背景音乐将保持播放，但退出小程序将停止
      </div>
      <div class="page-body-buttons">
        <block v-if="playing === true">
          <div class="page-body-button" @tap="stop">
            <image src="/resources/images/stop.png"></image>
          </div>
          <div class="page-body-button" @tap="pauseFunc">
            <image src="/resources/images/pause.png"></image>
          </div>
        </block>
        <block wx:if="{{playing === false}}">
          <div class="page-body-button"></div>
          <div class="page-body-button" @tap="play">
            <image src="/resources/images/play.png"></image>
          </div>
        </block>
        <div class="page-body-button"></div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import { formatTime } from '../../util/util';

const app = getApp();
const backgroundAudioManager = wx.getBackgroundAudioManager();
let updateInterval = 0;

wepy.page({
  onShareAppMessage() {
    return {
      title: '背景音乐',
      path: '/page/api/background-audio',
    };
  },
  onShow() {
    if (
      !backgroundAudioManager.paused &&
      backgroundAudioManager.paused !== undefined
    ) {
      this._enableInterval();
      this.playing = true
    }
  },
  onLoad() {
    const that = this;
    // 监听播放事件
    backgroundAudioManager.onPlay(() => {
      // 刷新播放时间
      this._enableInterval();
      this.pause = false
    });

    // 监听暂停事件
    backgroundAudioManager.onPause(() => {
      clearInterval(updateInterval);
      this.playing = false
      this.pause = true
    });

    backgroundAudioManager.onEnded(() => {
      clearInterval(updateInterval);
      this.playing = false
      this.playTime = 0
      this.formatedPlayTime = formatTime(0) as string
    });

    backgroundAudioManager.onStop(() => {
      clearInterval(updateInterval);
      this.playing = false
      this.playTime = 0
      this.formatedPlayTime = formatTime(0) as string
    });
  },

  data: {
    playing: false, // 播放状态
    pause: false,
    playTime: 0, // 播放时长
    formatedPlayTime: '00:00:00', // 格式化后的播放时长
  },
  methods: {
    play() {
      backgroundAudioManager.title = '此时此刻';
      backgroundAudioManager.epname = '此时此刻';
      backgroundAudioManager.singer = '许巍';
      backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
      if (this.pause) {
        backgroundAudioManager.play();
        this.playing = true
      } else {
        this.playing = true
        backgroundAudioManager.src = 'https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a'
      }
    },

    seek(e: WechatMiniprogram.SliderChange) {
      backgroundAudioManager.seek(e.detail.value);
    },

    pauseFunc() {
      clearInterval(updateInterval);
      backgroundAudioManager.pause();
    },

    stop() {
      clearInterval(updateInterval);
      backgroundAudioManager.stop();
    },

    _enableInterval() {
      updateInterval = setInterval(() => {
        console.log(backgroundAudioManager.currentTime);
        this.playTime = backgroundAudioManager.currentTime + 1
        this.formatedPlayTime = formatTime( backgroundAudioManager.currentTime + 1) as string
      }, 1000);
    }
  },
  onUnload() {
    clearInterval(updateInterval);
  },
});
</script>
<config>
{
    "navigationBarTitleText": "背景音频",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>