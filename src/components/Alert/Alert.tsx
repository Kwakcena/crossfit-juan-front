import styled from "@emotion/styled";
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";

const swal = withReactContent(Swal);

const style = `
  .swal2-html-container {
    padding: 0;
    margin: 0;
  }

  .swal2-actions  {
    margin: 12px 0;
  }

  @media (min-width: 360px) {
    .swal2-popup {
      width: 312px;
      border-radius: 12px;
      padding: 0;
    }
  }

  @media (max-width: 360px) {
    .swal2-popup {
      border-radius: 12px;
      width: calc(100% - 48px);
      padding: 0;
    }
  }
`;

interface Props {
  title?: string;
  text?: string;
}

const Contents = styled.div`
  white-space: pre-line;
`;

export default function Alert({ title, text }: Props) {
  return swal
    .fire({
      html: (
        <>
          <style>{style}</style>
          {title && <h1>{title}</h1>}
          <Contents>{text}</Contents>
        </>
      ),
      confirmButtonText: "새로고침",
    })
    .then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
        return;
      }
    });
}
