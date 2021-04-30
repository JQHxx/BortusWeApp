<style lang="less" src="../../common/lib/common.less"></style>
<style lang="less">
.custom-action {
  padding: 16px 0;
  text-align: center;
}
.custom-action .custom-action_desc {
  color: #999999;
}

.custom-action .custom-action_name {
  margin: 10px 5px;
  line-height: 1;
  vertical-align: middle;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">ActionSheet</div>
      <div class="page__desc">弹出式菜单</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @tap="openDialog">
          模拟 ActionSheet
        </button>
      </div>
    </div>
    <mp-actionSheet
      @actiontap="btnClick"
      v-bind:show="showDialog"
      v-bind:actions="groups"
      title="这是一个标题，可以为一行或者两行。"
    >
      <div v-bind:slot="'actionSlot' + '1'" class="custom-action">
        <div class="custom-action_desc">前往图中包含的小程序：</div>
        <div class="custom-action_content">
          <mp-icon icon="qr-code" v-bind:size="20"></mp-icon>
          <text class="custom-action_name">小程序名称</text>
          <mp-icon icon="arrow" v-bind:size="12"></mp-icon>
        </div>
      </div>
    </mp-actionSheet>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'actionsheet',
      path: 'page/weui/actionsheet',
    };
  },

  data: {
    showDialog: false,
    groups: [
      { text: '示例菜单', value: 1 },
      { text: '示例菜单', value: 2 },
      { text: '负向菜单', type: 'warn', value: 3 },
    ],
  },

  methods: {
    openDialog() {
      this.showDialog = true
    },
    closeDialog() {
      this.showDialog = false
    },
    btnClick(e: weui.ActionSheetActionTap) {
      console.log(e);
      this.closeDialog();
    }
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-actionSheet": "weui-miniprogram/actionsheet/actionsheet",
    "mp-icon": "weui-miniprogram/icon/icon"
  },
  "navigationBarTitleText": "actionsheet"
}
</config>