<style lang="wxss">
@import "../../common/index.wxss";
.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}
</style>
<template>
  <div class="container">
    <set-tab-bar v-if="isSetTabBarPage" @unmount="leaveSetTabBarPage"></set-tab-bar>
    <div wx:else class="index">
      <div class="index-hd">
        <image class="index-logo" src="/resources/images/apilogo.png"></image>
        <div class="index-desc">
          以下将演示小程序接口能力，具体属性参数详见
          <navigator url="../component/doc-web-view" class="weui-agree__link">小程序开发文档</navigator>
        </div>
      </div>
      <div class="index-bd">
        <div class="kind-list">
          <block v-for="item in list" v-bind:key="item.id">
            <div class="kind-list-item">
              <div v-bind:id="item.id" class="kind-list-item-hd" :class="{ 'kind-list-item-hd-show': tem.open }" @tap="kindToggle($event.$wx)">
                <div class="kind-list-text">{{ item.name }}</div>
                <image v-if="theme === 'dark'" class="kind-list-img" src="/resources/images/{{item.id}}_dark.png"></image>
                <image v-else class="kind-list-img" src="/resources/images/{{item.id}}.png"></image>
              </div>
              <div class="kind-list-item-bd" :class="{ 'kind-list-item-bd-show': item.open }">
                <div class="navigator-box" :class="{ 'navigator-box-show': item.open }">
                  <block v-for="page in item.pages" v-bind:key="page">
                    <navigator url="{{page.url}}" class="navigator" v-if="page.url !== '@set-tab-bar'">
                      <div class="navigator-text">{{ page.zh }}</div>
                      <div class="navigator-arrow"></div>
                    </navigator>
                    <div v-else class="navigator" @tap="enterSetTabBarPage">
                      <div class="navigator-text">{{ page.zh }}</div>
                      <div class="navigator-arrow"></div>
                    </div>
                  </block>
                </div>
              </div>
            </div>
          </block>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '小程序接口能力展示',
      path: 'page/api/index',
    };
  },
  data: {
    list: [
      {
        id: 'api',
        name: '开放接口',
        open: false,
        pages: [
          {
            zh: '微信登录',
            url: 'login',
          },
          {
            zh: '获取用户信息',
            url: 'get-user-info',
          },
          {
            zh: '发起支付',
            url: 'request-payment',
          },
          {
            zh: '转发',
            url: 'share',
          },
          {
            zh: '转发按钮',
            url: 'share-button',
          },
          {
            zh: '客服消息',
            url: 'custom-message',
          },
          {
            zh: '订阅消息',
            url: 'subscribe-message',
          },
          {
            zh: '收货地址',
            url: 'choose-address',
          },
          {
            zh: '获取发票抬头',
            url: 'choose-invoice-title',
          },
          {
            zh: '生物认证',
            url: 'soter-authentication',
          },
          {
            zh: '设置',
            url: 'setting',
          },
        ],
      },
      {
        id: 'page',
        name: '界面',
        open: false,
        pages: [
          {
            zh: '设置界面标题',
            url: 'set-navigation-bar-title',
          },
          {
            zh: '标题栏加载动画',
            url: 'navigation-bar-loading',
          },
          {
            zh: '页面跳转',
            url: 'navigator',
          },
          {
            zh: '下拉刷新',
            url: 'pull-down-refresh',
          },
          {
            zh: '创建动画',
            url: 'animation',
          },
          {
            zh: '显示操作菜单',
            url: 'action-sheet',
          },
          {
            zh: '显示模态弹窗',
            url: 'modal',
          },
          {
            zh: '页面滚动',
            url: 'page-scroll',
          },
          {
            zh: '显示消息提示框',
            url: 'toast',
          },
        ],
      },
      {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          {
            zh: '获取手机网络状态',
            url: 'get-network-type',
          },
          {
            zh: '监听手机网络变化',
            url: 'on-network-status-change',
          },
          {
            zh: '获取手机系统信息',
            url: 'get-system-info',
          },
          {
            zh: '获取手机设备电量',
            url: 'get-battery-info',
          },
          {
            zh: '监听重力感应数据',
            url: 'on-accelerometer-change',
          },
          {
            zh: '监听罗盘数据',
            url: 'on-compass-change',
          },
          {
            zh: '打电话',
            url: 'make-phone-call',
          },
          {
            zh: '扫码',
            url: 'scan-code',
          },
          {
            zh: '剪切板',
            url: 'clipboard-data',
          },
          {
            zh: '蓝牙',
            url: 'bluetooth',
          },
          {
            zh: 'iBeacon',
            url: 'ibeacon',
          },
          {
            zh: '屏幕亮度',
            url: 'screen-brightness',
          },
          {
            zh: '用户截屏事件',
            url: 'capture-screen',
          },
          {
            zh: '振动',
            url: 'vibrate',
          },
          {
            zh: '手机联系人',
            url: 'add-contact',
          },
          {
            zh: 'Wi-Fi',
            url: 'wifi',
          },
        ],
      },
      {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            zh: '发起一个请求',
            url: 'request',
          },
          {
            zh: 'WebSocket',
            url: 'web-socket',
          },
          {
            zh: '上传文件',
            url: 'upload-file',
          },
          {
            zh: '下载文件',
            url: 'download-file',
          },
          {
            zh: 'UDPSocket',
            url: 'udp-socket',
          }
        ],
      },
      {
        id: 'media',
        name: '媒体',
        open: false,
        pages: [
          {
            zh: '图片',
            url: 'image',
          },
          {
            zh: '音频',
            url: 'audio',
          },
          {
            zh: '录音',
            url: 'voice',
          },
          {
            zh: '背景音频',
            url: 'background-audio',
          },
          {
            zh: '文件',
            url: 'file',
          },
          {
            zh: '视频',
            url: 'video',
          },
        ],
      },
      {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取当前位置',
            url: 'get-location',
          },
          {
            zh: '使用原生地图查看位置',
            url: 'open-location',
          },
          {
            zh: '使用原生地图选择位置',
            url: 'choose-location',
          },
        ],
      },
      {
        id: 'storage',
        name: '数据',
        open: false,
        pages: [
          {
            zh: '本地存储',
            url: 'storage',
          },
          {
            zh: '周期性更新',
            url: 'get-background-fetch-data',
          },
          {
            zh: '数据预拉取',
            url: 'get-background-prefetch-data',
          },
        ],
      },
    ],
    isSetTabBarPage: false,
    theme: 'light',
  },
  onLoad() {
    this.theme = wx.getSystemInfoSync().theme || 'light';
    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.theme = theme;
      });
    }
  },
  onShow() {
    this.leaveSetTabBarPage();
  },
  onHide() {
    this.leaveSetTabBarPage();
  },
  methods: {
    kindToggle(e: WechatMiniprogram.ControlTap) {
      const id = e.currentTarget.id;
      const list = this.list;
      for (let i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
          list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
      }
      this.list = list;
    },
    enterSetTabBarPage() {
      this.isSetTabBarPage = true;
    },
    leaveSetTabBarPage() {
      this.isSetTabBarPage = false;
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "小程序接口能力展示",
    "usingComponents": {
      "set-tab-bar": "../../components/set-tab-bar"
    }
}
</config>