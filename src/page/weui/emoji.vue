<style lang="wxss">
@import "../../common/lib/common.wxss";
.page {
  background-color: var(--weui-BG-0);
}

.record {
  padding: 15px 0;
  margin-left: 10px;
  display: flex;
}

.avator {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: indianred;
  margin-right: 10px;
}
.comment {
  padding: 5px;
  background-color: var(--weui-BG-3);
  border-color: var(--weui-BG-0);
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  line-height: 24px;
  max-width: 200px;
}

.emoji-wrp {
  display: inline-block;
  width: 24px;
  height: 24px;
}

.emoji-icon {
  display: inline-block;
  transform-origin: 0 0;
  transform: scale(0.375);
}

.reply_wrp {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
}

.reply_tool {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 0;
  padding: 8px 12px;
  background-color: var(--weui-BG-1);
  position: relative;
}

.reply_tool:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
}

.reply_form_wrp {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.reply_label {
  display: block;
  background-color: var(--weui-BG-2);
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin-right: 8px;
}

.reply_input {
  font-size: 17px;
  min-height: 40px;
  padding: 0 12px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  caret-color: #1aad19;
}
.reply_input[disabled] {
  background-color: #e8e8e8;
  color: #888888;
}
.reply_button {
  width: 32px;
  height: 32px;
  overflow: hidden;
  margin-right: 8px;
}
.reply_button.active {
  opacity: 0.5;
}
.reply_button image {
  width: 32px;
  height: 32px;
}
.reply_button image:active {
  opacity: 50%;
}
.reply_button:last-child {
  margin-right: 0;
}
.reply_panel_wrp {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.reply_panel {
  height: 200px;
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 300px;
  -webkit-transition: top 0.2s;
  transition: top 0.2s;
}
.reply_panel[hidden] {
  display: block;
}
.reply_panel.show {
  height: 300px;
  top: 0;
}
.reply_panel:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
}
.reply_quick_item {
  position: relative;
  padding: 16px 12px;
  font-size: 17px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 8px;
  color: rgba(0, 0, 0, 0.9);
  word-wrap: break-word;
  word-break: break-all;
}
.reply_quick_item:last-child {
  margin-bottom: 0;
}
.reply_quick_item:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.05);
}
.reply_quick_item:last-child:after {
  display: none;
}
.reply_quick_tool {
  text-align: center;
  padding: 16px 12px;
  font-size: 14px;
}
.reply_quick_tool navigator {
  color: #204495;
}
.reply_quick_empty {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 17px;
}
.reply_quick_empty:active image {
  opacity: 0.5;
}
.pic_reply_quick_edit {
  vertical-align: middle;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 8px;
}
.reply_quick_empty:after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
}
.reply_quick_empty navigator {
  color: #000000;
}
.function_list {
  text-align: justify;
}
.function_item {
  display: inline-block;
  vertical-align: middle;
  padding: 12px;
}
.function_item .reply_function_pic.active {
  display: none;
}
.function_item:active .reply_function_pic {
  display: none;
}
.function_item:active .reply_function_pic.active {
  display: inline-block;
}
.reply_function_pic {
  width: 64px;
  height: 64px;
}

