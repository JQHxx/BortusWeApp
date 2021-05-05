<style lang="wxss">
.page-body-info {
  padding-bottom: 0;
  height: 340px;
}
.page-body-title {
  margin-bottom: 20px;
}
.page-body-text {
  padding: 0 15px;
  text-align: center;
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
        <div v-if="canIUse" class="page-body-info">
          <div class="page-body-title">数据预拉取</div>
          <block v-if="appid">
            <block>
              <text class="page-body-text">OpenID</text>
              <text class="context-value">{{ openid }}</text>
            </block>
            <block>
              <text class="page-body-text">AppID</text>
              <text class="context-value">{{ appid }}</text>
            </block>
            <block>
              <text class="page-body-text">数据缓存的时间</text>
              <text class="context-value">{{ getDataTime }}</text>
            </block>
          </block>
          <block>
            <text class="page-body-text"
              >用户启动小程序时，调用 wx.getBackgroundFetchData()
              获取已缓存到本地的数据。
            </text>
          </block>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const app = getApp()

wepy.page({
  onShow() {
    // 获取缓存的预拉取数据
    this.getBackgroundFetchData();
  },
  onShareAppMessage() {
    return {
      title: '预拉取',
      path:
        '/page/api/get-background-prefetch-data',
    };
  },
  data: {
    openid: '',
    appid: '',
    getDataTime: '',
    canIUse: true,
  },
  methods: {
    getBackgroundFetchData() {
        console.log('读取预拉取数据');
        const res = app.globalData.backgroundFetchData;
        const { fetchedData } = res;
        const result = JSON.parse(fetchedData);
        const systemInfo = wx.getSystemInfoSync();
        const timeStamp =
          systemInfo.brand === 'iPhone' ? res.timeStamp * 1000 : res.timeStamp;
        const time = timeStamp
        this.appid = result.appid
        this.openid = result.openid
        this.getDataTime = time
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "数据预拉取",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>