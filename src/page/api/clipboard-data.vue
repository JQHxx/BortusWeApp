<style lang="wxss">
@import '../../common/lib/weui.wxss';

.page-body-info {
  padding: 5px;
  height: 100px;
  overflow: scroll-y;
  text-align: left;
}
</style>
<template>
  <div class="container">
    <head title="get/set/ClipboardData'}}" />
    <div class="page-body">
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">Copy</div>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              type="text"
              name="key"
              v-model="value"
              @input="valueChanged"
            />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">Paste</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" v-model="pasted" />
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button type="primary" @tap="copy">复制</button>
        <button @tap="paste">粘贴</button>
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
      title: '剪切板',
      path: '/page/api/clipboard-data',
    };
  },
  data: {
    value: 'edit and copy me',
    pasted: '',
  },
  methods: {
    valueChanged(e: WechatMiniprogram.Input) {
      this.value = e.detail.value
    },
    copy() {
      wx.setClipboardData({
        data: this.value,
        success() {
          wx.showToast({
            title: '复制成功',
            icon: 'success',
            duration: 1000,
          });
        },
      });
    },
    paste() {
      wx.getClipboardData({
        success: (res) => {
          this.pasted = res.data
          wx.showToast({
            title: '粘贴成功',
            icon: 'success',
            duration: 1000,
          });
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "剪切板",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>