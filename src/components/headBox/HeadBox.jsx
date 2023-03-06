import React from 'react'
import { Container,Logo,Theme,ThemeText,ThemeImg } from './HeadBox.styled'
import sun from "../img/icon-sun.svg"
import moon from "../img/icon-moon.svg"


const HeadBox = ({theme,setTheme,color,setColor,themeLight,themeDark}) => {

  const changeTheme=()=>{
    setColor(!color)
    color?setTheme(themeDark):setTheme(themeLight)
    console.log(color)
  }
  // console.log(color)
  return (
    <Container>
      <Logo>devfinder</Logo>
      <Theme onClick={changeTheme}>
        <ThemeText>{color?"DARK":"LIGHT"}</ThemeText>
        <ThemeImg src={color?moon:sun}/>
      </Theme>
    </Container>
  )
}

export default HeadBox