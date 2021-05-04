<style lang="wxss">
.page-body-text {
  font-size: 20px;
  font-family: -apple-system-font, Helvetica Neue,Helvetica,sans-serif;
}
</style>
<template>
<div class="container">
  <head title="onUserCaptureScreen" />
  <div class="page-body">
    <div class="page-body-info">
      <div class="page-body-title">请进行屏幕截屏</div>
      <text class="page-body-text">截屏事件{{ captured ? "已" : "未" }}触发</text>
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
      title: '用户截屏事件',
      path: '/page/api/capture-screen'
    }
  },
  data: {
    captured: false,
  },
  onLoad() {
    wx.onUserCaptureScreen(() => {
      this.captured = true
    })
  }
});
</script>
<config>
{
    "navigationBarTitleText": "用户截屏事件",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>