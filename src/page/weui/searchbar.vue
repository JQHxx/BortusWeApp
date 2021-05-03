<style lang="wxss">
@import '../../common/lib/common.wxss';

.searchbar-result {
  margin-top: 0;
  font-size: 14px;
}

.searchbar-result:before {
  display: none;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <div class="page__hd">
      <div class="page__title">SearchBar</div>
      <div class="page__desc">搜索栏</div>
    </div>
    <div class="page__bd">
      <mp-searchbar
        @selectresult="selectResult"
        v-bind:search="search"
      ></mp-searchbar>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'searchbar',
      path: 'page/weui/searchbar',
    };
  },
  data: {
    inputShowed: false,
    inputVal: '',
    i: 0,
    searchFunc: {}
  },
  onLoad() {
    this.searchFunc = this.search.bind(this)
  },
  methods: {
    search(value: string) {
      return new Promise((resolve, reject) => {
        if (this.i % 2 === 0) {
          setTimeout(() => {
            resolve([
              { text: '搜索结果', value: 1 },
              { text: '搜索结果2', value: 2 },
            ]);
          }, 200);
        } else {
          setTimeout(() => {
            resolve([]);
          }, 200);
        }
        this.i = this.i + 1
      });
    },
    selectResult(e: weui.SearchbarSelectResult<string>) {
      console.log('select result', e.detail);
    }
  }
});
</script>
<config>
{
  "usingComponents": {
    "mp-searchbar": "module:weui-miniprogram/miniprogram_dist/searchbar/searchbar"
  },
  "navigationBarTitleText": "searchbar"
}
</config>   