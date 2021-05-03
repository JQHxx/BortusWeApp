<style lang="wxss">
@import '../../common/lib/common.wxss';

.page {
  background-color: var(--weui-BG-2);
  height: 100%;
}

.vtabs-content-item {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 20px;
}

.item-title {
  font-size: 18px;
  margin: 0 10px;
}
.item-desc {
  margin: 0 10px;

  color: var(--weui-FG-1);
}

.weui-vtabs-bar__wrp {
  background-color: var(--weui-BG-0) !important;
}

.weui-vtabs-bar__item {
  background-color: var(--weui-BG-0);
  color: var(--weui-FG-0);
  border-left-color: var(--weui-FG-0);
}

.weui-vtabs-bar__activeitem {
  background-color: var(--weui-BG-2) !important;
  color: var(--weui-FG-0) !important;
  border-left-color: #07c160 !important;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <mp-vtabs
      v-bind:vtabs="vtabs"
      v-bind:activeTab="activeTab"
      @tabclick="onTabClick($event.$wx)"
      @change="onChange($event.$wx)"
      class="test"
    >
      <block v-for="item in vtabs" v-bind:key="item.title">
        <mp-vtabs-content v-bind:tabIndex="index">
          <div
            class="vtabs-content-item"
            style="margin-bottom: {{vtabs.length - 1 === index ? 600 : 0}}px"
            @tap="handleClick"
          >
            <image v-bind:src="item.img" mode="widthFix"></image>
            <div class="item-title">
              {{ item.title2 }}
            </div>
            <div class="item-desc">
              {{ item.desc }}
            </div>
          </div>
        </mp-vtabs-content>
      </block>
      <div style="height: 1px; width: 100%"></div>
    </mp-vtabs>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'vtabs',
      path: 'page/weui/vtabs',
    };
  },
  data: {
    vtabs: [
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
          '本课程共四节，将分阶段为开发者展示如何开通流量主功能、如何接入广告组件、不同类型小程序接入的建议。',
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
      console.log('tabClick', index);
    },
    onChange(e: weui.TabsChange) {
      const index = e.detail.index;
      console.log('change', index);
    },
    handleClick() {
      wx.navigateTo({
        url: '../tabs/webview',
      });
    }
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-vtabs": "module:@miniprogram-component-plus/vtabs/miniprogram_dist",
    "mp-vtabs-content": "module:@miniprogram-component-plus/vtabs-content/miniprogram_dist"
  },
  "navigationBarTitleText": "vtabs"
}
</config>