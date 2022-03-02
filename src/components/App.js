import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './Header';
import Fact from './Fact';
import Image from './Image';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('page not set')

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Fact />
      <Image page={page} setPage={setPage}/>
    </QueryClientProvider>
  );
}

export default App;
