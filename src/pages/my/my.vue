<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()

const getData = async () => {
  const request = await http<string[]>({
    url: '/member/profile',
    method: 'GET',
  })
  console.log('成功',request);
  
  }
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '牛马先锋',
          token:'1234567890'
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData()" size="mini" plain type="default">测试请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
