<style lang="wxss">
@import "../../common/lib/common.wxss";
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Half Screen Dialog</div>
      <div class="page__desc">
        半屏弹窗，辅助完成当前页面任务时；提醒用户并引导用户的下一步操作；用户主动发起的任务时。
      </div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="primary" @tap="openTypeF">
          样式一
        </button>
        <button class="weui-btn" type="primary" @tap="openTypeS">
          样式二
        </button>
        <button class="weui-btn" type="primary" @tap="openTypeT">
          样式三
        </button>
      </div>
      <mp-halfScreenDialog v-bind:show="typeF">
        <div slot="title">测试标题A</div>
        <div slot="desc">这是自定义描述区</div>
        <div slot="footer">
          <button type="default" class="weui-btn">按钮A</button>
          <button type="primary" class="weui-btn">按钮B</button>
        </div>
      </mp-halfScreenDialog>
      <mp-halfScreenDialog v-bind:show="typeT" v-bind:closabled="false">
        <div slot="title">测试标题A</div>
        <div slot="desc">这是自定义描述区</div>
        <div slot="footer">
          <button type="default" class="weui-btn">按钮A</button>
          <button type="primary" class="weui-btn">按钮B</button>
        </div>
      </mp-halfScreenDialog>
      <mp-halfScreenDialog
        @buttontap="buttontap($event.$wx)"
        v-bind:show="typeS"
        v-bind:maskClosable="false"
        title="测试标题B"
        subTitle="测试标题B的副标题"
        desc="辅助描述内容，可根据实际需要安排"
        tips="辅助提示内容，可根据实际需要安排"
        v-bind:buttons="buttons"
      ></mp-halfScreenDialog>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'half-screen-dialog',
      path: 'page/weui/half-screen-dialog',
    };
  },
  data: {
    typeF: false,
    typeS: false,
    typeT: false,
    buttons: [
      {
        type: 'default',
        className: '',
        text: '辅助操作',
        value: 0,
      },
      {
        type: 'primary',
        className: '',
        text: '主操作',
        value: 1,
      },
    ],
  },
  methods: {
    openTypeF() {
      this.typeF = true
    },
    openTypeS() {
      this.typeS = true
    },
    openTypeT() {
      this.typeT = true
    },
    buttontap(e: WechatMiniprogram.ControlTap) {
      console.log(e.detail);
    },
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-halfScreenDialog": "module:weui-miniprogram/miniprogram_dist/half-screen-dialog/half-screen-dialog"
  },
  "navigationBarTitleText": "half-screen-dialog"
}
</config>