<style lang="wxss">
.image {
  width: 100%;
  height: 330px;
}
.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  height: 410px;
  border-top: 1px solid var(--weui-FG-3);
  border-bottom: 1px solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div class="container">
    <head title="uploadFile" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-body-info">
          <block v-if="imageSrc">
            <image v-bind:src="imageSrc" class="image" mode="aspectFit"></image>
          </block>
          <block wx:else>
            <div class="image-plus image-plus-nb" @tap="chooseImage">
              <div class="image-plus-horizontal"></div>
              <div class="image-plus-vertical"></div>
            </div>
            <div class="image-plus-text">选择图片</div>
          </block>
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
      title: '上传文件',
      path: 'packageAPI/pages/upload-file/upload-file',
    };
  },
  data: {
    imageSrc: '',
    fileID: ''
  },
  methods: {
    chooseImage() {
      const self = this;

      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album'],
        success: (res) => {
          console.log(
            'chooseImage success, temp path is',
            res.tempFilePaths[0]
          );
          const imageSrc = res.tempFilePaths[0];

          wx.cloud.uploadFile({
            cloudPath: 'example.png', // 上传至云端的路径
            filePath: imageSrc, // 小程序临时文件路径
            config: {
              env: 'release-b86096',
            },
            success: (res) => {
              // 返回文件 ID
              console.log(res.fileID);
              console.log('uploadImage success, res is:', res);

              wx.showToast({
                title: '上传成功',
                icon: 'success',
                duration: 1000,
              });
              this.imageSrc = imageSrc;
              this.fileID = res.fileID
            },
            fail({ errMsg }) {
              console.log('uploadImage fail, errMsg is', errMsg);
            },
          });
        },
        fail: (res) => {
          wx.showToast({
            icon: 'none',
            title: '上传失败',
          });
          console.log('uploadImage fail, errMsg is', res.errMsg);
        },
      });
    },
  },
  onUnload() {
    if (this.fileID) {
      wx.cloud.deleteFile({
        fileList: [this.fileID],
      });
    }
  },
});
</script>
<config>
{
    "navigationBarTitleText": "上传文件",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>