<style lang="wxss">
@import "../../common/lib/common.wxss";
.placeholder{
    margin: 5px;
    padding: 0 10px;
    text-align: center;
    background-color: var(--weui-BG-0);
    height: 2.3em;
    line-height: 2.3em;
    color: var(--weui-FG-1);
}
</style>
<template>
<div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
        <div class="page__title">Flex</div>
        <div class="page__desc">Flex布局</div>
    </div>
    <div class="page__bd page__bd_spacing">
        <div class="weui-flex">
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        </div>
        <div class="weui-flex">
            <div><div class="placeholder">weui</div></div>
            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            <div><div class="placeholder">weui</div></div>
        </div>
    </div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'flex',
      path: 'page/weui/flex'
    }
  },
});
</script>
<config>
{
    "navigationBarTitleText": "flex"
}
</config>