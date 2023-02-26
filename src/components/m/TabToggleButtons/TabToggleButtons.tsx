import styled from "@emotion/styled";
import { Button } from "@mui/material";

import { useAppDispatch } from "../../../hooks/hooks";
import { allCloseTabs, allOpenTabs } from "../../../slices/slice";

const Wrapper = styled.div`
  & button:first-of-type {
    margin-right: 8px;
  }
`;

export default function TabToggleButtons() {
  const dispatch = useAppDispatch();

  const handleClickAllOpen = () => {
    dispatch(allOpenTabs());
  };

  const handleClickAllClose = () => {
    dispatch(allCloseTabs());
  };

  return (
    <Wrapper>
      <Button
        type="button"
        variant="outlined"
        color="success"
        onClick={handleClickAllOpen}
      >
        전체 열기
      </Button>
      <Button
        type="button"
        variant="outlined"
        color="warning"
        onClick={handleClickAllClose}
      >
        전체 닫기
      </Button>
    </Wrapper>
  );
}
