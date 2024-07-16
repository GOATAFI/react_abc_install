export default function Sum() {
  const a = 10;
  const b = 20;
  function sum(a, b) {
    return a + b;
  }
  return (
    <>
      <h1>
        The Sum of {a} and {b} is {sum(a, b)}{" "}
      </h1>
    </>
  );
}
