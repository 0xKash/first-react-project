function Item({ name, isPacked }) {
  let itemContent = isPacked ? <del>{name + "✅"}</del> : name;

  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet" />
        <Item isPacked={false} name={"Photo of Tam"} />
      </ul>
    </section>
  );
}
