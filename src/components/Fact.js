import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchFact = async () => {
  const res = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`);
  return res.json();
}

const Fact = () => {
  const { data, status } = useQuery('fact', fetchFact);
  console.log(data);
  return (
    <div>
      <h2>Cat Fact:</h2>
      {status === 'loading' && (
        <div>Loading...</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>{data.text}</div>
      )}
    </div>
  )
}

export default Fact;