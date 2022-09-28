import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const Form = ({ people, setPeople }: IProps) => {
  const [inputData, setInputData] = useState({ name: "", age: "", bio: "" });

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        name: inputData.name,
        age: Number(inputData.age),
        bio: inputData.bio,
      },
    ]);
    setInputData({ name: "", age: "", bio: "" });
  };

  return (
    <div className="">
      <div className="text-3xl font-bold mb-5">Form</div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            className="text-inherit block p-4 mb-4 w-[90%]"
            type="text"
            name="name"
            id="name"
            placeholder="name"
            onChange={onChange}
            value={inputData.name}
          />
          <input
            className="text-inherit block p-4 mb-4 w-[90%]"
            type="number"
            name="age"
            id="age"
            placeholder="age"
            onChange={onChange}
            value={inputData.age}
          />
          <textarea
            className="text-inherit block p-4 mb-4 w-[90%]"
            name="bio"
            id="bio"
            placeholder="Bio Description"
            onChange={onChange}
            value={inputData.bio}
          ></textarea>
          <button
            className="text-inherit block p-3 bg-rose-600 rounded-sm font-bold text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
