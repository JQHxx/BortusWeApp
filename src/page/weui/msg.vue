<style lang="wxss">
@import '../../common/lib/common.wxss';
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Msg</div>
      <div class="page__desc">提示页</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @tap="openSuccess($event.$wx)">
          成功提示页
        </button>
        <button class="weui-btn" type="default" @tap="openFail($event.$wx)">
          失败提示页
        </button>
        <button class="weui-btn" type="default" @tap="openText($event.$wx)">
          无图标提示页
        </button>
        <button class="weui-btn" type="default" @tap="openTextPrimary($event.$wx)">
          无图标提示页
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
      title: 'msg',
      path: 'page/weui/msg',
    };
  },
  methods: {
    openSuccess() {
      wx.navigateTo({
        url: 'msg_success',
      });
    },
    openText() {
      wx.navigateTo({
        url: 'msg_text',
      });
    },
    openTextPrimary() {
      wx.navigateTo({
        url: 'msg_text_primary',
      });
    },
    openFail() {
      wx.navigateTo({
        url: 'msg_fail',
      });
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "msg"
}
</config>   