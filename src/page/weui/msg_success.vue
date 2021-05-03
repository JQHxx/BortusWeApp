<style lang="wxss">
@import '../../common/lib/common.wxss';

page{
    background-color: #FFFFFF;
}
page,.page{height:100%;}

</style>
<template>
<div class="page" v-bind:data-weui-theme="theme">
    <mp-msg type="success" title="操作成功">
        <div slot="desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<navigator url="" class="weui-msg__link">文字链接</navigator></div>
        <div slot="extend">
            <div>1. 说明1</div>
            <div>2. 说明2</div>
        </div>
        <div slot="handle">
            <button class="weui-btn" type="primary">主要操作</button>
            <button class="weui-btn" type="default">辅助操作</button>
        </div>
        <div slot="footer">
            <div class="weui-footer__links">
                <navigator url="" class="weui-footer__link">底部链接文本</navigator>
            </div>
            <div class="weui-footer__text">Copyright © 2008-2016 weui.io</div>
        </div>
    </mp-msg>
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'msg_success',
      path: 'page/weui/msg_success'
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