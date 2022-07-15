import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = [
  css({
    body: {
      WebkitTapHighlightColor: theme`colors.purple.500`,
      ...tw`antialiased`,
    },
  }),
  css`
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('Inter-Regular.woff2?v=3.19') format('woff2');
    }
    html {
      font-family: 'Inter', serif;
    }
  `,
]

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
