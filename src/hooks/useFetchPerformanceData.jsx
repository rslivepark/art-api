// useFetchPerformanceData.jsx
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Netlify Functions를 통해 API 데이터 가져오는 커스텀 훅
const fetchConcertData = async () => {
  const { data } = await axios.get('/.netlify/functions/fetchConcertData');
  return data;
};

export const useFetchConcert = () => {
  return useQuery({
    queryKey: ['apiData'],
    queryFn: fetchConcertData,
  });
};
