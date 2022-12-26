import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ClassArticle } from "../../interfaces";

interface Props {
  articles: ClassArticle[];
  onChange: (value: string) => void;
  selected: string;
}

export default function SelectBox({ articles, onChange, selected }: Props) {
  const handleChange = ({ target: { value } }: SelectChangeEvent<string>) => {
    onChange(value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth size="small" variant="standard">
        <InputLabel id="class-select-label">수업을 선택해주세요</InputLabel>
        <Select
          labelId="class-select-label"
          id="select"
          value={selected}
          onChange={handleChange}
        >
          {articles.map(({ articleNumber, title }) => (
            <MenuItem key={articleNumber} value={articleNumber}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
