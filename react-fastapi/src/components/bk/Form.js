import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Select, MenuItem, InputLabel, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
  const [form, setForm] = React.useState({
    name: '',
    age: '',
    gender: '',
    comment: '',
  });
  const handleInputChange = (event) => {
    // setForm(event.target.value);
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  const navigate = useNavigate();

  const gotoResult = (form) => {
    console.log(form)
    navigate('/result', { state: form })
  }

  const handleSubmit = (event) => {
    gotoResult(form);
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">アンケート提出</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          name="name"
          label="名前"
          value={form.name}
          onChange={handleInputChange}
          fullWidth
        />

        <Box sx={{ width: "100%", mt: 2 }}>
          <InputLabel id="demo-simple-select-label">年齢</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="age"
            value={form.age}
            onChange={handleInputChange}
            fullWidth
          >
            <MenuItem value={10}>10代</MenuItem>
            <MenuItem value={20}>20代</MenuItem>
            <MenuItem value={30}>30代</MenuItem>
          </Select>
        </Box>

        <Box sx={{ width: "100%", mt: 2 }}>
          <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>

          <Box sx={{ border: 1, borderRadius: 1, borderColor: 'grey.500' }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
              value={form.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="男性" />
              <FormControlLabel value="male" control={<Radio />} label="女性" />
              <FormControlLabel value="other" control={<Radio />} label="その他" />
            </RadioGroup>
          </Box>
        </Box>

        <TextField
          id="outlined-basic"
          label="コメント"
          variant="outlined"
          onChange={handleInputChange}
          name="comment"
          value={form.comment}
          fullWidth
          sx={{ mt: 2 }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
          endIcon={<SendIcon />}
          fullWidth
        >送信
        </Button>
      </Box>
    </Container>
  )
}

export default Form