import { useParams } from "react-router";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: string;
  volume: number;
  market_cap: number;
}

interface PriceProps {
  coinId: string;
}

const PricesList = styled.table`
  color: ${props => props.theme.textColor};
  font-size: 12px;

  thead {
    line-height: 30px;
    text-decoration: underline;
    text-align: center;
  }
`;

const Prices = styled.tr`
    color: ${props => props.theme.textColor};
    height: 20px;
    padding: 10px;

    td {
      width: 500px;
    }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

function Price({coinId} : PriceProps) {
  const {isLoading, data } = useQuery<IHistorical[]>(
    [ "fetchCoinHistory", coinId ],
    () => fetchCoinHistory(coinId)
  );


    return (
      <div>
        {
          isLoading ? (
              <Loader>"Loading"</Loader>
          ) : <PricesList>
              <thead>
                <td>time_close</td>
                <td>price</td>
              </thead>
              {
                  data?.slice(0, 100).map(coin => (
                  <Prices key={coin.time_close}>
                    <td>{new Date(coin.time_close).toISOString().replace(/T/, ' ').replace(/\..+/, '')}</td>
                    <td>{coin.close}</td>
                      {/* {new Date(coin.time_close).toISOString().replace(/T/, ' ').replace(/\..+/, '')} : {coin.close} 미김  */}
                  </Prices>
              ))}

          </PricesList>
      }
      </div>
    );
}

export default Price;