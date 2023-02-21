import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";
import { useAppDispatch, useAppSelector } from "../../models/core/hooks";
import { changeSearchKeyword, selectSearchKeyword } from "../../models/home";
import Input from "../common/Input";

export interface HomeSearchProps {}

const HomeSearch: React.FC<HomeSearchProps> = () => {
  const searchKeyword = useAppSelector(selectSearchKeyword);
  const dispatch = useAppDispatch();

  return (
    <Block>
      <SearchInput
        large
        value={searchKeyword}
        onChange={(e) => {
          dispatch(changeSearchKeyword(e.target.value));
        }}
      />
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SearchInput = styled(Input)`
  width: 800px;

  ${mediaQuery(1919)} {
    width: 600px;
  }
  ${mediaQuery(1440)} {
    width: 400px;
  }
  ${mediaQuery(1056)} {
    width: calc(100% - 2rem);
  }
`;

export default HomeSearch;
