<style lang="wxss">
@import "../../common/lib/common.wxss";
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Dialog</div>
      <div class="page__desc">对话框</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @tap="openConfirm($event.$wx)">
          确认取消按钮
        </button>
        <button class="weui-btn" type="default" @tap="tapOneDialogButton($event.$wx)">
          只有确认按钮
        </button>
      </div>
    </div>
    <mp-dialog title="test" v-bind:show="dialogShow" @buttontap="tapDialogButton($event.$wx)" v-bind:buttons="buttons">
      <div>test content</div>
    </mp-dialog>
    <mp-dialog title="test1" v-bind:show="showOneButtonDialog" @buttontap="tapDialogButton($event.$wx)" v-bind:buttons="oneButton">
      <div>test content1</div>
    </mp-dialog>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'dialog',
      path: 'page/weui/dialog',
    };
  },
  data: {
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{ text: '取消' }, { text: '确定' }],
    oneButton: [{ text: '确定' }],
  },
  methods: {
    openConfirm: function () {
      this.dialogShow = true
    },
    tapDialogButton(e: weui.DialogButtonTap) {
      console.log(e)
      this.dialogShow = false
      this.showOneButtonDialog = false
    },
    tapOneDialogButton(e: WechatMiniprogram.ControlTap) {
      this,this.showOneButtonDialog = true
    },
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-dialog": "module:weui-miniprogram/miniprogram_dist/dialog/dialog"
  },
  "navigationBarTitleText": "dialog"
}
</config>