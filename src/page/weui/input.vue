<style lang="less">
</style>
<template>
<web-view src="https://developers.weixin.qq.com/miniprogram/introduction/"></web-view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'webview',
      path: 'page/component/web-view'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "webview"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>