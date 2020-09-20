import styled from 'styled-components';

export const Filme = styled.section`
    width: 200px;
    height: 290px;
    margin: 20px;
    

    img {
        min-height: 290px;
        min-width: 200px;

        max-height: 290px;
        max-width: 200px;
    }

    &:hover {
        transform: scale(1.1);
        

    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`

export const Main = styled.main`
    background-color:#1C1C1C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 50vh;
    width: 100%;
    
        img {
        width: 80px;
        height: 80px;
    }
`

export const Title = styled.h1`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    article {
        font-family: Sansation;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 87px;
        text-align: center;

        color: #FF3030;
    }

    img {
        position: absolute;
        left: 115px;
    }

    @media(max-width: 700px) {
        flex-direction: column;
        img {
            left: 38.5%;
            top: 47%;
        }
    }
`;
