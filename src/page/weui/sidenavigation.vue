<style lang="wxss">
.container {
  height: 100vh;
}

.mobile {
  height: 100%;
  position: relative;
}

.mobile > view {
  transition: all 0.3s ease-in-out;
}

.mobile .left {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ecebec;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile .left .item {
  width: 80%;
  height: 60rpx;
  background: #d8d8d8;
  margin-top: 40rpx;
  border-radius: 4px;
  border: 0px;
}

.mobile.active .left {
  width: 66.66%;
}

.mobile.active .right {
  opacity: 0.3;
}

.mobile .right {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile .nav-bar {
  height: 80rpx;
  position: relative;
  background: #2782d7;
  border-radius: 4px;
  margin-bottom: 30rpx;
}

.mobile .nav-bar .button {
  width: 50rpx;
  height: 50rpx;
  position: absolute;
  top: 50%;
  left: 30rpx;
  transform: translateY(-50%);
}

.mobile .section {
  flex: auto;
  background: #1aad19;
  border-radius: 4px;
}

.laptop {
  display: none;
}

.laptop .nav-bar {
  height: 40rpx;
  position: relative;
  background: #2782d7;
  border-radius: 4px;
  margin-bottom: 20rpx;
}

.laptop .flexbox {
  display: flex;
}

.laptop .flexbox .left {
  flex: 1;
}

.laptop .flexbox .left .item {
  width: 90%;
  height: 30rpx;
  background: #d8d8d8;
  margin-bottom: 15rpx;
  border-radius: 4px;
}

.laptop .flexbox .right {
  flex: 3;
  height: 500rpx;
  background: #1aad19;
  border-radius: 4px;
}

@media only screen and (min-width: 576px) {
  .mobile {
    display: none;
  }
  .laptop {
    display: block;
  }
}

page > view {
  width: 100vw;
  max-width: 100vw;
}

view,
image,
navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #191919;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #ecebec;
}
.mobile .left .dark-C,
.laptop .flexbox .left .dark-C {
  background: #f1f1f1;
  color: #353535;
}
.mobile .dark-bg {
  background-color: #1f1f1f;
}
</style>
<template>
  <div class="container">
    <div class="mobile" :class="{ active: show }">
      <div class="{{theme === 'dark' ? 'left dark-bg' : 'left'}}">
        <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}"></div>
        <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}"></div>
        <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}"></div>
        <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}"></div>
      </div>
      <div class="right">
        <div class="nav-bar">
          <image
            class="button"
            @tap="showTap"
            src="/resources/images/button.png"
            mode="aspectFill"
          ></image>
        </div>
        <div class="section" @tap="hideTap"></div>
      </div>
    </div>
    <div class="laptop">
      <div class="nav-bar"></div>
      <div class="flexbox">
        <div class="left">
          <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}"></div>
          <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}"></div>
          <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}"></div>
          <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}"></div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  data: {
    show: false,
    theme: 'light',
  },
  onLoad() {
    this.theme = wx.getSystemInfoSync().theme || 'light'

    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.theme = theme
      });
    }
  },
  methods: {
    showTap() {
      this.show = true
    },
    hideTap() {
      this.show = false
    },
  },
  onShareAppMessage() {
    return {
      title: '侧边导航栏',
      path: 'page/weui/sidenavigation',
    };
  },
});
</script>
<config>
{
  "usingComponents": {},
  "navigationBarTitleText": "侧边导航栏"
}
</config>   