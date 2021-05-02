<style lang="wxss">
@import '../../common/lib/common.wxss';

.weui-slidecells {
  margin: 8px;
}

.weui-slidecell {
  background-color: var(--weui-BG-2);
  border-radius: 8px;
  padding: 26px;
  line-height: 1.4;
  font-size: 17px;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Slideview</div>
      <div class="page__desc">左滑操作</div>
    </div>
    <div class="page__bd">
      <div class="weui-cells">
        <mp-slideview v-bind:show="true" v-bind:buttons="slideButtons" @buttontap="slideButtonTap($event.$wx)">
          <mp-cell value="左滑可以删除" footer="说明文字"></mp-cell>
        </mp-slideview>
      </div>
      <div class="weui-slidecells">
        <mp-slideview v-bind:buttons="slideButtons" v-bind:icon="true" @buttontap="slideButtonTap($event.$wx)">
          <div class="weui-slidecell">左滑可以删除（图标Button）</div>
        </mp-slideview>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import base64 from '../../resources/images/base64';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'sliderview',
      path: 'page/weui/example/sliderview/sliderview',
    };
  },
  data: {
    icon: base64.icon20,
    slideButtons: [
      {
        text: '普通',
        src: '/resources/images/icon_love.svg'
      },
      {
        text: '普通',
        extClass: 'test',
        src: '/resources/images/icon_star.svg'
      },
      {
        type: 'warn',
        text: '警示',
        extClass: 'test',
        src: '/resources/images/icon_del.svg'
      }
    ]
  },
  methods: {
    slideButtonTap(e: WechatMiniprogram.ControlTap) {
      console.log('slide button tap', e.detail);
    }
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-cells": "module:weui-miniprogram/miniprogram_dist/cells/cells",
    "mp-cell": "module:weui-miniprogram/miniprogram_dist/cell/cell",
    "mp-slideview": "module:weui-miniprogram/miniprogram_dist/slideview/slideview"
  },
  "navigationBarTitleText": "slider-view"
}
</config>   