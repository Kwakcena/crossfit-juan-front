import { ChangeEvent, FormEvent } from 'react';

import { Paper, Box, TextField, Typography, Button } from "@mui/material"

import { useAppDispatch, useAppSelector } from '../hooks';
import { setArticleNumber, setForm, submitForm } from '../slices/slice';

import SelectBox from './SelectBox/SelectBox';

const style = {
  paper: {
    my: 3,
  },
  title: {
    pt: 2,
    pl: 2,
  },
  box: {
    p: 2,
    display: 'flex',
    alignItems: 'flex-end',
    '& > :not(style)': {
      mr: 3,
    },
  },
} as const;

export default function Form() {
  const dispatch = useAppDispatch();

  const { form, articles } = useAppSelector((state) => state.app);

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setForm({ name, value }));
  }

  const handleChangeArticleNumber = (value: string) => {
    dispatch(setArticleNumber(value));
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(submitForm());
  }

  return (
    <Paper sx={style.paper} elevation={3}>
      <Typography sx={style.title} variant="h5" component="h2">
        아이디/비밀번호 입력
      </Typography>
      <Box
        onSubmit={handleSubmit}
        sx={style.box}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          name="naverId"
          value={form.naverId}
          onChange={handleChange}
          label="아이디를 입력해주세요"
          variant="standard"
        />
        <TextField
          name='naverPw'
          value={form.naverPw}
          onChange={handleChange}
          label="비밀번호를 입력해주세요"
          type="password"
          variant="standard"
        />
        <SelectBox
          articles={articles}
          onChange={handleChangeArticleNumber}
          selected={form.articleNumber}
        />
        <Button type="submit" variant="contained">제출하기</Button>
      </Box>
    </Paper>
  )
}
