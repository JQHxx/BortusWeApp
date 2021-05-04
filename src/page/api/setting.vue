<style lang="wxss">
@import '../../common/lib/weui.wxss';

form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  min-height: 30px;
}
</style>
<template>
  <div class="container">
    <head title="open/get/Setting" />
    <div class="page-body">
      <form>
        <div class="page-section">
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">用户信息</div>
              </div>
              <div class="weui-cell__bd">
                <icon
                  v-if="setting['scope.userInfo']"
                  class="icon-small"
                  type="success_no_circle"
                  size="23"
                ></icon>
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">地理位置</div>
              </div>
              <div class="weui-cell__bd">
                <icon
                  v-if="setting['scope.userLocation']"
                  class="icon-small"
                  type="success_no_circle"
                  size="23"
                ></icon>
              </div>
            </div>
            <div class="weui-cell weui-cell_input region">
              <div class="weui-cell__hd">
                <div class="weui-label">通讯地址</div>
              </div>
              <div class="weui-cell__bd">
                <icon
                  v-if="setting['scope.address']"
                  class="icon-small"
                  type="success_no_circle"
                  size="23"
                ></icon>
              </div>
            </div>
            <div class="weui-cell weui-cell_input detail">
              <div class="weui-cell__hd">
                <div class="weui-label">发票抬头</div>
              </div>
              <div class="weui-cell__bd">
                <icon
                  v-if="setting['scope.invoiceTitle']"
                  class="icon-small"
                  type="success_no_circle"
                  size="23"
                ></icon>
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">微信运动步数</div>
              </div>
              <div class="weui-cell__bd">
                <icon
                  v-if="setting['scope.werun']"
                  class="icon-small"
                  type="success_no_circle"
                  size="23"
                ></icon>
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">录音功能</div>
              </div>
              <div class="weui-cell__bd">
                <icon
                  v-if="setting['scope.record']"
                  class="icon-small"
                  type="success_no_circle"
                  size="23"
                ></icon>
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">保存到相册</div>
              </div>
              <div class="weui-cell__bd">
                <icon
                  v-if="setting['scope.writePhotosAlbum']"
                  class="icon-small"
                  type="success_no_circle"
                  size="23"
                ></icon>
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">摄像头</div>
              </div>
              <div class="weui-cell__bd">
                <icon
                  v-if="setting['scope.camera']"
                  class="icon-small"
                  type="success_no_circle"
                  size="23"
                ></icon>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="btn-area">
        <button type="primary" @tap="getSetting">获取小程序设置</button>
        <button open-type="openSetting" type="default">打开小程序设置</button>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '设置',
      path: '/page/api/setting',
    };
  },

  data: {
    setting: {},
  },
  methods: {
    getSetting() {
      wx.getSetting({
        success: (res) => {
          console.log(res);
          this.setting = res.authSetting
        }
      });
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "设置",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>