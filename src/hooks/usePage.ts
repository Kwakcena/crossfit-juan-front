import { useEffect } from "react";

import Alert from "../components/Alert/Alert";

import { useAppDispatch, useAppSelector } from "./hooks";

import { clear } from "../slices/page";

export default function usePage() {
  const dispatch = useAppDispatch();

  const { title, message } = useAppSelector(({ page }) => page);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clear());
    }, 0);

    if (message) {
      Alert({
        title,
        text: message,
      });
    }
  }, [message, title, dispatch]);
}
