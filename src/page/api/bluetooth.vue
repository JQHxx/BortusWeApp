<style lang="wxss">
.devices_summary {
  padding: 5px;
  font-size: 15px;
}
.device_list {
  height: 150px;
  border-radius: 3px;
  flex: 1;
}
.device_item {
  border-bottom: 1px solid var(--weui-FG-3);
  padding: 5px;
  color: var(--weui-FG-HALF);
}
.device_item_hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.connected_info {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--weui-BG-4);
  padding: 5px;
  padding-bottom: 10px;
  margin-bottom: env(safe-area-inset-bottom);
  font-size: 14px;
  min-height: 50px;
  box-shadow: 0px 0px 2px 0px;
}
.connected_info .operation {
  position: absolute;
  display: inline-block;
  right: 15px;
}
.page-body-info {
  padding: 15px;
  box-sizing: border-box;
}
</style>
<template>
  <div class="container">
    <head title="bluetooth" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-body-info">
          <div class="devices_summary">
            已发现 {{ devices.length }} 个外围设备：
          </div>
          <scroll-view class="device_list" scroll-y scroll-with-animation>
            <div
              v-for="item in devices"
              v-bind:key="item.index"
              v-bind:data-device-id="item.deviceId"
              v-bind:data-name="item.name || item.localName"
              @tap="createBLEConnection($event.$wx)"
              class="device_item"
              hover-class="device_item_hover"
            >
              <div style="font-size: 16px">{{ item.name }}</div>
              <div style="font-size: 10px">
                信号强度: {{ item.RSSI }}dBm ({{
                  utils.max(0, item.RSSI + 100)
                }}%)
              </div>
              <div style="font-size: 10px">UUID: {{ item.deviceId }}</div>
              <div style="font-size: 10px">
                Service数量: {{ utils.len(item.advertisServiceUUIDs) }}
              </div>
            </div>
          </scroll-view>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="openBluetoothAdapter">开始扫描</button>
          <button @tap="stopBluetoothDevicesDiscovery">停止扫描</button>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="changeMode">进去从机模式</button>
        </div>
      </div>
    </div>
    <div class="connected_info" v-if="connected">
      <div>
        <text>已连接到 {{ name }}</text>
        <div class="operation">
          <button
            v-if="canWrite"
            size="mini"
            @tap="writeBLECharacteristicValue"
          >
            写数据
          </button>
          <button size="mini" @tap="closeBLEConnection">断开连接</button>
        </div>
      </div>
      <div
        v-for="item in chs"
        v-bind:key="item.index"
        style="font-size: 12px; margin-top: 10px"
      >
        <div>特性UUID: {{ item.uuid }}</div>
        <div>特性值: {{ item.value }}</div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

function inArray(arr: any, key: any, val: any) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return i;
    }
  }
  return -1;
}

function ab2hex(buffer: ArrayBuffer) {
  const hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2);
    }
  );
  return hexArr.join('');
}

