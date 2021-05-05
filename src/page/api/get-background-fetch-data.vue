<style lang="wxss">
.page-body-info {
  padding-bottom: 0;
  height: 300px;
}
.page-body-text {
  padding: 0 15px;
  text-align: center;
}
.page-body-title {
  margin-bottom: 20px;
}
.context-value {
  font-size: 19px;
}
</style>
<template>
  <div class="container">
    <head title="getBackgroundFetchData" />
    <div class="page-body">
      <div class="page-section">
        <block v-if="canIUse">
          <div class="page-body-info">
            <div class="page-body-title">周期性缓存数据</div>
            <block v-if="appid">
              <block>
                <text class="page-body-text">OpenID</text>
                <text class="context-value">{{ openid }}</text>
              </block>
              <block>
                <text class="page-body-text">AppID</text>
                <text class="context-value">{{ appid }}</text>
              </block>
            </block>
            <block>
              <text class="page-body-text"
                >微信客户端每隔 12 个小时才会发起一次请求</text
              >
              <text class="page-body-text"
                >为了方便调试周期性数据，可以在 工具 -> 拉取周期性缓存数据
                开启</text
              >
            </block>
          </div>
        </block>
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
      title: '周期性缓存',
      path: '/page/api/get-background-fetch-data',
    };
  },
  onShow() {
    // 获取缓存的周期性更新数据
    this.getBackgroundFetchData();
  },
  data: {
    openid: '',
    appid: '',
    canIUse: true,
  },
  methods: {
    getBackgroundFetchData() {
      console.log('读取周期性更新数据');
      const that = this;
      if (wx.getBackgroundFetchData) {
        wx.getBackgroundFetchData({
          // 当type = 'periodic' 微信客户端会每隔 12 小时向服务器请求一次数据。
          fetchType: 'periodic',
          success: (res) => {
            console.log(res);
            const { fetchedData } = res as any;
            const result = JSON.parse(fetchedData);
            this.appid = result.appid
            this.openid = result.openid
            console.log('读取周期性更新数据成功');
          },
          fail() {
            console.log('读取周期性更新数据失败');
            wx.showToast({
              title: '无缓存数据',
              icon: 'none',
            });
          },
          complete() {
            console.log('结束读取');
          },
        });
      } else {
        this.canIUse = false
        wx.showModal({
          title: '微信版本过低，暂不支持本功能',
        });
      }
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "周期性更新数据",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>