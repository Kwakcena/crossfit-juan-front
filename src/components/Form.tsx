import { ChangeEvent, FormEvent, useState } from 'react';

import { Paper, Box, TextField, Typography, Button } from "@mui/material"

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
  const [form, setForm] = useState({
    id: '',
    password: '',
    articleNumber: '',
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [target.name]: target.value });
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // TODO: 에약자 정보를 가져오는 api를 요청해야 합니다.
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
        <TextField name="id" onChange={handleChange} label="아이디를 입력해주세요" variant="standard" />
        <TextField name='password' onChange={handleChange} label="비밀번호를 입력해주세요" type="password" variant="standard" />
        <TextField name="articleNumber" onChange={handleChange} label="글 번호를 입력해주세요" variant="standard" />
        <Button type="submit" variant="contained">제출하기</Button>
      </Box>
    </Paper>
  )
}
