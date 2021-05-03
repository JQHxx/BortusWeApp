<style lang="wxss">
@import '../../common/lib/common.wxss';
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <mp-navigation-bar
      v-bind:loading="loading"
      v-bind:show="show"
      v-bind:animated="animated"
      v-bind:color="color"
      v-bind:background="background"
      title="自定义Navigation"
      v-bind:back="true"
    ></mp-navigation-bar>
    <div class="page__hd">
      <div class="page__title">Navigation</div>
      <div class="page__desc">小程序自定义导航栏</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <button class="weui-btn" type="primary" @tap="toggleLoading">
        触发loading
      </button>
      <button class="weui-btn" type="primary" @tap="changeColor">
        修改文字颜色
      </button>
      <button class="weui-btn" type="primary" @tap="changeBgColor">
        修改背景颜色
      </button>
      <button class="weui-btn" type="primary" @tap="toggleShow">
        显示 / 隐藏
      </button>
      <button class="weui-btn" type="primary" @tap="toggleAnimated">
        设置显示 / 隐藏opacity动画
      </button>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'navigation',
      path: 'page/weui/navigation',
    };
  },
  data: {
    loading: false,
    color: '#000',
    background: '#f8f8f8',
    show: true,
    animated: false,
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    },
    changeColor() {
      this.color = '#07C160'
    },
    changeBgColor() {
      this.background = '#ededed'
    },
    toggleShow() {
      this.show = !this.show
    },
    toggleAnimated() {
      this.animated = !this.animated
      this.show = !this.show
    }
  }
});
</script>
<config>
{
    "usingComponents": {
        "mp-navigation-bar": "module:weui-miniprogram/miniprogram_dist/navigation-bar/navigation-bar"
    },
    "navigationStyle": "custom",
    "navigationBarTitleText": "navigation"
}
</config>