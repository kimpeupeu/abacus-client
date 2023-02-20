import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { useAppDispatch } from "../../models/core/hooks";
import { enableDarkMode } from "../../models/theme";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const dispatch = useAppDispatch();

  return (
    <Block>
      <Inner>
        <h3>알 빠진 주판</h3>
        <Right>
          <SearchButton onClick={() => dispatch(enableDarkMode())}>
            <FontAwesomeIcon icon={solid("search")} />
          </SearchButton>
        </Right>
      </Inner>
    </Block>
  );
};

const Block = styled.div`
  height: 4rem;
`;

const Inner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  border: none;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
  margin-right: 0.5rem;
`;

export default Header;
