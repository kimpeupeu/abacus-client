import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";
import media from "../../lib/styles/media";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  large?: boolean;
}

const Input: React.FC<InputProps> = ({ className, large, ...props }) => {
  return (
    <Block className={className} large>
      <FontAwesomeIcon icon={solid("search")} />
      <input {...props} />
    </Block>
  );
};

const Block = styled.div<{ large?: boolean }>`
  display: flex;
  height: 2.25rem;
  border: 1px solid ${({ theme }) => theme.border2};
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  align-items: center;
  transition: all 0.125s ease-in;
  cursor: text;
  svg {
    transition: all 0.125s ease-in;
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: ${({ theme }) => theme.text1};
    flex-shrink: 0;
  }
  input {
    transition: all 0.125s ease-in;
    font-size: 0.875rem;
    flex: 1;
    display: block;
    line-height: 1rem;
    height: 1rem;
    padding: 0;
    border: none;
    outline: 0;
    background: transparent;
    color: ${({ theme }) => theme.text2};
    min-width: 0;
    &::placeholder {
      color: ${({ theme }) => theme.text3};
    }
  }

  ${(props) =>
    props.large &&
    css`
      height: 4rem;
      padding: 0 1.5rem;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1.25rem;
      }
      input {
        font-size: 1.5rem;
        line-height: 2rem;
        height: 2rem;
      }
      ${media.small} {
        height: 2.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        svg {
          width: 1rem;
          height: 1rem;
          margin-right: 0.75rem;
        }
        input {
          flex: 1;
          font-size: 1.125rem;
          line-height: 1.5;
          height: auto;
        }
      }
    `}
`;

export default Input;
