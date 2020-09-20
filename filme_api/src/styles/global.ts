import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`

*{
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box; 
}

body {
    --webkit-font-smoothing: antialiased;
    max-width: 960px;
    margin: 0 auto;
    height: 100vh;
}  

border-style, input, button {
    font: 16px Roboto, sans-serif;
}

#root {
    max-width: 960px;
    min-height: 100vh;
    padding: 20px 20px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    margin: 0 auto;

    font-family: Rosario;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 87px;
    text-align: center;

    color: black;
}

`