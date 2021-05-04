<style lang="wxss">
.page-body-xyz {
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-top: 45px;
  box-sizing: border-box;
  text-align: center;
}
.page-body-canvas {
  margin-top: 15px;
  width: 302px;
  height: 302px;
  position: relative;
}
.page-body-ball {
  position: absolute;
  top: 0;
  left: 0;
  width: 302px;
  height: 302px;
}
.page-body-title {
  margin-bottom: 0;
  font-size: 16px;
  width: 225px;
}
.page-body-controls {
  margin-top: 15px;
}
.page-body-controls button {
  margin-left: 10px;
  float: left;
}
</style>
<template>
  <view class="container">
    <head title="onAccelerometerChange" />
    <view class="page-body">
      <view class="page-section page-section_center">
        <text class="page-body-text">倾斜手机即可移动下方小球</text>
        <view class="page-body-canvas">
          <canvas
            class="page-body-ball"
            v-bind:show="true"
            canvas-id="big-ball"
          ></canvas>
          <canvas
            class="page-body-ball"
            v-bind:show="true"
            canvas-id="small-ball"
          ></canvas>
        </view>
        <view class="page-body-xyz">
          <text class="page-body-title">X: {{ x }}</text>
          <text class="page-body-title">Y: {{ y }}</text>
          <text class="page-body-title">Z: {{ z }}</text>
        </view>
        <view class="page-body-controls">
          <button bindtap="startAccelerometer" v-bind:disabled="enabled">
            开始监听
          </button>
          <button bindtap="stopAccelerometer" v-bind:disabled="!enabled">
            停止监听
          </button>
        </view>
      </view>
    </view>
    <foot />
  </view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '监听重力感应数据',
      path: '/page/api/on-accelerometer-change',
    };
  },
  data: {
    x: '0',
    y: '0',
    z: '0',
    enabled: true,
    position: {
      x: 151,
      y: 151,
      vx: 0,
      vy: 0,
      ax: 0,
      ay: 0,
    },
    interval: 0
  },
  onReady() {
    this.drawBigBall();
    wx.onAccelerometerChange((res) => {
      this.x = res.x.toFixed(2)
      this.y = res.y.toFixed(2)
      this.z = res.z.toFixed(2)
      this.position.ax = Math.sin((res.x * Math.PI) / 2);
      this.position.ay = -Math.sin((res.y * Math.PI) / 2);
    });
    this.interval = setInterval(() => {
      this.drawSmallBall();
    }, 17);
  },
  onUnload() {
      clearInterval(this.interval);
  },
  methods: {
    drawBigBall() {
      wx.createSelectorQuery()
      const context = wx.createCanvasContext();
      context.beginPath(0);
      context.arc(151, 151, 140, 0, Math.PI * 2);
      context.setFillStyle('#ffffff');
      context.setStrokeStyle('#aaaaaa');
      context.fill();

      wx.drawCanvas({
        canvasId: 'big-ball',
        actions: context.getActions(),
      });
    },
    drawSmallBall() {
      const p = this.position;
      let strokeStyle = 'rgba(1,1,1,0)';

      p.x += p.vx;
      p.y += p.vy;
      p.vx += p.ax;
      p.vy += p.ay;

      // eslint-disable-next-line
      if (
        Math.sqrt(
          Math.pow(Math.abs(p.x) - 151, 2) + Math.pow(Math.abs(p.y) - 151, 2)
        ) >= 115
      ) {
        if (p.x > 151 && p.vx > 0) {
          p.vx = 0;
        }
        if (p.x < 151 && p.vx < 0) {
          p.vx = 0;
        }
        if (p.y > 151 && p.vy > 0) {
          p.vy = 0;
        }
        if (p.y < 151 && p.vy < 0) {
          p.vy = 0;
        }
        strokeStyle = '#ff0000';
      }

      const context = wx.createContext();
      context.beginPath(0);
      context.arc(p.x, p.y, 15, 0, Math.PI * 2);
      context.setFillStyle('#1aad19');
      context.setStrokeStyle(strokeStyle);
      context.fill();
      // context.stroke()
      wx.drawCanvas({
        canvasId: 'small-ball',
        actions: context.getActions(),
      });
    },
    startAccelerometer() {
      if (this.enabled) {
        return;
      }
      const that = this;
      wx.startAccelerometer({
        success:() => {
          this.enabled = true
        },
      });
    },
    stopAccelerometer() {
      if (!this.enabled) {
        return;
      }
      const that = this;
      wx.stopAccelerometer({
        success: () => {
          this.enabled = false
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "监听重力感应数据",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>