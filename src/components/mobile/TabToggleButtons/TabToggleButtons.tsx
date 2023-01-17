import { useAppDispatch } from "../../../hooks/hooks";
import { allCloseTabs, allOpenTabs } from "../../../slices/slice";

export default function TabToggleButtons() {
  const dispatch = useAppDispatch();

  const handleClickAllOpen = () => {
    dispatch(allOpenTabs());
  };

  const handleClickAllClose = () => {
    dispatch(allCloseTabs());
  };

  return (
    <>
      <button type="button" onClick={handleClickAllOpen}>
        전체 열기
      </button>
      <button type="button" onClick={handleClickAllClose}>
        전체 닫기
      </button>
    </>
  );
}
