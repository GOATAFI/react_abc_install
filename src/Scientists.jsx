export function Profile({ name, age, phone, married }) {
  return (
    <div>
      <h1>Name :{name}</h1>
      <h3>Age :{age}</h3>
      <p>Phone :{phone}</p>
      <span>Married :{married}</span>
    </div>
  );
}

export default function Scientists() {
  return (
    <>
      <Profile name="Nahid Parvez" age={12} phone={123} married="No"></Profile>
      <Profile name="Mafi Mafi" age={23} phone={8899} married="Yes"></Profile>
    </>
  );
}
