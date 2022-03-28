import Title from "./Title";

export default function Movie({ title, actor, category }) {
  return (
    <div classname="movieTitle">
      <Title title={title} actor={actor} category={category} />
      <p>her er en film</p>
    </div>
  );
}
