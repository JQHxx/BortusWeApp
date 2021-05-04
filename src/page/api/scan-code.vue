<style lang="wxss">
@import '../../common/lib/weui.wxss';

.weui-cell__bd {
  min-height: 24px;
  word-break: break-all;
}
</style>
<template>
  <div class="container">
    <head title="scanCode" />
    <div class="page-body">
      <div class="weui-cells__title">扫码结果</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">{{ result }}</div>
        </div>
      </div>
      <div class="btn-area">
        <button type="primary" @tap="scanCode">扫一扫</button>
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
      title: '扫码',
      path: '/page/api/scan-code',
    };
  },
  data: {
    result: '',
  },
  methods: {
    scanCode() {
      wx.scanCode({
        success: (res) => {
          this.result = res.result
        },
        fail: () => {},
      });
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "扫码",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>