<style lang="less">
.page-content {
  width: auto;
  margin: 15px 0;
  padding: 0 25px;
}

.code-fragment {
  height: 325px;
}

.code-textarea {
  width: auto;
  height: 325px;
  border: 1px solid #1aad19;
}

.p {
  color: #1aad19;
  margin-top: 15px;
}

.space {
  display: inline-block;
  background: red;
  width: 5px;
}

scroll-div {
  height: 325px;
  border: 1px solid #1aad19;
  white-space: pre;
  padding: 5px;
  box-sizing: border-box;
}
</style>
<template>
  <div class="container">
    <head title="rich-text" />

    <div class="page-body">
      <div class="page-section">
        <div class="page-section-title">通过HTML String渲染</div>
        <div class="page-content">
          <scroll-div scroll-y>{{ htmlSnip }}</scroll-div>
          <button type="primary" @tap="renderHtml">渲染HTML</button>
          <block v-if="renderedByHtml">
            <rich-text v-bind:nodes="htmlSnip"></rich-text>
          </block>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">通过节点渲染</div>
        <div class="page-content">
          <scroll-div scroll-y>{{ nodeSnip }}</scroll-div>
          <button type="primary" @tap="renderNode">渲染Node</button>
          <block v-if="renderedByNode">
            <rich-text v-bind:nodes="nodes"></rich-text>
          </block>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;

const nodeSnip = `Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you're gonna get.'
      }]
    }]
  }
})
`;

wepy.page({
  onShareAppMessage() {
    return {
      title: 'rich-text',
      path: 'page/component/rich-text',
    };
  },

  data: {
    htmlSnip,
    nodeSnip,
    renderedByHtml: false,
    renderedByNode: false,
    nodes: [
      {
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: #1AAD19;',
        },
        children: [
          {
            type: 'text',
            text: "You never know what you're gonna get.",
          },
        ],
      },
    ],
  },

  methods: {
    renderHtml() {
      this.renderedByHtml = true
    },
    renderNode() {
      this.renderedByNode = true
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "rich-text",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>