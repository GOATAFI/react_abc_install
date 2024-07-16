import Avatar from "./Avatar";

export default function User() {
  const f = (a, b) => {
    return a + b;
  };
  return (
    <Avatar
      person={{ name: "Nahidd", age: 24 }}
      size={200}
      image="https://i.imgur.com/QIrZWGIs.jpg"
      f={f}
    />
  );
}
