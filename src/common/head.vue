<template>
  <div class="page-head">
    <div class="page-head-title">{{title}}</div>
    <div class="page-head-line"></div>
    <div v-if="desc" class="page-head-desc">{{desc}}</div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.component({
});
</script>
