<script setup>
import { useExchangeApi } from "@/componentsApi/exchangeApi.js";
const {
  amount,
  rateToKRW,
  rateToUSD,
  rateUSDToKRW,
  rateAirport,
  resultDialog,
  exchangeInKorea,
  exchangeViaUSD,
  exchangeAtAirport,
  bestExchangeMethod,
} = useExchangeApi();

const handleClose = () => {
  resultDialog.value = false;
};
</script>

<template>
  <el-dialog
    v-model="resultDialog"
    title="換算結果"
    width="30rem"
    :before-close="handleClose"
  >
    <div class="p-4">
      <p>在韓國當地換錢可得：{{ exchangeInKorea }} 韓幣</p>
      <p>先換美金後換韓幣可得：{{ exchangeViaUSD }} 韓幣</p>
      <p>在韓國機場換錢可得：{{ exchangeAtAirport }} 韓幣</p>
      <h3 class="text-lg font-bold mt-4 text-green-600">
        最佳換匯方式：{{ bestExchangeMethod }}
      </h3>
    </div>
  </el-dialog>
</template>
