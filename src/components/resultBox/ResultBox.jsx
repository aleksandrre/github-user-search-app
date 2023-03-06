import websiteImg from "../img/icon-website.svg"
import twitterImg from "../img/icon-twitter.svg"
import locationImg from "../img/icon-location.svg"
import githubImg from "../img/icon-company.svg"
import {
  Container,
  InfoBox,
  Logo,
  User,
  TagName,
  Date,
  Info,
  Bio,
  States,
  StatesBoxs,
  ReposText,
  Repos,
  FollowersText,
  Followers,
  FollowingText,
  PersonalInfoBoxWeb,
  PersonalInfoBoxTwitter,
  Following,
  TabletBox,
  PersonalInfo,
  PersonalInfoBoxGithub,
  PersonalInfoBoxLocation,
  PersonalInfoBoxText,
  Desktop,
  DesktopLogo,
  PersonalInfoBoxImg,
} from "./ResultBox.styled";
 function ResultBox({user}) {
  
  const create = `${user.created_at}`;
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Container>
      <DesktopLogo src={user.avatar_url} alt="" />
      <Desktop>
        <InfoBox>
          <Logo src={user.avatar_url} alt="" />
          <Info>
            <div>
              <User>{user.name}</User>
              <TagName>@{user.login}</TagName>
            </div>
            <Date>
              Joined {create.slice(8, 10)} {months[create.slice(5, 7)]}{" "}
              {create.slice(0, 4)}
            </Date>
          </Info>
        </InfoBox>
        <Bio>{user.bio}</Bio>
        <States>
          <StatesBoxs>
            <ReposText>Repos</ReposText>
            <Repos>{user.public_repos}</Repos>
          </StatesBoxs>
          <StatesBoxs>
            <FollowersText>Followers</FollowersText>
            <Followers>{user.followers}</Followers>
          </StatesBoxs>
          <StatesBoxs>
            <FollowingText>Following</FollowingText>
            <Following>{user.following}</Following>
          </StatesBoxs>
        </States>
        <PersonalInfo>
          <TabletBox>
            <PersonalInfoBoxLocation
              
              
            >
              <PersonalInfoBoxImg src={locationImg} alt="locationImg" />
              <PersonalInfoBoxText>
                {user.location != null ? user.location : "Not Available"}
              </PersonalInfoBoxText>
            </PersonalInfoBoxLocation>
            <PersonalInfoBoxGithub >
              <PersonalInfoBoxImg src={githubImg} alt="githubImg" />
              <PersonalInfoBoxText
                href={user.blog != null ? user.blog : "Not Available"}
              >
                Blog Link
              </PersonalInfoBoxText>
            </PersonalInfoBoxGithub>
          </TabletBox>
          <TabletBox>
            <PersonalInfoBoxTwitter  >
              <PersonalInfoBoxImg src={twitterImg} alt="twitter" />
              <PersonalInfoBoxText
                href={
                  `${user.twitter_username}` !== "null"
                    ? `https://twitter.com/${user.twitter_username}`
                    : "Not Available"
                }
              >
                Twitter
              </PersonalInfoBoxText>
            </PersonalInfoBoxTwitter>
            <PersonalInfoBoxWeb >
              <PersonalInfoBoxImg src={websiteImg} alt="websiteImg" />
              <PersonalInfoBoxText>
                {user.company != null ? user.company : "Not Available"}
              </PersonalInfoBoxText>
            </PersonalInfoBoxWeb>
          </TabletBox>
        </PersonalInfo>
      </Desktop>
    </Container>
    
  )
}

export default ResultBox