<script setup>
import { useExchangeApi } from "@/componentsApi/exchangeApi.js";
const { amount, rateToKRW, rateToUSD, rateUSDToKRW, rateAirport } =
  useExchangeApi();
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">匯率換算</h2>
    <div class="space-y-2">
      <label>台幣換韓幣匯率：</label>
      <input v-model="rateToKRW" class="border p-2 w-full" />

      <label>台幣換美金匯率：</label>
      <input v-model="rateToUSD" class="border p-2 w-full" />

      <label>美金換韓幣匯率：</label>
      <input v-model="rateUSDToKRW" class="border p-2 w-full" />

      <label>機場匯率：</label>
      <input v-model="rateAirport" class="border p-2 w-full" />

      <label>換錢金額 (台幣)：</label>
      <input v-model="amount" class="border p-2 w-full" />
    </div>
  </div>
</template>
