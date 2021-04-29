<style lang="less">
.page-section-ctn {
  text-align: center;
}

.image {
  margin-top: 15px;
  width: 345px;
  height: 225px;
}
</style>
<template>
<div class="container">
  <head title="image"/>
  <div class="page-body">
    <div class="page-section page-section-gap">
      <div class="page-section-title">Local Image</div>
      <div class="page-section-ctn">
        <image class="image" src="../../resources/pic/1.jpg"/>
      </div>
    </div>
    <div class="page-section page-section-gap">
      <div class="page-section-title">Internet Image</div>
      <div class="page-section-ctn">
        <image class="image" v-bind:src="imageUrl"/>
      </div>
    </div>
     <div class="page-section page-section-gap">
      <div class="page-section-title">Webp Image</div>
      <div class="page-section-ctn">
        <image class="image" webp v-bind:src="webpImageUrl" mode="aspectFit"/>
      </div>
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
      title: 'image',
      path: 'page/component/pages/image/image'
    }
  },
  onLoad() {
    wx.cloud.getTempFileURL({
      fileList: [
        'cloud://release-b86096.7265-release-b86096-1258211818/开发者社区.webp'
      ]
    }).then(res => {
      console.log(res);
      this.webpImageURL = res.fileList[0].tempFileURL
    }).catch(error => {
      console.log('CLOUD：image 临时链接获取失败')
    })
  },
  data: {
    imageUrl: 'cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg',
    webpImageURL: '',
  }
});
</script>
<config>
{
    "navigationBarTitleText": "image"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>