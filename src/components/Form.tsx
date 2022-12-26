import { FormEvent } from "react";

import {
  Paper,
  Typography,
  Button,
  styled,
  TypographyProps,
  PaperProps,
} from "@mui/material";

import { submitForm } from "../slices/slice";

import SelectBox from "./SelectBox/SelectBox";
import useReservationArticlesQuery from "../queries/useReservationArticlesQuery";
import { useAppDispatch } from "../hooks/hooks";

const Wrapper = styled(Paper)<PaperProps>(() => ({
  margin: "24px 0",
}));

const Header = styled(Typography)<TypographyProps>(() => ({
  padding: "16px 0 0 16px",
}));

const FormBody = styled("form")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "flex-end",
  "& > :not(style)": {
    marginRight: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "inherit",
    "& > :not(style)": {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function Form() {
  const dispatch = useAppDispatch();

  const { articles, articleNumber, setArticleNumber } =
    useReservationArticlesQuery();

  const handleChangeArticleNumber = (value: string) => {
    setArticleNumber(value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(submitForm({ articleNumber }));
  };

  return (
    <Wrapper elevation={3}>
      <Header variant="h5">수업 선택</Header>
      <FormBody onSubmit={handleSubmit} noValidate autoComplete="off">
        <SelectBox
          articles={articles}
          onChange={handleChangeArticleNumber}
          selected={articleNumber}
        />
        <Button type="submit" variant="contained">
          제출하기
        </Button>
      </FormBody>
    </Wrapper>
  );
}
