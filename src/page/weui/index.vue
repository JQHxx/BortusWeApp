<style lang="wxss">
@import "../../common/lib/common.wxss";
.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}

.weui-flex {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.weui-cells {
  margin-top: 0;
  opacity: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.weui-cells:after,
.weui-cells:before {
  display: none;
}

.weui-cells_show {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.weui-cell:before {
  right: 15px;
}

.kind-list__item {
  margin: 10px 0;
  background-color: var(--weui-BG-2);
  border-radius: 2px;
  overflow: hidden;
}

.kind-list__item:first-child {
  margin-top: 0;
}

.kind-list__img {
  width: 30px;
  height: 30px;
}

[data-weui-theme='dark'] .kind-list__img {
  -webkit-filter: invert(100) hue-rotate(180deg);
  filter: invert(100) hue-rotate(180deg);
}

.kind-list__item-hd {
  padding: 20px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.kind-list__item-hd_show {
  opacity: 0.4;
}

.kind-list__item-bd {
  height: 0;
  overflow: hidden;
}

.kind-list__item-bd_show {
  height: auto;
}

.index-hd {
  padding: 40px 40px 20px;
  text-align: center;
}

.index-bd {
  padding: 0 15px 20px;
}

.index-ft {
  padding-bottom: 10px;
  text-align: center;
}

.index-logo {
  /* width: 43px;
  height: 43px; */
  width: 43px;
  height: 43px;
}

.index-desc {
  margin-top: 10px;
  color: #888888;
  /* font-size: 14px; */
  font-size: 14px;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="index-hd">
      <image
        class="index-logo"
        src="../../resources/images/logo_extended.png"
      ></image>
      <div class="index-desc">
        以下是对小程序内置组件能力的补充，包括
        WeUI组件库和一些常见的功能组件，具体属性参数详见
        <navigator url="../component/doc-web-view" class="weui-agree__link"
          >小程序开发文档</navigator
        >
      </div>
    </div>
    <div class="page__bd page-weui page__bd_spacing">
      <div class="kind-list">
        <block v-for="item in list" v-bind:key="item.id">
          <div class="kind-list__item">
            <div v-bind:id="item.id" class="weui-flex kind-list__item-hd" :class="{ 'ind-list__item-hd_show': item.open }" @tap="kindToggle($event.$wx)">
              <div class="weui-flex__item">{{ item.name }}</div>
              <image
                class="kind-list__img"
                src="../../resources/images/icon_nav_{{item.id}}.png"
              ></image>
            </div>
            <div
              class="kind-list__item-bd"
              :class="{ 'kind-list__item-bd_show': item.open }"
            >
              <div class="weui-cells" :class="{ 'weui-cells_show': item.open }">
                <block v-for="page in item.pages" v-bind:key="page">
                  <navigator v-if="page.url" v-bind:url="page.url" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">{{ page.zh }}</div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                  </navigator>
                  <navigator v-else v-bind:url="page" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">{{ page }}</div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
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
  onShareAppMessage() {
    return {
      title: '扩展能力',
      path: 'page/weui/index',
    };
  },
  data: {
    list: [
      {
        id: 'form',
        name: '表单',
        open: false,
        pages: ['cell', 'slideview', 'form', 'uploader'],
      },
      {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: [
          'article',
          'icons',
          'badge',
          'flex',
          'footer',
          'gallery',
          'grid',
          'loadmore',
          'loading',
          'panel',
          'preview',
        ],
      },
      {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: [
          'dialog',
          'msg',
          'half-screen-dialog',
          'actionsheet',
          'toptips',
        ],
      },
      {
        id: 'nav',
        name: '导航相关',
        open: false,
        pages: ['navigation', 'tabbar'],
      },
      {
        id: 'search',
        name: '搜索相关',
        open: false,
        pages: ['searchbar'],
      },
      {
        id: 'extended',
        name: '扩展组件',
        open: false,
        pages: [
          'emoji',
          'video-swiper',
          'index-list',
          'recycle-view',
          'sticky',
          'tabs',
          'vtabs',
          'barrage',
          'select-text',
          'wxml-to-canvas',
        ],
      },
      {
        id: 'adaptive',
        name: '多端适配（需在PC端体验）',
        open: false,
        pages: [
          { zh: '左右伸缩', url: 'telescopic/telescopic' },
          { zh: '换行排列', url: 'linebreak/linebreak' },
          { zh: '侧边导航栏', url: 'sidenavigation/sidenavigation' },
          { zh: '分页展现', url: 'pagination/pagination' },
          { zh: '自由布局', url: 'freelayout/freelayout' },
          { zh: '分层展现', url: 'layeredpresentation/layeredpresentation' },
          { zh: '横向拓展', url: 'horizontalexpansion/horizontalexpansion' },
        ],
      },
    ],
    extendedList: [
      {
        id: 'extended',
        name: '扩展组件',
        open: false,
        pages: [
          'emoji',
          'video-swiper',
          'index-list',
          'recycle-view',
          'sticky',
          'tabs',
          'vtabs',
          'barrage',
          'select-text',
          'wxml-to-canvas',
        ],
      },
    ],
  },

  methods: {
    kindToggle(e: WechatMiniprogram.ControlTap) {
      const id = e.currentTarget.id,
        list = this.list;
      for (let i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
          list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
      }
      this.list = list;
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "小程序扩展能力展示"
}
</config>