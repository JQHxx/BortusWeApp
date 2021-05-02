<style lang="less">
.page-section-spacing {
  margin-top: 30px;
}
.scroll-view_H {
  white-space: nowrap;
}
.scroll-view-item {
  height: 150px;
}
.scroll-view-item_H {
  display: inline-block;
  width: 100%;
  height: 150px;
}
.demo-text-1:before {
  content: 'A';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-2:before {
  content: 'B';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-3:before {
  content: 'C';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
<template>
  <div class="container">
    <head title="scroll-div" />

    <div class="page-body">
      <div class="page-section">
        <div class="page-section-title">
          <text>Vertical Scroll\n纵向滚动</text>
        </div>
        <div class="page-section-spacing">
          <scroll-view
            scroll-y="true"
            style="height: 150px"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
            v-bind:scroll-into-view="todView"
            v-bind:scroll-top="scrollTop"
          >
            <div id="demo1" class="scroll-view-item demo-text-1"></div>
            <div id="demo2" class="scroll-view-item demo-text-2"></div>
            <div id="demo3" class="scroll-view-item demo-text-3"></div>
          </scroll-view>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>Horizontal Scroll\n横向滚动</text>
        </div>
        <div class="page-section-spacing">
          <scroll-view
            class="scroll-view_H"
            scroll-x="true"
            @scroll="scroll"
            style="width: 100%"
          >
            <div id="demo4" class="scroll-view-item_H demo-text-1"></div>
            <div id="demo5" class="scroll-view-item_H demo-text-2"></div>
            <div id="demo6" class="scroll-view-item_H demo-text-3"></div>
          </scroll-view>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>自定义下拉刷新\n自定义：</text>
        </div>
        <div class="page-section-spacing">
          <scroll-view
            scroll-y
            style="width: 100%; height: 400px"
            v-bind:refresher-enabled="true"
            v-bind:refresher-threshold="80"
            refresher-default-style="none"
            refresher-background="lightgreen"
            @refresherpulling="onPulling"
          >
            <div
              slot="refresher"
              class="refresh-container"
              style="display: block; width: 100%; height: 80px; background: #ecbdf0; display: flex; align-items: center;"
            >
              <div
                class="div1"
                style="position: absolute; color: white; text-align: center; width: 100%;"
              >
                下拉刷新
              </div>
            </div>
            <div id="demo7" class="scroll-view-item_H demo-text-1"></div>
            <div id="demo8" class="scroll-view-item_H demo-text-2"></div>
            <div id="demo9" class="scroll-view-item_H demo-text-3"></div>
          </scroll-view>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>默认：</text>
        </div>
        <div class="page-section-spacing">
          <scroll-view
            scroll-y
            style="width: 100%; height: 400px"
            v-bind:refresher-enabled="true"
            v-bind:refresher-threshold="100"
            refresher-default-style="white"
            refresher-background="lightgreen"
            v-bind:refresher-triggered="triggered"
            @refresherpulling="onPulling"
            @refresherrefresh="onRefresh"
            @refresherrestore="onRestore"
            @refresherabort="onAbort"
          >
            <div id="demo10" class="scroll-view-item_H demo-text-1"></div>
            <div id="demo11" class="scroll-view-item_H demo-text-2"></div>
            <div id="demo12" class="scroll-view-item_H demo-text-3"></div>
          </scroll-view>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>滚动驱动动画</text>
        </div>
        <div class="page-section-spacing">
          <scroll-view
            id="scroll-div_D"
            scroll-y="true"
            style="height: 150px"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
            v-bind:scroll-into-view="toView"
            v-bind:scroll-top="scrollTop"
          >
            <div
              class="scroll-view-item_H demo-text-1"
              id="scroll-sample-object1"
            ></div>
            <div
              class="scroll-view-item_H demo-text-2"
              id="scroll-sample-object2"
            ></div>
            <div
              class="scroll-view-item_H demo-text-3"
              id="scroll-sample-object3"
            ></div>
          </scroll-view>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onReady() {
    setTimeout(() => {
      this.triggered = true;
    }, 1000);
  },
  onLoad() {
    this.$wx.animate(
      '#scroll-sample-object1',
      [
        {
          borderRadius: '0',
          offset: 0,
        },
        {
          borderRadius: '25%',
          offset: 0.5,
        },
        {
          borderRadius: '50%',
          offset: 1,
        },
      ],
      2000,
      {
        scrollSource: '#scroll-view_D',
        timeRange: 2000,
        startScrollOffset: 0,
        endScrollOffset: 150,
      }
    );

    this.$wx.animate(
      '#scroll-sample-object2',
      [
        {
          opacity: 1,
          offset: 0,
        },
        {
          opacity: 0.5,
          offset: 0.5,
        },
        {
          opacity: 0.3,
          offset: 1,
        },
      ],
      2000,
      {
        scrollSource: '#scroll-view_D',
        timeRange: 2000,
        startScrollOffset: 150,
        endScrollOffset: 300,
      }
    );

    this.$wx.animate(
      '#scroll-sample-object3',
      [
        {
          background: 'white',
          offset: 0,
        },
        {
          background: 'yellow',
          offset: 1,
        },
      ],
      2000,
      {
        scrollSource: '#scroll-view_D',
        timeRange: 2000,
        startScrollOffset: 300,
        endScrollOffset: 400,
      }
    );
  },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/scroll-view',
    };
  },
  data: {
    toView: 'green',
    triggered: false,
    freshing: false,
    scrollTop: 0,
  },

  methods: {
    onPulling(e: WechatMiniprogram.ScrollViewRefresherPulling) {
      console.log('onPulling:', e);
    },
    onRefresh() {
      if (this.freshing) return;
      this.freshing = true;
      this.triggered = true;
      setTimeout(() => {
        this.triggered = false;
        this.freshing = false;
      }, 3000);
    },
    onRestore(e: WechatMiniprogram.ScrollViewRefresherRestore) {
      console.log('onRestore:', e);
    },
    onAbort(e: WechatMiniprogram.ScrollViewRefresherAbort) {
      console.log('onAbort', e);
    },
    upper(e: WechatMiniprogram.ScrollViewScrollToUpper) {
      console.log(e);
    },
    lower(e: WechatMiniprogram.ScrollViewScrollToLower) {
      console.log(e);
    },
    scroll(e: WechatMiniprogram.ScrollViewScroll) {
      console.log(e);
    },
    scrollToTop() {
      this.scrollTop = 0;
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "scroll-view",
    "pageOrientation": "auto",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>