export function Profile() {
  const picture = "https://i.imgur.com/QIrZWGIs.jpg";
  const name = "Alan L. Hart";
  const person = {
    name: "Nahid",
    theme: {
      backgroundColor: "red",
      color: "blue",
    },
  };
  return (
    <div style={person.theme}>
      <img src={picture} alt={name} />
      <h1>{name} is booooooo</h1>
      <h2>This is {person.name} person object name </h2>
    </div>
  );
}
