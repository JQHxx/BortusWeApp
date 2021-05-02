<style lang="less">
movable-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: #1aad19;
  color: #fff;
}

movable-area {
  height: 200px;
  width: 200px;
  margin: 25px 0px 0 25px;
  background-color: #ccc;
  overflow: hidden;
}

.max {
  width: 300px;
  height: 300px;
}

.page-section {
  width: 100%;
  margin-bottom: 10px;
}

.page-section-title {
  margin-top: 25px;
  font-size: 14px;
  color: #999999;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
}

.page-section-title.first {
  margin-top: 0;
}

.btn-area {
  margin-top: 10px;
}
</style>
<template>
  <div class="container">
    <head title="movable-div" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-section-title first">
          movable-view区域小于movable-area
        </div>
        <movable-area>
          <movable-view v-bind:x="x" v-bind:y="y" direction="all">text</movable-view>
        </movable-area>
      </div>
      <div class="btn-area">
        <button @tap="tap" class="page-body-button" type="primary">
          点击移动到 (30px, 30px)
        </button>
      </div>
      <div class="page-section">
        <div class="page-section-title">movable-view区域大于movable-area</div>
        <movable-area>
          <movable-view class="max" direction="all">text</movable-view>
        </movable-area>
      </div>
      <div class="page-section">
        <div class="page-section-title">只可以横向移动</div>
        <movable-area>
          <movable-view direction="horizontal">text</movable-view>
        </movable-area>
      </div>
      <div class="page-section">
        <div class="page-section-title">只可以纵向移动</div>
        <movable-area>
          <movable-view direction="vertical">text</movable-view>
        </movable-area>
      </div>
      <div class="page-section">
        <div class="page-section-title">可超出边界</div>
        <movable-area>
          <movable-view direction="all" out-of-bounds>text</movable-view>
        </movable-area>
      </div>
      <div class="page-section">
        <div class="page-section-title">带有惯性</div>
        <movable-area>
          <movable-view direction="all" inertia>text</movable-view>
        </movable-area>
      </div>
      <div class="page-section">
        <div class="page-section-title">可放缩</div>
        <movable-area scale-area>
          <movable-view
            direction="all"
            @change="onChange($event.$wx)"
            @scale="onScale($event.$wx)"
            scale
            scale-min="0.5"
            scale-max="4"
            v-bind:scale-value="scale"
            >text</movable-view>
        </movable-area>
      </div>
      <div class="btn-area">
        <button @tap="tap2" class="page-body-button" type="primary">
          点击放大3倍
        </button>
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
      title: 'movable-view',
      path: 'page/component/movable-view',
    };
  },

  data: {
    x: 0,
    y: 0,
    scale: 2,
  },

  methods: {
    tap() {
      this.x = 30;
      this.y = 30;
    },

    tap2() {
      this.scale = 3;
    },

    onChange(e: WechatMiniprogram.MovableViewChange) {
      console.log(e.detail);
    },

    onScale(e: WechatMiniprogram.MovableViewScale) {
      console.log(e.detail);
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "movable-view",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>