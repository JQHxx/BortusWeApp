<style lang="wxss">
.page-body image {
  width: 300px;
  height: 300px;
  margin: 0 38px;
}
</style>
<template>
  <div class="container">
    <head title="downloadFile" />
    <div class="page-body">
      <image v-if="imageSrc" v-bind:src="imageSrc" mode="center" />
      <block v-else>
        <div class="page-body-wording">
          <text class="page-body-text"> 点击按钮下载服务端示例图片 </text>
        </div>
        <div class="btn-area">
          <button @tap="downloadImage" type="primary">下载</button>
        </div>
      </block>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '下载文件',
      path: '/page/api/download-file',
    };
  },
  data: {
    imageSrc: ''
  },
  methods: {
    downloadImage() {
      const self = this;
      wx.cloud.downloadFile({
        fileID: '12313124214', // 文件 ID
        success: (res) => {
          console.log('downloadFile success, res is', res);
          this.imageSrc = res.tempFilePath
        },
        fail: console.error,
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "下载文件",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>