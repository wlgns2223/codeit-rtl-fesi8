import { NextPage } from "next";
import { useEffect, useState } from "react";

export const ColorList = () => {
  return (
    <ul>
      <li>Red</li>
      <li>Blue</li>
      <li>Green</li>
    </ul>
  );
};

const fakeFetchColors = async () => Promise.resolve(["Red", "Blue", "Green"]);

export const LodableColorList = () => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    fakeFetchColors().then((colors) => {
      setColors(colors);
    });
  }, []);

  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
};

const DifferentQueries: NextPage = () => {
  return <div></div>;
};
export default DifferentQueries;
