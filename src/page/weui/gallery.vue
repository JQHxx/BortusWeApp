<style lang="less" src="../../common/lib/common.less" ></style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Gallery</div>
      <div class="page__desc">画廊，类似原生的wx.predivImage的展示。</div>
    </div>
    <mp-gallery
      v-bind:show="show"
      @change="change"
      @delete="onDelete"
      @hide="hide"
      v-bind:img-urls="imgUrls"
      delete
      v-bind:hide-on-click="true"
      current="1"
    ></mp-gallery>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'gallery',
      path: 'page/weui/example/gallery/gallery',
    };
  },
  data: {
    imgUrls: [
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
    ],
    show: true,
  },
  methods: {
    change(e: weui.GalleryChange) {
      console.log('current index has changed', e.detail);
    },
    onDelete(e: weui.GalleryDelete) {
      console.log('delete', e.detail);
    },
    hide() {
      console.log('component hide');
      setTimeout(() => {
        console.log('component show');
        this.show = true
      }, 1000);
    },
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-gallery": "weui-miniprogram/gallery/gallery"
  },
  "navigationBarTitleText": "gallery"
}
</config>