<style lang="wxss">
@import "../../common/lib/common.wxss";

image {
  margin: 4px 0;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">Article</div>
      <div class="page__desc">文章</div>
    </div>
    <div class="page__bd">
      <div class="weui-article">
        <div class="weui-article__h1">大标题</div>
        <div class="weui-article__section">
          <div class="weui-article__h2">章标题</div>
          <div class="weui-article__section">
            <div class="weui-article__h3">1.1 节标题</div>
            <div class="weui-article__p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="weui-article__p">
              <image
                class="weui-article__img"
                src="../../resources/images/pic_article.png"
                mode="aspectFit"
                style="height: 180px"
              />
              <image
                class="weui-article__img"
                src="../../resources/images/pic_article.png"
                mode="aspectFit"
                style="height: 180px"
              />
            </div>
          </div>
          <div class="weui-article__section">
            <div class="weui-article__h3">1.2 节标题</div>
            <div class="weui-article__p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'article',
      path: 'page/weui/article',
    };
  }
});
</script>
<config>
{
    "navigationBarTitleText": "article"
}
</config>