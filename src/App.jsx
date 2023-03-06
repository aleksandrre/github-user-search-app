
import { useState } from "react";
import HeadBox from "./components/headBox/HeadBox.jsx";
import SearchBox from "./components/searchBox/SearchBox";
import ResultBox from "./components/resultBox/ResultBox";
import { Maindiv } from "./App.styled.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { themeLight } from "./components/styles/themeLight.jsx";
import { themeDark } from "./components/styles/themeDark.jsx";
function App() {
  // states save values of users from input
  const [user,setUser]=useState('');
  const [value,setValue]=useState('')
  //
  const[color,setColor]=useState(true)
  const[theme,setTheme]=useState(themeLight)



  
  return <Maindiv>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <HeadBox color={color} setColor={setColor} theme={theme} setTheme={setTheme} themeLight={themeLight} themeDark={themeDark}/>
    <SearchBox user={user} setUser={setUser} value={value} setValue={setValue}/>
    <ResultBox user={user}/>
  </ThemeProvider>
  </Maindiv>;
}

export default App;
