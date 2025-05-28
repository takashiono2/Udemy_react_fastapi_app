import React from 'react'

const Form = () => {
  const [form, setForm] = React.useState({
    name: '',
    age: ''
  });
  const handleInputChange = (event) => {
    // setForm(event.target.value);
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  return (
    <div>
      <form>
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
      </form>
      <p>確認用</p>
      <p>{form.name}</p>
      <p>{form.age}</p>
    </div>
  )
}

export default Form