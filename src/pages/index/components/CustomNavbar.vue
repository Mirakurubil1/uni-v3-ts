
<template>
<div class="custom-navbar">
    唱跳rap 篮球
</div>
</template>
<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(safeAreaInsets);

</script>
<style lang="scss" scoped>
.custom-navbar {
    margin-top: v-bind(safeAreaInsets)+'px';
    height: 50px;
    background-color: #333;
    color: #fff;
}
</style>