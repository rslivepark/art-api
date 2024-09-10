// useFetchPerformanceData.jsx
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// API 데이터 가져오는 커스텀 훅
const fetchConcertData = async () => {
  const { data } = await axios.get(
    `http://api.kcisa.kr/openapi/API_CCA_142/request?serviceKey=0aa6219f-c8de-491e-86be-4f9077f9ddd1&numOfRows=10&pageNo=1&infoTp=007`
  );
  return data.response.body.items;
};

export const useFetchConcert = () => {
  return useQuery({
    queryKey: ['apiData'],
    queryFn: fetchConcertData,
  });
};

// Concert
