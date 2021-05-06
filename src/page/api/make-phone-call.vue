<style lang="wxss">
.page-section {
  width: auto;
  margin: 15px;
  padding: 42px 30px 30px;
  background-color: var(--weui-BG-2);
  font-size: 14px;
}
.desc {
  margin-bottom: 10px;
}
.input {
  height: 60px;
  line-height: 60px;
  font-size: 39px;
  border-bottom: 1px solid var(--weui-FG-3);
}
.btn-area {
  padding: 0;
}
</style>
<template>
  <div class="container">
    <head title="makePhoneCall" />
    <div class="page-body">
      <div class="page-section">
        <div class="desc">请在下方输入电话号码</div>
        <input class="input" type="number" name="input" @input="bindInput($event.$wx)" />
        <div class="btn-area">
          <button type="primary" @tap="makePhoneCall" v-bind:disabled="disabled">
            拨打
          </button>
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
      title: '打电话',
      path: '/page/api/make-phone-call',
    };
  },
  data: {
    disabled: true,
    inputValue: ''
  },
  methods: {
    bindInput(e: WechatMiniprogram.Input) {
      this.inputValue = e.detail.value;

      if (this.inputValue.length > 0) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    makePhoneCall() {
      wx.makePhoneCall({
        phoneNumber: this.inputValue,
        success() {
          console.log('成功拨打电话');
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "打电话",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>