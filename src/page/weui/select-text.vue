<style lang="wxss">
@import '../../common/lib/common.wxss';

page {
  height: 100%;
}

.demo-block {
  margin-bottom: 20px;
  padding: 20px;
}

.list-item {
  text-align: center;
  margin: 50px;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div @tap="handleTap">
      <div class="demo-block">
        <block v-for="item in arr" v-bind:key="item.placement">
          <div class="list-item">
            <mp-select-text
              show-copy-btn
              v-bind:placement="item.placement"
              v-bind:value="item.value"
              v-bind:data-id="index"
              @copy="onCopy"
              v-bind:on-document-tap="evt"
            >
            </mp-select-text>
          </div>
        </block>
        <div class="list-item">
          <mp-select-text value="默认的长按效果与浏览器一致"></mp-select-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'select-text',
      path: 'page/weui/example/select-text/select-text',
    };
  },
  data: {
    arr: [
      {
        value: '长按，上侧复制',
        placement: 'top',
      },
      {
        value: '长按，右侧复制',
        placement: 'right',
      },
      {
        value: '长按，左侧复制',
        placement: 'left',
      },
      {
        value: '长按，下侧复制',
        placement: 'bottom',
      },
    ],
    evt: {}
  },
  onLoad() {},
  methods: {
    onCopy(e: WechatMiniprogram.BaseEvent) {
      console.log('onCopy', e);
    },
    handleTap(e: WechatMiniprogram.ControlTap) {
      console.log('@@ tap', e);
      this.evt = e
    },
  },
});
</script>
<config>
{
  "disableScroll": true,
  "navigationBarTitleText": "select-text",
  "usingComponents": {
    "mp-select-text": "module:@miniprogram-component-plus/select-text/miniprogram_dist"
  }
}
</config>