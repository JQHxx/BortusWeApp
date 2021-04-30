<style lang="wxss">
@import "../common/lib/weui.wxss";
@import "../app.wxss";

.weui-label {
  width: 5em;
}
</style>
<template>
  <div class="container">
    <head title="tabBar" />
    <div class="page-body">
      <div class="btn-area">
        <button @tap="setTabBarBadge">
          {{ !hasSetTabBarBadge ? '设置tab徽标' : '移除tab徽标' }}
        </button>
        <button @tap="showTabBarRedDot">
          {{ !hasShownTabBarRedDot ? '显示红点' : '移除红点' }}
        </button>
        <button @tap="customStyle">
          {{ !hasCustomedStyle ? '自定义Tab样式' : '移除自定义样式' }}
        </button>
        <button @tap="customItem">
          {{ !hasCustomedItem ? '自定义Tab信息' : '移除自定义信息' }}
        </button>
        <button @tap="hideTabBar">
          {{ !hasHiddenTabBar ? '隐藏TabBar' : '显示TabBar' }}
        </button>
      </div>
      <div class="btn-area">
        <button type="primary" @tap="navigateBack">返回上一级</button>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const defaultTabBarStyle = {
  color: '#7A7E83',
  selectedColor: '#3cc51f',
  backgroundColor: '#ffffff',
};

const defaultItemName = '接口';

wepy.component({
  data: {
    hasSetTabBarBadge: false,
    hasShownTabBarRedDot: false,
    hasCustomedStyle: false,
    hasCustomedItem: false,
    hasHiddenTabBar: false,
  },

  attached() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0,
    });
  },

  detached() {
    this.removeTabBarBadge();
    this.hideTabBarRedDot();
    this.showTabBar();
    this.removeCustomStyle();
    this.removeCustomItem();
  },

  methods: {
    navigateBack() {
      this.$trigger('unmount', {}, {});
    },
    setTabBarBadge() {
      if (this.hasSetTabBarBadge) {
        this.removeTabBarBadge();
        return;
      }
      this.hasSetTabBarBadge = true;
      wx.setTabBarBadge({
        index: 1,
        text: '1',
      });
    },

    removeTabBarBadge() {
      this.hasSetTabBarBadge = false;
      wx.removeTabBarBadge({
        index: 1,
      });
    },

    showTabBarRedDot() {
      if (this.hasShownTabBarRedDot) {
        this.hideTabBarRedDot();
        return;
      }
      this.hasShownTabBarRedDot = true;
      wx.showTabBarRedDot({
        index: 1,
      });
    },

    hideTabBarRedDot() {
      this.hasShownTabBarRedDot = false;
      wx.hideTabBarRedDot({
        index: 1,
      });
    },

    showTabBar() {
      this.hasHiddenTabBar = false;
      wx.showTabBar({});
    },

    hideTabBar() {
      if (this.hasHiddenTabBar) {
        this.showTabBar();
        return;
      }
      this.hasHiddenTabBar = true;
      wx.hideTabBar({});
    },
    customStyle() {
      if (this.hasCustomedStyle) {
        this.removeCustomStyle();
        return;
      }
      this.hasCustomedStyle = true;
      wx.setTabBarStyle({
        color: '#FFF',
        selectedColor: '#1AAD19',
        backgroundColor: '#000000',
      });
    },

    removeCustomStyle() {
      this.hasCustomedStyle = false;
      wx.setTabBarStyle(defaultTabBarStyle);
    },

    customItem() {
      if (this.hasCustomedItem) {
        this.removeCustomItem();
        return;
      }
      this.hasCustomedItem = true;
      wx.setTabBarItem({
        index: 1,
        text: 'API',
      });
    },

    removeCustomItem() {
      this.hasCustomedItem = false;
      wx.setTabBarItem({
        index: 1,
        text: defaultItemName,
      });
    },
  },
});
</script>
<config>
{
    "component": true,
    "usingComponents": {
        "head": "../common/head",
        "foot": "../common/foot"
    }
}
</config>