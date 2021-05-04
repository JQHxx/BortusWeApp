<style lang="wxss">
.page-body-info {
  background-color: transparent;
}
.btn-area {
  margin-top: 150px;
}
</style>
<template>
  <div class="container">
    <head is="head" title="on/stopPullDownRefresh" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-body-info">
          <text class="page-body-text">下滑页面即可刷新</text>
        </div>
        <div class="btn-area">
          <button @tap="stopPullDownRefresh">停止刷新</button>
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
      title: '下拉刷新',
      path: '/page/api/pull-down-refresh'
    }
  },
  onPullDownRefresh() {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  },
  methods: {
      stopPullDownRefresh() {
        wx.stopPullDownRefresh({
          complete(res) {
            wx.hideToast()
            console.log(res, new Date())
          }
        })
      }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "下拉刷新",
    "enablePullDownRefresh": true,
    "backgroundTextStyle": "@backgroundTextStyle",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>