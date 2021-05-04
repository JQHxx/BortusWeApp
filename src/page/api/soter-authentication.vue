<style lang="less">
</style>
<template>
  <div class="container">
    <head title="startSoterAuthentication" />
    <div class="page-body">
      <div class="btn-area">
        <button type="primary" data-mode="fingerPrint" @tap="startAuth($event.$wx)">
          指纹认证
        </button>
      </div>
      <div class="btn-area">
        <button type="primary" data-mode="facial" @tap="startAuth($event.$wx)">
          人脸认证
        </button>
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
      title: '生物认证',
      path: '/page/api/soter-authenticatio',
    };
  },
  methods: {
    startAuth(e: WechatMiniprogram.ControlTap) {
      console.log(e);
      const AUTH_MODE = e.currentTarget.dataset.mode;
      console.log(AUTH_MODE);
      const startSoterAuthentication = () => {
        wx.startSoterAuthentication({
          requestAuthModes: [AUTH_MODE],
          challenge: 'test',
          authContent: '小程序示例',
          success: () => {
            wx.showToast({
              title: '认证成功',
            });
          },
          fail: (err) => {
            console.error(err);
            wx.showModal({
              title: '失败',
              content: '认证失败',
              showCancel: false,
            });
          },
        });
      };

      const checkIsEnrolled = () => {
        wx.checkIsSoterEnrolledInDevice({
          checkAuthMode: AUTH_MODE,
          success: (res) => {
            console.log(res);
            if (!res.isEnrolled) {
              wx.showModal({
                title: '错误',
                content: `您暂未录入${
                  AUTH_MODE === 'facial' ? '人脸' : '指纹'
                }信息，请录入后重试`,
                showCancel: false,
              });
              return;
            }
            startSoterAuthentication();
          },
          fail: (err) => {
            console.error(err);
          },
        });
      };
      const notSupported = () => {
        wx.showModal({
          title: '错误',
          content: `您的设备不支持${
            AUTH_MODE === 'facial' ? '人脸' : '指纹'
          }识别`,
          showCancel: false,
        });
      };
      wx.checkIsSupportSoterAuthentication({
        success: (res) => {
          console.log(res);
          if (
            !res ||
            res.supportMode.length === 0 ||
            res.supportMode.indexOf(AUTH_MODE) < 0
          ) {
            notSupported();
            return;
          }
          checkIsEnrolled();
        },
        fail: (err) => {
          console.error(err);
          notSupported();
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "生物认证",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>