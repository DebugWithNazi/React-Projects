import Item from "./Item";
export default function ItemList({ food, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {food.extendedIngredients.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
