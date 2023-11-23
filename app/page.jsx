'use client'
// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { TextField, Container, Box, Pagination, IconButton } from '@mui/material';
import ContentCard from './ContentCard'
import ContentList from './ContentList'
import Header from './Header';
import './Home.css'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import CircularProgress from '@mui/material/CircularProgress';

const HomePage = () => {
  const [contents, setContents] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    console.log(`http://localhost:8080/api/content?search=${searchQuery}&page=${page}&sortBy=${isSorted? "title" : ""}`)
    fetch(`http://localhost:8080/api/content?search=${searchQuery}&page=${page}&sortBy=${isSorted? "title" : ""}` ,{
      headers:{
        'Authorization': localStorage.getItem("token") || '',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if(response.status == 401){
          localStorage.removeItem("token")
      } else {
          return response.json()
      }
  })
    .then(data => {console.log(data);setContents(data)})
  }, [searchQuery, page, isSorted])

  return (
    <div>
      <Container>
        <Header />
        <div className="container">
          <div>
            <TextField className="" label="Пошук" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}}
            InputProps={{endAdornment: (
              <IconButton onClick={() => setIsSorted(!isSorted)} variant="contained" color={isSorted ? 'primary' : 'default'} size='large'>
                <SortByAlphaIcon fontSize="large" color={isSorted ? 'primary' : 'default'}/>
              </IconButton>
             )}}/>
          </div>
          {contents
            ? <ContentList contents={contents} />
            : <Box className="loading"> <CircularProgress /> </Box>}
          <Pagination count={page+2} color="primary" siblingCount={2} boundaryCount={0} onChange={(e, value) => setPage(value-1)}/>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
