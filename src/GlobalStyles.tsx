import { css, Global } from "@emotion/react";

export default function GlobalStyles() {
  return (
    <Global styles={
      css`
        html, body, #app {
          height: 100%;
        }
      `
    } />
  )
}
