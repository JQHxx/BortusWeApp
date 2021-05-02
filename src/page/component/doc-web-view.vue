<style lang="less">
</style>
<template>
  <web-view
    src="https://developers.weixin.qq.com/miniprogram/dev/component/"
  ></web-view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '小程序组件文档',
      path: 'page/component/doc-web-view',
    };
  },
});
</script>
<config>
{
    "navigationBarTitleText": "小程序组件文档",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>