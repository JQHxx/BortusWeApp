<style lang="wxss">
@import "../../common/lib/weui.wxss";
</style>
<template>
<div class="container">
  <head title="onShareAppMessage"/>
  <div class="page-body">
    <div class="weui-cells__title">发送内容（以下字段可自由适配）</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">标题</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" v-bind:disabled="true" v-model="shareData.title" />
        </div>
      </div>
      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">描述</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" v-bind:disabled="true" v-model="shareData.desc" />
        </div>
      </div>
      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">跳转页面</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" v-bind:disabled="true" v-model="shareData.path" />
        </div>
      </div>
    </div>
    <div class="weui-cells__tips">点击右上角菜单转发给好友</div>
  </div>
  <foot />
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  data: {
    shareData: {
      title: '自定义转发标题',
      desc: '自定义转发描述',
      path: '/page/api/share'
    }
  },
  onShareAppMessage() {
    return this.shareData
  }
});
</script>
<config>
{
    "navigationBarTitleText": "转发",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>