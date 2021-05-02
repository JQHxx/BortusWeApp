<style lang="wxss">
@import '../../common/lib/weui.wxss';

button {
  margin-bottom: 15px;
}
button:last-child {
  margin-bottom: 0;
}
.page-section-title {
  padding: 0;
}
.swiper-item {
  display: block;
  height: 150px;
}
.page-section-title {
  margin-top: 30px;
  position: relative;
}
.info {
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 15px;
}
.page-foot {
  margin-top: 25px;
}
</style>
<template>
  <div class="container">
    <head title="swiper" />
    <div class="page-body">
      <div class="page-section page-section-spacing swiper">
        <swiper
          v-bind:indicator-dots="indicatorDots"
          v-bind:autoplay="autoplay"
          v-bind:interval="interval"
          v-bind:duration="duration"
        >
          <block v-for="item in background" v-bind:key="item">
            <swiper-item>
              <div class="swiper-item {{item}}"></div>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <div class="page-section" style="margin-top: 20px; margin-bottom: 0">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">指示点</div>
            <div class="weui-cell__ft">
              <switch
                v-bind:checked="indicatorDots"
                @change="changeIndicatorDots"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">自动播放</div>
            <div class="weui-cell__ft">
              <switch v-bind:checked="autoplay" @change="changeAutoplay" />
            </div>
          </div>
        </div>
      </div>
      <div class="page-section page-section-spacing">
        <div class="page-section-title">
          <text>幻灯片切换时长(ms)</text>
          <text class="info">{{ duration }}</text>
        </div>
        <slider
          @change="durationChange($event.$wx)"
          v-model="duration"
          min="500"
          max="2000"
        />
        <div class="page-section-title">
          <text>自动播放间隔时长(ms)</text>
          <text class="info">{{ interval }}</text>
        </div>
        <slider
          @change="intervalChange($event.$wx)"
          v-model="interval"
          min="2000"
          max="10000"
        />
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
      title: 'swiper',
      path: 'page/component/swiper',
    };
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
  },

  methods: {
    changeIndicatorDots() {
      this.indicatorDots = !this.indicatorDots
    },

    changeAutoplay() {
      this.autoplay = !this.autoplay
    },

    intervalChange(e: WechatMiniprogram.SliderChange) {
      this.interval = e.detail.value
    },

    durationChange(e: WechatMiniprogram.SliderChange) {
      this.duration = e.detail.value
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "swiper",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>