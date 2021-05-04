<style lang="wxss">
.page-body-text-screen-brightness {
  font-size: 40px;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}

.page-section-gap {
  padding: 15px;
}
</style>
<template>
  <div class="container">
    <head title="get/set/ScreenBrightness" />
    <div class="page-body">
      <div class="page-body-info">
        <div class="page-body-title">当前屏幕亮度</div>
        <text class="page-body-text-screen-brightness">{{
          screenBrightness
        }}</text>
      </div>
      <div class="page-section page-section-gap">
        <div class="page-section-title">设置屏幕亮度</div>
        <div class="body-div">
          <slider
            @change="changeBrightness($event.$wx)"
            v-model="screenBrightness"
            min="0"
            max="1"
            step="0.1"
          />
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
      title: '屏幕亮度',
      path: '/page/api/screen-brightness',
    };
  },
  data: {
    screenBrightness: 0,
  },
  onLoad() {
    this._updateScreenBrightness();
  },
  methods: {
    changeBrightness(e: WechatMiniprogram.SliderChange) {
      const value = parseFloat(e.detail.value.toFixed(1));
      this.screenBrightness = parseFloat(e.detail.value.toFixed(1))
      wx.setScreenBrightness({
        value,
      });
    },
    _updateScreenBrightness() {
      wx.getScreenBrightness({
        success: (res) => {
          console.log(res);
          this.screenBrightness = parseFloat(res.value.toFixed(1))
        },
        fail: (err) => {
          console.error(err);
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "屏幕亮度",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>