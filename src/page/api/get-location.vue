<style lang="wxss">
.page-body-info {
  height: 225px;
}
.page-body-text-small {
  font-size: 12px;
  color: var(--weui-FG-0);
  margin-bottom: 50px;
}
.page-body-text-location {
  display: flex;
  font-size: 25px;
}
.page-body-text-location text {
  margin: 5px;
}
</style>
<template>
  <div class="container">
    <head title="getLocation" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-body-info">
          <text class="page-body-text-small">当前位置经纬度</text>
          <block v-if="hasLocation === false">
            <text class="page-body-text">未获取</text>
          </block>
          <block v-if="hasLocation === true">
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
          <button type="primary" @tap="getLocation">获取位置</button>
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
      title: '获取位置',
      path: '/page/api/get-location',
    };
  },
  data: {
    hasLocation: false,
    location: {} as any
  },
  methods: {
    getLocation() {
      wx.getLocation({
        success: (res) => {
          console.log(res);
          this.hasLocation = true
          this.location = formatLocation(res.longitude, res.latitude)
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
    "navigationBarTitleText": "获取位置",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>