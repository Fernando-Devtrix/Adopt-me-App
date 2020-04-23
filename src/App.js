const Pet = ({ name, animal, bread }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, animal),
    React.createElement("h1", {}, bread),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Hima",
      animal: "Bird",
      bread: "Cocktail",
    }),
    React.createElement(Pet, {
      name: "Don Cat",
      animal: "Cat",
      bread: "Mixed",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
