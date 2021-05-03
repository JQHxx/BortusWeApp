<style lang="wxss">
.barrage {
  width: 100%;
  height: 80%;
  position: absolute;
  box-sizing: border-box;
}

.video {
  width: 100%;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <video id="myVideo" class="video" v-bind:src="src" loop controls  @fullscreenchange="fullscreenchange" vslide-gesture vslide-gesture-in-fullscreen
      autoplay enable-play-gesture>
      <barrage class="barrage" v-if="toggle"></barrage>
    </video>
    <button type="primary" @tap="handleOpenClick">开启弹幕</button>
    <button type="primary" @tap="handleCloseClick">关闭弹幕</button>
    <block v-if="showBarrage">
      <input style="width: 80%; margin: 30px auto; border-bottom: 1px grey solid" @input="handleInput($event.$wx)" placeholder="请输入弹幕信息" v-model="barrageValue" />
      <button type="primary" @tap="handleAddClick">发送弹幕</button>
      <button type="primary" @tap="handleTunnelShowClick">显示弹道</button>
      <button type="primary" @tap="handleTunnelHideClick">隐藏弹道</button>
    </block>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const msgs = [
  '666666',
  '保护',
  '妈妈我上电视了！！',
  '我要上电视！！',
  '老板晚上好',
  '前方高能预警',
  '主播迟到了~~~',
  '干的漂亮',
  '广东人民发来贺电',
]

const color = ['red', 'rgb(0, 255, 0)', '#0000FF']

const getRandom = (max = 10, min = 0) => Math.floor(Math.random() * (max - min) + min);

const mockData = (num: number, message = msgs) => {
  const data = []
  for (let i = 0; i < num; i++) {
    const msgId = getRandom(message.length)
    const colorId = getRandom(color.length)
    data.push({
      content: message[msgId],
      color: color[colorId]
    })
  }
  return data
};

wepy.page({
  onShareAppMessage() {
    return {
      title: 'barrage',
      path: 'page/weui/barrage',
    };
  },
  data: {
    src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    toggle: true,
    barrageValue: '',
    showBarrage: false,
    barrage: {} as any,
    timer: 0
  },
  onReady() {
    this.addBarrage();
  },
  methods: {
    addBarrage() {
      const barrageComp = this.$wx.selectComponent('.barrage')
      this.barrage = barrageComp.getBarrageInstance({
        font: 'bold 16px sans-serif',
        duration: 15,
        lineHeight: 2,
        mode: 'overlap',
        padding: [10, 10, 10, 10],
        range: [0, 1],
        tunnelShow: false
      });
    },
    fullscreenchange() {
      this.toggle = false
      setTimeout(() => {
        if (this.barrage) { 
          this.barrage.close();
        }
        this.toggle = true
        this.addBarrage();
      }, 1000);
    },
    handleOpenClick() {
      this.showBarrage = true
      this.barrage.open();
      const data = mockData(3);
      this.barrage.addData(data);
      this.timer = setInterval(() => {
        const data = mockData(5);
        this.barrage.addData(data);
      }, 2000);
    },
    handleCloseClick() {
      this.barrage.close();
      this.showBarrage = false
    },
    handleInput(e: WechatMiniprogram.Input) {
      this.barrageValue = e.detail.value
    },
    handleAddClick() {
      const data = mockData(1, [this.barrageValue]);
      this.barrage.addData(data);
      this.barrageValue = ''
    },
    handleTunnelShowClick() {
      this.barrage.showTunnel();
    },
    handleTunnelHideClick() {
      this.barrage.hideTunnel();
    }
  }
});
</script>
<config>
{
  // "usingComponents": {
  //   "barrage": "module:miniprogram-barrage/miniprogram_dist"
  // },
  "disableScroll": true,
  "navigationBarTitleText": "barrage"
}
</config>