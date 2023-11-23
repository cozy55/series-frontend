import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import './Card.css'

const ContentCard = ({id, title, sources, subscribed}) => {
  const [subscribe, setSubscribe] = useState(subscribed);

  const handleSubscription = () => {
    setSubscribe(!subscribe)
    console.log(subscribe)
    console.log(`http://localhost:8080/api/content/${id}`)
    fetch(`http://localhost:8080/api/content/${id}`, {
            method: subscribe? "DELETE" : "POST",
            headers:{
              'Authorization': localStorage.getItem("token")
            }
        })
  };

  var source = sources[0]
  var image = source != undefined ? source.imageUrl : 'https://t4.ftcdn.net/jpg/05/07/58/41/360_F_507584110_KNIfe7d3hUAEpraq10J7MCPmtny8EH7A.jpg'
  return (
    <Card className='card'>
      <CardMedia className='media' image={image} title={title} />
      <CardContent className='content'>
        <div className='top'>
          <Typography className='title' variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton onClick={() => handleSubscription()} variant="contained" color={subscribe ? 'primary' : 'default'} size='large'>
              {subscribe ? <TurnedInIcon fontSize="inherit"/> : <TurnedInNotIcon fontSize="inherit"/>}
          </IconButton>
        </div>
        <div className='buttonContainer'>
          {sources.map((source) =>(
            <Button key={source.sourceType} variant="contained" color="primary" href={source.url}>
            {source.sourceType}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
