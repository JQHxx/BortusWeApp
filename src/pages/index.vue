<style lang="less">
page {
  background-color: #F8F8F8;
  height: 100%;
  font-size: 32rpx;
  line-height: 1.6;
}
.page-body{
  padding-top: 60rpx;
  width: 100%;
}
.page-section{
  width: 100%;
  margin-bottom: 60rpx;
}
.page-section_center{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-section:last-child{
  margin-bottom: 0;
}
.page-section-gap{
  box-sizing: border-box;
  padding: 0 30rpx;
}
.page-section-spacing{
  box-sizing: border-box;
  padding: 0 80rpx;
}
.page-section-title{
  font-size: 28rpx;
  color: #999999;
  margin-bottom: 10rpx;
  padding-left: 30rpx;
  padding-right: 30rpx;
}
.page-section-gap .page-section-title{
  padding-left: 0;
  padding-right: 0;
}

.demo-text-1{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #1AAD19;
  color: #FFFFFF;
  font-size: 36rpx;
}
.demo-text-1:before{
  content: 'A';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-2{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #2782D7;
  color: #FFFFFF;
  font-size: 36rpx;
}
.demo-text-2:before{
  content: 'B';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-3{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #F1F1F1;
  color: #353535;
  font-size: 36rpx;
}
.demo-text-3:before{
  content: 'C';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button{
  margin-bottom: 30rpx;
}
button:last-child{
  margin-bottom: 0;
}
.page-section-title{
  padding: 0;
}
.swiper-item{
  display: block;
  height: 150px;
}
.page-section-title{
  margin-top: 60rpx;
  position: relative;
}
.info{
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 30rpx;
}
.page-foot{
  margin-top: 50rpx;
}
</style>
<template>
  <div class="container">
    <div class="page-body">
      <div class="page-section page-section-spacing swiper">
        <swiper v-bind:indicator-dots="indicatorDots" v-bind:autoplay="autoplay" v-bind:interval="interval" v-bind:duration="duration">
          <block v-for="item in background">
            <swiper-item>
              <div class="swiper-item {{item}}"></div>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <div class="page-section" style="margin-top: 40rpx; margin-bottom: 0">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">指示点</div>
            <div class="weui-cell__ft">
              <switch
                v-bind:checked="indicatorDots"
                v-on:change="changeIndicatorDots"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">自动播放</div>
            <div class="weui-cell__ft">
              <switch v-bind:checked="autoplay" v-on:change="changeAutoplay" />
            </div>
          </div>
        </div>
      </div>
      <div class="page-section page-section-spacing">
        <div class="page-section-title">
          <text>幻灯片切换时长(ms)</text>
          <text class="info">{{ duration }}</text>
        </div>
        <slider v-on:change="durationChange($event.$wx)" v-bind:value="duration" min="500" max="2000" />
        <div class="page-section-title">
          <text>自动播放间隔时长(ms)</text>
          <text class="info">{{ interval }}</text>
        </div>
        <slider v-on:change="intervalChange($event.$wx)" v-bind:value="interval" min="2000" max="10000" />
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'pages/index'
    }
  },
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
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
    navigationBarTitleText: 'swiper'
}
</config>
