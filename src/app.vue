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
    pages: [
      'page/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
}
</config>
