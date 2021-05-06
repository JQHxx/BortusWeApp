<style lang="wxss">
.page-body-info {
  padding: 15px 30px;
  width: auto;
}

.device-list {
  height: 150px;
  text-align: center;
}

.item {
  width: 100%;
  margin-bottom: 10px;
}

.list {
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}

.list text {
  display: inline-block;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.strength-ready {
  color: #26a69a;
}
.strength-no {
  color: #37474f;
}
.wifi-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 10px;
  float: right;
}
.wifi-icon span {
  display: block;
  position: absolute;
  border-radius: 50%;
}
.wifi-icon .wifi-1 {
  width: 4px;
  height: 4px;
  left: 8px;
  bottom: 3px;
  background: currentcolor;
}
.wifi-icon .wifi-2,
.wifi-icon .wifi-3,
.wifi-icon .wifi-4 {
  border: 2px solid;
  border-color: currentcolor transparent transparent;
}
.wifi-icon .wifi-2 {
  width: 12px;
  height: 12px;
  left: 2px;
  bottom: -4px;
}
.wifi-icon .wifi-3 {
  width: 20px;
  height: 20px;
  left: -2px;
  bottom: -8px;
}
.wifi-icon .wifi-4 {
  width: 28px;
  height: 28px;
  left: -6px;
  bottom: -12px;
}
.wifi-icon span:after {
  content: '';
  display: block;
  position: absolute;
}
.wifi-icon .lock {
  width: 6px;
  height: 5px;
  background: currentcolor;
  display: block;
  right: 1px;
  bottom: 2px;
  border-radius: 0;
}
.wifi-icon .lock:after {
  width: 4px;
  height: 3px;
  border: 1px solid;
  border-radius: 100px 100px 0 0;
  border-bottom: none;
  left: 0px;
  bottom: 100%;
}
.off {
  border-color: #b0bec5 transparent transparent !important;
}
</style>
<template>
  <div class="container">
    <head title="Wi-Fi" />
    <div class="page-body">
      <div class="page-body-info">
        <scroll-div class="device-list" scroll-y>
          <div class="item" v-for="item in wifiList" v-bind:key="item.index">
            <div class="list">
              <text>{{ item.SSID }}</text>
              <span class="wifi-icon">
                <span class="wifi-1"></span>
                <span class="wifi-2 {{item.strength < 2 ? 'off' : ''}}"></span>
                <span class="wifi-3 {{item.strength < 3 ? 'off' : ''}}"></span>
                <span class="wifi-4 {{item.strength < 4 ? 'off' : ''}}"></span>
                <span class="lock" v-if="item.secure"></span>
              </span>
            </div>
          </div>
        </scroll-div>
      </div>
      <div class="btn-area">
        <button type="primary" @tap="startSearch">搜索Wi-Fi</button>
        <button @tap="stopSearch">停止搜索</button>
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
      title: 'Wi-Fi',
      path: '/page/api/wifi',
    };
  },
  data: {
    wifiList: [] as WechatMiniprogram.WifiInfo[],
  },
  onUnload() {
    this.stopSearch();
  },
  methods: {
    startSearch() {
      const getWifiList = () => {
        wx.getWifiList({
          success: () => {
            wx.onGetWifiList((res) => {
              const wifiList = res.wifiList
                .sort((a, b) => b.signalStrength - a.signalStrength)
                .map((wifi) => {
                  const strength = Math.ceil(wifi.signalStrength * 4);
                  return Object.assign(wifi, { strength });
                });
              this.wifiList = wifiList;
            });
          },
          fail(err) {
            console.error(err);
          },
        });

        const startWifi = () => {
          wx.startWifi({
            success: getWifiList,
            fail(err) {
              console.error(err);
            },
          });
        };
        wx.getSystemInfo({
          success(res) {
            const isIOS = res.platform === 'ios';
            if (isIOS) {
              wx.showModal({
                title: '提示',
                content:
                  '由于系统限制，iOS用户请手动进入系统WiFi页面，然后返回小程序。',
                showCancel: false,
                success() {
                  startWifi();
                },
              });
              return;
            }
            startWifi();
          },
        });
      };
    },
    stopSearch() {
      wx.stopWifi({
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.error(err);
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "Wi-Fi",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>