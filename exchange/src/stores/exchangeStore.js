import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useExchangeStore = defineStore("exchange", () => {
  const amount = ref(""); // 用戶輸入金額 (台幣)
  const rateToKRW = ref(""); // 台幣→韓幣匯率
  const rateToUSD = ref(""); // 台幣→美金匯率
  const rateUSDToKRW = ref(""); // 美金→韓幣匯率
  const rateAirport = ref(""); // 機場換錢匯率
  const resultDialog = ref(false); // 是否顯示結果對話框

  // 計算在韓國當地換錢可得多少韓幣
  const exchangeInKorea = computed(() => amount.value * rateToKRW.value);

  // 計算先換美金再換韓幣可得多少韓幣
  const exchangeViaUSD = computed(
    () => (amount.value / rateToUSD.value) * rateUSDToKRW.value
  );

  // 計算在韓國機場換錢可得多少韓幣
  const exchangeAtAirport = computed(() => amount.value * rateAirport.value);

  // 計算最佳換匯方式
  const bestExchangeMethod = computed(() => {
    const exchangeAmounts = {
      韓國當地換錢: exchangeInKorea.value,
      "先換美金 → 韓幣": exchangeViaUSD.value,
      韓國機場換錢: exchangeAtAirport.value,
    };

    // 找出最大值的方法
    return Object.keys(exchangeAmounts).reduce((best, method) =>
      exchangeAmounts[method] > exchangeAmounts[best] ? method : best
    );
  });

  return {
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
  };
});
