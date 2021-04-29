<style lang="less">
.cover-view {
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 150px);
}

.flex-wrp {
  display: flex;
}

.flex-item {
  width: 100px;
  height: 150px;
  font-size: 13px;
}

.demo-text-1 {
  background: rgba(26, 173, 25, 0.7);
}

.demo-text-2 {
  background: rgba(39, 130, 215, 0.7);
}

.demo-text-3 {
  background: rgba(255, 255, 255, 0.7);
}
</style>
<template>
  <div class="container">
    <head title="cover-view" />
    <div class="page-body">
      <div class="page-section page-section-gap">
        <map style="width: 100%; height: 300px" v-bind:latitude="latitude" v-bind:longitude="longitude">
          <cover-view class="cover-view">
            <cover-view class="container">
              <cover-view class="flex-wrp" style="flex-direction: row">
                <cover-view class="flex-item demo-text-1"></cover-view>
                <cover-view class="flex-item demo-text-2"></cover-view>
                <cover-view class="flex-item demo-text-3"></cover-view>
              </cover-view>
            </cover-view>
          </cover-view>
        </map>
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
      title: 'cover-view',
      path: 'page/component/cover-view',
    };
  },
  data: {
    latitude: 23.099994,
    longitude: 113.32452,
  },
});
</script>
<config>
{
    "navigationBarTitleText": "cover-view"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>