import React, { useState } from "react";

import Child from "./Child";

export default function Parent() {
  const [inputValue, setinputValue] = useState("");
  const [item, setitem] = useState([]);
  //values of input
  const handleinputvalue = (e) => {
    // e.preventDefault();
    setinputValue(e.target.value);
  };
  // value which we add in input and click on add then it displays
  const handleAddItem = () => {
    if (inputValue !== " ") {
      setitem([...item, inputValue]);
      //   console.log(setitem)
    }
  };
  //update value
  const updateValue = (index) => {
    // alert("arham")
    const update = [item];
    // console.log(update)
    update[index] = prompt("enter new name");
    setitem(update);
  };

  //delete value
  const deleteValue = () => {
    // alert("hi")
    setitem([]);
    // setinputValue("");
  };

  return (
    <div className="app p-3 text-danger">
      <input
        className="p-2"
        onChange={handleinputvalue}
        placeholder="Enter Your Name"
      />
      <button className="p-2 " onClick={handleAddItem}>
        Add
      </button>
      {/* {item} */}
      <Child
        showitem={item}
        updateresult={updateValue}
        deleteresult={deleteValue}
      />
    </div>
  );
}
