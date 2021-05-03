<style lang="wxss">
.page-section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
}
.page-body-title {
  font-size: 30px;
  line-height: 100px;
}
.page-body-text {
  color: #bbb;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 50px 0;
  text-align: center;
}
.page-body-button {
  width: 100%;
}
</style>
<template>
  <div class="container">
    <head title="Login" />
    <div class="page-body">
      <div class="page-section">
        <block v-if="hasLogin === true">
          <text class="page-body-title">已登录</text>
          <text class="page-body-text"
            >每个微信号中仅需登录 1 次，后续每次进入页面即可根据微信 id
            自动拉取用户信息</text
          >
        </block>
        <block v-if="hasLogin === false">
          <text class="page-body-text">每个微信号中仅需登录一次</text>
          <button class="page-body-button" type="primary" @tap="login">
            微信登录
          </button>
        </block>
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
      title: '微信登录',
      path: 'page/api/login',
    };
  },
  data: {
      hasLogin: false
  },
  onLoad() {},
  methods: {
    login() {
      wx.login({
        success: () => {
            this.hasLogin = true
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "微信登录",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>