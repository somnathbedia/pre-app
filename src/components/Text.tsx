import { useEffect, useState } from "react";

const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Componet mounted");

    return () => {
      console.log("Component destroyed");
    };
  }, []);

  console.log("I run whenever component state changes");

  return (
    <div>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Write your comments"
      />

      <p>{text}</p>
    </div>
  );
};

export default Text;
