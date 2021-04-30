<style lang="less" src="../../common/lib/common.less" ></style>
<style lang="less">
page {
  height: 100%;
}
</style>
<template>
  <div class="weui-form">
    <div class="weui-form__text-area">
      <div class="weui-form__title">表单标题</div>
      <div class="weui-form__desc">表单描述示意</div>
    </div>
    <div class="weui-form__control-area">
      <div class="weui-cells__group weui-cells__group_form">
        <div class="weui-cells__title">输入框</div>
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">QQ号</label>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="number"
                pattern="[0-9]*"
                placeholder="请输入QQ号"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-form__tips-area">
      <label for="weuiAgree" class="weui-agree">
        <input
          id="weuiAgree"
          type="checkbox"
          class="weui-agree__checkbox"
        /><span class="weui-agree__text"
          >阅读并同意<a href="javascript:void(0);">《相关条款》</a>
        </span>
      </label>
    </div>
    <div class="weui-form__opr-area">
      <button type="primary">确定</button>
    </div>
    <div class="weui-form__tips-area">
      <div class="weui-form__tips">
        点击下一步即表示<navigator href="javascript:;">同意用户协议</navigator>
      </div>
    </div>
    <div class="weui-form__extra-area">
      <div class="weui-footer">
        <div class="weui-footer__links">
          <navigator href="javascript:void(0);" class="weui-footer__link"
            >底部链接文本</navigator
          >
        </div>
        <div class="weui-footer__text">Copyright © 2008-2019 weui.io</div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'form-age',
      path: 'page/weui/form-age',
    };
  },
});
</script>
<config>
{
  "component": true,
  "usingComponents": {
    "mp-form-page": "weui-miniprogram/form-page/form-page"
  },
  "navigationBarTitleText": "form-page"
}
</config>