import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { useSetRecoilState } from "recoil";
import { themeAtom } from "../atoms";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Header = styled.header`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CoinsList = styled.ul`
`;

const Coin = styled.li`
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.5s ease-in;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor}
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor}
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinInferface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

interface ICoinProps {
}

// a href 는 redirect 시킴, link 사용 
function Coins({}: ICoinProps) {
    // const [coins, setCoins] = useState<CoinInferface[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // https://api.coinpaprika.com/v1/coins
    //     (async() => {
    //         // execute immediately 
    //         const response = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const json = await response.json();

    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })(); 
    // }, []) // component start 시작 시에만 수행

    const { isLoading, data } = useQuery<CoinInferface[]>("allCoins", fetchCoins)
    const setDarkAtom = useSetRecoilState(themeAtom);
    const toggleDarkAtom = () =>setDarkAtom((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleDarkAtom}>Toggle Dark Mode</button>
            </Header>
            {
                isLoading ? (
                    <Loader>"Loading"</Loader>
                ) : <CoinsList>
                    {
                        data?.slice(0, 100).map(coin => (
                        <Coin key={coin.id}>
                            <Link to={{
                                    pathname: `/${coin.id}`,
                                    state: { name: coin.name },
                                }}>
                                    <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}></Img>
                                    {coin.name} &rarr; 
                            </Link>
                        </Coin>
                    ))}

                </CoinsList>
            }
        </Container>
    )
}

export default Coins;