import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
      <div>{count}</div>
    </>
  );
}
