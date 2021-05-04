<style lang="wxss">
.page-body-info {
  height: 100px;
}
.page-body-text-network-type {
  font-size: 40px;
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
}
</style>
<template>
<div class="container">
  <head title="onNetworkStatusChange"/>
  <div class="page-body">
    <div class="page-section">
      <div class="page-body-info">
        <div class="page-body-title">网络状态</div>
        <block v-if="isConnected === false">
          <text class="page-body-text">没有网络连接</text>
        </block>
        <block v-if="isConnected === true">
          <text class="page-body-text-network-type">{{networkType}}</text>
        </block>
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
      title: '监听手机网络变化',
      path: '/page/api/on-network-status-change'
    }
  },

  data: {
    isConnected: false,
    networkType: ''
  },
  onLoad() {
    wx.onNetworkStatusChange((res) => {
      this.isConnected = res.isConnected
      this.networkType = res.networkType
    })
  },
  onShow() {
    wx.getNetworkType({
      success: (res) => {
        this.isConnected = res.networkType !== 'none'
        this.networkType = res.networkType
      }
    })
  }
});
</script>
<config>
{
    "navigationBarTitleText": "监听手机网络变化",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>