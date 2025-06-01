import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';

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

  const gotoResult = () => {
    navigate('/result')
  }

  const handleSubmit = (event) => {
    gotoResult();
  }

  return (
    <Container>
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">アンケート提出</Typography>
        <div>
          <label htmlFor='name'>
            名前
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label htmlFor='age'>
            年齢
            <select name="age" id="age" onChange={handleInputChange}>
              <option value={10}>10代</option>
              <option value={20}>20代</option>
              <option value={30}>30代</option>
            </select>
          </label>
          <br />
          性別
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={handleInputChange}
          />
          男性
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={handleInputChange}
          />
          女性
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onChange={handleInputChange}
          />
          その他
          <br />
          <label htmlFor='comment'>コメント
            <textarea
              name="comment"
              placeholder="コメントを入力してください"
              value={form.comment}
              onChange={handleInputChange}
            >
            </textarea>
          </label>
          button
          <button
            onClick={handleSubmit}
          >送信</button>
          <Link to="/result">結果ページへ</Link>
        </div>
      </Box>
    </Container>
  )
}

export default Form