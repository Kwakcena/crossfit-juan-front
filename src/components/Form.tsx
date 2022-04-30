import { ChangeEvent, FormEvent } from 'react';

import { Paper, Box, TextField, Typography, Button } from "@mui/material"

import { loadUserTimeTable } from '../api';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setForm, setTimeTable } from '../slices/slice';

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

  const { form } = useAppSelector((state) => state);

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setForm({ name, value }));
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // TODO: 입력값에 대한 validation 필요. submit 에 대한 thunk action을 만들어 내부에서 validation 하자.
    const { timeTable } = await loadUserTimeTable(form);

    dispatch(setTimeTable(timeTable));
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
        <TextField
          name="articleNumber"
          value={form.articleNumber}
          onChange={handleChange}
          label="글 번호를 입력해주세요"
          variant="standard"
        />
        <Button type="submit" variant="contained">제출하기</Button>
      </Box>
    </Paper>
  )
}