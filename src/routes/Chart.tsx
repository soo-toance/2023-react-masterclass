import { useParams } from "react-router";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";


interface IHistorical {
  time_open: string;
  time_close: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId } : ChartProps) { // parameter 가져오는 방법 2 
  // const params = useParams(); // parameter 가져오는 방법 1 
  const {isLoading, data } = useQuery<IHistorical[]>(
      [ "fetchCoinHistory", coinId ],
      () => fetchCoinHistory(coinId)
  );


  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((item) => { 
                return {
                  x : new Date(item.time_close),
                  y : [parseFloat(item.open), parseFloat(item.high), parseFloat(item.low), parseFloat(item.close)]
                };
              }) ?? []
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: 'candlestick',
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            yaxis: {
              tooltip: {
                enabled: true
              }
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;