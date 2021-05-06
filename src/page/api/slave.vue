<style lang="wxss">
.action-area {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
<template>
  <div class="container">
    <head title="bluetoot" />
    <div class="page-body" style="display: flex; flex-direction: column">
      <text style="text-align: center; margin: 16px"
        >当前 serverId {{ serverId }}</text
      >
      <div class="action-area">
        <button type="primary" @tap="openBluetoothAdapter">创建server</button>
        <button type="primary" @tap="closeServer">关闭server</button>
      </div>
      <div class="action-area">
        <button type="primary" @tap="addService">创建服务</button>
        <button type="primary" @tap="removeService">关闭服务</button>
      </div>
      <div class="action-area">
        <button type="primary" @tap="startAdvertising">开启广播</button>
        <button type="primary" @tap="stopAdvertising">关闭广播</button>
      </div>
      <div class="action-area">
        <button type="primary" @tap="showInput">写数据</button>
        <button type="primary" @tap="closeBluetoothAdapter">结束流程</button>
      </div>
      <button type="primary" @tap="chaneMode">返回主机模式</button>
      <block v-if="input">
        <input style="width: 200px; margin: 0 auto; background: var(--weui-BG-2); padding: 5px;" placeholder="写个数字" @confirm="onConfirm($event.$wx)" />
      </block>
      <div>
        <block v-if="connects.length > 0">
          <div v-for="item in connects" v-bind:key="item">
            <div>
              <text>{{ item.deviceId }} : {{ item.serverId }}</text>
              <text>{{ item.connected ? '已连接' : '断开' }}</text>
            </div>
          </div>
        </block>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

function ab2hex(buffer: ArrayBuffer) {
  let hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
    return ('00' + bit.toString(16)).slice(-2);
  });
  return hexArr.join('');
}

function inArray(arr: any, key: any, val: any) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return i;
    }
  }
  return -1;
}

const uuid3 = '0C76801A-62EB-45E5-96A8-37C8882ABB2B';
const serviceId = 'D0611E78-BBB4-4591-A5F8-487910AE4366';
const characteristicId = '8667556C-9A37-4C91-84ED-54EE27D90049';

