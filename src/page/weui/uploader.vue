<style lang="wxss">
@import '../../common/lib/common.wxss';
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Uploader</div>
      <div class="page__desc">上传组件</div>
    </div>
    <div class="page__bd">
      <mp-cells>
        <mp-cell>
          <mp-uploader
            @fail="uploadError($event.$wx)"
            @success="uploadSuccess($event.$wx)"
            v-bind:select="selectFunc"
            v-bind:upload="uploadFunc"
            v-bind:files="files"
            max-count="5"
            title="图片上传"
            tips="图片上传提示"
          ></mp-uploader>
        </mp-cell>
      </mp-cells>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'uploader',
      path: 'page/weui/example/uploader/uploader',
    };
  },
  data: {
    files: [
      'http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0',
    ],
    selectFunc: {},
    uploadFunc: {}
  },
  onLoad() {
    this.selectFunc = this.selectFile.bind(this);
    this.uploadFunc = this.uplaodFile.bind(this);
  },
  methods: {
    chooseImage() {
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          this.files = this.files.concat(res.tempFilePaths)
        },
      });
    },
    previewImage(e: WechatMiniprogram.BaseEvent) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.files, // 需要预览的图片http链接列表
      });
    },
    selectFile(files: WechatMiniprogram.ChooseImageSuccessCallbackResult) {
      console.log('files', files);
      // 返回false可以阻止某次文件上传
    },
    uplaodFile(files: weui.UploaderUploadCallbackResult) {
      console.log('upload files', files);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('some error');
        }, 1000);
      });
    },
    uploadError(e: weui.UploaderFail) {
      console.log('upload error', e.detail);
    },
    uploadSuccess(e: any) {
      console.log('upload success', e.detail);
    }
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-uploader": "module:weui-miniprogram/miniprogram_dist/uploader/uploader",
    "mp-cells": "module:weui-miniprogram/miniprogram_dist/cells/cells",
    "mp-cell": "module:weui-miniprogram/miniprogram_dist/cell/cell"
  },
  "navigationBarTitleText": "uploader"

}
</config>   