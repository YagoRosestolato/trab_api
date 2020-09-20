import styled from 'styled-components';


export const Filme = styled.main`
    background-color: #1C1C1C;
    border: 1px solid green;
    border-radius: 10px;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
        height: 480px;
    }

    & > div {
        min-height: 480px;
    }
      
    @media(max-width: 700px){
        text-align: center;
        min-height:50vh;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding:10px;
      
      img{
          width: 100%;
      }
       
        
    }
   

`;

export const Subtitle = styled.h2`
    color: #f1faee;
    font-size: 16px;
    line-height: 26px;
    max-width: 786px;
    overflow: hidden;
    text-align: justify;
    
    
    
    @media(max-width: 700px){
        width: 100%;
        height: 100%;
        overflow: initial;
   
    }
   
    
`;

export const Rodape = styled.div`
    p{
        font-family: Rosario;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 29px;
        text-align: center;

        color: #f1faee;

        @media(max-width: 700px){
            width: 100%;
 
    }
`;

export const Info = styled.div`

    h1 {

        a {
            font-size: 10px;
            text-decoration:none;
            margin-right: 8px;
            color: #f1faee;
        }

        width: 786px;
        max-height: 480px;
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;

        padding: 20px;
        color: #f1faee;

        @media(max-width: 700px){
            justify-content: center;
            width: 100%;
            padding: 0;
           
        
    }
`;

