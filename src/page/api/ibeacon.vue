<style lang="wxss">
@import '../../common/lib/weui.wxss';
.page-body-info {
  margin-top: 25px;
  padding: 15px 30px;
  width: auto;
}
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
</style>
<template>
  <div class="container">
    <head title="iBeacon" />
    <div class="page-body">
      <div class="page-section">
        <div class="weui-cells__title">输入iBeacon设备广播的UUID</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input class="weui-input" @input="enterUuid" />
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button type="primary" @tap="startSearch">搜索iBeacon</button>
        <button @tap="stopSearch">停止搜索</button>
      </div>
      <div class="page-body-info">
        <div class="devices_summary">
          已发现 {{ beacons.length }} 个外围设备：
        </div>
        <scroll-view class="device_list" scroll-y scroll-with-animation>
          <div v-for="item in beacons" v-bind:key="item.index" class="device_item" hover-class="device_item_hover">
            <div style="font-size: 16px; color: #333">
              主ID: {{ item.major }}
              <text style="font-size: 12px">次ID: {{ item.minor }}</text>
            </div>
            <div style="font-size: 10px">信号强度: {{ item.rssi }}dBm</div>
            <div style="font-size: 10px">UUID: {{ item.uuid }}</div>
            <div style="font-size: 10px">
              Proximity: {{ item.proximity }} Accuracy: {{ item.accuracy }}
            </div>
          </div>
        </scroll-view>
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
      title: 'iBeacon',
      path: '/page/api/ibeacon',
    };
  },
  data: {
    uuid: '',
    beacons: [] as WechatMiniprogram.IBeaconInfo[],
    searching: false
  },
  onUnload() {
    this.stopSearch();
  },
  methods: {
    enterUuid(e: WechatMiniprogram.Input) {
      this.uuid = e.detail.value
    },
    startSearch() {
      if (this.searching) return;
      this.searching = true;
      wx.startBeaconDiscovery({
        uuids: [this.uuid],
        success: (res) => {
          console.log(res);
          wx.onBeaconUpdate(({ beacons }) => {
            this.beacons = beacons
          });
        },
        fail: (err) => {
          console.error(err);
        },
      });
    },
    stopSearch() {
      this.searching = false;
      wx.stopBeaconDiscovery();
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "iBeacon",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>