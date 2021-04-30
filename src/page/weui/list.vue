<style lang="less">
</style>
<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">List（组件）</div>
      <div class="page__desc">列表</div>
    </div>
    <div class="page__bd">
      <mp-cells ext-class="my-cells" title="带说明的列表项">
        <mp-cell value="标题文字" foot="说明文字"></mp-cell>
        <mp-cell>
          <div>标题文字（使用slot）</div>
          <div slot="foot">说明文字</div>
        </mp-cell>
        <mp-slideview v-bind:buttons="slideButtons" @buttontap="slideButtonTap">
          <mp-cell value="左滑可以删除" foot="说明文字"></mp-cell>
        </mp-slideview>
      </mp-cells>
      <mp-cells title="带图标、说明的列表项">
        <mp-cell value="标题文字" foot="说明文字">
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
        <mp-cell value="标题文字" foot="说明文字">
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
        <mp-cell link hover value="有hover效果" foot="说明文字">
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
        <mp-cell link value="无hover效果" foot="说明文字">
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
        <mp-cell
          link
          url="../index"
          value="无hover效果，带跳转URL"
          foot="说明文字"
        >
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
import base64 from '../../resources/images/base64'

wepy.page({
  onShareAppMessage() {
    return {
      title: 'list',
      path: 'page/weui/example/list/list',
    };
  },
  data: {
      icon: base64.icon20,
      slideButtons: [
        {
          text: '删除',
          extClass: 'delete',
        },
        {
          text: '测试测试',
          extClass: 'test',
        },
      ],
  },
  methods: {
    slideButtonTap(e: weui.SlideViewButtonTap) {
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
  "navigationBarTitleText": "list"
}
</config>   