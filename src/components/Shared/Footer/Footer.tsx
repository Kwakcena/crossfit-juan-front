import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #1976d2;
  ${isMobile ? `
    padding: 0 12px;
  ` : `
    padding: 8px 12px;
  `}
`

const Text = styled.p`
  padding-right: 20px;
  color: #fff;
`

const Gutter = styled.div<{ height: number; }>`
  ${({ height }) => `
    @supports (height: constant(safe-area-inset-bottom)) {
      height: calc(16px + ${height}px + constant(safe-area-inset-bottom));
    }
    @supports (height: env(safe-area-inset-bottom)) {
      height: calc(16px + ${height}px + env(safe-area-inset-bottom));
    }
  `}
`;

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Text>Made by. Kwakcena</Text>
      </Wrapper>
      <Gutter height={68} />
    </>
  )
}
