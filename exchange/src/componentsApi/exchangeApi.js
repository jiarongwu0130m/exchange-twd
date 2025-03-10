import { useExchangeStore } from "@/stores/exchangeStore";
import { storeToRefs } from "pinia";

export const useExchangeApi = () => {
  const store = useExchangeStore();
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
  } = storeToRefs(store);

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
};
