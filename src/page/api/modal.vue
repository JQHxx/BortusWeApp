<style lang="less">
</style>
<template>
  <div class="container">
    <head title="modal" />
    <div class="page-body">
      <div class="btn-area">
        <button type="default" @tap="modalTap">有标题的modal</button>
        <button type="default" @tap="noTitlemodalTap">无标题的modal</button>
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
      title: '模态弹窗',
      path: '/page/api/modal',
    };
  },
  data: {
    modalHidden: true,
    modalHidden2: true,
  },
  methods: {
    modalTap() {
      wx.showModal({
        title: '弹窗标题',
        content:
          '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        showCancel: false,
        confirmText: '确定',
      });
    },
    noTitlemodalTap() {
      wx.showModal({
        content:
          '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        confirmText: '确定',
        cancelText: '取消',
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "模态弹窗",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>