<style lang="less" src="../../common/lib/common.less"></style>
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
        <mp-slidediv
          v-bind:show="true"
          v-bind:buttons="slideButtons"
          @buttontap="slideButtonTap"
        >
          <mp-cell value="左滑可以删除" footer="说明文字"></mp-cell>
        </mp-slidediv>
      </mp-cells>
      <mp-cells title="带图标、说明的列表项" footer="底部说明文字">
        <mp-cell value="标题文字" footer="说明文字">
          <image
            slot="icon"
            v-bind:src="icon"
            style="
              margin-right: 16px;
              vertical-align: middle;
              width: 20px;
              height: 20px;
            "
          ></image>
        </mp-cell>
        <mp-cell value="标题文字" footer="说明文字">
          <image
            slot="icon"
            v-bind:src="icon"
            style="
              margin-right: 16px;
              vertical-align: middle;
              width: 20px;
              height: 20px;
            "
          ></image>
        </mp-cell>
      </mp-cells>
      <mp-cells title="带跳转的列表项">
        <mp-cell hover value="有hover效果，无跳转URL" footer="说明文字">
          <image
            slot="title"
            v-bind:src="icon"
            style="
              margin-right: 16px;
              vertical-align: middle;
              width: 20px;
              height: 20px;
            "
          ></image>
        </mp-cell>
        <mp-cell link url="./cell" value="有跳转URL" footer="说明文字">
          <image
            slot="icon"
            v-bind:src="icon"
            style="
              margin-right: 16px;
              vertical-align: middle;
              width: 20px;
              height: 20px;
            "
          ></image>
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
      path: 'page/weui/example/cell/cell',
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
      },
    ],
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
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-slideview": "weui-miniprogram/slideview/slideview"
  },
  "navigationBarTitleText": "cell"
}
</config>