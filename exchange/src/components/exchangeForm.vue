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
} = useExchangeApi();

// 為每個輸入框創建 ref
const inputAmountUsd = ref(null);
const inputRateTwd = ref(null);
const inputAirportTwd = ref(null);
const inputAirportUsd = ref(null);
const inputRateUsd = ref(null);
const inputBankKrw = ref(null);
const inputBankUsd = ref(null);

// 將焦點移動到下一個輸入框
const moveFocus = (event, nextInput) => {
  event.preventDefault(); // 防止換行造成不必要的頁面滾動
  nextInput.focus(); // 將焦點移動到下一個輸入框
};
</script>

<template>
  <div class="flex flex-col gap-2 my-4">
    <div class="title-class">換錢金額</div>
    <div class="flex items-center gap-2 ml-4">
      <div>台幣：</div>
      <div>
        <el-input
          v-model="amountTwd"
          inputmode="numeric"
          type="number"
          style="width: 10rem"
          placeholder="必填"
          @keydown.enter="moveFocus($event, inputAmountUsd)"
        />
      </div>
    </div>
    <div class="flex gap-2 ml-4">
      <div>美金：</div>
      <div>
        <el-input
          ref="inputAmountUsd"
          v-model="amountUsd"
          inputmode="numeric"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, inputRateTwd)"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-2 my-4">
    <div class="title-class">韓國當地匯率</div>
    <div class="flex items-center gap-2 ml-4">
      <div>台幣(換錢所)：</div>
      <div>
        <el-input
          ref="inputRateTwd"
          v-model="rateTWD"
          inputmode="decimal"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, inputAirportTwd)"
        />
      </div>
    </div>
    <div class="flex items-center gap-2 ml-4">
      <div>台幣(機場)：</div>
      <div>
        <el-input
          ref="inputAirportTwd"
          v-model="airportTWD"
          inputmode="decimal"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, inputAirportUsd)"
        />
      </div>
    </div>
    <div class="flex items-center gap-2 ml-4">
      <div>美金(機場)：</div>
      <div>
        <el-input
          ref="inputAirportUsd"
          v-model="airportUSD"
          inputmode="decimal"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, inputRateUsd)"
        />
      </div>
    </div>
    <div class="flex items-center gap-2 ml-4">
      <div>美金(換錢所)：</div>
      <div>
        <el-input
          ref="inputRateUsd"
          v-model="rateUSD"
          inputmode="decimal"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, inputBankKrw)"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-2 my-4">
    <div class="title-class">台灣當地銀行匯率</div>
    <div class="flex items-center gap-2 ml-4">
      <div>韓幣：</div>
      <div>
        <el-input
          ref="inputBankKrw"
          v-model="bankKRW"
          inputmode="decimal"
          type="number"
          style="width: 10rem"
          placeholder="必填"
          @keydown.enter="moveFocus($event, inputBankUsd)"
        />
      </div>
    </div>
    <div class="flex gap-2 ml-4">
      <div>美金：</div>
      <div>
        <el-input
          ref="inputBankUsd"
          v-model="bankUSD"
          inputmode="decimal"
          type="number"
          style="width: 10rem"
        />
      </div>
    </div>
  </div>
</template>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield; /* Standard */
  -moz-appearance: textfield; /* Firefox */
}
</style>
