<style lang="wxss">
@import '../../common/lib/common.wxss';
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Tabbar</div>
      <div class="page__desc">
        类似小程序原生tabbar的组件，可用于自定义tabbar
      </div>
    </div>
    <mp-tabbar
      style="position: fixed; bottom: 0; width: 100%; left: 0; right: 0"
      v-bind:list="list"
      @change="tabChange($event.$wx)"
    ></mp-tabbar>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'tabbar',
      path: 'page/weui/tabbar',
    };
  },
  data: {
    list: [
      {
        text: '微信',
        iconPath: '/resources/images/icon_tabbar.png',
        selectedIconPath: '/resources/images/icon_tabbar.png',

        badge: '8',
      },
      {
        text: '通讯录',
        iconPath: '/resources/images/icon_tabbar.png',
        selectedIconPath: '/resources/images/icon_tabbar.png',
      },
      {
        text: '发现',
        iconPath: '/resources/images/icon_tabbar.png',
        selectedIconPath: '/resources/images/icon_tabbar.png',
        dot: true,
      },
      {
        text: '我',
        iconPath: '/resources/images/icon_tabbar.png',
        selectedIconPath: '/resources/images/icon_tabbar.png',
      },
    ],
  },
  methods: {
    tabChange(e: weui.TabbarChange<{text: string, iconPath: string, selectedIconPath: string, badge: string}>) {
      console.log('tab change', e);
    }
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-tabbar": "module:weui-miniprogram/miniprogram_dist/tabbar/tabbar"
  },
  "navigationBarTitleText": "tabbar"
}
</config>