<style lang="wxss">
@import '../../common/lib/common.wxss';

.page {
  background-color: var(--weui-BG-2);
  height: 100%;
}

.weui-tabs-bar__wrp {
  border-bottom: 1px solid var(--weui-BG-2);
  margin-top: 10px;
}

.weui-tabs-swiper {
  width: 100%;
  height: 100%;

  background-color: var(--weui-BG-2);
}

.tab-content {
  /* height: 100px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
}

.weui-tabs-bar__title {
  margin: 0px 10px;
}

.tab-bar-title__selected {
  font-size: 20px;
  font-weight: bold;
}
.item-title {
  margin: 10px 10px 5px;
  font-size: 18px;
  width: 100%;
}
.item-desc {
  margin: 5px 10px 0;
  width: 100%;
  color: var(--weui-FG-1);
}
.weui-tabs-bar__item {
  background-color: var(--weui-BG-2) !important;
  color: var(--weui-FG-0) !important;
}
</style>
<template>
  <view class="page" v-bind:data-weui-theme="theme">
    <mp-tabs
      v-bind:tabs="tabs"
      v-bind:activeTab="activeTab"
      swiperClass="weui-tabs-swiper"
      @tabclick="onTabClick($event.$wx)"
      @change="onChange($event.$wx)"
      activeClass="tab-bar-title__selected"
    >
      <block v-for="item in tabs" v-bind:key="item.title">
        <view
          class="tab-content"
          v-bind:data-set="item"
          slot="tab-content-{{index}}"
          @tap="handleClick($event.$wx)">
          <image v-bind:src="item.img" mode="widthFix"></image>
          <view class="item-title">
            {{ item.title2 }}
          </view>
          <view class="item-desc">
            {{ item.desc }}
          </view>
        </view>
      </block>
    </mp-tabs>
  </view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'tabs',
      path: 'page/weui/tabs',
    };
  },
  data: {
    tabs: [
      {
        title: '技术开发',
        title2: '小程序开发进阶',
        img:
          'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
        desc:
          '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。',
      },
      {
        title: '产品解析',
        title2: '微信小程序直播',
        img:
          'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
        desc:
          '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。',
      },
      {
        title: '运营规范',
        title2: '常见问题和解决方案',
        img:
          'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
        desc: '提高审核质量',
      },
      {
        title: '营销经验',
        title2: '流量主小程序',
        img:
          'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg',
        desc:
          '本课程共四节，将分阶段为开发者展示如何开通流量主功能、如何接入广告组件、不同类型小程序接入的建议，以及如何通过工具调优小程序变现效率。',
      },
      {
        title: '高校大赛',
        title2: '2020中国高校计算机大赛',
        img:
          'http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg',
        desc: '微信小程序应用开发赛',
      },
    ],
    activeTab: 0,
  },
  onLoad() {
  },
  methods: {
    onTabClick(e: weui.TabsTabClick) {
      const index = e.detail.index;
      this.activeTab = index
    },
    onChange(e: weui.TabsChange) {
      const index = e.detail.index;
      this.activeTab = index
    },
    handleClick(e: WechatMiniprogram.ControlTap) {
      wx.navigateTo({
        url: './webview',
      });
    }
  }
});
</script>
<config>
{
  "disableScroll": true,
  "navigationBarTitleText": "tabs",
  "usingComponents": {
    "mp-tabs": "module:@miniprogram-component-plus/tabs/miniprogram_dist"
  }
}
</config>