<style lang="wxss">
.animation-element-wrapper {
  display: flex;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 75px;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
}
.animation-element {
  width: 100px;
  height: 100px;
  background-color: #1aad19;
}
.animation-buttons {
  padding: 15px 25px 5px;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
.animation-button {
  float: left;
  line-height: 2;
  width: 150px;
  margin: 8px 11px;
}

.animation-button-reset {
  width: 610px;
}

.btn-row {
  display: flex;
  justify-content: space-between;
}
</style>
<template>
  <div class="container">
    <head title="关键帧动画" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-section-title">
          <text
            >关键帧动画\n\n从小程序基础库 2.9.0
            开始支持一种更友好的动画创建方式，用于代替旧的
            wx.createAnimation</text
          >
        </div>
        <div id="container1" style="{{containerStyle1}}">
          <button class="block1" style="width: 150px; margin: 50px auto">
            示例按钮
          </button>
          <a class="block1" style="display: block; margin: 50px auto; width: 150px; text-align: center;">示例超链接</a>
          <text class="block1" style="display: block; margin: 50px auto; width: 150px; text-align: center;">示例文本</text>
        </div>
        <button v-bind:disabled="!canIUse" type="primary" @tap="change">
          开启动画
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
      title: '动画',
      path: 'page/api/animation',
      containerStyle1: '',
    };
  },
  data: {
    canIUse: true,
  },
  onLoad() {
    const canIUse = this.$wx.animate !== undefined;
    if (!canIUse) {
      wx.showModal({
        title: '微信版本过低，暂不支持本功能',
      });
      this.canIUse = canIUse
    }
  },
  methods: {
    change: function () {
      this.$wx.animate(
        '#container1',
        [
          { opacity: 1.0, rotate: 0, backgroundColor: '#FF0000' },
          { opacity: 0.5, rotate: 45, backgroundColor: '#00FF00', offset: 0.9 },
          { opacity: 0.0, rotate: 90, backgroundColor: '#FF0000' },
        ],
        5000,
        () => {
          this.$wx.clearAnimation(
            '#container1',
            { opacity: true, rotate: true },
            function () {
              console.log('清除了#container上的动画属性');
            }
          );
        }
      );
      this.$wx.animate(
        '.block1',
        [
          { scale: [1, 1], rotate: 0, ease: 'ease-out' },
          { scale: [1.5, 1.5], rotate: 45, ease: 'ease-in', offset: 0.9 },
          { scale: [2, 2], rotate: 90 },
        ],
        5000,
        () => {
          this.$wx.clearAnimation(
            '.block1',
            { scale: true, rotate: true },
            function () {
              console.log('清除了.block1上的动画属性');
            }
          );
        }
      );
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "动画",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>