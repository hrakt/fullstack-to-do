import { useState } from "react";

type Props = {
  addListItem: (item: any) => void;
};

const Form: React.FC<Props> = ({ addListItem }) => {
  const [formValue, setFormValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addListItem(formValue);
    setFormValue("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formValue}
          onChange={handleInputChange}
          className="form-input px-4 py-1 rounded"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-1 border border-blue-700 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
