<script setup>
import { useExchangeApi } from "@/componentsApi/exchangeApi.js";
const {
  amountTwd,
  amountUsd,

  airportTWD,
  airportUSD,

  rateTWD,
  rateUSD,

  bankKRW,
  bankUSD,

  resultDialog,
} = useExchangeApi();

// 格式化數字
const formatNumber = (num) => {
  if (isNaN(num)) return "0";
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

//#region 台幣 -> 韓幣
// 1. 台灣當地銀行
const twdToKrwInBank = computed(() =>
  formatNumber(amountTwd.value / bankKRW.value)
);
// 2. 韓國機場
const twdToKrwInAirport = computed(() =>
  formatNumber(amountTwd.value * airportTWD.value)
);
// 3. 韓國換錢所
const twdToKrwInRate = computed(() =>
  formatNumber(amountTwd.value * rateTWD.value)
);
//#endregion

//#region 美金 -> 韓幣
// 1. 韓國機場
const usdToKrwInAirport = computed(() =>
  formatNumber(amountUsd.value * airportUSD.value)
);
// 2. 韓國換錢所
const usdToKrwInRate = computed(() =>
  formatNumber(amountUsd.value * rateUSD.value)
);
//#endregion

//#region 台幣 -> 美金 -> 韓幣
// 台灣當地銀行換美金
const twdToUsdInBank = computed(() =>
  formatNumber(amountTwd.value / bankUSD.value)
);
// 1. 韓國機場
const twdToUsdToKrwInAirport = computed(() =>
  formatNumber(twdToUsdInBank.value * airportUSD.value)
);
// 2. 韓國換錢所
const twdToUsdToKrwInRate = computed(() =>
  formatNumber(twdToUsdInBank.value * rateUSD.value)
);
//#endregion

const handleClose = () => {
  resultDialog.value = false;
};
</script>

<template>
  <el-dialog
    v-model="resultDialog"
    title="換算結果"
    width="100%"
    :before-close="handleClose"
  >
    <div class="my-4">
      <div class="result-title">台幣 -> 韓幣</div>
      <div>1. 台灣當地銀行：{{ twdToKrwInBank }}</div>
      <div>2. 韓國機場：{{ twdToKrwInAirport }}</div>
      <div>3. 韓國換錢所：{{ twdToKrwInRate }}</div>
    </div>
    <div class="my-4">
      <div class="result-title">美金 -> 韓幣</div>
      <div>1. 韓國機場：{{ usdToKrwInAirport }}</div>
      <div>2. 韓國換錢所：{{ usdToKrwInRate }}</div>
    </div>
    <div class="my-4">
      <div class="result-title">台幣 -> 美金 -> 韓幣</div>
      <div>台灣當地銀行換美金：{{ twdToUsdInBank }}</div>
      <div>1. 韓國機場：{{ twdToUsdToKrwInAirport }}</div>
      <div>2. 韓國換錢所：{{ twdToUsdToKrwInRate }}</div>
    </div>
  </el-dialog>
</template>
