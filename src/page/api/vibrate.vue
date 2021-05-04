<style lang="wxss">
</style>
<template>
  <div class="container">
    <head title="vibrate/Long/Short" />
    <div class="page-body">
      <div class="page-section">
        <div class="btn-area">
          <button type="primary" @tap="vibrateLong">长振动</button>
          <button type="default" @tap="vibrateShort">短振动</button>
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
      title: '振动',
      path: '/page/api/vibrate',
    };
  },
  methods: {
    vibrateShort() {
      wx.vibrateShort({
        type: 'light',
        success: (res) => {
          console.log(res)
        },
        fail: (err) => {
          console.error(err)
        },
        complete: (res) => {
          console.log('completed')
        }
      });
    },
    vibrateLong() {
      wx.vibrateLong({
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.error(err);
        },
        complete() {
          console.log('completed');
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "振动",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>