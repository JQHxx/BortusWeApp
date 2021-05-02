<style lang="less">
button{
  margin-top: 15px;
  margin-bottom: 15px;
}
.button-sp-area{
  margin: 0 auto;
  width: 60%;
}
.mini-btn{
  margin-right: 5px;
}
</style>
<template>
<div class="container">
  <head title="button"/>
  <div class="page-body">
    <div class="btn-area" id="buttonContainer">
      <button type="primary">页面主操作 Normal</button>
      <button type="primary" loading="true">页面主操作 Loading</button>
      <button type="primary" disabled="true">页面主操作 Disabled</button>

      <button type="default">页面次要操作 Normal</button>
      <button type="default" disabled="true">页面次要操作 Disabled</button>

      <button type="warn">警告类操作 Normal</button>
      <button type="warn" disabled="true">警告类操作 Disabled</button>

      <div class="button-sp-area">
        <button type="primary" plain="true">按钮</button>
        <button type="primary" disabled="true" plain="true">不可点击的按钮</button>

        <button type="default" plain="true">按钮</button>
        <button type="default" disabled="true" plain="true">按钮</button>

        <button class="mini-btn" type="primary" size="mini">按钮</button>
        <button class="mini-btn" type="default" size="mini">按钮</button>
        <button class="mini-btn" type="warn" size="mini">按钮</button>
      </div>
      <button type="primary" open-type="contact" @contact="handleContact($event.$wx)" v-bind:show-message-card="true" send-message-title="临时会话">打开客服会话</button>
      <button type="primary" open-type="share">触发用户转发</button>
      <button type="primary" open-type="getPhoneNumber" @getphonenumber="handleGetPhoneNumber($event.$wx)">获取用户手机号</button>
      <button type="primary" open-type="getUserInfo" lang="zh_CN" @getuserinfo="handleGetUserInfo($event.$wx)">获取用户信息</button>
      <button type="primary" open-type="openSetting" @opensetting="handleOpenSetting($event.$wx)">打开设置授权页</button>
      <button type="primary" open-type="feedback">打开意见反馈</button>
    </div>
  </div>
  <foot />
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
    data: {
        defaultSize: 'default',
        primarySize: 'default',
        warnSize: 'default',
        disabled: false,
        plain: false,
        loading: false
    },
    onShareAppMessage() {
        return {
            title: 'button',
            path: 'page/component/button'
        }
    },
    methods: {
        setDisabled() {
            this.disabled = !this.disabled
        },
        setPlain() {
            this.plain = !this.plain
        },
        setLoading() {
            this.loading = !this.loading
        },
        handleContact(e: WechatMiniprogram.ButtonContact) {
            console.log(e.detail)
        },
        handleGetPhoneNumber(e: WechatMiniprogram.ButtonGetPhoneNumber) {
            console.log(e.detail)
        },
        handleOpenSetting(e: WechatMiniprogram.ButtonOpenSetting) {
            console.log(e.detail.authSetting)
        },
        handleGetUserInfo(e: WechatMiniprogram.ButtonGetUserInfo) {
            console.log(e.detail.userInfo)
        }
    }
});
</script>
<config>
{
    "navigationBarTitleText": "button",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>