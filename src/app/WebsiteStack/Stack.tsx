import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useEventListener } from '../utils/use-event-listener';
import { Slice } from './Slice';

const OuterStack = styled.div`
  position: absolute;
  padding-bottom: 2000px;
  overflow: hidden;
  width: 1100px;
`;

const StyledStack = styled.div`
  position: relative;
`;

const totalHeight = process.browser
  ? document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  : null;

export const Stack = () => {
  const [progress, setProgress] = useState(0);
  const handler = useCallback(
    (e) => {
      if (totalHeight !== null) {
        setProgress(document.documentElement.scrollTop / totalHeight);
      }
    },
    [setProgress]
  );

  useEventListener('scroll', handler);

  return (
    <OuterStack>
      <StyledStack>
        &nbsp;
        {new Array(10).fill(null).map((_, i) => (
          <Slice key={i} progress={progress} offset={i} />
        ))}
      </StyledStack>
    </OuterStack>
  );
};
