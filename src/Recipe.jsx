import { recipes } from "./recipes";

export default function Recipe() {
  const yummyRecipes = recipes.map((r) => (
    <div key={r.id}>
      <h1>{r.name}</h1>
      <ul>
        {r.ingredients.map((i) => (
          <li key={i}>{i} </li>
        ))}
      </ul>
    </div>
  ));
  return <div>{yummyRecipes}</div>;
}
