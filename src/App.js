import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     bread: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Hima",
  //     animal: "Bird",
  //     bread: "Cocktail",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Don Cat",
  //     animal: "Cat",
  //     bread: "Mixed",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt me</h1>
      <Pet name="Luna" animal="Dog" bread="Havanese" />
      <Pet name="Hima" animal="Bird" bread="Cocktail" />
      <Pet name="Don Cat" animal="Cat" bread="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
