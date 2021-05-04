<style lang="wxss">
.page-body-info {
  padding-bottom: 0;
  height: 230px;
}
.userinfo-avatar {
  border-radius: 114px;
  width: 114px;
  height: 114px;
}
.userinfo-nickname {
  margin-top: 10px;
  font-size: 19px;
}
</style>
<template>
  <div class="container">
    <head title="getUserInfo" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-body-info">
          <div class="page-body-title">用户信息</div>
          <block v-if="hasUserInfo === false">
            <text class="page-body-text">未获取</text>
            <text class="page-body-text">点击绿色按钮可获取用户头像及昵称</text>
          </block>
          <block v-if="hasUserInfo === true">
            <image class="userinfo-avatar" v-bind:src="userInfo.avatarUrl"></image>
            <text class="userinfo-nickname">{{ userInfo.nickName }}</text>
          </block>
        </div>
        <div class="btn-area">
          <button
            type="primary"
            open-type="getUserInfo"
            @getuserinfo="getUserInfo"
          >
            获取用户信息
          </button>
          <button bindtap="clear">清空</button>
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
      title: '获取用户信息',
      path: '/page/api/get-user-info',
    };
  },

  data: {
    hasUserInfo: false,
    userInfo: {} as WechatMiniprogram.UserInfo
  },
  methods: {
    getUserInfo(info: WechatMiniprogram.ButtonGetUserInfo) {
      this.userInfo = info.detail.userInfo
      this.hasUserInfo = true
    },
    clear() {
      this.hasUserInfo = false
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "获取用户信息",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>