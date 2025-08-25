import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: "apple", price: 10, color: "green", soldOut: false },
    { name: "banana", price: 5, color: "yellow", soldOut: true },
    { name: "orange", price: 9, color: "orange", soldOut: false },
    { name: "straberry", price: 3, color: "red", soldOut: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => {
          return (
            <Fruit
              key={fruit.name}
              name={fruit.name}
              price={fruit.price}
              color={fruit.color}
              soldOut={fruit.soldOut}
            />
          );
        })}
      </ul>
    </div>
  );
}
