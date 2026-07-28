<template>
  <div class="home-page">
    <van-nav-bar title="首页" />

    <div class="p-4">
      <van-cell title="欢迎使用 Nuxt + Vant" center>
        <template #right-icon>
          <van-icon name="passed" class="text-green-500" />
        </template>
      </van-cell>
    </div>

    <div class="p-4">
      <div class="text-lg font-bold mb-3">技术栈</div>
      <van-cell-group inset>
        <van-cell title="Vue 3" value="3.5+" />
        <van-cell title="Nuxt" value="4.x" />
        <van-cell title="Pinia" value="状态管理" />
        <van-cell title="Vant" value="4.x 移动端UI" />
        <van-cell title="Tailwind CSS" value="原子化样式" />
        <van-cell title="Biome" value="代码规范" />
      </van-cell-group>
    </div>

    <div class="p-4">
      <div class="text-lg font-bold mb-3">计数器 (Pinia Store)</div>
      <van-button type="primary" block @click="counter.increment()">
        点击次数: {{ counter.count }}
      </van-button>
    </div>

    <div class="p-4">
      <div class="text-lg font-bold mb-3">Tailwind 示例</div>
      <div class="grid grid-cols-3 gap-2">
        <div class="bg-primary text-white p-4 rounded text-center">Primary</div>
        <div class="bg-green-500 text-white p-4 rounded text-center">Green</div>
        <div class="bg-red-500 text-white p-4 rounded text-center">Red</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const counter = useCounterStore()
</script>
