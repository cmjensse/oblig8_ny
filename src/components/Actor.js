import Title from "./Title.js";

export default function Actor({ title, actor, category }) {
  return (
    <article className="actorNames">
      <Title title={title} actor={actor} category={category} />
      <p>dette er en skuespiller</p>
    </article>
  );
}
