import MenuItem from "./MenuItem";

export default function Cart() {
    const items = [
        {
            id:1,
            item: "Biriyani",
            quantity:2
        },
        {
            id:2,
            item: "Chicken Handi",
            quantity:4
        },
        {
            id:3,
            item: "Gulab Jamun",
            quantity:10
        }
    ]


  
  return (
    <section className="w-1/2 items-center">
      <h1>Cart</h1>

          <MenuItem items={{
              id:1,
              item: "Biriyani",
              quantity:2
          }} />
          <MenuItem items={{
              id:2,
              item: "Chicken Handi",
              quantity:4
          }} />
          <MenuItem items={{
              id:3,
              item: "Gulab Jamun",
              quantity:10
          }} />

          {
            items.map((item)=> <MenuItem key={item.id} items={item}/>)
          }
    </section>
  );
}
