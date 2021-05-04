<style lang="wxss">
.rect {
  width: 50px;
  height: 50px;
  background-color: #ccc;
}

.filling-area {
  height: 1250px;
}
</style>
<template>
  <div class="container">
    <head title="pageScrollTo" />
    <div class="page-body">
      <div class="page-section">
        <div class="btn-area">
          <button type="primary" @tap="scrollToBottom">滚动到页面底部</button>
        </div>
        <div class="filling-area"></div>
        <div class="btn-area">
          <button type="primary" @tap="scrollToTop">返回顶部</button>
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
      title: '页面滚动',
      path: '/page/api/page-scroll',
    };
  },
  methods: {
    scrollToTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      });
    },
    scrollToBottom() {
      wx.pageScrollTo({
        scrollTop: 3000,
        duration: 300,
      });
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "页面滚动",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>