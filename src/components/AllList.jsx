// AllList.jsx
import React from 'react';
import { useFetchPerformanceData } from '../hooks/useFetchPerformanceData';

const AllList = () => {
  const { data, error, isLoading, isError } = useFetchPerformanceData();

  console.log(data);

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

  return (
    <div>
      <h1>예술의전당_종합 공연정보 Data</h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {data?.item?.map((list, index) => (
          <li key={index} className='flex flex-col items-center'>
            <img
              src={`${list.IMAGE_OBJECT}`}
              alt='poster'
              style={{ height: '200px' }}
              onError={handleImageError}
            />
            <h3>{list.TITLE}</h3>
            <h5>공연기간 {list.PERIOD}</h5>
            <h5>장르: {list.GENRE}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllList;
