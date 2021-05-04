<style lang="less">
</style>
<template>
  <div class="container">
    <head title="action-sheet" />
    <div class="page-body">
      <div class="btn-area">
        <button type="default" @tap="actionSheetTap">弹出action sheet</button>
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
      title: '操作菜单',
      path: 'packageAPI/pages/action-sheet/action-sheet',
    };
  },
  methods: {
    actionSheetTap() {
      wx.showActionSheet({
        itemList: ['item1', 'item2', 'item3', 'item4'],
        success(e) {
          console.log(e.tapIndex);
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "操作菜单",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>