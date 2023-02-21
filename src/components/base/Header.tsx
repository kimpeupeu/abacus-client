import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { useAppDispatch } from "../../models/core/hooks";
import { toggleDarkMode } from "../../models/theme";
import Responsive from "./Responsive";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const dispatch = useAppDispatch();

  return (
    <Block>
      <Inner>
        <h3>알 빠진 주판</h3>
        <Right>
          <ThemeButton onClick={() => dispatch(toggleDarkMode())}>
            <FontAwesomeIcon icon={solid("moon")} />
          </ThemeButton>
        </Right>
      </Inner>
    </Block>
  );
};

const Block = styled.div`
  height: 4rem;
`;

const Inner = styled(Responsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
`;

const ThemeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  border-radius: 1.25rem;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
  margin-right: 0.5rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  cursor: pointer;
  background-color: ${({ theme }) => theme.bg_element1};
`;

export default Header;
