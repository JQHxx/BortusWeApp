<style lang="wxss">
@import "../../common/lib/common.wxss";
.weui-footer{
    margin-bottom: 50px;
}
.weui-footer_fixed-bottom{
    margin-bottom: 0;
}
</style>
<template>
<div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
        <div class="page__title">Footer</div>
        <div class="page__desc">页脚</div>
    </div>
    <div class="page__bd page__bd_spacing">
        <div class="weui-footer">
            <div class="weui-footer__text">Copyright © 2008-2016 weui.io</div>
        </div>
        <div class="weui-footer">
            <div class="weui-footer__links">
                <navigator url="" class="weui-footer__link">底部链接</navigator>
            </div>
            <div class="weui-footer__text">Copyright © 2008-2016 weui.io</div>
        </div>
        <div class="weui-footer">
            <div class="weui-footer__links">
                <navigator url="" class="weui-footer__link">底部链接</navigator>
                <navigator url="" class="weui-footer__link">底部链接</navigator>
            </div>
            <div class="weui-footer__text">Copyright © 2008-2016 weui.io</div>
        </div>
        <div class="weui-footer weui-footer_fixed-bottom">
            <div class="weui-footer__links">
                <navigator url="" class="weui-footer__link">WeUI首页</navigator>
            </div>
            <div class="weui-footer__text">Copyright © 2008-2016 weui.io</div>
        </div>
    </div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'footer',
      path: 'page/weui/footer'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "footer"
}
</config>