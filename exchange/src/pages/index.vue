<script setup>
import { useExchangeApi } from "@/componentsApi/exchangeApi.js";
const { resultDialog } = useExchangeApi();

const toResult = () => {
  resultDialog.value = true;
};
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">匯率換算計算</h2>
    <div class="flex gap-[10rem]">
      <div class="">
        <ExchangeForm />
        <el-button plain size="large" type="primary" @click="toResult"
          >查看計算結果</el-button
        >
      </div>
      <ExchangeResult />
    </div>
  </div>
</template>
