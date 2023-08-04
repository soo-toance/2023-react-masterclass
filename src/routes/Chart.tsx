import { useParams } from "react-router";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId } : ChartProps) { // parameter 가져오는 방법 2 
  // const params = useParams(); // parameter 가져오는 방법 1 
  const {isLoading, data } = useQuery(
      ["tickers", coinId],
      () => fetchCoinHistory(coinId)
  );
  
  return <h1>Chart</h1>;
}

export default Chart;