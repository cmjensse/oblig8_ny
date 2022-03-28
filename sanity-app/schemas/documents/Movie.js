import actor from "./Actor";
import category from "./Category";

const movie = {
  title: "Movie",
  name: "movie",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "titlename",
      type: "string",
    },
    {
      title: "Actor",
      name: "actor",
      type: "reference",
      to: [{ type: "actor" }],
      decription: "Legg inn skuespiller",
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Sjanger",
    },
  ],
};

export default movie;
