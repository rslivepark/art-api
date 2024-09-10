// AllList.jsx
import React from 'react';
import { useFetchConcert } from '../hooks/useFetchConcert';

const Concert = () => {
  const { data, error, isLoading, isError } = useFetchConcert();

  console.log('Concert', data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = '/logo512.png';
  };

  // old version
  return (
    <div>
      <h1>예술의전당_종합 공연정보({data?.item?.collectionDb}) Data </h1>
      <ul>
        {data?.item?.map((list, index) => (
          <li key={index}>
            <img
              src={`${list.referenceIdentifier}`}
              alt='poster'
              style={{ height: '300px' }}
              onError={handleImageError}
            />
            <h3>{list.title}</h3>
            <h5>공연기간 {list.regDate}</h5>
            <p>{list.subjectCategory}</p>
            <p>자원에 대한 권리: {list.rights}</p>
            <a href={`${list.url}`}>상세정보</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Concert;
