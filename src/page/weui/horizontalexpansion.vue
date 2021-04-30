<style lang="less">
page>div {
  width: 100vw;
  max-width: 100vw;
}

div, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #ffffff;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #d8d8d8;
  color: #353535;
}
.item-swiper {
  display: none;
  height: 250px;
}

@media (max-width: 767px) {
  .item-swiper {
    display: block;
  }
}

.item-A {
  background: #1aad19;
  color: #ffffff;
}
.item-B {
  background: #2782d7;
  color: #ffffff;
}

.item-C {
  background: #d8d8d8;
  color: #353535;
}
.dark-C {
  background: #f1f1f1;
  color: #353535;
}

</style>
<template>
<div class="container">
  <div>
      <swiper class="item-swiper">
         <swiper-item>
            <div class="item item-A">A</div>
          </swiper-item>
          <swiper-item>
            <div class="item item-B">B</div>
          </swiper-item>
          <swiper-item>
            <div class="{{theme === 'dark' ? 'item dark-C' : 'item'}}">C</div>
          </swiper-item>
      </swiper>
  </div>
  <div>
    <mp-row>
      <mp-col v-bind:xs="0" v-bind:span="8">
        <div>
          <div class="item item-A">
            A
          </div>
        </div>
      </mp-col>
      <mp-col v-bind:xs="0" v-bind:span="8">
        <div>
          <div class="item item-B">
            B
          </div>
        </div>
      </mp-col>
      <mp-col v-bind:xs="0" v-bind:span="8">
        <div>
          <div class="{{theme === 'dark' ? 'item dark-C' : 'item item-C'}}">
            C
          </div>
        </div>
      </mp-col>
    </mp-row>
  </div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  data: {
    theme: 'light'
  },
  onLoad() {
    this.theme = wx.getSystemInfoSync().theme || 'light'

    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.theme = theme
      })
    }
  },
  onShareAppMessage() {
    return {
      title: '横向拓展',
      path: 'page/weui/example/horizontalexpansion/horizontalexpansion'
    }
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "横向拓展"
}
</config>