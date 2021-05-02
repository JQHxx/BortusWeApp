<style lang="less">
@import "../../common/lib/common.wxss";
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Cell</div>
      <div class="page__desc">列表</div>
    </div>
    <div class="page__bd">
      <mp-cells ext-class="my-cells" title="带说明的列表项">
        <mp-cell value="标题文字" footer="说明文字"></mp-cell>
        <mp-cell>
          <div>标题文字（使用slot）</div>
          <div slot="footer">说明文字</div>
        </mp-cell>
        <mp-slideview v-bind:show="true" v-bind:buttons="slideButtons" @buttontap="slideButtonTap($event.$wx)">
          <mp-cell value="左滑可以删除" footer="说明文字"></mp-cell>
        </mp-slideview>
      </mp-cells>
      <mp-cells title="带图标、说明的列表项" footer="底部说明文字">
        <mp-cell value="标题文字" footer="说明文字">
          <image slot="icon" v-bind:src="icon" style="margin-right: 16px; vertical-align: middle; width: 20px; height: 20px;"></image>
        </mp-cell>
        <mp-cell value="标题文字" footer="说明文字">
          <image slot="icon" v-bind:src="icon" style="margin-right: 16px; vertical-align: middle; width: 20px; height: 20px;"></image>
        </mp-cell>
      </mp-cells>
      <mp-cells title="带跳转的列表项">
        <mp-cell hover value="有hover效果，无跳转URL" footer="说明文字">
          <image slot="title" v-bind:src="icon" style="margin-right: 16px; vertical-align: middle; width: 20px; height: 20px;"></image>
        </mp-cell>
        <mp-cell link url="cell" value="有跳转URL" footer="说明文字">
          <image slot="icon" v-bind:src="icon" style="margin-right: 16px; vertical-align: middle; width: 20px; height: 20px;"></image>
        </mp-cell>
      </mp-cells>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import base64 from '../../resources/images/base64';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'cell',
      path: 'page/weui/cell',
    };
  },
  data: {
    icon: base64.icon20,
    slideButtons: [
      {
        text: '普通',
        src: '../../resources/images/icon_love.svg',
      },
      {
        text: '普通',
        extClass: 'test',
        src: '../../resources/images/icon_star.svg',
      },
      {
        type: 'warn',
        text: '警示',
        extClass: 'test',
        src: '../../resources/images/icon_del.svg',
      }
    ]
  },
  methods: {
    slideButtonTap(e: WechatMiniprogram.ControlTap) {
      console.log('slide button tap', e.detail);
    },
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-cells": "module:weui-miniprogram/miniprogram_dist/cells/cells",
    "mp-cell": "module:weui-miniprogram/miniprogram_dist/cell/cell",
    "mp-slideview": "module:weui-miniprogram/miniprogram_dist/slideview/slideview"
  },
  "navigationBarTitleText": "cell"
}
</config>