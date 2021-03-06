/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import leftArrow from '../../../../assets/images/angleleft.png'
import rightArrow from '../../../../assets/images/angleright.png'

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      @media(max-width: 499px){
        top: 55%;
      }
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 30px;
      width: 30px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
  </div>
)

export default Arrow