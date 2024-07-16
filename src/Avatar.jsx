export default function Avatar({ person, size, image, f }) {
  const a = 2;
  const b = 9;
  return (
    <>
      <h3>{person.name}</h3>
      <p>{size}</p>
      <img src={image} alt="" />
      <img src={image} alt="" />
      <img src={image} alt="" />
      <h1> {f(a, b)} </h1>
    </>
  );
}