.safearea {
  background-color: var(--weui-BG-1);
}
.safearea_emojiShow {
  background-color: var(--weui-BG-0);
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <block v-if="canIUse">
      <scroll-div scroll-y style="height: {{layoutHeight}}px" scroll-into-div="{{historyList[historyList.length - 1].id}}">
        <block v-for="historyItem in historyList" v-bind:key="historyItem.id">
          <div class="record" v-bind:hidden="historyItem.length === 0" v-bind:id="historyItem.id">
            <div class="avator"></div>
            <div class="comment">
              <block v-for="item in historyItem.emoji" v-bind:key="item">
                <block v-if="item.type === 1">{{ item.content }}</block>
                <div v-if="item.type === 2" style="display: inline-block; width: {{lineHeight}}px; height: {{lineHeight}}px">
                  <div class="{{item.imageClass}}" style="background-image: url({{emojiSource}});transform-origin: 0 0; transform: scale({{lineHeight / 64}});">
                  </div>
                </div>
              </block>
            </div>
          </div>
        </block>
      </scroll-div>
      <div
        class="reply_wrp"
        style="bottom: {{isIOS ? keyboardHeight + safeHeight : keyboardHeight}}px"
      >
        <div class="reply_tool">
          <div hover-class="active" class="reply_button replay_quick_button">
            <image
              src="{{theme === 'dark' ? '../../resources/images/reply_tool_keyboard_dark.svg' : '../../resources/images/reply_tool_keyboard.svg'}}"
              mode="aspectFit"
              class="reply_tool_pic"
            ></image>
          </div>
          <div class="reply_form_wrp">
            <label for="" class="reply_label">
              <input
                class="reply_input"
                cursor-spacing="8px"
                confirm-type="send"
                v-bind:adjust-position="false"
                confirm-hold
                v-model="comment"
                v-bind:cursor="cursor"
                v-bind:focus="focus"
                @blur="onBlur($event.$wx)"
                @focus="onFocus"
                @input="onInput($event.$wx)"
                @confirm="onConfirm"
                @keyboardheightchange="onkeyboardHeightChange"
              />
            </label>
          </div>
          <div
            hover-class="active"
            class="reply_button replay_emotion_button"
            @tap="showEmoji"
          >
            <image
              src="/resources/images/reply_tool_emoji.svg"
              mode="aspectFit"
              class="reply_tool_pic"
            ></image>
          </div>
          <div
            hover-class="active"
            class="reply_button replay_media_button"
            @tap="showFunction"
          >
            <image
              src="/resources/images/reply_tool_add.png"
              mode="aspectFit"
              class="reply_tool_pic"
            ></image>
          </div>
        </div>
        <div
          class="reply_panel_wrp"
          style="height: {{emojiShow ? 300 : 200}}px;"
          v-bind:hidden="!emojiShow && !functionShow"
        >
          <div
            class="reply_panel"
            :class="{ 'show': emojiShow }"
            v-bind:hidden="!emojiShow"
          >
            <mp-emoji
              v-bind:source="emojiSource"
              class="mp-emoji"
              @insertemoji="insertEmoji($event.$wx)"
              @delemoji="deleteEmoji"
              @send="onsend"
              backgroundColor="{{theme === 'dark' ? '#191919' : '#EDEDED'}}"
              v-bind:theme="theme"
            ></mp-emoji>
          </div>
          <div
            class="reply_panel"
            :class="{ show: functionShow }"
            v-bind:hidden="!functionShow"
          >
            <swiper
              v-bind:indicator-dots="true"
              indicator-color="#bbbbbb"
              indicator-active-color="#8c8c8c"
            >
              <swiper-item>
                <div class="function_list">
                  <div class="function_item" @tap="chooseImage">
                    <image
                      src="{{theme === 'dark' ? '../../resources/images/reply_function_image_dark.svg' : '../../resources/images/reply_function_image.svg'}}"
                      class="reply_function_pic"
                    ></image>
                  </div>
                </div>
              </swiper-item>
            </swiper>
          </div>
        </div>
      </div>
      <div
        v-if="isIOS"
        class="{{(emojiShow || functionShow) ? 'safearea_emojiShow' : 'safearea'}}"
        style="position:fixed; bottom: 0px; width: 100%; height: {{safeHeight}}px;"
      ></div>
    </block>
    <div wx:else style="text-align: center; padding: 100px 0">
      微信版本过低，暂不支持本功能
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import { compareVersion } from '../../util/util';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'emoji',
      path: 'page/weui/emoji',
    };
  },
  data: {
    lineHeight: 24,
    functionShow: false,
    emojiShow: true,
    comment: '',
    focus: false,
    cursor: 0,
    _keyboardShow: false,
    emojiSource:
      'https://res.wx.qq.com/op_res/eROMsLpnNC10dC40vzF8qviz63ic7ATlbGg20lr5pYykOwHRbLZFUhgg23RtVorX',
    historyList: [] as any,
    layoutHeight: '0px',
    safeHeight: 0,
    keyboardHeight: 0,
    isIOS: false,
    canIUse: true,
    emojiNames: '',
    parseEmoji: Function,
  },

  onLoad() {
    const system = wx.getSystemInfoSync();
    this.isIOS = system.platform === 'ios';

    this.safeHeight = system.screenHeight - system.safeArea.bottom;
    this.layoutHeight =
      wx.getSystemInfoSync().windowHeight - this.safeHeight / 2 + 'px';

    const emojiInstance = this.$wx.selectComponent('.mp-emoji');
    this.emojiNames = emojiInstance.getEmojiNames();
    this.parseEmoji = emojiInstance.parseEmoji;
  },
  onReady() {
    // 解决基础库小于 2.9.2 的兼容问题
    const { SDKVersion } = wx.getSystemInfoSync();
    if (compareVersion(SDKVersion, '2.9.1') < 0) {
      this.canIUse = false;
    }
  },

  methods: {
    onkeyboardHeightChange(e: WechatMiniprogram.InputKeyboardHeightChange) {
      const { height } = e.detail;
      if (height === 0) {
        this._keyboardShow = false;
        this.keyboardHeight = height;
      } else {
        this._keyboardShow = true;
        this.safeHeight = 0
        this.functionShow = false
        this.emojiShow = false
        this.keyboardHeight = height
      }
    },
    hideAllPanel() {
      this.functionShow = false
      this.emojiShow = false
    },
    showEmoji() {
      this.functionShow = false
      this.emojiShow = this._keyboardShow || this.emojiShow
    },
    showFunction() {
      this.functionShow = this._keyboardShow || !this.functionShow
      this.emojiShow = false
    },
    chooseImage() {},
    onFocus() {
      this._keyboardShow = true;
      this.hideAllPanel();
    },
    onBlur(e: WechatMiniprogram.InputBlur) {
      this._keyboardShow = false;
      this.cursor = (e.detail as any).cursor || 0;
    },
    onInput(e: WechatMiniprogram.Input) {
      const value = e.detail.value;
      this.comment = value;
    },
    onConfirm() {
      this.onsend();
    },
    insertEmoji(evt: weui.EmojiInsertEmoji) {
      const emotionName = evt.detail.emotionName;
      const newComment = this.comment.slice(0, this.cursor) + emotionName + this.comment.slice(this.cursor);
      this.comment = newComment
      this.cursor = this.cursor + emotionName.length
    },
    onsend() {
      const parsedComment = {
        emoji: this.parseEmoji(this.comment),
        id: `emoji_${this.historyList.length}`,
      };
      this.historyList = [...this.historyList, parsedComment]
      this.comment = ''
      this.emojiShow = false
    },
    deleteEmoji() {
      const pos = this.cursor;
      const comment = this.comment;
      let result = '';
      let cursor = 0;

      let emojiLen = 6;
      let startPos = pos - emojiLen;
      if (startPos < 0) {
        startPos = 0;
        emojiLen = pos;
      }
      const str = comment.slice(startPos, pos);
      const matchs = str.match(/\[([\u4e00-\u9fa5\w]+)\]$/g);
      // 删除表情
      if (matchs) {
        const rawName = matchs[0];
        const left = emojiLen - rawName.length;
        if (this.emojiNames.indexOf(rawName) >= 0) {
          const replace = str.replace(rawName, '');
          result = comment.slice(0, startPos) + replace + comment.slice(pos);
          cursor = startPos + left;
        }
        // 删除字符
      } else {
        let endPos = pos - 1;
        if (endPos < 0) endPos = 0;
        const prefix = comment.slice(0, endPos);
        const suffix = comment.slice(pos);
        result = prefix + suffix;
        cursor = endPos;
      }
      this.comment = result
      this.cursor = cursor
    },
  },
});
</script>
<config>
{
  "disableScroll": true,
  "navigationBarTitleText": "emoji",
  "usingComponents": {
    "mp-emoji": "module:@miniprogram-component-plus/emoji/miniprogram_dist"
  }
}
</config>