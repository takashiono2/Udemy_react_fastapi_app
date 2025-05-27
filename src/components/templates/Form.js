import React from 'react'

const Form = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const handleInputChange = (event) => {
    setName(event.target.value);
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value);
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
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label htmlFor='age'>
          年齢
          <select name="" id="age" onChange={handleAgeChange}>
            <option value={10}>10代</option>
            <option value={20}>20代</option>
            <option value={30}>30代</option>
          </select>
        </label>
      </form>
      <p>確認用</p>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default Form