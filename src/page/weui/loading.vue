<style lang="wxss">
@import "../../common/lib/common.wxss";
.page .demo0 {
  height: 60px;
  background: white;
}

.page .demo1 {
  height: 60px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Loading</div>
      <div class="page__desc">加载中</div>
    </div>
    <div class="page__bd">
      <mp-loading type="circle"></mp-loading>
      <mp-loading
        v-bind:duration="900"
        ext-class="demo0"
        type="dot-gray"
        v-bind:show="show"
        v-bind:animated="animated"
      ></mp-loading>
      <mp-loading type="dot-white" ext-class="demo1"></mp-loading>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'loading',
      path: 'page/weui/loading',
    };
  },
  data: {
    tips: '请稍后',
    show: true,
    animated: true,
    timer: 0,
  },
  onShow() {
    this.timer = setInterval(() => {
      this.show = !this.show;
    }, 2000);
  },
  methods: {
    close() {
      this.animated = !this.animated
    },
    onUnload() {
      clearInterval(this.timer);
    }
  }
});
</script>
<config>
{
    "usingComponents": {
        "mp-loading": "module:weui-miniprogram/miniprogram_dist/loading/loading"
    },
    "navigationBarTitleText": "loading"
}
</config>   