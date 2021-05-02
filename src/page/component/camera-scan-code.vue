<style lang="wxss">
@import "../../common/lib/weui.wxss";

camera {
  height: 250px;
}

.btn-area {
  margin-top: 0;
}

form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}
</style>
<template>
<div class="container">
  <head title="camera"/>
  <div class="page-body">
    <div class="page-body-wrapper">
      <camera mode="scanCode" flash="off" @scancode="scanCode" @error="error($event.$wx)" />
      <div class="btn-area">
        <button type="primary" @tap="navigateBack($event.$wx)">
          返回正常模式
        </button>
      </div>
      <form>
        <div class="page-section">
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">类型</div>
              </div>
              <div class="weui-cell__bd">
                {{ result.type }}
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">结果</div>
              </div>
              <div class="weui-cell__bd">
                {{ result.result }}
              </div>
            </div>
          </div>
        </div>
      </form>
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
      title: 'camera',
      path: 'page/component/camera-scan-code'
    }
  },
  data: {
    result: {}
  },
  onReady() {
    wx.showModal({
      title: '提示',
      content: '将摄像头对准一维码即可扫描',
      showCancel: false
    })
  },
  methods: {
    scanCode(e: WechatMiniprogram.CameraScanCode) {
      console.log('scanCode:', e)
      this.result = e.detail
    },
    navigateBack() {
      wx.navigateBack()
    },
    error(e: WechatMiniprogram.CameraError) {
      console.log(e.detail)
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "camera",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>