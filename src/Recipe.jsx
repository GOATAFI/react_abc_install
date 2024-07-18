import { recipes } from "./recipes";
// export default function Recipe() {
//   const yummyRecipes = recipes.map((r) => (
//     <div key={r.id}>
//       <h1>{r.name}</h1>
//       <ul>
//         {r.ingredients.map((i) => (
//           <li key={i}>{i} </li>
//         ))}
//       </ul>
//     </div>
//   ));
//   return <div>{yummyRecipes}</div>;
// }
export function RecipeList({ id, name, ingredients }) {
  //   console.log(ingredients);
  //   console.log(typeof ingredients);
  return (
    <div>
      <h2>{id}</h2>
      <h1>Name: {name}</h1>
      <p>
        Ingredients :
        {ingredients.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </p>
    </div>
  );
}

export default function Recipe() {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeList key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
