<style lang="less">
textarea {
  width: 350px;
  padding: 13px 0;
}
.textarea-wrp {
  padding: 0 13px;
}
</style>
<template>
  <div class="container">
    <head title="textarea" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-section-title">输入区域高度自适应，不会出现滚动条</div>
        <div class="textarea-wrp">
          <textarea @blur="bindTextAreaBlur($event.$wx)" auto-height />
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">这是一个可以自动聚焦的textarea</div>
        <div class="textarea-wrp">
          <textarea auto-focus="true" style="height: 3em" />
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'textarea',
      path: 'page/component/textarea',
    };
  },
  data: {
    focus: false,
  },
  methods: {
    bindTextAreaBlur(e: WechatMiniprogram.TextareaBlur) {
      console.log(e.detail.value);
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "textarea",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>