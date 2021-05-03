<style lang="wxss">
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
  color: #ffffff;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #ecebec;
}
.item-A {
  background: #1aad19;
}
.item-B {
  background: #2782d7;
}
</style>
<template>
<div class="container">
  <mp-row>
    <mp-col v-bind:xs="24" v-bind:span="12">
      <div>
        <div class="item item-A">
          A
        </div>
      </div>
    </mp-col>
    <mp-col v-bind:xs="24" v-bind:span="12">
      <div>
        <div class="item item-B">
          B
        </div>
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
      title: '分页展现',
      path: 'page/weui/pagination'
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
  "navigationBarTitleText": "分页展现"
}
</config>