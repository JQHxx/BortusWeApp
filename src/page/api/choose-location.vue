<style lang="wxss">
.page-body-info {
  padding-bottom: 0;
  height: 420px;
}
</style>
<template>
  <div class="container">
    <head title="chooseLocation" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-body-info">
          <text class="page-body-text-small">当前位置信息</text>
          <block v-if="hasLocation === false">
            <text class="page-body-text">未选择位置</text>
          </block>
          <block v-if="hasLocation === true">
            <text class="page-body-text">{{ locationAddress }}</text>
            <div class="page-body-text-location">
              <text
                >E: {{ location.longitude[0] }}°{{
                  location.longitude[1]
                }}′</text
              >
              <text
                >N: {{ location.latitude[0] }}°{{ location.latitude[1] }}′</text
              >
            </div>
          </block>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="chooseLocation">选择位置</button>
          <button @tap="clear">清空</button>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import { formatLocation } from '../../util/util';

wepy.page({
  onShareAppMessage() {
    return {
      title: '使用原生地图选择位置',
      path: '/page/api/choose-location',
    };
  },
  data: {
    hasLocation: false,
    location: {} as any,
    locationAddress: '',
  },
  methods: {
    chooseLocation() {
      wx.chooseLocation({
        success: (res) => {
          console.log(res);
          this.hasLocation = true;
          this.location = formatLocation(parseInt(res.longitude), parseInt(res.latitude));
          this.locationAddress = res.address;
        },
      });
    },
    clear() {
      this.hasLocation = false
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "使用原生地图选择位置",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>