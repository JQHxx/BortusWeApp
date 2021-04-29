<style lang="less">
.page-section-spacing {
  margin-top: 30px;
}
.scroll-div_H {
  white-space: nowrap;
}
.scroll-div-item {
  height: 150px;
}
.scroll-div-item_H {
  display: inline-block;
  width: 100%;
  height: 150px;
}

.demo-text-1 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #1aad19;
  color: #ffffff;
  font-size: 18px;
}
.demo-text-1:before {
  content: 'A';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-2 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #2782d7;
  color: #ffffff;
  font-size: 18px;
}
.demo-text-2:before {
  content: 'B';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-3 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  color: #353535;
  font-size: 18px;
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
          <scroll-div
            scroll-y="true"
            style="height: 150px"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
            v-bind:scroll-into-div="todiv"
            v-bind:scroll-top="scrollTop"
          >
            <div id="demo1" class="scroll-div-item demo-text-1"></div>
            <div id="demo2" class="scroll-div-item demo-text-2"></div>
            <div id="demo3" class="scroll-div-item demo-text-3"></div>
          </scroll-div>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>Horizontal Scroll\n横向滚动</text>
        </div>
        <div class="page-section-spacing">
          <scroll-div
            class="scroll-div_H"
            scroll-x="true"
            @scroll="scroll"
            style="width: 100%"
          >
            <div id="demo1" class="scroll-div-item_H demo-text-1"></div>
            <div id="demo2" class="scroll-div-item_H demo-text-2"></div>
            <div id="demo3" class="scroll-div-item_H demo-text-3"></div>
          </scroll-div>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>自定义下拉刷新\n自定义：</text>
        </div>
        <div class="page-section-spacing">
          <scroll-div
            scroll-y
            style="width: 100%; height: 400px"
            v-bind:refresher-enabled="true"
            v-bind:refresher-threshold="80"
            refresher-default-style="none"
            refresher-background="lightgreen"
            @refresherpulling="refreshOnPulling"
          >
            <div
              slot="refresher"
              class="refresh-container"
              style="
                display: block;
                width: 100%;
                height: 80px;
                background: #ecbdf0;
                display: flex;
                align-items: center;
              "
            >
              <div
                class="div1"
                style="
                  position: absolute;
                  color: white;
                  text-align: center;
                  width: 100%;
                "
              >
                下拉刷新
              </div>
            </div>
            <div id="demo1" class="scroll-div-item_H demo-text-1"></div>
            <div id="demo2" class="scroll-div-item_H demo-text-2"></div>
            <div id="demo3" class="scroll-div-item_H demo-text-3"></div>
          </scroll-div>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>默认：</text>
        </div>
        <div class="page-section-spacing">
          <scroll-div
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
            <div id="demo1" class="scroll-div-item_H demo-text-1"></div>
            <div id="demo2" class="scroll-div-item_H demo-text-2"></div>
            <div id="demo3" class="scroll-div-item_H demo-text-3"></div>
          </scroll-div>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>滚动驱动动画</text>
        </div>
        <div class="page-section-spacing">
          <scroll-div
            id="scroll-div_D"
            scroll-y="true"
            style="height: 150px"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
            v-bind:scroll-into-div="todiv"
            v-bind:scroll-top="scrollTop"
          >
            <div
              class="scroll-div-item_H demo-text-1"
              id="scroll-sample-object1"
            ></div>
            <div
              class="scroll-div-item_H demo-text-2"
              id="scroll-sample-object2"
            ></div>
            <div
              class="scroll-div-item_H demo-text-3"
              id="scroll-sample-object3"
            ></div>
          </scroll-div>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const order = ['demo1', 'demo2', 'demo3'];

wepy.page({
  onLoad() {
    this.animate(
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

    this.animate(
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

    this.animate(
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
    onShareAppMessage() {
      return {
        title: 'scroll-view',
        path: 'page/component/pages/scroll-view/scroll-view',
      };
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

    tap() {
      for (let i = 0; i < order.length; ++i) {
        if (order[i] === this.toView) {
          this.toView = order[i + 1];
          this.scrollTop = (i + 1) * 200;
          break;
        }
      }
    },
    tapMove() {
      this.scrollTop = this.scrollTop + 10;
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "scroll-view",
    "pageOrientation": "auto"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>