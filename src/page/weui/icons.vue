<style lang="wxss">
@import "../../common/lib/common.wxss";

icon {
  margin-right: 13px;
}

.weui-grid {
  text-align: center;
  padding: 36px 10px;
}

.page__bd {
  padding-left: 15px;
  padding-right: 15px;
  text-align: left;
}
.icon-box {
  margin-bottom: 25px;
}
.icon-box__ctn {
  flex-shrink: 100;
}
.icon-item_box {
  display: inline-block;
  width: 25%;
  padding: 3px;
  height: 80px;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
}
.icon-name {
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.icon-box__title {
  font-size: 18px;
  margin: 5px 0;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Icons</div>
      <div class="page__desc">图标</div>
    </div>
    <div class="page__bd">
      <div class="icon-box">
        <div class="icon-box__title">描边型</div>
        <div class="weui-grids">
          <block v-for="item in iconList" v-bind:key="item">
            <navigator url="" class="weui-grid">
              <mp-icon v-bind:icon="item.icon" v-bind:color="item.color" v-bind:size="item.size"></mp-icon>
              <div class="weui-grid__label">{{ item.icon }}</div>
            </navigator>
          </block>
        </div>
      </div>
      <div class="icon-box">
        <div class="icon-box__title">填充型</div>
        <div class="weui-grids">
          <block v-for="item in iconList" v-bind:key="item">
            <navigator url="" class="weui-grid">
              <mp-icon type="filled" v-bind:icon="item.icon" v-bind:color="item.color" v-bind:size="item.size"></mp-icon>
              <div class="weui-grid__label">{{ item.icon }}</div>
            </navigator>
          </block>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const colorLight = 'rgba(0, 0, 0, .9)';
const colorDark = 'rgba(255, 255, 255, .8)';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'icons',
      path: 'page/weui/icons',
    };
  },
  data: {
    iconList: [
      {
        icon: 'add-friends',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'add',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'add2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'album',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'arrow',
        color: colorLight,
        size: 12,
        name: '',
      },
      {
        icon: 'at',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'back',
        color: colorLight,
        size: 12,
        name: '',
      },
      {
        icon: 'back2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'bellring-off',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'bellring-on',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'camera',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'cellphone',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'clip',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'close',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'close2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'comment',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'contacts',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'copy',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'delete-on',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'delete',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'discover',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'display',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'done',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'done2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'download',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'email',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'error',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'eyes-off',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'eyes-on',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'folder',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'group-detail',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'help',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'home',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'imac',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'info',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'keyboard',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'like',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'link',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'location',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'lock',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'max-window',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'me',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'mike',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'mike2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'mobile-contacts',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'more',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'more2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'mosaic',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'music-off',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'music',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'note',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'pad',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'pause',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'pencil',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'photo-wall',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'play',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'play2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'previous',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'previous2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'qr-code',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'refresh',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'report-problem',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'search',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'sending',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'setting',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'share',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'shop',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'star',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'sticker',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'tag',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'text',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'time',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'transfer-text',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'transfer2',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'translate',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'tv',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'video-call',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'voice',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'volume-down',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'volume-off',
        color: colorLight,
        size: 25,
        name: '',
      },
      {
        icon: 'volume-up',
        color: colorLight,
        size: 25,
        name: '',
      },
    ],
    theme: 'dark'
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-icon": "module:weui-miniprogram/miniprogram_dist/icon/icon"
  },
  "navigationBarTitleText": "icons"
}
</config>