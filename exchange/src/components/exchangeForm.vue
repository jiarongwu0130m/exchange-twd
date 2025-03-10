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
          type="number"
          style="width: 10rem"
          placeholder="必填"
          @keydown.enter="moveFocus($event, amountUsd)"
        />
      </div>
    </div>
    <div class="flex gap-2 ml-4">
      <div>美金：</div>
      <div>
        <el-input
          v-model="amountUsd"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, rateTWD)"
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
          v-model="rateTWD"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, airportTWD)"
        />
      </div>
    </div>
    <div class="flex items-center gap-2 ml-4">
      <div>台幣(機場)：</div>
      <div>
        <el-input
          v-model="airportTWD"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, airportUSD)"
        />
      </div>
    </div>
    <div class="flex items-center gap-2 ml-4">
      <div>美金(機場)：</div>
      <div>
        <el-input
          v-model="airportUSD"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, rateUSD)"
        />
      </div>
    </div>
    <div class="flex items-center gap-2 ml-4">
      <div>美金(換錢所)：</div>
      <div>
        <el-input
          v-model="rateUSD"
          type="number"
          style="width: 10rem"
          @keydown.enter="moveFocus($event, bankKRW)"
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
          v-model="bankKRW"
          type="number"
          style="width: 10rem"
          placeholder="必填"
          @keydown.enter="moveFocus($event, bankUSD)"
        />
      </div>
    </div>
    <div class="flex gap-2 ml-4">
      <div>美金：</div>
      <div>
        <el-input v-model="bankUSD" type="number" style="width: 10rem" />
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
  -moz-appearance: textfield; /* Firefox */
}
</style>
