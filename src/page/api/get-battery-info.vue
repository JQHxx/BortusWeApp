<style lang="wxss">
@import '../../common/lib/weui.wxss';
</style>
<template>
  <div class="container">
    <head title="getBatteryInfo" />
    <div class="page-body">
      <div class="page-section">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">当前电量</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="level"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">电池模式</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="isCharging"
              />
            </div>
          </div>
        </div>
        <button type="primary" @tap="getBatteryInfo">获取电量信息信息</button>
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
      title: '获取电池信息',
      path: '/page/api/get-battery-info',
    };
  },
  data: {
    level: '',
    isCharging: ''
  },
  methods: {
    getBatteryInfo() {
      wx.getBatteryInfo({
        success: (res) => {
          const msg = res.isCharging ? '充电中' : '使用电池中';
          this.level = res.level
          this.isCharging = msg
        }
      });
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "获取手机设备电量",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>