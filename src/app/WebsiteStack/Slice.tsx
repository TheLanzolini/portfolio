import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../constants/palette';
import matrix from './matrix.gif';
import spaceOne from './space-1.gif';
import spaceTwo from './space-2.gif';
import spaceThree from './space-3.gif';
import spaceFour from './space-4.gif';
import spaceFive from './space-5.gif';
import spaceSix from './space-6.gif';
import spaceSeven from './space-7.gif';
import spacecat from './spacecat.gif';

interface SliceProps {
  progress: number;
  offset: number;
  onClick: (() => void) | null;
}

const spaceMap = [
  spaceOne,
  spaceTwo,
  spaceThree,
  spaceFour,
  spaceFive,
  spaceSix,
  spaceSeven,
  matrix,
];

const StyledSlice = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  cursor: pointer;
  #svg_6 {
    stroke: #efefef;
  }
  &:hover #svg_6 {
    stroke: ${primary};
  }
  &:hover #svg_image {
    display: block;
  }
  #svg_image {
    display: none;
  }
`;

// Created with Method Draw - http://github.com/duopixel/Method-Draw/
export const Slice = (props: SliceProps) => {
  const { offset, progress, ...rest } = props;
  return (
    <StyledSlice
      width="283"
      height="283"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `translateY(${
          offset * progress * 2 + offset * 3
        }px) translateX(-${progress * 5}px) rotateX(0) rotateZ(${
          progress * 0.9 * offset
        }deg)`,
        zIndex: 100 - offset,
      }}
      {...rest}
    >
      <g>
        <title>Click to Explore</title>
        <clipPath id="imageClip">
          <rect
            stroke="#000"
            rx="20"
            transform="rotate(45 290.00003051757824,200.00001525878903) "
            id="svg_5"
            height="200"
            width="200"
            y="163.000008"
            x="45.000015"
            strokeWidth="3"
            fill="#fff"
          />
        </clipPath>
        <rect
          rx="20"
          transform="rotate(45 290.00003051757824,200.00001525878903) "
          id="svg_6"
          height="200"
          width="200"
          y="163.000008"
          x="45.000015"
          strokeWidth="6"
          fill="#fff"
        />
        <rect
          rx="20"
          transform="rotate(45 290.00003051757824,200.00001525878903) "
          id="svg_7"
          height="200"
          width="200"
          y="163.000008"
          x="45.000015"
          strokeWidth="6"
          fill={primary}
        />
        <image
          id="svg_image"
          height="283"
          href={spaceMap[offset] || spacecat}
          clipPath="url(#imageClip)"
        />
      </g>
    </StyledSlice>
  );
};
