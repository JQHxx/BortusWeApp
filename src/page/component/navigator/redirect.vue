<style lang="less">
</style>
<template>
<view class="container">
  <head title="当前页"/>
</view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'redirectPage',
      path: 'page/component/pages/navigator/redirect'
    }
  },

  onLoad(options) {
    console.log(options)
  }
});
</script>
<config>
{
    "navigationBarTitleText": "redirectPage"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>