export const filterQueries = (queries, { name, description, creator }) => {
  const nextQueries = queries.filter(query => {
    const nameMatch = name
      ? query.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const descriptionMatch = description
      ? query.description.toLowerCase().includes(description.toLowerCase())
      : true;
    const creatorMatch = creator
      ? query.creator.toLowerCase().includes(creator.toLowerCase())
      : true; // true means that this search string won't affect filtering since it's falsy or undefined
    return nameMatch && descriptionMatch && creatorMatch;
  });
  return nextQueries;
};

export const getQueryById = (queries, id) => {
  const filteredQueries = queries.filter(query => {
    if (id.toLowerCase().trim() === query.id) {
      return query;
    }
  });
  return filteredQueries[0] || null;
};
