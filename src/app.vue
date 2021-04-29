<style lang="less" src="./app.less"></style>
<script lang="typescript">
import wepy from '@wepy/core';
import { AppOptions } from '@wepy/core/types/options'
import { WepyApp } from '@wepy/core/types/wepy'
import config from './config';

const themeListeners:Function[] = [];

type Theme = 'dark' | 'light' | undefined

interface GlobalData {
  theme: Theme,
  hasLogin: boolean,
  openid: string,
  iconTabbar: string,
  backgroundFetchData?: WechatMiniprogram.GeneralCallbackResult
}

class App implements AppOptions<WepyApp> {
  globalData: GlobalData;

  constructor() {
    this.globalData = {
      theme: wx.getSystemInfoSync().theme,
      hasLogin: false,
      openid: '',
      iconTabbar: '/page/weui/example/images/icon_tabbar.png',
      backgroundFetchData: undefined
    }
  }

  onLaunch(opts: WechatMiniprogram.App.LaunchShowOption) {
    const canIUseSetBackgroundFetchToken = wx.canIUse(
      'setBackgroundFetchToken'
    );
    if (canIUseSetBackgroundFetchToken) {
      wx.setBackgroundFetchToken({
        token: 'getBackgroundFetchToken',
      });
    }
    if (wx.getBackgroundFetchData) {
      wx.getBackgroundFetchData({
        fetchType: 'pre',
        success: res => {
          this.globalData.backgroundFetchData = res;
          console.log('读取预拉取数据成功');
        },
        fail: () => {
          console.log('读取预拉取数据失败');
          wx.showToast({
            title: '无缓存数据',
            icon: 'none',
          });
        },
        complete() {
          console.log('结束读取');
        },
      });
    }
    console.log('App Launch', opts);
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: config.envId,
        traceUser: true,
      });
    }
  }

  onShow(opts: WechatMiniprogram.App.LaunchShowOption) {
    console.log('App Show', opts)  
  }

  onHide() {
    console.log('App Hide')
  }

  onThemeChange({ theme }: { theme: Theme }) {
    this.globalData.theme = theme
    themeListeners.forEach((listener) => {
        listener(theme)
    })
  }

  watchThemeChange(listener: Function) {
      if (themeListeners.indexOf(listener) < 0) {
          themeListeners.push(listener)
      }
  }

  unWatchThemeChange(listener: Function) {
      const index = themeListeners.indexOf(listener)
      if (index > -1) {
          themeListeners.splice(index, 1)
      }
  }

  getUserOpenId(callback: Function) {
    const self = this
    wx.getSystemInfoSync().theme
    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success(data) {
          wx.cloud.callFunction({
            name: 'login',
            data: {
              action: 'openid'
            },
            success: res => {
              console.log('拉取openid成功', res)
              if (res.result) {
                  self.globalData.openid = (res.result as any).openid
                  callback(null, self.globalData.openid)
              }
            },
            fail: err => {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', err)
              callback(err)
            }
          })
        },
        fail(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  }

  getUserOpenIdViaCloud() {
    return wx.cloud.callFunction({
      name: 'wxContext',
      data: {}
    }).then(res => {
      if (res.result) {
        let openid = (res.result as any).openid as string
        this.globalData.openid = openid
        return openid
      }
    })
  }
}

