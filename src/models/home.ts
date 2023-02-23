import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./core/store";
import { Calculator } from "../lib/types/calculators";

interface HomeState {
  searchKeyword: string;
  calculators: Calculator[];
}

const initialState: HomeState = {
  searchKeyword: "",
  calculators: [
    {
      id: "1",
      title: "복리 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "2",
      title: "전역일 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "3",
      title: "연금 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "4",
      title: "급여 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "5",
      title: "실수령액 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "6",
      title: "세금 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "7",
      title: "디데이 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "8",
      title: "카드값 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "9",
      title: "이자 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
    {
      id: "10",
      title: "군적금 계산기",
      description: "간단한 복리계산기로 다양한 계산을 해보세요!",
    },
  ],
};

export const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeSearchKeyword: (state, payload: PayloadAction<string>) => {
      state.searchKeyword = payload.payload;
    },
  },
});

export const { changeSearchKeyword } = HomeSlice.actions;

export const selectCalculators = (state: RootState) => state.home.calculators;
export const selectSearchKeyword = (state: RootState) =>
  state.home.searchKeyword;
export const selectFilteredCalculators = (state: RootState) =>
  state.home.calculators.filter((value) => {
    if (value.title.includes(state.home.searchKeyword)) return value;
  });

export default HomeSlice.reducer;
