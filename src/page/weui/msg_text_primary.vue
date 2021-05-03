<style lang="wxss">
@import '../../common/lib/common.wxss';

page{
    background-color: #FFFFFF;
}
page,.page{height:100%;}
</style>
<template>
<view class="page" v-bind:data-weui-theme="theme">
    <mp-msg title="操作提示primary text">
        <view slot="desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<navigator url="" class="weui-msg__link">文字链接</navigator></view>
        <view slot="extend">
            <view>1. 说明1</view>
            <view>2. 说明2</view>
        </view>
        <view slot="handle">
            <button class="weui-btn" type="primary">主要操作</button>
        </view>
        <view slot="footer">
            <view class="weui-footer__links">
                <navigator url="" class="weui-footer__link">底部链接文本</navigator>
            </view>
            <view class="weui-footer__text">Copyright © 2008-2016 weui.io</view>
        </view>
    </mp-msg>
</view>

</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'msg_text_primary',
      path: 'page/weui/msg_text_primary'
    }
  }
});
</script>
<config>
{
    "usingComponents": {
        "mp-msg": "module:weui-miniprogram/miniprogram_dist/msg/msg"
    }
}
</config>   