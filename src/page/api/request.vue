<style lang="less">
</style>
<template>
  <div class="container">
    <head title="request" />
    <div class="page-body">
      <div class="page-body-wording">
        <text class="page-body-text"> 点击向服务器发起请求 </text>
      </div>
      <div class="btn-area">
        <button
          @tap="makeRequest"
          type="primary"
          v-bind:disabled="buttonDisabled"
          v-bind:loading="loading"
        >
          request
        </button>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const duration = 2000;

wepy.page({
  onShareAppMessage() {
    return {
      title: '网络请求',
      path: '/page/api/request',
    };
  },
  data: {
    loading: false
  },
  methods: {
    makeRequest() {
      this.loading = true
      wx.request({
        url: "http://www.baidu.com",
        data: {
          noncestr: Date.now(),
        },
        success: (result) => {
          wx.showToast({
            title: '请求成功',
            icon: 'success',
            mask: true,
            duration,
          });
          this.loading = false;
          console.log('request success', result);
        },

        fail: ({ errMsg }) => {
          console.log('request fail', errMsg);
          this.loading = false
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "网络请求",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>