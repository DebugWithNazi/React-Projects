export default function Fruit({ name, price, color, soldOut }) {
  return (
    <>
      <li>
        {name} {price} {color} {soldOut ? "Sold Out" : "Available"}
      </li>
    </>
  );
}
