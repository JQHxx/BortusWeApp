<style lang="wxss">
@import '../../common/lib/common.wxss';

.page{
    background-color: var(--weui-BG-0);
    height: 100%;
}

button {
    font-size: 14px;
    border-radius: 0;
}

.demo-title {
    font-size: 14px;
    color: gray;
    padding-left: 15px;
}

.demo-body {
    margin: 20px 0;
    height: 100px;
}
</style>
<template>
<div class="page" v-bind:data-weui-theme="theme">
<div class="demo-block">
  <div class="demo-title">基础用法</div>
  <div class="demo-body">
    <mp-sticky @scroll="onScroll">
      <button size="mini" type="primary" style="margin-left: 15px; margin-top: 0;margin-bottom: 0">基础用法</button>
    </mp-sticky>
  </div>
</div>
<div class="demo-block">
  <div class="demo-title">吸顶距离</div>
  <div class="demo-body">
    <mp-sticky offset-top="32">
      <button size="mini" type="primary" style="margin-left: 115px; background-color: #1989fa;margin-top: 0; margin-bottom: 0">吸顶距离</button>
    </mp-sticky>
  </div>
</div>
<div class="demo-block">
  <div class="demo-title">指定容器</div>
  <div class="demo-body">
    <div id="container" style="height: 250px; background-color: #E0E0E0;">
      <div style="height: 100px; background-color: #FFFF99;"></div>
      <mp-sticky v-bind:container="container" offset-top="64">
        <button size="mini" type="primary" style="margin-left: 215px; background-color: #ff976a;margin-top: 0; margin-bottom: 0">指定容器</button>
      </mp-sticky>
    </div>
  </div>
</div>
<div style="height: 2000px"></div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'sticky',
      path: 'page/weui/sticky'
    }
  },
  data: {
    container: {}
  },
  onLoad() {

  },
  onReady() {
    this.container =  () => wx.createSelectorQuery().select('#container')
  },
  methods: {
    onScroll(e: weui.StickyScroll) {
      console.log('onScroll', e)
    }
  }
});
</script>
<config>
{
  "navigationBarTitleText": "sticky",
  "usingComponents": {
    "mp-sticky": "module:@miniprogram-component-plus/sticky/miniprogram_dist"
  }
}
</config>