const category = {
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Kategori",
      name: "title",
      type: "string",
      description: "dette er navnet på kategorien",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default category;
