<style lang="wxss">
page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
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
  background: #ecebec;
}
.item-A {
  background: #1aad19;
}
.item-B {
  background: #2782d7;
}

.item-C {
  background: #d8d8d8;
  height: 100%;
  color: #353535;
}
.dark-C {
  background: #f1f1f1;
  color: #353535;
}


</style>
<template>
<view class="container">
  <view class="flexbox">
    <mp-row>
      <mp-col v-bind:xs="24" v-bind:span="0">
        <view>
          <view class="item item-A">
            A
          </view>
        </view>
      </mp-col>
      <mp-col v-bind:xs="24" span="0">
        <view>
          <view class="item item-B">
            B
          </view>
        </view>
      </mp-col>
      <mp-col v-bind:xs="24" span="0">
        <view>
          <view class="{{theme === 'dark' ? 'item dark-C' : 'item item-C'}}">
            C
          </view>
        </view>
      </mp-col>
    </mp-row>
    <!-- 宽屏左右布局 -->
    <mp-row>
      <mp-col v-bind:xs="0" v-bdin:span="16">
       <mp-row>
        <mp-col>
           <view>
            <view class="item item-A">
              A
            </view>
          </view>
        </mp-col>
        <mp-col>
           <view>
            <view class="item item-B">
              B
            </view>
          </view>
        </mp-col>
       </mp-row>
      </mp-col>
      <mp-col v-bind:xs="0" v-bind:span="8">
          <view>
            <view class="{{theme === 'dark' ? 'item dark-C' : 'item item-C'}}" style="height: 490px; line-height:480px;">
              C
            </view>
          </view>
        </mp-col>
    </mp-row>
  </view>
</view>
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
      title: '自由布局',
      path: 'page/weui/freelayout'
    }
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-col": "module:@miniprogram-component-plus/col/miniprogram_dist",
    "mp-row": "module:@miniprogram-component-plus/row/miniprogram_dist"
  },
  "navigationBarTitleText": "自由布局"
}
</config>