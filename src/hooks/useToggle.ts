import { useState } from 'react';

export default function useToggle(initialState?: boolean) {
  const [state, setState] = useState(initialState ?? false);

  return {
    isOpen: state,
    close: () => setState(false),
    open: () => setState(true),
    toggle: () => setState(!state),
  };
}
