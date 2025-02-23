import { NextPage } from "next";

export const Buttons = () => {
  return (
    <div>
      <button>submit</button>
      <button>cancel</button>
    </div>
  );
};

export const Inputs = () => {
  return (
    <div>
      <label htmlFor="email">email</label>
      <input id="email" />

      <label htmlFor="search">search</label>
      <input id="search" />
    </div>
  );
};

export const IconButtons = () => {
  return (
    <div>
      <button aria-label="sigin in">
        <svg />
      </button>
      <button aria-label="sign out">
        <svg />
      </button>
    </div>
  );
};

const Query: NextPage = () => {
  return (
    <div>
      <a href="/">Link</a>
      <button>{"button"}</button>
      <footer>{"contentinfo"}</footer>
      <h1>{"heading"}</h1>
      <header>{"banner"}</header>
      <img alt="description" /> Img
      <input type="checkbox" /> checkbox
      <input type="number" /> number
      <input type="radio" /> radio
      <input type="text" /> text
      <li>listitem</li>
      <ul>listgroup</ul>
    </div>
  );
};
export default Query;
