<style lang="less">
@import '../../common/lib/weui.less';

label {
  display: inline-block;
  min-width: 235px;
  margin-right: 10px;
}
form {
  width: 100%;
}
.picker-text {
  margin-left: 10px;
  position: relative;
}
</style>
<template>
  <div class="container">
    <head title="form" />

    <div class="page-body">
      <form @submit="formSubmit" @reset="formReset">
        <div class="page-section page-section-gap">
          <div class="page-section-title">switch</div>
          <switch name="switch" />
        </div>

        <div class="page-section page-section-gap">
          <div class="page-section-title">radio</div>
          <radio-group name="radio">
            <label><radio value="radio1" />选项一</label>
            <label><radio value="radio2" />选项二</label>
          </radio-group>
        </div>

        <div class="page-section page-section-gap">
          <div class="page-section-title">checkbox</div>
          <checkbox-group name="checkbox">
            <label><checkbox value="checkbox1" />选项一</label>
            <label><checkbox value="checkbox2" />选项二</label>
          </checkbox-group>
        </div>

        <div class="page-section page-section-gap">
          <div class="page-section-title">slider</div>
          <slider value="50" name="slider" show-value></slider>
        </div>

        <div class="page-section">
          <div class="page-section-title">input</div>
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__bd">
                <input
                  class="weui-input"
                  name="input"
                  placeholder="这是一个输入框"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="btn-area">
          <button type="primary" formType="submit">Submit</button>
          <button formType="reset">Reset</button>
        </div>
      </form>
    </div>

    <foot is="foot" />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form',
    };
  },
  methods: {
    formSubmit(e: WechatMiniprogram.FormSubmit) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    },
    formReset(e: WechatMiniprogram.FormReset) {
      console.log('form发生了reset事件');
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "form"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>