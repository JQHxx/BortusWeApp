<style lang="less">
</style>
<template>
<view class="container">
  <head title="小窗模式"/>
  <foot />
</view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '小窗模式',
      path: 'page/component/video/picture-in-picture'
    }
  },
});
</script>
<config>
{
    "navigationBarTitleText": "video",
    "usingComponents": {
        "head": "../../../common/head",
        "foot": "../../../common/foot"
    }
}
</config>