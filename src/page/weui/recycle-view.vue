<style lang="wxss">
.item+.item {
  /* border-top: 1px solid #ccc; */
}

.item, .item > view {
  display: flex;
  align-items: center;
  height: 150px;
  width: 100%;
}
.item-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 150px;
  align-items: center;
}
</style>
<template>
<recycle-view v-bind:batch="batchSetRecycleData" id="recycleId">
  <div slot="before" style="text-align: center">长列表前面的内容</div>
  <recycle-item v-for="item in recycleList" v-bind:key="item.id" class="item">
    <div class="item-content">
      <text>{{item.title}}</text>
      <image v-bind:src="item.image_url" mode="aspectFit" style="height: 100px; width: 240px"></image>
    </div>
  </recycle-item>
  <div slot="after" style="text-align: center">长列表后面的内容</div>
</recycle-view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import createRecycleContext from 'miniprogram-recycle-view'

const imgUrlList = [
  'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
  'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
  'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
  'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg',
  'http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg',
]

const newList = new Array(300).fill(0)
let count = 0;
for (let i = 0; i < newList.length; i++) {
  newList[i] = {
    idx: i,
    title: `${i}、文本`,
    image_url: imgUrlList[(count++) % 5],
  }
}

const rpx2px = (rpx: number) => (rpx / 750) * wx.getSystemInfoSync().windowWidth
wepy.page({
  onShareAppMessage() {
    return {
      title: 'recycle-view',
      path: 'page/weui/recycle-view'
    }
  },
  data: {
    
  },
  onLoad(options) {

  },
  onReady() {
    const ctx = createRecycleContext({
      id: 'recycleId',
      dataKey: 'recycleList',
      page: this.$wx,
      itemSize: {
        height: rpx2px(300),
        width: rpx2px(750)
      }
    })
    ctx.append(newList)
  },
});
</script>
<config>
{
  "usingComponents": {
    "recycle-view": "module:miniprogram-recycle-view/miniprogram_dist/recycle-view",
    "recycle-item": "module:miniprogram-recycle-view/miniprogram_dist/recycle-item"
  },
  "navigationBarTitleText": "recycle-view"
}
</config>   