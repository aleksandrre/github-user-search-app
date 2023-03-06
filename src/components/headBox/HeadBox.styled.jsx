import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2em;
  
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    width: 35.8125em;
  }
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    width: 45.625em;
  }
`;

export const Logo = styled.h1`
  font-size: 1.625em;
  color: ${({ theme }) => theme.colors.logo};
`;

export const Theme = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  
  align-items: center;
`;

export const ThemeText = styled.h1`
  font-size: 0.8125em;
  transition: 0.3s;
  letter-spacing: 2.5px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.themeHover};
    transition: 0.3s;
  }
`;

export const ThemeImg = styled.img`
  width: 1.25em;
  height: 1.25em;
`;
