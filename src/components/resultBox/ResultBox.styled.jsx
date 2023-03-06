import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  border-radius: 1em;
  margin-top: 1em;
  padding: 1.5em;
  box-shadow: 0px 16px 30px -10px #4660bb33;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    width: 35.8125em;
    padding: 2.5em;
  }
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    width: 45.625em;
    padding: 3em;
    display: flex;
    flex-direction: row;
    gap: 2.3125em;
  }
`;

export const InfoBox = styled.div`
  min-width: 14.5625em;
  height: 4.375em;
  display: flex;
  gap: 1.1875em;
  flex-direction: row;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    min-width: 20.875em;
    height: 7.3125em;
    gap: 2.5625em;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    min-width: 100%;
    gap: 1em;
    margin-top: -4em;
  }
`;

export const Logo = styled.img`
  width: 4.375em;
  height: 4.375em;
  border-radius: 50%;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    height: 7.3125em;
    width: 7.3125em;
  }
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    display: none;
  }
`;

export const Desktop = styled.div`
  display: block;
  width: 100%;
`;

export const DesktopLogo = styled.img`
  height: 7.3125em;
  width: 7.3125em;
  border-radius: 50%;
  display: none;
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    display: block;
  }
`;

export const User = styled.h1`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.name};
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 1.625em;
  }
`;

export const TagName = styled.p`
  color: ${({ theme }) => theme.colors.button};
  font-size: 0.8125em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 1em;
  }
`;

export const Date = styled.p`
  font-size: 0.8125em;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.3em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 0.9375em;
  }
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    margin-top: 0.6em;
  }
`;

export const Bio = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8125em;
  margin-top: 2.125em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 0.9375em;
  }
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    margin-top: -3em;
  }
`;

export const States = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  width: 100%;
  border-radius: 0.625em;
  margin-top: 1.4375em;
  margin-bottom: 1.5em;
  height: 5.3125em;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    padding: 2em;
    margin-top: 2em;
  }
`;

export const StatesBoxs = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 4.9375em;
  text-align: center;
  height: 3em;
  align-items: center;
  text-align: center;
`;

export const ReposText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.6875em;
  line-height: 1em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 0.8125em;
  }
`;

export const FollowersText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.6875em;
  line-height: 1em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 0.8125em;
  }
`;

export const FollowingText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.6875em;
  line-height: 1em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 0.8125em;
  }
`;

export const Repos = styled.h1`
  color: ${({ theme }) => theme.colors.name};
  font-size: 1em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 1.375em;
  }
`;

export const Followers = styled.h1`
  color: ${({ theme }) => theme.colors.name};
  font-size: 1em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 1.375em;
  }
`;

export const Following = styled.h1`
  color: ${({ theme }) => theme.colors.name};
  font-size: 1em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    font-size: 1.375em;
  }
`;

export const TabletBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 3em;
  @media (min-width: ${({ theme }) => theme.responsive.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    width: 26.8125em;
    margin-top: 2em;
    margin-bottom: 1em;
  }
`;
export const PersonalInfoBoxTwitter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.1875em;
  opacity: ${(props) => (props.twitter ? "100%" : "50%")};
`;
export const PersonalInfoBoxGithub = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.1875em;
  opacity: ${(props) => (props.github ? "100%" : "50%")};
`;
export const PersonalInfoBoxLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.1875em;
  opacity: ${(props) => (props.location ? "100%" : "50%")};
`;
export const PersonalInfoBoxWeb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.1875em;
  opacity: ${(props) => (props.website ? "100%" : "50%")};
`;

export const PersonalInfoBoxText = styled.a`
  font-size: 0.8125em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    text-decoration: underline;
    transition: 0.4s;
  }
`;

export const PersonalInfoBoxImg = styled.img``;


