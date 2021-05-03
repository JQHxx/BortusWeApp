<style lang="wxss">
@import '../../common/lib/common.wxss';

.page {
  background-color: var(--weui-BG-0);
  height: 100%;
}

mp-video-swiper {
  width: 100%;
  height: 100%;
  max-width: 600px;
}
</style>
<template>
  <mp-video-swiper
    class="video-swiper"
    v-bind:video-list="videoList"
    @play="onPlay"
    @pause="onPause"
    @timeupdate="onTimeUpdate"
    @ended="onEnded"
    @error="onError"
    @waiting="onWaiting"
    @progress="onProgress"
    @loadedmetadata="onLoadedMetaData"
  ></mp-video-swiper>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const urls = [
  'https://res.wx.qq.com/wxaliveplayer/htdocs/video14e1eea.mov',
  'https://res.wx.qq.com/wxaliveplayer/htdocs/video24e1eeb.mov',
  'https://res.wx.qq.com/wxaliveplayer/htdocs/video34e1eeb.mov',
  'https://res.wx.qq.com/wxaliveplayer/htdocs/video44e1eeb.mov',
  'https://res.wx.qq.com/wxaliveplayer/htdocs/video54e1eeb.mov',
];

wepy.page({
  onShareAppMessage() {
    return {
      title: 'video-swiper',
      path: 'page/weui/video-swiper',
    };
  },
  data: {
    videoList: [] as any,
  },
  onLoad() {
    const videoList = urls.map((item, index) => {
      return {
        id: index,
        url: item,
        objectFit: 'contain',
      };
    });
    this.videoList = videoList;
  },
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  methods: {
    onPlay(e: any) {},

    onPause(e: any) {
      //  console.log('pause', e.detail.activeId)
    },

    onEnded(e: any) {},

    onError(e: any) {},

    onWaiting(e: any) {},

    onTimeUpdate(e: any) {},

    onProgress(e: any) {},

    onLoadedMetaData(e: any) {
      console.log('LoadedMetaData', e);
    },
  },
});
</script>
<config>
{
  "usingComponents": {
    "mp-video-swiper": "module:@miniprogram-component-plus/video-swiper/miniprogram_dist"
  },
  "navigationBarTitleText": "video-swiper"
}
</config>