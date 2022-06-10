import { ReactNode } from 'react';

import CollapseHead from './CollapseHead';

interface Props {
  title: string;
  summary: ReactNode;
  opened: boolean;
  isSummaryKeepOpen?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export default function Collapse({
  title, summary, opened = false, onClick, children,
}: Props) {
  return (
    <>
      <CollapseHead
        title={title}
        summary={summary}
        opened={opened}
        onClick={onClick}
      />
      {opened && children}
    </>
  );
}
