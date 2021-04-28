<style lang="less" src="../common/index.less"></style>
<style lang="less">
.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}
</style>
<template>
  <div class="index">
    <div class="index-hd">
      <image class="index-logo" src="resources/kind/logo.png"></image>
      <div class="index-desc">
        以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见
        <navigator url="pages/doc-web-view/doc-web-view" class="weui-agree__link">小程序开发文档</navigator>
        </div>
    </div>
    <div class="index-bd">
      <div class="kind-list">
        <block v-for="item in list" v-bind:key="item.id">
          <div class="kind-list-item">
            <div v-bind:id="item.id" class="kind-list-item-hd" :class="{'kind-list-item-hd-show': item.open}" @tap="kindToggle">
              <div class="kind-list-text">{{ item.name }}</div>
              <image v-if="theme === 'dark'" class="kind-list-img" src="resources/kind/{{item.id}}_dark.png"></image>
              <image v-else class="kind-list-img" src="resources/kind/{{item.id}}.png"></image>
            </div>
            <div class="kind-list-item-bd" :class="{'kind-list-item-bd-show': tem.open}">
              <div class="navigator-box" :class="{'navigator-box-show': item.open}">
                <block v-for="(page,index) in pages" v-bind:key="index">
                  <navigator url="component/{{page}}/{{page}}" class="navigator">
                    <div class="navigator-text">{{ page }}</div>
                    <div class="navigator-arrow"></div>
                  </navigator>
                </block>
              </div>
            </div>
          </div>
        </block>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: '小程序官方组件展示',
      path: 'page/index'
    }
  },
  onLoad() {
    this.theme = wx.getSystemInfoSync().theme || 'light';
    wx.onThemeChange(theme => {
      this.theme = theme.theme
    })
  },
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress', 'rich-text']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea', 'editor']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'video', 'camera', 'live-pusher', 'live-player']
      }, {
        id: 'map',
        name: '地图',
        open: false,
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: ['canvas', 'canvas-2d', 'webgl']
      }, {
        id: 'open',
        name: '开放能力',
        open: false,
        pages: ['ad', 'open-data', 'web-view']
      }, {
        id: 'obstacle-free',
        name: '无障碍访问',
        open: false,
        pages: ['aria-component']
      }
    ],
    theme: 'light'
  },
  methods: {
    kindToggle(e: WechatMiniprogram.ControlTap) {
      const id = e.currentTarget.id
      const list = this.list
      for (let i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
          list[i].open = !list[i].open
        } else {
          list[i].open = false
        }
      }
      this.list = list;
      wx.reportAnalytics('click_view_programmatically', {})
    }
  }
});
</script>
<config>
{
    navigationBarTitleText: '小程序官方组件展示'
}
</config>
