<style lang="wxss">
@import "../../common/lib/common.wxss";
.blue {
  background: blue;
}
</style>
<template>
<div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
        <div class="page__title">Badge</div>
        <div class="page__desc">徽章</div>
    </div>
    <div class="page__bd">
        <mp-cells title="新消息提示跟摘要信息后，统一在列表右侧">
            <mp-cell title="单行列表" link>
                <div slot="footer">
                    <div style="display: inline-block;vertical-align:middle; font-size: 17px;">详细信息</div>
                    <mp-badge style="margin-left: 5px;margin-right: 5px;" ext-class="blue"/>
                </div>
            </mp-cell>
        </mp-cells>
        <mp-cells title="未读数红点跟在主题信息后，统一在列表左侧">
            <mp-cell>
                <div slot="title" style="position: relative;margin-right: 10px;">
                    <image src="../../resources/images/pic_160.png" style="width: 50px; height: 50px; display: block"/>
                    <mp-badge content="99+" style="position: absolute;top: -.4em;right: -.4em;"/>
                </div>
                <div>联系人名称</div>
                <div style="font-size: 13px;color: #888888;">摘要信息</div>
            </mp-cell>
            <mp-cell link>
                <div style="display: inline-block; vertical-align: middle">单行列表</div>
                <mp-badge content="8" style="margin-left: 5px;"/>
            </mp-cell>
            <mp-cell link>
                <div style="display: inline-block; vertical-align: middle">单行列表</div>
                <mp-badge style="margin-left: 5px;" content="New"/>
            </mp-cell>
        </mp-cells>
    </div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'badge',
      path: 'page/weui/badge'
    }
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-cells": "module:weui-miniprogram/miniprogram_dist/cells/cells",
    "mp-cell": "module:weui-miniprogram/miniprogram_dist/cell/cell",
    "mp-badge": "module:weui-miniprogram/miniprogram_dist/badge/badge"
  },
  "navigationBarTitleText": "badge"
}
</config>