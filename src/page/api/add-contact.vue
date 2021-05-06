<style lang="wxss">
@import '../../common/lib/weui.wxss';

input {
  width: 100%;
}
</style>
<template>
  <div class="container">
    <head title="addPhoneContact" />
    <div class="page-body">
      <form @submit="submit($event.$wx)">
        <div class="page-section">
          <div class="weui-cells__title">姓氏</div>
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <input class="weui-input" name="lastName" />
            </div>
          </div>
        </div>
        <div class="page-section">
          <div class="weui-cells__title">名字</div>
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <input class="weui-input" name="firstName" />
            </div>
          </div>
        </div>
        <div class="page-section">
          <div class="weui-cells__title">手机号</div>
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <input class="weui-input" name="mobilePhoneNumber" />
            </div>
          </div>
        </div>
        <div class="btn-area">
          <button type="primary" formType="submit">创建联系人</button>
          <button type="default" formType="reset">重置</button>
        </div>
      </form>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: '新增联系人',
      path: '/page/api/add-contact',
    };
  },
  methods: {
    submit(e: WechatMiniprogram.FormSubmit) {
      const formData = e.detail.value;
      wx.addPhoneContact({
        firstName: formData.firstName,
        lastName: formData.lastName,
        mobilePhoneNumber: formData.mobilePhoneNumber,
        success() {
          wx.showToast({
            title: '联系人创建成功',
          });
        },
        fail() {
          wx.showToast({
            title: '联系人创建失败',
          });
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "新增联系人",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>