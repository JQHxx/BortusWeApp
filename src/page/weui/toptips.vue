<style lang="wxss">
@import '../../common/lib/weui.wxss';

.toptips-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.weui-input {
  border-bottom: 1px gray solid;
}

.toptips-content {
  display: flex;
  flex-direction: column;
}
</style>
<template>
  <div class="container">
    <mp-toptips
      v-bind:msg="message"
      v-bind:type="type"
      v-bind:show="showTopTips"
      v-bind:delay="3000"
    ></mp-toptips>
    <div class="toptips-container">
      <div class="toptips-content">
        <input
          class="weui-input"
          auto-focus
          placeholder="输入文本"
          @input="bindInputValue($event.$wx)"
          v-model="value"
        />
        <button @tap="bindConfirmTap" class="container-button" type="primary">
          确认
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'toptips',
      path: 'page/weui/example/toptips/toptips',
    };
  },
  data: {
    value: '',
    showTopTips: false,
    message: '请输入文本',
    type: 'info',
  },
  methods: {
    bindInputValue(e: WechatMiniprogram.Input) {
      this.value = e.detail.value
    },
    bindConfirmTap() {
      if (this.value) {
        this.showTopTips = true
        this.message = this.value
        this.type = 'success'
      } else {
        this.showTopTips = true
        this.type = 'error'
      }
    },
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-toptips": "module:weui-miniprogram/miniprogram_dist/toptips/toptips"
  },
  "navigationBarTitleText": "toptips"
}
</config>   