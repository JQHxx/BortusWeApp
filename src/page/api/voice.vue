<style lang="wxss">
image {
  width: 75px;
  height: 75px;
}

.page-body-wrapper {
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 150px;
}
.page-body-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.time-big {
  font-size: 30px;
  margin: 10px;
}
.time-small {
  font-size: 15px;
}

.page-body-buttons {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.page-body-button {
  width: 225px;
  text-align: center;
}
.button-stop-record {
  width: 15px;
  height: 15px;
  border: 10px solid #fff;
  background-color: #f55c23;
  border-radius: 115px;
  margin: 0 auto;
}
</style>
<template>
  <div class="container">
    <head title="录音/音频" />
    <div class="page-body">
      <div class="page-section">
        <block
          v-if="recording === false && playing === false && hasRecord === false"
        >
          <div class="page-body-time">
            <text class="time-big">{{ formatedRecordTime }}</text>
          </div>
          <div class="page-body-buttons">
            <div class="page-body-button"></div>
            <div class="page-body-button" @tap="startRecord">
              <image src="/resources/images/record.png"></image>
            </div>
            <div class="page-body-button"></div>
          </div>
        </block>
        <block v-if="recording === true">
          <div class="page-body-time">
            <text class="time-big">{{ formatedRecordTime }}</text>
          </div>
          <div class="page-body-buttons">
            <div class="page-body-button"></div>
            <div class="page-body-button" @tap="stopRecord">
              <div class="button-stop-record"></div>
            </div>
            <div class="page-body-button"></div>
          </div>
        </block>
        <block v-if="hasRecord === true && playing === false">
          <div class="page-body-time">
            <text class="time-big">{{ formatedPlayTime }}</text>
            <text class="time-small">{{ formatedRecordTime }}</text>
          </div>
          <div class="page-body-buttons">
            <div class="page-body-button"></div>
            <div class="page-body-button" @tap="playVoice">
              <image src="/resources/images/play.png"></image>
            </div>
            <div class="page-body-button" @tap="clear">
              <image src="/resources/images/trash.png"></image>
            </div>
          </div>
        </block>
        <block v-if="hasRecord === true && playing === true">
          <div class="page-body-time">
            <text class="time-big">{{ formatedPlayTime }}</text>
            <text class="time-small">{{ formatedRecordTime }}</text>
          </div>
          <div class="page-body-buttons">
            <div class="page-body-button" @tap="stopVoice">
              <image src="/resources/images/stop.png"></image>
            </div>
            <div class="page-body-button" @tap="pauseVoice">
              <image src="/resources/images/pause.png"></image>
            </div>
            <div class="page-body-button" @tap="clear">
              <image src="/resources/images/trash.png"></image>
            </div>
          </div>
        </block>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import { formatTime } from '../../util/util';

let playTimeInterval = 0;
let recordTimeInterval = 0;
const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();

wepy.page({
  onShareAppMessage() {
    return {
      title: '录音',
      path: 'packageAPI/pages/voice/voice',
    };
  },
  data: {
    recording: false, // 录音中
    playing: false, // 播放中
    hasRecord: false, // 已经录音
    recordTime: 0, // 录音时长
    playTime: 0, // 播放时长
    formatedRecordTime: '00:00:00', // 录音时间
    formatedPlayTime: '00:00:00', // 播放时间
    tempFilePath: ''
  },

  onHide() {
    if (this.playing) {
      this.stopVoice();
    } else if (this.recording) {
      this.stopRecordUnexpectedly();
    }
  },

  onLoad() {
    // 监听录音开始事件
    recorderManager.onStart(() => {
      console.log('recorderManage: onStart');
      // 录音时长记录 每秒刷新
      recordTimeInterval = setInterval(() => {
        const recordTime = (this.recordTime += 1);
        this.formatedRecordTime = formatTime(this.recordTime) as string
        this.recordTime = recordTime
      }, 1000);
    });

    // 监听录音停止事件
    recorderManager.onStop((res) => {
      console.log('recorderManage: onStop');
      this.hasRecord = true
      this.recording = false
      this.tempFilePath = res.tempFilePath
      this.formatedPlayTime = formatTime(this.playTime) as string
      // 清除录音计时器
      clearInterval(recordTimeInterval);
    });

    // 监听播放开始事件
    innerAudioContext.onPlay(() => {
      console.log('innerAudioContext: onPlay');
      playTimeInterval = setInterval(() => {
        const playTime = this.playTime + 1;
        if (this.playTime === this.recordTime) {
          this.stopVoice();
        } else {
          console.log('update playTime', playTime);
          this.formatedPlayTime = formatTime(playTime) as string
          this.playTime = playTime
        }
      }, 1000);
    });

    innerAudioContext.onStop(() => {});
  },
  methods: {
    startRecord() {
      this.recording = true
      recorderManager.start({
        duration: 10000, // 持续时长
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
        format: "aac",
        frameSize: 50,
      }); // 开始录音
    },

    stopRecord() {
      recorderManager.stop(); // 停止录音
    },

    stopRecordUnexpectedly() {
      const that = this;
      wx.stopRecord({
        success: () => {
          console.log('stop record success');
          clearInterval(recordTimeInterval);
          this.recording = false
          this.hasRecord = false
          this.recordTime = 0
          this.formatedRecordTime = formatTime(0) as string
        },
      });
    },

    playVoice() {
      innerAudioContext.src = this.tempFilePath;
      this.playing = true
      innerAudioContext.play();
    },

    pauseVoice() {
      clearInterval(playTimeInterval);
      innerAudioContext.pause();
      this.playing = false
    },

    stopVoice() {
      clearInterval(playTimeInterval);
      innerAudioContext.stop();
      this.playing = false
      this.formatedPlayTime = formatTime(0) as string
    },

    clear() {
      clearInterval(playTimeInterval);
      innerAudioContext.stop();
      this.playing = false
      this.hasRecord = false
      this.tempFilePath = ''
      this.formatedRecordTime = formatTime(0) as string
      this.playTime = 0
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "录音",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>