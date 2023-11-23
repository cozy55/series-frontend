'use client'
import React, { useEffect, useState } from 'react';
import { Typography, Container, Box, Pagination, IconButton } from '@mui/material';
import ContentCard from '../ContentCard'
import ContentList from '../ContentList'
import Header from '../Header';
import './Subscriptions.css'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import CircularProgress from '@mui/material/CircularProgress';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'


const Subscriptions = () => {
    const [contents, setContents] = useState();
    const router = useRouter()

    useEffect(() => {
        console.log(`http://localhost:8080/api/content/subscriptions`)
        fetch(`http://localhost:8080/api/content/subscriptions` ,{
        headers:{
            'Authorization': localStorage.getItem("token"),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
            if(response.status == 401){
                localStorage.removeItem("token")
                router.replace(`/login`)
            } else {
                return response.json()
            }
        })
        .then(data => {console.log(data);setContents(data)})
        .catch((error) => {
            console.log(error)
          });
  }, []);

  return (
    <div>
      <Container>
        <Header />
        <div className="container">
            <Typography component="h1" variant="h5">
                Підписки
            </Typography>
          {contents
            ? <ContentList contents={contents} />
            : <Box className="loading"> <CircularProgress /> </Box>}
        </div>
      </Container>
    </div>
  );
}

export default Subscriptions;