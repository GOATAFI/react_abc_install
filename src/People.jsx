import { people } from "./data";
import { getImageUrl } from "./utils";
export default function People() {
  const liPeople = people.map((person) => (
    <li key={person.id}>
      <h1>{person.name}</h1>
      <img src={getImageUrl(person)} alt="" />
      {person.accomplishment}
      <p>{person.profession}</p>
    </li>
  ));

  const liFilteredPeople = people.filter(
    (person) => person.profession === "chemist"
  );
  const liMappedPeople = liFilteredPeople.map((person) => (
    <li key={person.id}>
      <h1>{person.name}</h1>
    </li>
  ));
  return (
    <>
      <ul>{liMappedPeople}</ul>
      <ul>{liPeople}</ul>
    </>
  );
}
