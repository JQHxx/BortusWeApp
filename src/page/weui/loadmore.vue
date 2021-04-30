<style lang="less" src="../../common/lib/common.less"></style>
<style lang="less">
.page {
    background-color: var(--weui-BG-2)
}
</style>
<template>
<div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
        <div class="page__title">Loadmore</div>
        <div class="page__desc">加载更多</div>
    </div>
    <div class="page__bd">
        <mp-loading type="circle" v-bind:show="true"></mp-loading>
        <div class="weui-loadmore weui-loadmore_line">
            <div class="weui-loadmore__tips weui-loadmore__tips_in-line">暂无数据</div>
        </div>
        <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot">
            <div class="weui-loadmore__tips weui-loadmore__tips_in-line weui-loadmore__tips_in-dot"></div>
        </div>
    </div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'loadmore',
      path: 'page/weui/loadmore'
    }
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-loading": "weui-miniprogram/loading/loading"
  },
  "navigationBarTitleText": "loadmore"
}
</config>   