import React from 'react';
import styled from 'styled-components';

interface SliceProps {
  progress: number;
  offset: number;
}

const StyledSlice = styled.svg`
  position: absolute;
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
        transform: `translateY(${500 + offset * progress * 100}px)`,
        zIndex: 100 - offset,
      }}
    >
      <g>
        <title>Layer 1</title>
        <rect
          stroke="#000"
          rx="5"
          transform="rotate(45 290.00003051757824,200.00001525878903) "
          id="svg_5"
          height="200"
          width="200"
          y="100.000008"
          x="190.000015"
          strokeWidth="3"
          fill="#fff"
        />
      </g>
    </StyledSlice>
  );
};
