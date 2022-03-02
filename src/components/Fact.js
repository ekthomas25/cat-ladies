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
    <div className="fact">
      <h2>Cat Fact:</h2>
      {status === 'loading' && (
        <div><p>Loading...</p></div>
      )}

      {status === 'error' && (
        <div><p>Error fetching data</p></div>
      )}

      {status === 'success' && (
        <div><p>{data.text}</p></div>
      )}
    </div>
  )
}

export default Fact;