<style lang="wxss">
@import '../../common/lib/weui.wxss';
</style>
<template>
  <div class="container">
    <head title="WebSocket" />
    <div class="page-body">
      <div class="page-section">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">Socket状态</div>
            <div class="weui-cell__ft">
              <switch @change="toggleSocket($event.$wx)" v-bind:disabled="!hasLogin" />
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">消息</div>
            <div class="weui-cell__ft">Hello, 小程序!</div>
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button
          type="primary"
          size="40"
          @tap="sendMessage"
          v-bind:disabled="socketStatus != 'connected'"
          v-bind:loading="loading"
        >
          点我发送
        </button>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

function showModal(title: string, content: string) {
  wx.showModal({
    title,
    content,
    showCancel: false,
  });
}

function showSuccess(title: string) {
  wx.showToast({
    title,
    icon: 'success',
    duration: 1000,
  });
}

wepy.page({
  onShareAppMessage() {
    return {
      title: 'Web Socket',
      path: '/page/api/web-socket',
    };
  },

  data: {
    socketStatus: 'closed',
    hasLogin: true,
    waitingResponse: false,
    loading: false
  },

  onLoad() {},

  onUnload() {
    this.closeSocket();
  },
  methods: {
    toggleSocket(e: WechatMiniprogram.SwitchChange) {
      const turnedOn = e.detail.value;
      if (turnedOn && this.socketStatus === 'closed') {
        this.openSocket();
      } else if (!turnedOn && this.socketStatus === 'connected') {
        this.closeSocket();
      }
    },
    openSocket() {
      wx.onSocketOpen(() => {
        console.log('WebSocket 已连接');
        showSuccess('Socket已连接');
        this.socketStatus = 'connected'
        this.waitingResponse = false
      });

      wx.onSocketClose(() => {
        console.log('WebSocket 已断开');
        this.socketStatus = 'closed'
      });

      wx.onSocketError((error) => {
        showModal('发生错误', JSON.stringify(error));
        console.error('socket error:', error);
        this.loading = false
      });
      // 监听服务器推送消息
      wx.onSocketMessage((message) => {
        showSuccess('收到信道消息');
        console.log('socket message:', message);
        this.loading = false
      });
      // 打开信道
      wx.connectSocket({
        url: 'wss://echo.websocket.org',
      });
    },
    closeSocket() {
      if (this.socketStatus === 'connected') {
        wx.closeSocket({
          success: () => {
            showSuccess('Socket已断开');
            this.socketStatus = 'closed'
          },
        });
      }
    },

    sendMessage() {
      if (this.socketStatus === 'connected') {
        wx.sendSocketMessage({
          data: 'Hello, Miniprogram!',
        });
      }
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "Web Socket",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>