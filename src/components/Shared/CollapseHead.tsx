import { ReactNode } from 'react';

import styled from '@emotion/styled';

import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Button = styled.button`
  width: 100%;
  padding: 4px 16px;
  border: 0;
  background: none;
  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h3`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  flex-shrink: 0;
`;

const Summary = styled.span`
  overflow: hidden;
  display: flex;
  align-items: center;
`;

interface Props {
  title: string;
  summary: ReactNode;
  opened: boolean;
  onClick: () => void;
}

export default function CollapseHead({
  title, summary, opened, onClick,
}: Props) {
  return (
    <Button type="button" onClick={onClick}>
      <span>
        <Title>{title}</Title>
        <Summary>
          {summary}
          {opened ? <ExpandLess /> : <ExpandMore />}
        </Summary>
      </span>
    </Button>
  );
}
