<style lang="wxss">
page>div {
  width: 100vw;
  max-width: 100vw;
}

div, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
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

.container .flexbox {
  display: flex;
  flex-wrap: wrap;
}

.container .flexbox .item {
  flex: 0 0 100%;
  height: 150px;
  padding: 6px;
}

.container .flexbox .item .block {
  width: 100%;
  height: 100%;
  background: #ecebec;
}

@media only screen and (min-width: 420px) {
  .container .flexbox .item {
    flex: 0 0 50%;
  }
}

@media only screen and (min-width: 768px) {
  .container .flexbox .item {
    flex: 0 0 33.33%;
  }
}

@media only screen and (min-width: 1024px) {
  .container .flexbox .item {
    flex: 0 0 25%;
  }
}
</style>
<template>
<div class="container">
  <mp-row>
    <mp-col v-bind:xs="24" v-bind:span="4">
      <div>
        <div class="item">
        </div>
      </div>
    </mp-col>
    <mp-col v-bind:xs="24" v-bind:span="4">
      <div>
        <div class="item">
        </div>
      </div>
    </mp-col>
    <mp-col v-bind:xs="24" v-bind:span="4">
      <div>
        <div class="item">
        </div>
      </div>
    </mp-col>
    <mp-col v-bind:xs="24" v-bind:span="4">
      <div>
        <div class="item">
        </div>
      </div>
    </mp-col>
    <mp-col v-bind:xs="24" v-bind:span="4">
      <div>
        <div class="item">
        </div>
      </div>
    </mp-col>
    <mp-col v-bind:xs="24" v-bind:span="4">
      <div>
        <div class="item">
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
      title: '换行排列',
      path: 'page/weui/linebreak'
    }
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-col": "module:@miniprogram-component-plus/col/miniprogram_dist",
    "mp-row": "module:@miniprogram-component-plus/row/miniprogram_dist"
  },
  "navigationBarTitleText": "换行排列"
}
</config>