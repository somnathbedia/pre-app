type Item = {
  items: {
    id: number;
    item: string;
    quantity: number;
  };
};

export default function MenuItem(props: Item) {
  return (
    <div className="flex gap-4 justify-around">
        <div>{props.items.item}</div>
        <div>{props.items.quantity}</div>
    </div>
  );
}
