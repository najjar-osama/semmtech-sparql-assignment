// Dummy Queries Factory, Generates Queries for testing
export const queryFactory = (id = 1) => ({
  id,
  name: `QName-${id}`,
  description: `description-${id}`,
  creator: `Author-${id}`,
  query: `queryString-${id}`
});

export const queriesFactory = queriesNumber => {
  let queries = [];
  for (let i = 0; i < queriesNumber; i++) {
    queries.push(queryFactory(i));
  }
  return queries;
};
