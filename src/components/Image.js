import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchImage = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png');
  return res.json();
}

const fetchGif = async () => {
  const resGif = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif');
  return resGif.json();
}

const Image = (props) => {
  const {data, status, refetch} = useQuery('image', fetchImage);
  const gifResult = useQuery('gif', fetchGif);
  const gifData = gifResult.data
  const gifStatus = gifResult.status
  const gifRefetch = gifResult.refetch 

  console.log(gifResult)
  console.log(props.page)

  const onGifButtonClick = () => {
    gifRefetch()
    props.onGifClick()
  }

  const onImageButtonClick = () => {
    refetch()
    props.onImageClick()
  }

  let currentStatus;
  let currentData;

  if (props.page === 'image') {
    currentStatus = status
    currentData = data
  } else {
    currentStatus = gifStatus
    currentData = gifData
  }

  return (
    <div id='main'>
      {currentStatus === 'loading' && (
        <div>Loading Cat Pictures</div>
      )}

      {currentStatus === 'error' && (
        <div>Error fetching cats</div>
      )}

      {currentStatus === 'success' && (
        <img src={`${currentData[0].url}`} />
      )}
      <div id='buttons'>
        <button onClick={onImageButtonClick}>Random Cat Image</button>
        <button onClick={onGifButtonClick}>Random Cat Gif</button>
      </div>
    </div>
  )
}

export default Image;