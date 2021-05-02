<style lang="wxss">
@import "../../common/lib/common.wxss";
</style>
<template>
<div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
        <div class="page__title">Grid</div>
        <div class="page__desc">九宫格</div>
    </div>
    <div class="page__bd">
        <mp-grids v-bind:grids="grids"></mp-grids>
    </div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const iconTabbar = '/resources/images/icon_tabbar.png'
const GRID_DEMO_URL = ''

wepy.page({
    onShareAppMessage() {
        return {
          title: 'grid',
          path: 'page/weui/grid'
        }
      },
    data: { grids: [
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        },
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        },
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        },
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        },
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        },
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        },
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        },
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        },
        {
            imgUrl: iconTabbar,
            url: GRID_DEMO_URL,
            text: 'Grid'
        }
    ]
}
});
</script>
<config>
{
  "usingComponents": {
    "mp-grids": "module:weui-miniprogram/miniprogram_dist/grids/grids"
  },
  "navigationBarTitleText": "grid"
}
</config>