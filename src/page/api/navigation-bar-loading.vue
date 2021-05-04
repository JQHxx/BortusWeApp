<style lang="less">
</style>
<template>
  <div class="container">
    <head title="navigationBarLoading" />
    <div class="page-body">
      <div class="btn-area">
        <button type="primary" @tap="showNavigationBarLoading">
          显示加载动画
        </button>
        <button @tap="hideNavigationBarLoading">隐藏加载动画</button>
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
      title: '标题栏加载动画',
      path: '/page/api/navigation-bar-loading',
    };
  },
  methods: {
    showNavigationBarLoading() {
      wx.showNavigationBarLoading();
    },
    hideNavigationBarLoading() {
      wx.hideNavigationBarLoading();
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "标题栏加载动画",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>