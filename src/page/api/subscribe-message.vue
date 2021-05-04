<style lang="wxss">
.page-section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
}
.page-body-title {
  font-size: 30px;
  line-height: 100px;
}
.page-body-text {
  color: var(--weui-FG-1);
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 50px 0;
  text-align: center;
}
.page-body-button {
  width: 100%;
}
</style>
<template>
  <div class="container">
    <head title="订阅消息" />
    <div class="page-body">
      <div class="page-section">
        <block>
          <text class="page-body-text">点击提交，调用示例订阅消息</text>
          <button
            class="page-body-button"
            type="primary"
            @tap="requestSubscribeMessage"
          >
            提交
          </button>
        </block>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '订阅消息',
      path: '/page/api/subscribe-message',
    };
  },
  methods: {
    // 请求订阅
    requestSubscribeMessage() {
      const self = this;
      wx.requestSubscribeMessage({
        tmplIds: ['y1bXHAg_oDuvrQ3pHgcODcMPl-2hZHenWugsqdB2CXY'],
        success(res) {
          console.log(res);
          if (res.errMsg === 'requestSubscribeMessage:ok') {
            self.subscribeMessageSend();
          }
        },
        complete(res) {
          console.log(res);
        },
      });
    },

    // 下发订阅消息
    subscribeMessageSend() {
      wx.cloud.callFunction({
        name: 'openapi',
        data: {
          action: 'sendSubscribeMessage',
        },
        success: (res) => {
          console.warn(
            '[云函数] [openapi] templateMessage.send 调用成功：',
            res
          );
          wx.showModal({
            title: '订阅成功',
            content: '请返回微信主界面查看',
            showCancel: false,
          });
        },
        fail: (err) => {
          wx.showToast({
            icon: 'none',
            title: '调用失败',
          });
          console.error(
            '[云函数] [openapi] templateMessage.send 调用失败：',
            err
          );
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "webview",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>