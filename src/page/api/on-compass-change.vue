<style lang="wxss">
.direction {
  position: relative;
  margin-top: 35px;
  display: flex;
  width: 520px;
  height: 520px;
  align-items: center;
  justify-content: center;
}
.direction-value {
  position: relative;
  font-size: 100px;
  color: #353535;
  line-height: 1;
  z-index: 1;
}
.direction-degree {
  position: absolute;
  top: 0;
  right: -20px;
  font-size: 30px;
}
.bg-compass {
  position: absolute;
  top: 0;
  left: 0;
  width: 520px;
  height: 520px;
  transition: 0.1s;
}
.bg-compass-line {
  position: absolute;
  left: 134px;
  top: -5px;
  width: 3px;
  height: 28px;
  background-color: #1aad19;
  border-radius: 500px;
  z-index: 1;
}
.controls {
  margin-top: 35px;
}
.controls button {
  margin-left: 10px;
  float: left;
}
</style>
<template>
  <div class="container">
    <head title="onCompassChange" />
    <div class="page-body">
      <div class="page-section page-section_center">
        <text class="page-body-text">旋转手机即可获取方位信息</text>
        <div class="direction">
          <div class="bg-compass-line"></div>
          <image
            class="bg-compass"
            src="../../resources/images/compass.png"
            style="transform: rotate({{direction}}deg)"
          ></image>
          <div class="direction-value">
            <text>{{ direction }}</text>
            <text class="direction-degree">o</text>
          </div>
        </div>
        <div class="controls">
          <button @tap="startCompass" v-bind:disabled="enabled">
            开始监听
          </button>
          <button @tap="stopCompass" v-bind:disabled="!enabled">
            停止监听
          </button>
        </div>
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
      title: '监听罗盘数据',
      path: '/page/api/on-compass-change',
    };
  },
  data: {
    enabled: true,
    direction: 0,
  },
  onReady() {
    wx.onCompassChange((res) => {
      this.direction = res.direction
    });
  },
  methods: {
    startCompass() {
      if (this.enabled) {
        return;
      }
      wx.startCompass({
        success: () => {
          this.enabled = true
        },
      });
    },
    stopCompass() {
      if (!this.enabled) {
        return;
      }
      wx.stopCompass({
        success:() => {
          this.enabled = false
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "监听罗盘数据",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>