<style lang="less">
</style>
<template>
  <div class="container">
    <head title="navigateTo/Back, redirectTo" />
    <div class="page-body">
      <div class="btn-area">
        <button @tap="navigateTo">跳转新页面</button>
        <button @tap="navigateBack">返回上一页</button>
        <button @tap="redirectTo">在当前页面打开</button>
        <button @tap="switchTab">跳转到组件Tab页</button>
        <button @tap="reLaunch">关闭所有页面并跳转</button>
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
      title: '页面跳转',
      path: '/page/api/navigator',
    };
  },
  methods: {
    navigateTo() {
      wx.navigateTo({ url: './navigator' });
    },
    navigateBack() {
      wx.navigateBack();
    },
    redirectTo() {
      wx.redirectTo({ url: './navigator' });
    },
    switchTab() {
      wx.switchTab({ url: '/page/index' });
    },
    reLaunch() {
      wx.reLaunch({ url: '/page/index' });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "页面跳转",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>