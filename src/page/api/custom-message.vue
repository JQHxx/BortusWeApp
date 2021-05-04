<style lang="less">
</style>
<template>
<div class="container">
  <head title="customMessage"/>
  <div class="page-body">
    <div class="page-body-wrapper">
      <text class="page-body-title">
        点击气泡icon打开客服消息界面
      </text>
      <div class="page-body-line">
        <contact-button size="40" session-from="weapp"></contact-button>
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
      title: '客服消息',
      path: '/page/api/custom-message'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "客服消息",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>