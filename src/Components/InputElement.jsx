import { useState } from "react";

export default function InputElement({ title, status }) {
  const [inp, setInp] = useState("");

  const handleChange = (value) => {
    console.log(value.target.value);
    setInp(value.target.value);
  };

  const handleItem = () => {};

  return (
    <>
      <input
        onChange={(value) => handleChange(value)}
        value={inp}
        placeholder="Write Your Task"
      />
    </>
  );
}
