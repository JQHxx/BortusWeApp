<style lang="wxss">
@import '../../common/lib/common.wxss';

.weui-form-preview{
    margin-bottom: 25px;
}
</style>
<template>
<div class="page" v-bind:data-weui-theme="theme">
  <div class="page__hd">
        <div class="page__title">Preview</div>
        <div class="page__desc">表单预览</div>
    </div>
    <div class="page__bd">
        <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">付款金额</div>
                    <div class="weui-form-preview__value_in-hd">¥2400.00</div>
                </div>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">商品</div>
                    <div class="weui-form-preview__value">电动打蛋机</div>
                </div>
                <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">标题标题</div>
                    <div class="weui-form-preview__value">名字名字名字</div>
                </div>
                <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">标题标题</div>
                    <div class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</div>
                </div>
            </div>
            <div class="weui-form-preview__ft">
                <navigator url="" class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active">操作</navigator>
            </div>
        </div>
        <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <div class="weui-form-preview__label">付款金额</div>
                <div class="weui-form-preview__value_in-hd">¥2400.00</div>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">商品</div>
                    <div class="weui-form-preview__value">电动打蛋机</div>
                </div>
                <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">标题标题</div>
                    <div class="weui-form-preview__value">名字名字名字</div>
                </div>
                <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">标题标题</div>
                    <div class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</div>
                </div>
            </div>
            <div class="weui-form-preview__ft">
                <navigator class="weui-form-preview__btn weui-form-preview__btn_default" hover-class="weui-form-preview__btn_active">辅助操作</navigator>
                <navigator class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active">操作</navigator>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'preview',
      path: 'page/weui/preview'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "preview"
}
</config>   