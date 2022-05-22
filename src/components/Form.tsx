import { ChangeEvent, FormEvent } from 'react';

import { Paper, Box, TextField, Typography, Button, styled, TypographyProps, PaperProps } from "@mui/material"

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setArticleNumber, setForm, submitForm } from '../slices/slice';

import SelectBox from './SelectBox/SelectBox';

const Wrapper = styled(Paper)<PaperProps>(() => ({
  margin: '24px 0',
}))

const Header = styled(Typography)<TypographyProps>(() => ({
  padding: '16px 0 0 16px',
}))

const FormBody = styled('form')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'flex-end',
  '& > :not(style)': {
    marginRight: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'inherit',
    '& > :not(style)': {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
}))

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
    <Wrapper elevation={3}>
      <Header variant="h5">아이디/비밀번호 입력</Header>
      <FormBody
        onSubmit={handleSubmit}
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
      </FormBody>
    </Wrapper>
  )
}
