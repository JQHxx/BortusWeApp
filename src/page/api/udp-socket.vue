<style lang="less">
</style>
<template>
<div class="container">
  <head title="startSoterAuthentication" />
  <div class="page-body">
    <div v-if="startUDP" style="text-align: center">
        本机port: {{port}} 模拟远程port: {{remote_port}}
    </div>
    <div v-if="!startUDP" class="btn-area">
      <button type="primary"  v-bind:disabled="!canIUse" @tap="handleCreateUDPTap">
        开启 UDPSocket
      </button>
    </div>
    <block v-else>
      <div class="btn-area">
        <button type="primary" @tap="handleSendMessage">
          本机发送测试
        </button>
      </div>
      <div class="btn-area">
        <button type="primary" @tap="changeMode">
          远程发送测试
        </button>
      </div>
      <block v-if="mode === 'remote'">
        <input placeholder="请输入目标主机 IP 地址 默认: 127.0.0.1" @input="handleInputChange($event.$wx)" />
        <div class="btn-area">
          <button type="primary" @tap="handleSendRemoteMessage">
            发送
          </button>
        </div>
      </block>
      <div class="btn-area">
        <button type="primary" @tap="handleCloseUDPTap">
          关闭 UDPSocket
        </button>
      </div>
    </block>
  </div>
  <foot />
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const AB2String = (arrayBuffer: ArrayBuffer) => {
  let unit8Arr = new Uint8Array(arrayBuffer);
  let encodedString = String.fromCharCode.apply(null, unit8Arr);
  let decodedString = decodeURIComponent(escape(encodedString));
  return decodedString;
};

wepy.page({
  onShareAppMessage() {
    return {
      title: 'UDPSocket',
      path: '/page/api/udp-socket',
    };
  },
  data: {
    port: NaN,
    remote_port: NaN,
    startUDP: false,
    mode: 'local',
    address: 'localhost',
    canIUse: true,
    UDPSocket: {} as WechatMiniprogram.UDPSocket,
    remoteUDPSocket: {} as WechatMiniprogram.UDPSocket
  },
  onLoad() {
    const canIUse = wx.canIUse('createUDPSocket');
    if (!canIUse) {
      wx.showModal({
        title: '微信版本过低，暂不支持本功能',
      });
      this.canIUse = canIUse
    }
  },
  methods: {
    handleCreateUDPTap() {
      this.UDPSocket = wx.createUDPSocket();
      this.remoteUDPSocket = wx.createUDPSocket();
      this.port = this.UDPSocket.bind();
      this.remote_port = this.remoteUDPSocket.bind();
      this.startUDP = true
      this.remoteUDPSocket.onMessage((res) => {
        const { remoteInfo } = res;
        console.log(res);
        wx.showModal({
          title: `IP:${remoteInfo.address}发来的信息`,
          content: AB2String(res.message),
        });
      });
    },
    handleCloseUDPTap() {
      this.startUDP = false
      this.mode = 'local'
      this.UDPSocket.close();
      this.remoteUDPSocket.close();
    },
    handleSendRemoteMessage() {
      this.UDPSocket.send({
        address: this.address || 'localhost',
        port: this.remote_port,
        message: `port[${this.port}] 向 remote-port[${this.remote_port}] 发送信息: Hello Wechat!`,
      });
    },
    changeMode() {
      this.mode = 'remote'
    },
    handleInputChange(e: WechatMiniprogram.Input) {
      this.address = e.detail.value
    },
    handleSendMessage() {
      this.UDPSocket.send({
        address: 'localhost',
        port: this.remote_port,
        message: `port[${this.port}] 向 remote-port[${this.remote_port}] 发送信息: Hello Wechat!`,
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "UDPSocket",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>