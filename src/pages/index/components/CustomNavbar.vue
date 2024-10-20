<script setup lang="ts">
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const safeAreaTop = safeAreaInsets.top +10  + 'px'
console.log(safeAreaTop);

const theme = ref({
    color: 'red',
})
const colorRed = ref('#ff57cc')

</script>

<template>
  <div class="navbar" >
    <!-- logo文字 -->
    <div class="logo">
      <img class="logo-image" src="@/static/images/logo.png"></img>
      <div class="logo-text">新鲜 · 亲民 · 快捷</div>
    </div>
    <!-- 搜索条 -->
    <div class="search">
      <div class="icon-search">搜索商品</div>
      <div class="icon-scan"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped> 
/* 自定义导航条 */
.navbar {  
 padding-top: v-bind(safeAreaTop);
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }
  .icon-scan {
    font-size: 30rpx;
    padding: 15rpx;
  }
}
</style>
