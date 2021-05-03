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
    "page/api/index",
    "page/weui/index",
    "page/component/view",
    "page/component/scroll-view",
    "page/component/swiper",
    "page/component/movable-view",
    "page/component/cover-view",
    "page/component/text",
    "page/component/icon",
    "page/component/progress",
    "page/component/rich-text",
    "page/component/button",
    "page/component/checkbox",
    "page/component/form",
    "page/component/input",
    "page/component/label",
    "page/component/picker",
    "page/component/picker-view",
    "page/component/radio",
    "page/component/slider",
    "page/component/switch",
    "page/component/textarea",
    "page/component/editor",
    "page/component/navigator/index",
    "page/component/navigator/navigate",
    "page/component/navigator/redirect",
    "page/component/image",
    "page/component/video/index",
    "page/component/video/picture-in-picture",
    "page/component/camera",
    "page/component/camera-scan-code",
    "page/component/live-player",
    "page/component/live-pusher",
    "page/component/map",
    "page/component/map-styles",
    "page/component/canvas",
    "page/component/webgl",
    "page/component/ad",
    "page/component/open-data",
    "page/component/web-view",
    "page/component/aria-component",
    "page/component/doc-web-view",
    "page/weui/cell",
    "page/weui/slideview",
    "page/weui/form",
    "page/weui/uploader",
    "page/weui/article",
    "page/weui/icons",
    "page/weui/badge",
    "page/weui/flex",
    "page/weui/footer",
    "page/weui/gallery",
    "page/weui/grid",
    "page/weui/loadmore",
    "page/weui/loading",
    "page/weui/panel",
    "page/weui/preview",
    "page/weui/dialog",
    "page/weui/msg_fail",
    "page/weui/msg_success",
    "page/weui/msg_text_primary",
    "page/weui/msg_text",
    "page/weui/msg",
    "page/weui/half-screen-dialog",
    "page/weui/actionsheet",
    "page/weui/toptips",
    "page/weui/navigation",
    "page/weui/tabbar",
    "page/weui/searchbar",
    "page/weui/emoji",
    "page/weui/video-swiper",
    "page/weui/recycle-view",
    "page/weui/sticky",
    "page/weui/tabs",
    "page/weui/vtabs",
    "page/weui/barrage",
    "page/weui/select-text",
    "page/weui/telescopic",
    "page/weui/linebreak",
    "page/weui/sidenavigation",
    "page/weui/pagination",
    "page/weui/freelayout",
    "page/weui/layeredpresentation",
    "page/weui/horizontalexpansion"
  ],
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
        "pagePath": "page/index",
        "iconPath": "@iconPathComponent",
        "selectedIconPath": "@selectedIconPathComponent",
        "text": "组件"
      },
      {
        "pagePath": "page/weui/index",
        "iconPath": "@iconPathComponent",
        "selectedIconPath": "@selectedIconPathComponent",
        "text": "扩展能力"
      },
      {
        "pagePath": "page/api/index",
        "iconPath": "@iconPathAPI",
        "selectedIconPath": "@selectedIconPathAPI",
        "text": "接口"
      }
    ]
  },
  "networkTimeout": {
    "request": 10000,
    "connectSocket": 10000,
    "uploadFile": 10000,
    "downloadFile": 10000
  },
  "debug": true,
  "style": "v2",
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  },
  "sitemapLocation": "sitemap.json",
  "themeLocation": "demo.theme.json",
  "darkmode": true,
  "resizable": true,
  "useExtendedLib": {
    "weui": true
  }
}
</config>
