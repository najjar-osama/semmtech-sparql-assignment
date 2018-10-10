export const queryFactory = (id = 1) => ({
  id,
  name: `Query Name ${id}`,
  description: `Small description for the SPARQL query. ${id}`,
  creator: `Spar Kewl ${id}`,
  query: `select * { ?s ?p ?o . } ${id}`
});

export const queriesFactory = queriesNumber => {
  let queries = [];
  for (let i = 0; i < queriesNumber; i++) {
    queries.push(queryFactory(i));
  }
  return queries;
};
