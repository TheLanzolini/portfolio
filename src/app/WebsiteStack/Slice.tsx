import React from 'react';
import styled from 'styled-components';
import spaceOne from './space-1.gif';
import spaceTwo from './space-2.gif';
import spaceThree from './space-3.gif';
import spacecat from './spacecat.gif';

interface SliceProps {
  progress: number;
  offset: number;
}

const spaceMap = [spaceOne, spaceTwo, spaceThree];

const StyledSlice = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

// Created with Method Draw - http://github.com/duopixel/Method-Draw/
export const Slice = (props: SliceProps) => {
  const { offset, progress } = props;
  return (
    <StyledSlice
      width="580"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `translateY(${
          offset * progress * 3 + offset * 3
        }px) rotateX(${180 - (100 - progress) * 0.6}deg)`,
        zIndex: 100 - offset,
      }}
    >
      <g>
        <title>Layer 1</title>
        <clipPath id="myRect">
          <rect
            stroke="#000"
            rx="20"
            transform="rotate(45 290.00003051757824,200.00001525878903) "
            id="svg_5"
            height="200"
            width="200"
            y="100.000008"
            x="190.000015"
            strokeWidth="3"
            fill="#fff"
          />
        </clipPath>
        <image
          width="580"
          height="400"
          style={{
            transform: `rotate(${progress * 1.8}deg)`,
            transformOrigin: 'center center',
          }}
          href={spaceMap[offset] || spacecat}
          clipPath="url(#myRect)"
        />
      </g>
    </StyledSlice>
  );
};
