import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useExchangeStore = defineStore("exchange", () => {
  const amountTwd = ref(""); // 用戶輸入金額 (台幣)
  const amountUsd = ref(""); // 用戶輸入金額 (美金)

  const airportTWD = ref(""); // 機場：台幣->韓幣
  const airportUSD = ref(""); // 機場：美金->韓幣

  const rateTWD = ref(""); // 換錢所：台幣->韓幣
  const rateUSD = ref(""); // 換錢所：美金->韓幣

  const bankKRW = ref(""); // 台灣當地銀行→韓幣匯率
  const bankUSD = ref(""); // 台灣當地銀行→美金匯率

  const resultDialog = ref(false); // 是否顯示結果對話框

  return {
    amountTwd,
    amountUsd,

    airportTWD,
    airportUSD,

    rateTWD,
    rateUSD,

    bankKRW,
    bankUSD,

    resultDialog,
  };
});
