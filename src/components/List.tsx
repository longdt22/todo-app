import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const List = ({ people, setPeople }: IProps) => {
  const handleRemovePeople = (name: any) => {
    setPeople(people.filter((person) => person.name !== name));
  };

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <div className="flex border p-4 rounded-sm mb-3 justify-between">
          {person.name} - {person.age} - {person.bio}
          <div
            onClick={() => handleRemovePeople(person.name)}
            className="ml-3 px-3 bg-rose-600 cursor-pointer rounded-sm font-bold text-white"
          >
            X
          </div>
        </div>
      );
    });
  };
  return (
    <div className="">
      <div className="text-3xl font-bold mb-5">List</div>
      {renderList()}
    </div>
  );
};

export default List;
