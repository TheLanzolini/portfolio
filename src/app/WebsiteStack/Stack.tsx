import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Slice } from './Slice';

const OuterStack = styled.div`
  // position: absolute;
  // padding-bottom: 2000px;
  // overflow: hidden;
  // width: 1100px;
`;

const StyledStack = styled.div`
  position: relative;
  width: 283px;
  height: 283px;
  margin: auto;
`;

const totalHeight = process.browser
  ? document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  : null;

export const Stack = () => {
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (animating) {
      let rafId: number;
      let timestamp: number | null = null;
      let distance = 0;
      const totalDistance = 100;
      const speed = 0.01;

      const animate = (ts: number) => {
        if (timestamp === null) {
          timestamp = ts;
        }
        distance += speed * (ts - timestamp);
        const accurateProgress = expanded ? 100 - distance : distance;
        // make sure we don't go above 100 or below 0
        const normalizedProgres =
          accurateProgress > 100
            ? 100
            : accurateProgress < 0
            ? 0
            : accurateProgress;
        if (distance > totalDistance) {
          cancelAnimationFrame(rafId);
          setProgress(normalizedProgres);
          setAnimating(false);
          setExpanded(!expanded);
        } else {
          rafId = requestAnimationFrame(animate);
          setProgress(normalizedProgres);
        }
      };
      rafId = requestAnimationFrame(animate);
    }
    // tslint:disable-next-line: align
  }, [animating]);

  return (
    <OuterStack>
      <StyledStack>
        {new Array(10).fill(null).map((_, i) => (
          <Slice
            onClick={i === 0 ? () => setAnimating(true) : null}
            key={i}
            progress={progress}
            offset={i}
          />
        ))}
      </StyledStack>
    </OuterStack>
  );
};
