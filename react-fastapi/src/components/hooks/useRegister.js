import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault(); // フォームのデフォルトの送信を防ぐ
    try {
      const response = await axios.post('http://127.0.0.1:8000/users/', {
        name: user.username, // FastAPIの期待するフィールド名は 'name' です
        password: user.password,
      });
      if (Object.keys(response.data).length > 0) {
        console.log('登録成功:', response.data);
        alert('ユーザー登録が完了しました！'); // 成功メッセージ
        navigate('/registersuccessed', { state: user }); // 登録後、ログイン画面へリダイレクト
      } else {
        console.log('登録失敗:');
        navigate('/registerfailed', { state: user }); // 登録失敗時のリダイレクト
      }
    } catch (error) {
      // エラーメッセージをユーザーに表示
      alert(error.response && error.response.data && error.response.data.detail
        ? `登録に失敗しました: ${error.response.data.detail}`
        : '登録中にエラーが発生しました。');
      navigate('/registerfailed', { state: user });
    }
  };
  return { handleRegister, user, handleChange }
}

export default useRegister