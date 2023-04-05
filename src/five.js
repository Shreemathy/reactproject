import React, { useState } from 'react';

function Form() {
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    setMessage(`You selected option "${selectedOption}".`);
  };

  return (
    <div>
      <h2>Dropdown Form</h2>
      <form>
        <label>
          Select an option:
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">--Please choose an option--</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </label>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Form;