<style lang="wxss">
@import '../../common/lib/weui.wxss';

.page-section {
  margin-bottom: 10px;
}
</style>
<template>
  <div class="container">
    <head title="input" />
    <div class="page-body">
      <div class="page-section">
        <div class="weui-cells__title">可以自动聚焦的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input class="weui-input" auto-focus placeholder="将会获取焦点" />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">控制最大输入长度的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              maxlength="10"
              placeholder="最大输入长度为10"
            />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">实时获取输入值：{{ inputValue }}</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              maxlength="10"
              @input="bindKeyInput($event.$wx)"
              placeholder="输入同步到div中"
            />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">控制输入的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              @input="bindReplaceInput($event.$wx)"
              placeholder="连续的两个1会变成2"
            />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">控制键盘的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              @input="bindHideKeyboard($event.$wx)"
              placeholder="输入123自动收起键盘"
            />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">数字输入的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input class="weui-input" type="number" placeholder="这是一个数字输入框" />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">密码输入的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              password
              type="text"
              placeholder="这是一个密码输入框"
            />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">带小数点的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              type="digit"
              placeholder="带小数点的数字键盘"
            />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">身份证输入的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              type="idcard"
              placeholder="身份证输入键盘"
            />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="weui-cells__title">控制占位符颜色的input</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              placeholder-style="color:#F76260"
              placeholder="占位符字体是红色的"
            />
          </div>
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
      title: 'input',
      path: 'page/component/input',
    };
  },

  data: {
    focus: false,
    inputValue: '',
  },

  methods: {
    bindKeyInput(e: WechatMiniprogram.Input) {
      this.inputValue = e.detail.value;
    },

    bindReplaceInput(e: WechatMiniprogram.Input) {
      const value = e.detail.value;
      let pos = e.detail.cursor;
      let left;
      if (pos !== -1) {
        // 光标在中间
        left = e.detail.value.slice(0, pos);
        // 计算光标的位置
        pos = left.replace(/11/g, '2').length;
      }

      return value.replace(/11/g, '2')
    },
    bindHideKeyboard(e: WechatMiniprogram.Input) {
      if (e.detail.value === '123') {
        // 收起键盘
        wx.hideKeyboard();
      }
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "input",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>