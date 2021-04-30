<style lang="less" src="../../common/lib/common.less"></style>
<template>
<view class="page" data-weui-theme="{{theme}}">
    <view class="page__hd">
        <view class="page__title">Grid</view>
        <view class="page__desc">九宫格</view>
    </view>
    <view class="page__bd">
        <mp-grids grids="{{grids}}"></mp-grids>
    </view>
</view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const iconTabbar = '../../resources/images/icon_tabbar.png'
const GRID_DEMO_URL = ''

wepy.page({
    onShareAppMessage() {
        return {
          title: 'grid',
          path: 'page/weui/example/grid/grid'
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
    "mp-grids": "weui-miniprogram/grids/grids"
  },
  "navigationBarTitleText": "grid"
}
</config>