import { useExchangeStore } from "@/stores/exchangeStore";
import { storeToRefs } from "pinia";

export const useExchangeApi = () => {
  const store = useExchangeStore();
  const {
    amount,
    rateToKRW,
    rateToUSD,
    rateUSDToKRW,
    rateAirport,
    resultDialog,
  } = storeToRefs(store);
  const {
    exchangeInKorea,
    exchangeViaUSD,
    exchangeAtAirport,
    bestExchangeMethod,
  } = store;

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
};
