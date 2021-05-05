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
    <head title="saveFile" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-body-info">
          <block v-if="tempFilePath != ''">
            <image
              v-bind:src="tempFilePath"
              class="image"
              mode="aspectFit"
            ></image>
          </block>
          <block v-if="tempFilePath === '' && savedFilePath != ''">
            <image
              v-bind:src="savedFilePath"
              class="image"
              mode="aspectFit"
            ></image>
          </block>
          <block v-if="tempFilePath === '' && savedFilePath === ''">
            <div class="image-plus image-plus-nb" @tap="chooseImage">
              <div class="image-plus-horizontal"></div>
              <div class="image-plus-vertical"></div>
            </div>
            <div class="image-plus-text">请选择文件</div>
          </block>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="saveFile">保存文件</button>
          <button @tap="clear">删除文件</button>
        </div>
      </div>
    </div>
    <modal
      v-bind:title="dialog.title"
      v-bind:hidden="dialog.hidden"
      no-cancel
      @confirm="confirm"
      >{{ dialog.content }}</modal
    >
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '文件',
      path: '/page/api/file',
    };
  },
  onLoad() {
    this.savedFilePath = wx.getStorageSync('savedFilePath')
  },
  data: {
    tempFilePath: '',
    savedFilePath: '',
    dialog: {
      title: '',
      content: '',
      hidden: true,
    },
  },
  methods: {
    chooseImage() {
      const that = this;
      wx.chooseImage({
        count: 1,
        success: (res) => {
          this.tempFilePath = res.tempFilePaths[0]
        },
      });
    },
    saveFile() {
      if (this.tempFilePath.length > 0) {
        wx.saveFile({
          tempFilePath: this.tempFilePath,
          success: (res) => {
            this.savedFilePath = res.savedFilePath
            wx.setStorageSync('savedFilePath', res.savedFilePath);
            this.dialog = {
                title: '保存成功',
                content: '下次进入应用时，此文件仍可用',
                hidden: false,
            }
          },
          fail: () => {
            this.dialog = {
                title: '保存失败',
                content: '应该是有 bug 吧',
                hidden: false,
            }
          },
        });
      }
    },
    clear() {
      wx.setStorageSync('savedFilePath', '');
      this.tempFilePath = ''
      this.savedFilePath = ''
    },
    confirm() {
      this.dialog.hidden = true
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "文件",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>