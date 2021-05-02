<style lang="wxss">
@import "../../common/lib/weui.wxss";
</style>
<template>
  <div class="container">
    <head title="switch" />
    <div class="page-body">
      <div class="page-section page-section-gap">
        <div class="page-section-title">默认样式</div>
        <div class="body-div">
          <switch checked @change="switch1Change($event.$wx)" />
          <switch @change="switch2Change($event.$wx)" />
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">推荐展示样式</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">开启中</div>
            <div class="weui-cell__ft">
              <switch checked />
            </div>
          </div>
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">关闭</div>
            <div class="weui-cell__ft">
              <switch />
            </div>
          </div>
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
      title: 'switch',
      path: 'page/component/switch',
    };
  },
  methods: {
    switch1Change(e: WechatMiniprogram.SwitchChange) {
      console.log('switch1 发生 change 事件，携带值为', e.detail.value);
    },

    switch2Change(e: WechatMiniprogram.SwitchChange) {
      console.log('switch2 发生 change 事件，携带值为', e.detail.value);
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "switch",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>