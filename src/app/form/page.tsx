import { useState } from "react";

export const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <form>
      <h3>{"Enter Data"}</h3>
      <div data-testid="image wrapper">
        <img alt="data" src="data.jpg" />
      </div>
      <label htmlFor="email">{"Email"}</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="color">{"color"}</label>
      <input id="color" placeholder="Red" />
      <button title="click when ready to submit">{"submit"}</button>
    </form>
  );
};

export default Form;
