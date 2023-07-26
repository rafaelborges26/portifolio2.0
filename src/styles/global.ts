import { createGlobalStyle } from 'styled-components'
import { Themes } from './themes'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Sora, sans-serif;

    text-rendering: optimizelegibility;
}

body {
    background: #094074;
    padding: 2rem;
    color: #E4FDE1;

    @media (max-width: ${Themes.breakPoints.mobile}) {
        padding: 1rem;
    }

}

h2 {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
}
`