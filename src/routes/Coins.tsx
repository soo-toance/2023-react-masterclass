import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul`
`;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        padding: 20px;
        transition: color 0.5s ease-in;
        display: block;
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

interface CoinInferface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

// a href 는 redirect 시킴, link 사용 
function Coins() {
    const [coins, setCoins] = useState<CoinInferface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // https://api.coinpaprika.com/v1/coins
        (async() => {
            // execute immediately 
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();

            setCoins(json.slice(0, 100));
            setLoading(false);
        })(); 
    }, []) // component start 시작 시에만 수ㅇ 

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {
                loading ? (
                    <Loader>"Loading"</Loader>
                ) : <CoinsList>
                    {
                        coins.map(coin => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`}>{coin.name} &rarr; </Link>
                        </Coin>
                    ))}

                </CoinsList>
            }
        </Container>
    )
}

export default Coins;