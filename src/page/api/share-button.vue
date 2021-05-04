<style lang="wxss">
.button-share {
  display: none;
}
</style>
<template>
  <div class="container">
    <head title="share-button" />
    <div class="page-body">
      <div class="page-body-wrapper">
        <text class="page-body-title"> 轻触下方图标即可转发 </text>
        <div class="page-body-line">
          <button
            @tap="handleTapShareButton"
            open-type="share"
            class="button-share"
            id="share-button"
          ></button>
          <label for="share-button"
            ><image
              style="width: 27px; height: 27px"
              src="/resources/images/share.png"
          /></label>
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
      title: '转发按钮',
      path: '/page/api/share-button',
    };
  },
  methods: {
    handleTapShareButton() {
      if (!wx.canIUse('button.open-type.share')) {
        wx.showModal({
          title: '当前版本不支持转发按钮',
          content: '请升级至最新版本微信客户端',
          showCancel: false,
        });
      }
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "转发按钮",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>