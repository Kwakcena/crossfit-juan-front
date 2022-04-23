import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar"
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="h1">
          크로스핏 주안 예약자 확인하기
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
