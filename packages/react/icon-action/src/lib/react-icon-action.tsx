import React from 'react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactIconActionProps {
  icon: React.ReactNode;
  tooltip?: React.ReactNode;

  onClick: () => void;
}

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    path {
      fill: var(--primary-primary);
    }
  }
  &:hover {
    background-color: var(--gray-300);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-white);
  background-color: var(--gray-500);
  border-radius: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 14px;
  margin-top: 6px;
`;

export function ReactIconAction({
  icon,
  tooltip,
  onClick,
}: ReactIconActionProps) {
  const [showTooltip, setShowTooltip] = React.useState<boolean>(false);

  return (
    <Container>
      <Wrapper
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon}
      </Wrapper>
      {tooltip && showTooltip && <Tooltip>{tooltip}</Tooltip>}
    </Container>
  );
}
