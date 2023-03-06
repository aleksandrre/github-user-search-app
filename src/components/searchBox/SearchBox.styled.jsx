import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  border-radius: 1em;
  height: 3.75em;
  display: flex;
  align-items: center;
  gap: 1.1437em;
  box-shadow: 0px 16px 30px -10px #4660bb33;
  padding: 1em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    width: 35.8125em;
    height: 4.3125em;
  }
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    width: 45.625em;
    height: 4.3125em;
  }
`;

export const Logo = styled.img`
  width: 1.1em;
  height: 1.1em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    width: 1.375em;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 1.5625em;
  &::placeholder {
    font-size: 0.8125em;
    color: ${({ theme }) => theme.colors.text};
  }
  &:valid {
    font-size: 0.8125em;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 2px;
  }
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    &::placeholder {
      font-size: 1em;
      margin-top: 2px;
    }
    &:valid {
      font-size: 1em;
    }
  }
`;

export const Button = styled.button`
  min-width: 5.25em;
  height: 2.875em;
  font-size: 0.875em;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border: 0px;
  border-radius: 0.625em;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    transition: 0.4s;
  }
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    min-width: 6.625em;
    height: 3.125em;
    font-size: 1em;
  }
`;