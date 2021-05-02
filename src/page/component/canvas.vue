<style lang="wxss">
@import '../../common//lib/weui.wxss';

.canvas {
  width: 305px;
  height: 305px;
  background-color: var(--weui-BG-1);
  margin-top: 30px;
}
</style>
<template>
  <div class="container">
    <head title="canvas" />
    <div class="page-body">
      <block v-if="canIUse">
        <div class="page-section">
          <div class="page-section-spacing">
            <div class="page-body-wrapper">
              <canvas canvas-id="canvas" class="canvas"></canvas>
            </div>
          </div>
        </div>
      </block>
      <div wx:else style="margin: 15px; text-align: center">
        微信版本过低，暂不支持本功能
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import { compareVersion } from '../../util/util';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'canvas',
      path: 'page/component/canvas',
    };
  },
  data: {
    canIUse: true,
    position: {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    },
    interval: 0,
  },
  onReady() {
    // 解决基础库小于 2.7.0 的兼容问题
    const { SDKVersion } = wx.getSystemInfoSync();
    if (compareVersion(SDKVersion, '2.7.0') < 0) {
      console.log('123');
      this.canIUse = false;
    } else {
      this.position = {
        x: 150,
        y: 150,
        vx: 2,
        vy: 2,
      };
      this.drawBall();
      this.interval = setInterval(() => {this.drawBall()}, 17);
    }
  },
  onUnload() {
    clearInterval(this.interval);
  },
  methods: {
    drawBall() {
      const p = this.position;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x >= 300) {
        p.vx = -2;
      }
      if (p.x <= 7) {
        p.vx = 2;
      }
      if (p.y >= 300) {
        p.vy = -2;
      }
      if (p.y <= 7) {
        p.vy = 2;
      }
      const context = wx.createCanvasContext('canvas');
      function ball(x: number, y: number) {
        context.beginPath();
        context.arc(x, y, 5, 0, Math.PI * 2);
        context.setFillStyle('#1aad19');
        context.setStrokeStyle('rgba(1,1,1,0)');
        context.fill();
        context.stroke();
      }

      ball(p.x, 150);
      ball(150, p.y);
      ball(300 - p.x, 150);
      ball(150, 300 - p.y);
      ball(p.x, p.y);
      ball(300 - p.x, 300 - p.y);
      ball(p.x, 300 - p.y);
      ball(300 - p.x, p.y);
      context.draw();
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "canvas",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>