<style lang="less">
page > div {
  width: 100vw;
  max-width: 100vw;
}

div,
image,
navigator {
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
  border: 1px solid #555050;
}

.item-A {
  background: #1aad19;
  height: 100%;
}
.item-B {
  background: #2782d7;
  height: 100%;
}

.item-C {
  background: #d8d8d8;
  height: 100%;
  color: #353535;
}

.item {
  border: 0px;
  margin: 0px;
  height: 450px;
  line-height: 450px;
}
.dark-C {
  background: #f1f1f1;
  color: #353535;
}
</style>
<template>
  <div class="container">
    <div>
      <mp-row>
        <mp-col v-bind:xs="24" v-bind:span="4">
          <div>
            <div class="item item-A">A</div>
          </div>
        </mp-col>
        <mp-col v-bind:xs="0" v-bind:span="8">
          <div>
            <div class="item item-B">B</div>
          </div>
        </mp-col>
        <mp-col v-bind:xs="0" v-bind:span="12">
          <div>
            <div class="{{theme === 'dark' ? 'item dark-C' : 'item item-C'}}">
              C
            </div>
          </div>
        </mp-col>
      </mp-row>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  data: {
    hide1: false,
    hide2: false,
    theme: 'light',
  },
  onLoad() {
    this.theme = wx.getSystemInfoSync().theme || 'light'
    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.theme = theme
      });
    }
  },
  onShareAppMessage() {
    return {
      title: '分层展现',
      path: 'page/weui/layeredpresentation',
    };
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "分层展现"
}
</config>