<style lang="less" src="../../common/lib/common.less"></style>
<style lang="less">
page { 
  background-color:#EDEDED;
}
.button-sp-area{
    margin: 0 auto;
    padding-top: 15px;
    text-align:center;
}
.mini-btn{
    margin: 0 4px;
}
</style>
<template>
<div class="page">
    <div class="page__hd">
        <div class="page__title">Button</div>
        <div class="page__desc">按钮，WeUI采用小程序原生的按钮为主体，加入一些间距的样式。</div>
    </div>
    <div class="page__bd page__bd_spacing">
        <button class="weui-btn" type="primary">页面主操作</button>
        <button class="weui-btn" type="primary" disabled="true">页面主操作</button>
        <button class="weui-btn" type="primary" loading>页面主操作</button>
        <button class="weui-btn" type="default">页面次要操作</button>
        <button class="weui-btn" type="default" disabled="true">页面次要操作</button>
        <button class="weui-btn" type="default" loading>页面次要操作</button>
        <button class="weui-btn" type="warn">警告类操作</button>
        <button class="weui-btn" type="warn" disabled="true">警告类操作</button>
        <button class="weui-btn" type="warn" loading>警告类操作</button>
        <div class="button-sp-area">
            <button class="weui-btn" type="primary" plain="true">按钮</button>
            <button class="weui-btn" type="primary" disabled="true" plain="true">按钮</button>
            <button class="weui-btn" type="primary" loading plain="true">按钮</button>
            <button class="weui-btn" type="default" plain="true">按钮</button>
            <button class="weui-btn" type="default" disabled="true" plain="true">按钮</button>
            <button class="weui-btn" type="default" loading plain="true">按钮</button>
            <button class="weui-btn mini-btn" type="primary" size="mini">按钮</button>
            <button class="weui-btn mini-btn" type="default" size="mini">按钮</button>
            <button class="weui-btn mini-btn" type="warn" size="mini">按钮</button>
        </div>
    </div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/weui/button'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "button"
}
</config>