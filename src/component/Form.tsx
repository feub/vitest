import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState<string>("");

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(username);
    setUsername(event?.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <p>{username ? username : "Empty"}</p>
    </div>
  );
}
