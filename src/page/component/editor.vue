<style lang="wxss">
@import '../../common/lib/iconfont.wxss';

page > view {
  max-width: 100%;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.ql-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 1.5;
  overflow: auto;
  padding: 10px 10px 20px 10px;
  border: 1px solid #ececec;
}

.ql-active {
  color: #22c704;
}

.iconfont {
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 20px;
}

.toolbar {
  box-sizing: border-box;
  padding: 0 10px;
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ececec;
  border-left: none;
  border-right: none;
}
</style>
<template>
  <view class="container" style="height:{{editorHeight}}px;">
    <editor id="editor" class="ql-container" v-bind:placeholder="placeholder" @statuschange="onStatusChange($event.$wx)" @ready="onEditorReady($event.$wx)"></editor>
    <view class="toolbar" @touchend="format($event.$wx)" v-bind:hidden="false"
      style="bottom: {{isIOS ? keyboardHeight : 0}}px; height: {{toolBarHeight}}px; padding-bottom: {{isIOS ? safeHeight : 0}}px"
    >
      <i class="iconfont icon-charutupian" @touchend="insertImage"></i>
      <i class="iconfont icon-format-header-2" :class="{ 'ql-active': formats.header === 2 }" data-name="header" v-bind:data-value="2"></i>
      <i
        class="iconfont icon-format-header-3"
        :class="{ 'ql-active': formats.header === 3 }"
        data-name="header"
        v-bind:data-value="3"
      ></i>
      <i
        class="iconfont icon-zitijiacu"
        :class="{ 'ql-active': formats.bold }"
        data-name="bold"
      ></i>
      <i
        class="iconfont icon-zitixieti"
        :class="{ 'ql-active': formats.italic }"
        data-name="italic"
      ></i>
      <i
        class="iconfont icon-zitixiahuaxian"
        :class="{ 'ql-active': ormats.underline }"
        data-name="underline"
      ></i>
      <i
        class="iconfont icon--checklist"
        data-name="list"
        data-value="check"
      ></i>
      <i
        class="iconfont icon-youxupailie"
        :class="{ 'ql-active': formats.list === 'ordered' }"
        data-name="list"
        data-value="ordered"
      ></i>
      <i
        class="iconfont icon-wuxupailie"
        :class="{ 'ql-active': formats.list === 'bullet' }"
        data-name="list"
        data-value="bullet"
      ></i>
    </view>
  </view>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'editor',
      path: 'page/component/pages/editor/editor',
    };
  },
  data: {
    formats: {},
    readOnly: false,
    placeholder: '开始输入...',
    editorHeight: 300,
    keyboardHeight: 0,
    isIOS: false,
    safeHeight: 0,
    toolBarHeight: 50,
    editorCtx: {} as WechatMiniprogram.EditorContext,
  },
  onLoad() {
    const { platform, safeArea, model, screenHeight } = wx.getSystemInfoSync();
    if (safeArea) {
      this.safeHeight = screenHeight - safeArea.bottom;
    } else {
      this.safeHeight = 32;
    }
    this.isIOS = platform === 'ios';
    (this.toolBarHeight = this.isIOS ? this.safeHeight + 50 : 50),
      this.updatePosition(0);
    wx.onKeyboardHeightChange((res) => {
      let keyboardHeight = 0;
      if (res.height === keyboardHeight) {
        return;
      }
      const duration = res.height > 0 ? (res as any).duration * 1000 : 0;
      keyboardHeight = res.height;
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success: () => {
            this.updatePosition(keyboardHeight);
            this.editorCtx.scrollIntoView();
          },
        });
      }, duration);
    });
  },
  methods: {
    readOnlyChange() {
      this.readOnly = !this.readOnly;
    },
    updatePosition(keyboardHeight: number) {
      const toolbarHeight = 50;
      const { windowHeight, platform } = wx.getSystemInfoSync();
      let editorHeight =
        keyboardHeight > 0
          ? windowHeight - keyboardHeight - toolbarHeight
          : windowHeight;
      if (keyboardHeight === 0) {
        this.editorHeight = editorHeight;
        this.keyboardHeight = keyboardHeight;
        this.toolBarHeight = this.isIOS ? 50 + this.safeHeight : 50;
      } else {
        this.editorHeight = editorHeight;
        this.keyboardHeight = keyboardHeight;
        this.toolBarHeight = 50;
        this.safeHeight = 0;
      }
    },
    calNavigationBarAndStatusBar() {
      const systemInfo = wx.getSystemInfoSync();
      const { statusBarHeight, platform } = systemInfo;
      const isIOS = platform === 'ios';
      const navigationBarHeight = isIOS ? 44 : 48;
      return statusBarHeight + navigationBarHeight;
    },
    onEditorReady() {
      wx.createSelectorQuery()
        .select('#editor')
        .context((res) => {
          this.editorCtx = res.context as WechatMiniprogram.EditorContext;
        })
        .exec();
    },
    blur() {
      this.editorCtx.blur();
    },
    format(e: WechatMiniprogram.TouchEvent) {
      let { name, value } = e.target.dataset;
      if (!name) return;
      this.editorCtx.format(name, value);
    },
    onStatusChange(e: WechatMiniprogram.EditorStatusChange) {
      this.formats = e.detail;
    },
    insertDivider() {
      this.editorCtx.insertDivider({
        success: function () {
          console.log('insert divider success');
        },
      });
    },
    clear() {
      this.editorCtx.clear({
        success: function (res) {
          console.log('clear success');
        },
      });
    },
    removeFormat() {
      this.editorCtx.removeFormat();
    },
    insertDate() {
      const date = new Date();
      const formatDate = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
      this.editorCtx.insertText({
        text: formatDate,
      });
    },
    insertImage() {
      wx.chooseImage({
        count: 1,
        success: (res) => {
          this.editorCtx.insertImage({
            src: res.tempFilePaths[0],
            data: {
              id: 'abcd',
              role: 'god',
            },
            width: '80%',
            success: function () {
              console.log('insert image success');
            },
          });
        }
      });
    }
  }
});
</script>
<config>
{
  "navigationBarTitleText": "editor",
  "disableScroll": true,
  "usingComponents": {
      "head": "../../common/head",
      "foot": "../../common/foot"
  }
}
</config>