wepy.page({
  onShareAppMessage() {
    return {
      title: '蓝牙',
      path: 'packageAPI/pages/slave/slave',
    };
  },
  data: {
    connects: [] as any,
    servers: [] as any,
    server: {} as WechatMiniprogram.BLEPeripheralServer,
    input: true,
    serverId: '',
  },

  onLoad: function (options) {
    wx.onBLEPeripheralConnectionStateChanged((res) => {
      console.log('connect');
      const connects = this.connects;
      const idx = inArray(connects, 'deviceId', res.deviceId);
      if (idx >= 0) {
        connects[idx] = res;
      } else {
        connects.push(res);
      }
      this.connects = connects;
    });
  },
  onUnload: function () {
    this.servers.forEach((server: any) => {
      // server.close()
    });
  },
  methods: {
    openBluetoothAdapter() {
      // 初始化蓝牙模块
      wx.openBluetoothAdapter({
        mode: 'peripheral',
        success: (res) => {
          console.log('openBluetoothAdapter success', res);
          this.createBLEPeripheralServer();
        },
        fail: (res) => {
          console.log(res);
          wx.showToast({
            title: `创建失败 错误码: ${res.errCode}`,
            icon: 'none',
          });
          if (res.errCode === 10001) {
            wx.onBluetoothAdapterStateChange((res) => {
              console.log('onBluetoothAdapterStateChange', res);
              if (res.available) {
                this.createBLEPeripheralServer();
              }
            });
          }
        },
      });
    },
    createBLEPeripheralServer() {
      wx.createBLEPeripheralServer().then((res) => {
        console.log('createBLEPeripheralServer', res);
        this.servers.push(res.server);
        this.server = res.server;
        this.serverId = this.server.serverId;
        wx.showToast({
          title: '创建 server ',
        });
        this.server.onCharacteristicReadRequest((res) => {
          const { serviceId, characteristicId, callbackId } = res;
          const buffer = new ArrayBuffer(1);
          const dataView = new DataView(buffer);
          const newValue = Math.ceil(Math.random() * 10);
          dataView.setUint8(0, newValue);
          console.log('onCharacteristicReadRequest', res, newValue);
          this.server.writeCharacteristicValue({
            serviceId,
            characteristicId,
            value: buffer,
            needNotify: true,
            callbackId,
          });
        });
        // 监听收到数据
        this.server.onCharacteristicWriteRequest((res) => {
          console.log('onCharacteristicWriteRequest', res);
          const { serviceId, characteristicId, value, callbackId } = res;
          wx.showToast({
            title: '收到主机数据',
          });
          this.server.writeCharacteristicValue({
            serviceId,
            characteristicId,
            value,
            needNotify: true,
            callbackId,
          });
        });
      });
    },
    closeServer() {
      this.server.close();
      wx.showToast({
        title: '关闭 server',
      });
    },
    chaneMode() {
      wx.navigateBack();
    },
    onConfirm(e: WechatMiniprogram.InputConfirm) {
      console.log('onConfirm');
      const n = parseInt(e.detail.value);
      const buffer = new ArrayBuffer(1);
      const dataView = new DataView(buffer);
      dataView.setUint8(0, n);
      this.server.writeCharacteristicValue({
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: buffer,
        needNotify: true,
      });
      wx.showModal({
        title: '写入成功',
        content: '请在主机查看',
      });
    },
    showInput() {
      this.input = !this.input;
    },
    addService() {
      const buffer = new ArrayBuffer(1);
      const dataView = new DataView(buffer);
      dataView.setUint8(0, 2);
      const descriptorBuffer = new ArrayBuffer(1);
      const dataView2 = new DataView(descriptorBuffer);
      dataView2.setInt8(0, 3);
      const service = {
        uuid: serviceId,
        characteristics: [
          {
            uuid: characteristicId,
            properties: {
              write: true,
              read: true,
              notify: true,
              indicate: true,
            },
            permission: {
              readable: true,
              writeable: true,
              readEncryptionRequired: true,
              writeEncryptionRequired: true,
            },
            value: buffer,
            descriptors: [
              {
                uuid: uuid3,
                permission: {
                  write: true,
                  read: true,
                },
                value: descriptorBuffer,
              },
            ],
          },
        ],
      };
      this.server.addService({
        service,
        success: (res) => {
          console.log('add Service', res);
          wx.showToast({
            title: '创建服务',
          });
        },
        fail: (rej) => {
          console.log(rej);
          if (rej.errMsg === '10001') {
            wx.showToast({
              title: '请打开蓝牙',
            });
          } else {
            wx.showModal({
              title: '创建失败',
              content: `错误码: ${rej.errMsg}`,
            });
          }
        },
      });
    },
    removeService() {
      this.server.removeService({
        serviceId: serviceId,
        success: (res) => {
          wx.showToast({
            title: '关闭服务',
          });
          console.log('removeService', res);
        },
      });
    },
    startAdvertising() {
      const buffer = new ArrayBuffer(1);
      const dataView = new DataView(buffer);
      dataView.setInt8(0, 4);
      this.server.startAdvertising({
        advertiseRequest: {
          connectable: true,
          deviceName: 'sanford',
          serviceUuids: [serviceId],
          manufacturerData: [
            {
              manufacturerId: 'sanfordsun-pc0',
              manufacturerSpecificData: buffer,
            },
          ],
        },
        powerLevel: 'medium',
        complete: (res) => {
          console.log('startAdvertising', res);
          wx.showToast({
            title: '开启广播',
          });
        },
      });
    },
    stopAdvertising() {
      this.server.stopAdvertising();
      wx.showToast({
        title: '关闭广播',
      });
    },
    closeBluetoothAdapter() {
      wx.showToast({
        title: '结束流程',
      });
      wx.closeBluetoothAdapter();
    },
  },
});
</script>
<config>
{
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>