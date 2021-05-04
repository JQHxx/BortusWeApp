<style lang="wxss">
.page-body-info {
  height: 100px;
}
.page-body-text-network-type {
  font-size: 40px;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}
</style>
<template>
  <div class="container">
    <head title="getNetworkType" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-body-info">
          <div class="page-body-title">网络状态</div>
          <block v-if="hasNetworkType === false">
            <text class="page-body-text">未获取</text>
            <text class="page-body-text">点击绿色按钮可获取网络状态</text>
          </block>
          <block v-if="hasNetworkType === true">
            <text class="page-body-text-network-type">{{ networkType }}</text>
          </block>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="getNetworkType">获取手机网络状态</button>
          <button @tap="clear">清空</button>
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
      title: '获取手机网络状态',
      path: '/page/api/get-network-type',
    };
  },
  data: {
    hasNetworkType: false,
    networkType: 'wifi'
  },
  methods: {
    getNetworkType() {
      const that = this;
      wx.getNetworkType({
        success: (res) => {
          console.log(res);
          this.hasNetworkType = true
          this.networkType = res.networkType
        },
      });
    },
    clear() {
      this.hasNetworkType = false
      this.networkType = ''
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "获取手机网络状态",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>