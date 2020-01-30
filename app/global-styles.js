import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    padding: 20px 0;
  }

  p,
  label {
    line-height: 1.5em;
  }
`
