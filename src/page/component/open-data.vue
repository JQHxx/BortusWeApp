<style lang="less">
@import "../../common/lib/weui.less";

.avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.avatar-img {
  width: 50%;
  border-radius: 50%;
}

.country, .province, .city {
  padding-right: 5px;
}
</style>
<template>
<!--
      <open-data type="userAvatarUrl" lang="zh_CN"></open-data>
      <open-data type="userGender" lang="zh_CN"></open-data>
      <open-data type="userNickName" lang="zh_CN"></open-data>
      <open-data type="userCity" lang="zh_CN"></open-data>
      <open-data type="userProvince" lang="zh_CN"></open-data>
      <open-data type="userCountry" lang="zh_CN"></open-data>
      <open-data type="userLanguage" lang="zh_CN"></open-data>
-->
<div class="container">
  <head title="open-data"/>
  <div class="page-body">
    <div class="avatar">
      <open-data class="avatar-img" type="userAvatarUrl" lang="zh_CN"></open-data>
    </div>
    <form>
      <div class="page-section">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">昵称</div>
            </div>
            <div class="weui-cell__bd">
              <div class="weui-input">
                <open-data type="userNickName" lang="zh_CN"></open-data>
              </div>
            </div>
          </div>

          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">性别</div>
            </div>
            <div class="weui-cell__bd">
              <div class="weui-input">
                <open-data type="userGender" lang="zh_CN"></open-data>
              </div>
            </div>
          </div>

          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">地区</div>
            </div>
            <div class="weui-cell__bd">
              <div class="weui-input">
                <open-data class="country" type="userCountry" lang="zh_CN"></open-data>
                <open-data class="province" type="userProvince" lang="zh_CN"></open-data>
                <open-data class="city" type="userCity" lang="zh_CN"></open-data>
              </div>
            </div>
          </div>

          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">语言</div>
            </div>
            <div class="weui-cell__bd">
              <div class="weui-input">
                <open-data type="userLanguage" lang="zh_CN"></open-data>
              </div>
            </div>
          </div>
        </div>
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
      title: 'open-data',
      path: 'page/component/open-data'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "open-data"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>