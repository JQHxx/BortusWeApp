<style lang="less">
</style>
<template>
  <div class="container">
    <head title="toast" />
    <div class="page-body">
      <div class="btn-area">
        <div class="body-div">
          <button type="default" @tap="toast1Tap">点击弹出默认toast</button>
        </div>
        <div class="body-div">
          <button type="default" @tap="toast2Tap">
            点击弹出设置duration的toast
          </button>
        </div>
        <div class="body-div">
          <button type="default" @tap="toast3Tap">
            点击弹出显示loading的toast
          </button>
        </div>
        <div class="body-div">
          <button type="default" @tap="hideToast">点击隐藏toast</button>
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
      title: '消息提示框',
      path: 'packageAPI/pages/toast/toast',
    };
  },
  methods: {
    toast1Tap() {
      wx.showToast({
        title: '默认',
      });
    },
    toast2Tap() {
      wx.showToast({
        title: 'duration 3000',
        duration: 3000,
      });
    },
    toast3Tap() {
      wx.showToast({
        title: 'loading',
        icon: 'loading',
        duration: 5000,
      });
    },
    hideToast() {
      wx.hideToast();
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "消息提示框",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>