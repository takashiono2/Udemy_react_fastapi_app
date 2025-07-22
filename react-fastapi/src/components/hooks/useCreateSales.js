import axios from 'axios';

export const useCreateSales = () => {
  const endpoint = "http://localhost:8000/sales";
  const onClickCreateSales = (data) => {
    for (let i = 1; i < data[0].length; i++) {
      const queries = {
        department: data[0][i],
        year: data[1][i],
        sales: data[2][i],
      };
      axios.post(endpoint, queries).then(res => {
        Object.keys(res.data).length > 0 ? console.log('Success') : console.log('Failed');
      }).catch((e) => {
        console.error('Error:', e);
      })
    }
  }
  return { onClickCreateSales };
}