wepy.app(new App());
</script>
<config>
{
  "pages": [
    "page/index",
    "page/component/view",
    "page/component/scroll-view,
    "page/component/swiper",
    "page/component/text",
    "page/component/icon",
    "page/component/progress",
    "page/component/button",
    "page/component/checkbox",
    "page/component/form",
    "page/component/input",
    "page/component/label",
    "page/component/picker",
    "page/component/radio",
    "page/component/slider",
    "page/component/switch",
    "page/component/textarea",
    "page/component/navigator/index",
    "page/component/navigator/navigate",
    "page/component/navigator/redirect",
    "page/component/image",
    "page/component/video/index",
    "page/component/map",
    "page/component/canvas",
    "page/component/ad",
    "page/component/movable-view",
    "page/component/cover-view",
    "page/component/rich-text",
    "page/component/picker-view",
    "page/component/camera",
    "page/component/camera-scan-code",
    "page/component/map-styles",
    "page/component/live-player",
    "page/component/live-pusher",
    "page/component/aria-component",
    "page/API/index",
    "page/cloud/index",
    "page/component/pages/doc-web-view/doc-web-view",
    "page/component/pages/open-data/open-data",
    "page/component/pages/web-view/web-view",
    "page/component/pages/editor/editor",
    "page/weui/example/index",
    "page/weui/example/cell/cell",
    "page/weui/example/slideview/slideview",
    "page/weui/example/form/form",
    "page/weui/example/uploader/uploader",
    "page/weui/example/article/article",
    "page/weui/example/badge/badge",
    "page/weui/example/flex/flex",
    "page/weui/example/footer/footer",
    "page/weui/example/gallery/gallery",
    "page/weui/example/grid/grid",
    "page/weui/example/loadmore/loadmore",
    "page/weui/example/loading/loading",
    "page/weui/example/panel/panel",
    "page/weui/example/preview/preview",
    "page/weui/example/dialog/dialog",
    "page/weui/example/msg/msg",
    "page/weui/example/msg/msg_text",
    "page/weui/example/msg/msg_text_primary",
    "page/weui/example/msg/msg_success",
    "page/weui/example/msg/msg_fail",
    "page/weui/example/navbar/navbar",
    "page/weui/example/navigation/navigation",
    "page/weui/example/tabbar/tabbar",
    "page/weui/example/icons/icons",
    "page/weui/example/form-page/form-page",
    "page/weui/example/half-screen-dialog/half-screen-dialog",
    "page/weui/example/actionsheet/actionsheet",
    "page/weui/example/toptips/toptips",
    "page/weui/example/searchbar/searchbar",
    "page/weui/example/emoji/emoji",
    "page/weui/example/video-swiper/video-swiper",
    "page/weui/example/index-list/index-list",
    "page/weui/example/recycle-view/recycle-view",
    "page/weui/example/sticky/sticky",
    "page/weui/example/tabs/tabs",
    "page/weui/example/vtabs/vtabs",
    "page/weui/example/select-text/select-text",
    "page/weui/example/barrage/barrage",
    "page/weui/example/wxml-to-canvas/wxml-to-canvas",
    "page/weui/example/telescopic/telescopic",
    "page/weui/example/linebreak/linebreak",
    "page/weui/example/sidenavigation/sidenavigation",
    "page/weui/example/pagination/pagination",
    "page/weui/example/freelayout/freelayout",
    "page/weui/example/layeredpresentation/layeredpresentation",
    "page/weui/example/horizontalexpansion/horizontalexpansion",
    "page/component/pages/canvas-2d/canvas-2d",
    "page/component/pages/webgl/webgl"
  ],
  "subpackages": [
    {
      "root": "packageAPI",
      "pages": [
        "pages/login/login",
        "pages/get-user-info/get-user-info",
        "pages/request-payment/request-payment",
        "pages/share/share",
        "pages/share-button/share-button",
        "pages/custom-message/custom-message",
        "pages/template-message/template-message",
        "pages/set-navigation-bar-title/set-navigation-bar-title",
        "pages/navigation-bar-loading/navigation-bar-loading",
        "pages/navigator/navigator",
        "pages/pull-down-refresh/pull-down-refresh",
        "pages/animation/animation",
        "pages/action-sheet/action-sheet",
        "pages/modal/modal",
        "pages/toast/toast",
        "pages/get-network-type/get-network-type",
        "pages/on-network-status-change/on-network-status-change",
        "pages/get-system-info/get-system-info",
        "pages/on-compass-change/on-compass-change",
        "pages/make-phone-call/make-phone-call",
        "pages/scan-code/scan-code",
        "pages/request/request",
        "pages/web-socket/web-socket",
        "pages/upload-file/upload-file",
        "pages/download-file/download-file",
        "pages/image/image",
        "pages/voice/voice",
        "pages/file/file",
        "pages/on-accelerometer-change/on-accelerometer-change",
        "pages/canvas/canvas",
        "pages/background-audio/background-audio",
        "pages/video/video",
        "pages/get-location/get-location",
        "pages/open-location/open-location",
        "pages/choose-location/choose-location",
        "pages/storage/storage",
        "pages/get-wxml-node-info/get-wxml-node-info",
        "pages/load-font-face/load-font-face",
        "pages/clipboard-data/clipboard-data",
        "pages/bluetooth/bluetooth",
        "pages/screen-brightness/screen-brightness",
        "pages/vibrate/vibrate",
        "pages/add-contact/add-contact",
        "pages/wifi/wifi",
        "pages/page-scroll/page-scroll",
        "pages/intersection-observer/intersection-observer",
        "pages/capture-screen/capture-screen",
        "pages/worker/worker",
        "pages/ibeacon/ibeacon",
        "pages/choose-address/choose-address",
        "pages/setting/setting",
        "pages/choose-invoice-title/choose-invoice-title",
        "pages/soter-authentication/soter-authentication",
        "pages/subscribe-message/subscribe-message",
        "pages/doc-web-view/doc-web-view",
        "pages/audio/audio",
        "pages/get-battery-info/get-battery-info",
        "pages/get-performance/get-performance",
        "pages/mdns/mdns",
        "pages/udp-socket/udp-socket",
        "pages/two-way-bindings/two-way-bindings",
        "pages/media-container/media-container",
        "pages/get-background-fetch-data/get-background-fetch-data",
        "pages/get-background-prefetch-data/get-background-prefetch-data",
        "pages/wxs/wxs",
        "pages/bluetooth/slave/slave",
        "pages/resizable/resizable",
        "pages/wxs/movable",
        "pages/wxs/sidebar",
        "pages/wxs/stick-top",
        "pages/wxs/nearby"
      ]
    },
    {
      "root": "packageCloud",
      "pages": [
        "pages/doc-web-view/doc-web-view",
        "pages/user-authentication/user-authentication",
        "pages/get-wx-context/get-wx-context",
        "pages/upload-file/upload-file",
        "pages/download-file/download-file",
        "pages/get-temp-file-url/get-temp-file-url",
        "pages/delete-file/delete-file",
        "pages/cloud-file-component/cloud-file-component",
        "pages/crud/crud",
        "pages/crud-detail/crud-detail",
        "pages/db-permission/db-permission",
        "pages/server-date/server-date",
        "pages/scf-database/scf-database",
        "pages/scf-storage/scf-storage",
        "pages/scf-openapi/scf-openapi"
      ]
    }
  ],
  "preloadRule": {
    "page/component/index": {
      "network": "all",
      "packages": [
        "packageAPI",
        "packageCloud"
      ]
    }
  },
  "window": {
    "navigationBarTextStyle": "@navigationBarTextStyle",
    "navigationBarTitleText": "演示",
    "navigationBarBackgroundColor": "@navigationBarBackgroundColor",
    "backgroundColor": "@backgroundColor"
  },
  "tabBar": {
    "color": "@tabBarColor",
    "selectedColor": "@tabBarSelectedColor",
    "borderStyle": "@tabBarBorderStyle",
    "backgroundColor": "@tabBarBackgroundColor",
    "list": [
      {
        "pagePath": "page/component/index",
        "iconPath": "@iconPathComponent",
        "selectedIconPath": "@selectedIconPathComponent",
        "text": "组件"
      },
      {
        "pagePath": "page/weui/example/index",
        "iconPath": "@iconPathComponent",
        "selectedIconPath": "@selectedIconPathComponent",
        "text": "扩展能力"
      },
      {
        "pagePath": "page/API/index",
        "iconPath": "@iconPathAPI",
        "selectedIconPath": "@selectedIconPathAPI",
        "text": "接口"
      },
      {
        "pagePath": "page/cloud/index",
        "iconPath": "@iconPathCloud",
        "selectedIconPath": "@selectedIconPathCloud",
        "text": "云开发"
      }
    ]
  },
  "networkTimeout": {
    "request": 10000,
    "connectSocket": 10000,
    "uploadFile": 10000,
    "downloadFile": 10000
  },
  "navigateToMiniProgramAppIdList": [
    "wx4f1b24bdc99fa23b"
  ],
  "workers": "workers",
  "debug": false,
  "style": "v2",
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  },
  "cloud": true,
  "sitemapLocation": "sitemap.json",
  "themeLocation": "demo.theme.json",
  "darkmode": true,
  "resizable": true,
  "useExtendedLib": {
    "weui": true
  }
}
</config>
