import { create } from "zustand";
import { COUNT_OPERATION } from "../utils/constants";

export const useDigitCount = create((set) => {
  return {
    counts: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    },
    changeDigitCount: ({ digit, operation }) =>
      set((state) => {
        const newCounts = state.counts;

        for (let [num, count] of Object.entries(newCounts)) {
          if (num === digit) {
            switch (operation) {
              case COUNT_OPERATION.increase:
                newCounts[digit] = count + 1;
                break;

              case COUNT_OPERATION.decrease:
                newCounts[digit] = count - 1;
                break;

              default:
                console.log("fuck this count");
            }
          }
        }

        return {
            counts: {...newCounts}
        };
      }),
    clearCount: () => {},
  };
});
