<style lang="wxss">
@import '../../common/lib/weui.wxss';

.weui-label {
  width: 5em;
}
</style>
<template>
  <div class="container">
    <head title="setNaivgationBarTitle" />
    <form class="page-body" @submit="setNaivgationBarTitle($event.$wx)">
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">页面标题</div>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              type="text"
              placeholder="请输入页面标题并点击设置即可"
              name="title"
            />
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button type="primary" formType="submit">设置</button>
      </div>
    </form>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '设置页面标题',
      path:
        '/page/api/set-navigation-bar-title',
    };
  },
  methods: {
    setNaivgationBarTitle(e: WechatMiniprogram.FormSubmit) {
      const title = e.detail.value.title;
      console.log(title);
      wx.setNavigationBarTitle({
        title,
        success() {
          console.log('setNavigationBarTitle success');
        },
        fail(err) {
          console.log('setNavigationBarTitle fail, err is', err);
        },
      });
      return false;
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "设置页面标题",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>