/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: ${active ? '5px' : '3px'};
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? '#00A9CC' : 'white'};
    `}
  />
)

const Dots = ({ slides, activeIndex }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      @media(max-width : 499px){
          bottom: 20px;
      }
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
)

export default Dots