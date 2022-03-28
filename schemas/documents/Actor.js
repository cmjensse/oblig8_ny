const actor = {
  title: "Actor",
  name: "actor",
  type: "document",
  fields: [
    {
      title: "Actor",
      name: "actor",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "dette er slug=URL",
      validation: (Rule) => Rule.required(),
      options: {
        source: "actor",
        maxLength: 96,
        slugify: (input) => input.toLowerCase().slice(0, 200),
      },
    },
  ],
};

export default actor;
