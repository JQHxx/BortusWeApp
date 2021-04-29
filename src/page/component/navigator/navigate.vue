<style lang="less">
</style>
<template>
<view class="container">
  <head title="新建的页面"/>
</view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'navigatePage',
      path: 'page/component/pages/navigator/navigate'
    }
  },

  onLoad(options) {
    console.log(options)
  }
});
</script>
<config>
{
    "navigationBarTitleText": "navigatePage"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>