wepy.page({
  onShareAppMessage() {
    return {
      title: '蓝牙',
      path: '/page/api/bluetooth',
    };
  },
  data: {
    devices: [],
    connected: false,
    chs: [],
    discoveryStarted: false,
    data: {} as any,
    deviceName: '',
    deviceId: '',
    canWrite: false,
    serviceId: '',
    characteristicId: ''
  },
  onUnload() {
    this.closeBluetoothAdapter();
  },
  methods: {
    openBluetoothAdapter() {
      wx.openBluetoothAdapter({
        success: (res) => {
          console.log('openBluetoothAdapter success', res);
          this.startBluetoothDevicesDiscovery();
        },
        fail: (res) => {
          if (res.errCode === 10001) {
            wx.showModal({
              title: '错误',
              content: '未找到蓝牙设备, 请打开蓝牙后重试。',
              showCancel: false,
            });
            wx.onBluetoothAdapterStateChange((res) => {
              if (res && res.available) {
                this.startBluetoothDevicesDiscovery();
              }
            });
          }
        },
      });
    },
    getBluetoothAdapterState() {
      wx.getBluetoothAdapterState({
        success: (res) => {
          console.log('getBluetoothAdapterState', res);
          if (res.discovering) {
            this.onBluetoothDeviceFound();
          } else if (res.available) {
            this.startBluetoothDevicesDiscovery();
          }
        },
      });
    },
    startBluetoothDevicesDiscovery() {
      if (this.discoveryStarted) {
        return;
      }
      this.discoveryStarted = true;
      wx.startBluetoothDevicesDiscovery({
        allowDuplicatesKey: true,
        success: (res) => {
          console.log('startBluetoothDevicesDiscovery success', res);
          this.onBluetoothDeviceFound();
        },
      });
    },
    stopBluetoothDevicesDiscovery() {
      wx.stopBluetoothDevicesDiscovery({
        complete: () => {
          this.discoveryStarted = false;
        },
      });
    },
    onBluetoothDeviceFound() {
      wx.onBluetoothDeviceFound((res) => {
        res.devices.forEach((device) => {
          if (!device.name && !device.localName) {
            return;
          }
          const foundDevices = this.devices;
          const idx = inArray(foundDevices, 'deviceId', device.deviceId);
          const data = {} as any;
          if (idx === -1) {
            data[`devices[${foundDevices.length}]`] = device;
          } else {
            data[`devices[${idx}]`] = device;
          }
          this.data = data
        });
      });
    },
    createBLEConnection(e: WechatMiniprogram.ControlTap) {
      const ds = e.currentTarget.dataset;
      const deviceId = ds.deviceId;
      const name = ds.name;
      wx.showLoading({
        title: '加载中'
      });
      wx.createBLEConnection({
        deviceId,
        success: () => {
          this.connected = true
          this.deviceName = name
          this.deviceId = deviceId
          this.getBLEDeviceServices(deviceId);
        },
        complete() {
          wx.hideLoading();
        },
      });
      this.stopBluetoothDevicesDiscovery();
    },
    closeBLEConnection() {
      wx.closeBLEConnection({
        deviceId: this.data.deviceId,
      });
      this.connected = false
      this.chs = []
      this.canWrite = false
    },
    changeMode() {
      wx.navigateTo({
        url: './slave',
      });
    },
    getBLEDeviceServices(deviceId: any) {
      wx.getBLEDeviceServices({
        deviceId,
        success: (res) => {
          for (let i = 0; i < res.services.length; i++) {
            if (res.services[i].isPrimary) {
              this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid);
              return;
            }
          }
        },
      });
    },
    getBLEDeviceCharacteristics(deviceId: any, serviceId: string) {
      wx.getBLEDeviceCharacteristics({
        deviceId,
        serviceId,
        success: (res) => {
          console.log(
            'getBLEDeviceCharacteristics success',
            res.characteristics
          );
          for (let i = 0; i < res.characteristics.length; i++) {
            const item = res.characteristics[i];
            if (item.properties.read) {
              wx.readBLECharacteristicValue({
                deviceId,
                serviceId,
                characteristicId: item.uuid,
              });
            }
            if (item.properties.write) {
              this.canWrite = true
              this.deviceId = deviceId
              this.serviceId = serviceId
              this.characteristicId = item.uuid
              console.log('write');
              this.writeBLECharacteristicValue();
            }
            if (item.properties.notify || item.properties.indicate) {
              wx.notifyBLECharacteristicValueChange({
                deviceId,
                serviceId,
                characteristicId: item.uuid,
                state: true,
              });
            }
          }
        },
        fail(res) {
          console.error('getBLEDeviceCharacteristics', res);
        },
      });
      // 操作之前先监听，保证第一时间获取数据
      wx.onBLECharacteristicValueChange((characteristic) => {
        const idx = inArray(
          this.data.chs,
          'uuid',
          characteristic.characteristicId
        );
        const data = {} as any;
        if (idx === -1) {
          data[`chs[${this.data.chs.length}]`] = {
            uuid: characteristic.characteristicId,
            value: ab2hex(characteristic.value),
          };
        } else {
          data[`chs[${idx}]`] = {
            uuid: characteristic.characteristicId,
            value: ab2hex(characteristic.value),
          };
        }
        wx.showToast({
          title: '收到从机数据',
        });
        this.data = data
      });
    },
    writeBLECharacteristicValue() {
      const buffer = new ArrayBuffer(1);
      const dataView = new DataView(buffer);
      // eslint-disable-next-line
      dataView.setUint8(0, (Math.random() * 19) | 0);
      wx.writeBLECharacteristicValue({
        deviceId: this.deviceId,
        serviceId: this.serviceId,
        characteristicId: this.characteristicId,
        value: buffer,
        success() {
          console.log('writeBLECharacteristicValue: 成功');
        },
        fail() {
          console.log('writeBLECharacteristicValue: 失败');
        },
        complete() {
          console.log('writeBLECharacteristicValue: 结束');
        },
      });
    },
    closeBluetoothAdapter() {
      wx.closeBluetoothAdapter();
      this.discoveryStarted = false;
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "蓝牙",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>

<wxs module="utils">
module.exports.max = function(n1, n2) {
  return Math.max(n1, n2)
}
module.exports.len = function(arr) {
  arr = arr || []
  return arr.length
}
</wxs>