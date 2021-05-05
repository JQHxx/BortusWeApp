<style lang="wxss">
@import '../../common/lib/weui.wxss';
</style>
<template>
  <div class="container">
    <head title="openLocation" />
    <div class="page-body">
      <div class="page-section">
        <form @submit="openLocation">
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">经度</div>
              </div>
              <div class="weui-cell__bd">
                <input
                  class="weui-input"
                  type="text"
                  v-bind:disabled="true"
                  value="113.324520"
                  name="longitude"
                />
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">纬度</div>
              </div>
              <div class="weui-cell__bd">
                <input
                  class="weui-input"
                  type="text"
                  v-bind:disabled="true"
                  value="23.099994"
                  name="latitude"
                />
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">位置名称</div>
              </div>
              <div class="weui-cell__bd">
                <input
                  class="weui-input"
                  type="text"
                  v-bind:disabled="true"
                  value="T.I.T 创意园"
                  name="name"
                />
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">详细位置</div>
              </div>
              <div class="weui-cell__bd">
                <input
                  class="weui-input"
                  type="text"
                  v-bind:disabled="true"
                  value="广州市海珠区新港中路397号"
                  name="address"
                />
              </div>
            </div>
          </div>
          <div class="btn-area">
            <button type="primary" formType="submit">查看位置</button>
          </div>
        </form>
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
      title: '查看位置',
      path: '/page/api/open-location',
    };
  },
  methods: {
    openLocation(e: WechatMiniprogram.FormSubmit) {
      console.log(e);
      const value = e.detail.value;
      console.log(value);
      wx.openLocation({
        longitude: Number(value.longitude),
        latitude: Number(value.latitude),
        name: value.name,
        address: value.address,
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "查看位置",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>