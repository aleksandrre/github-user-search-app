import React from 'react'
import axios from 'axios';
import logo from "../img/icon-search.svg"
import { useEffect } from 'react';
import { Container,Logo,Input,Button } from './SearchBox.styled';
const SearchBox = ({user,setUser,value,setValue}) => {
    const saveValue=(event)=>{
        setValue(event.target.value)
    }

    const addUser =(event)=>{
        event.preventDefault();
        userRequest();
        setValue('')
    }
    
    useEffect(() => {
    const MyUser = async () => {
        const res = await axios(`https://api.github.com/users/aleksandrre`);
        const data = res.data;
        setUser(data);
        console.log(data)
      };
    
      MyUser();
    },[])

    const userRequest= async ()=>{
        const res = await axios(`https://api.github.com/users/${value}`);
        const data = res.data;
        setUser(data);
        console.log(data)
    }
  return (
    <Container>
        <Logo src={logo}/>
        <Input placeholder='Search GitHub username...' onChange={saveValue} value={value} />
        <Button onClick={addUser}>Search</Button>
    </Container>
  )
}

export default SearchBox
