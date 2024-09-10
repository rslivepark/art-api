// useFetchPerformanceData.jsx
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// API 데이터 가져오는 커스텀 훅
const fetchPerformanceData = async () => {
  const { data } = await axios.get(
    `http://api.kcisa.kr/openapi/API_CCA_148/request?serviceKey=d912a8d9-2795-4b84-a7c8-72e884b5f7c8&numOfRows=20&pageNo=1`
  );
  return data.response.body.items;
};

export const useFetchPerformanceData = () => {
  return useQuery({
    queryKey: ['apiData'],
    queryFn: fetchPerformanceData,
  });
};

// AllList
