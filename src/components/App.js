import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './Header';
import Fact from './Fact';
import Image from './Image';
import { useState } from 'react';
import bowtieCat from '../images/christy-bowtie-cat.png';
import indyTeeth from '../images/IndyTeeth.png';
import katieCat from '../images/katie-cat.png';
import kimCat from '../images/kim-cat.png';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('page not set')

  const onImageClick = () => {
    setPage('image')
  }

  const onGifClick = () => {
    setPage('gif')
  }

  return (
    <QueryClientProvider client={queryClient}>
      <img className="cat-img" id="bowtieCat" src={bowtieCat}/>
      <img className="cat-img" id="teethCat" src={indyTeeth}/>
      <img className="cat-img" id="katieCat" src={katieCat}/>
      <img className="cat-img" id="kimCat" src={kimCat}/>
      <div className='container'>
        <Header />
        <Fact className='fact'/>
        <Image page={page} onImageClick={onImageClick} onGifClick={onGifClick}/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
