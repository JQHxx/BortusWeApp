<style lang="wxss">
.container .flex-row {
  display: flex;
  justify-content: space-between;
}

.item {
  margin: 6px;
  height: 240px;
  background: #ecebec;
}

page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #191919;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #1aad19;
}
</style>
<template>
<div class="container">
  <mp-row>
    <mp-col v-bind:span="12">
      <div>
        <div class="item"></div>
      </div>
    </mp-col>
    <mp-col v-bind:span="12">
      <div>
        <div class="item"></div>
      </div>
    </mp-col>
  </mp-row>
  <mp-row>
    <mp-col v-bind:span="12">
      <div>
        <div class="item"></div>
      </div>
    </mp-col>
    <mp-col v-bind:span="12">
      <div>
        <div class="item"></div>
      </div>
    </mp-col>
  </mp-row>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '左右伸缩',
      path: 'page/weui/telescopic'
    }
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-col": "module:@miniprogram-component-plus/col/miniprogram_dist",
    "mp-row": "module:@miniprogram-component-plus/row/miniprogram_dist"
  },
  "navigationBarTitleText": "左右伸缩"
}
</config>   