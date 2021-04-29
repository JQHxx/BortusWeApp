<style lang="less">
.page-section-title {
  margin-bottom: 15px;
}

.navigator {
  color: var(--weui-LINK);
  display: inline-block;
}
</style>
<template>
  <div class="container">
    <head title="map" />

    <div class="page-body">
      <div class="page-section-title">
        当前组件使用了墨渊底图样式，查看<navigator
          class="navigator"
          url="/page/component/map-styles"
          >查看更多</navigator
        >。
      </div>
      <div class="page-section page-section-gap">
        <map
          v-bind:subkey="subKey"
          style="width: 100%; height: 300px"
          v-bind:latitude="latitude"
          v-bind:longitude="longitude"
          v-bind:scale="18"
          v-bind:markers="markers"
          v-bind:covers="covers"
          v-bind:enable-3D="enable3d"
          v-bind:show-compass="showCompass"
          v-bind:enable-zoom="enableZoom"
          v-bind:enable-rotate="enableRotate"
          v-bind:enable-satellite="enableSatellite"
          v-bind:enable-traffic="enableTraffic"
          v-bind:enable-overlooking="enableOverlooking"
          v-bind:enable-scroll="enableScroll"
          v-bind:polygons="drawPolygon ? polygons : []"
        >
        </map>
      </div>
    </div>

    <div class="page-section">
      <div class="btn-area">
        <button @tap="toggle3d">{{ !enable3d ? '启用' : '关闭' }}3D效果</button>
        <button @tap="toggleShowCompass">
          {{ !showCompass ? '显示' : '关闭' }}指南针
        </button>
        <button @tap="toggleOverlooking">
          {{ !enableOverlooking ? '开启' : '关闭' }}俯视支持
        </button>
        <button @tap="toggleRotate">
          {{ !enableRotate ? '开启' : '关闭' }}旋转支持
        </button>
        <button @tap="togglePolygon">
          {{ !drawPolygon ? '绘制' : '清除' }}多边形
        </button>
        <button @tap="toggleZoom">
          {{ !enableZoom ? '开启' : '关闭' }}缩放支持
        </button>
        <button @tap="toggleScroll">
          {{ !enableScroll ? '开启' : '关闭' }}拖动支持
        </button>
        <button @tap="toggleSatellite">
          {{ !enableSatellite ? '开启' : '关闭' }}卫星图
        </button>
        <button @tap="toggleTraffic">
          {{ !enableTraffic ? '开启' : '关闭' }}实时路况
        </button>
      </div>
    </div>

    <template is="foot" />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'map',
      path: 'page/component/pages/map/map',
    };
  },

  data: {
    latitude: 23.099994,
    longitude: 113.32452,
    markers: [
      {
        latitude: 23.099994,
        longitude: 113.32452,
        name: 'T.I.T 创意园',
      },
    ],
    covers: [
      {
        latitude: 23.099994,
        longitude: 113.34452,
        iconPath: '/image/location.png',
      },
      {
        latitude: 23.099994,
        longitude: 113.30452,
        iconPath: '/image/location.png',
      },
    ],
    polygons: [
      {
        points: [
          {
            latitude: 23.099994,
            longitude: 113.32452,
          },
          {
            latitude: 23.098994,
            longitude: 113.32352,
          },
          {
            latitude: 23.098994,
            longitude: 113.32552,
          },
        ],
        strokeWidth: 3,
        strokeColor: '#FFFFFFAA',
      },
    ],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
    enable3d: false,
    showCompass: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false,
    enableSatellite: false,
    enableTraffic: false,
  },

  methods: {
    toggle3d() {
        this.enable3d = !this.enable3d
    },
    toggleShowCompass() {
        this.showCompass = !this.showCompass
    },
    toggleOverlooking() {
        this.enableOverlooking = !this.enableOverlooking
    },
    toggleZoom() {
        this.enableZoom = !this.enableZoom
    },
    toggleScroll() {
        this.enableScroll = !this.enableScroll
    },
    toggleRotate() {
        this.enableRotate = !this.enableRotate
    },
    togglePolygon() {
        this.drawPolygon = !this.drawPolygon
    },
    toggleSatellite() {
        this.enableSatellite = !this.enableSatellite
    },
    toggleTraffic() {
        this.enableTraffic = !this.enableTraffic
    }
  },
});
</script>
<config>
{
    "navigationBarTitleText": "map"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>