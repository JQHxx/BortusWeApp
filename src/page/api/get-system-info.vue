<style lang="wxss">
@import '../../common/lib/weui.wxss';
</style>
<template>
  <div class="container">
    <head title="getSystemInfo" />
    <div class="page-body">
      <div class="page-section">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">手机品牌</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="systemInfo.brand"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">手机型号</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="systemInfo.model"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">微信语言</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="systemInfo.language"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">微信版本</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="systemInfo.version"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">屏幕宽度</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="systemInfo.windowWidth"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">屏幕高度</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="systemInfo.windowHeight"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">DPR</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                v-bind:disabled="true"
                placeholder="未获取"
                v-model="systemInfo.pixelRatio"
              />
            </div>
          </div>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="getSystemInfo">获取手机系统信息</button>
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
      title: '获取手机系统信息',
      path: '/page/api/get-system-info',
    };
  },
  data: {
    systemInfo: {},
  },
  methods: {
    getSystemInfo() {
      wx.getSystemInfo({
        success: (res) => {
          this.systemInfo = res
        }
      });
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "获取手机系统信息",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>