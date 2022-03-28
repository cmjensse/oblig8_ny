import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import actor from "./documents/Actor";
import movie from "./documents/Movie";
import category from "./documents/Category";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([movie, actor, category]),
});
