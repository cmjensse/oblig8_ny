export default function Title({ title, actor, category }) {
  return (
    <>
      <h1 classname="title">
        Title: {title}
        <br />
        <br />
        Actor: {actor}
        <br />
        <br />
        Category: {category}
        <br />
        <br />
      </h1>
    </>
  );
}
