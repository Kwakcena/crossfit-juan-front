import { AxiosError } from "axios";

export const handleError = (err: AxiosError): Error => {
  const status = err.response?.status;
  const statusText = err.response?.statusText;

  let errorMessage = "";

  switch (status) {
    case 500:
      throw new Error("서버 에러가 발생하였습니다.\n새로고침 해 주십시요.");
    case 403:
      throw new Error(`[${status}] ${statusText}`)
    default:
      errorMessage = "일시적인 장애가 발생하였습니다. 관리자에게 문의하십시요.";
      break;
  }

  throw new Error(errorMessage);
};
