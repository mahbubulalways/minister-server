const getFilteringProducts = (
  query: Record<string, unknown>,
  mainCategory: string,
  subCategory: string,
) => {
  let pipeline = [];
  // Stage 1: Match mainCategory as 'television'
  let matchStage: Record<string, unknown> = {};

  if (mainCategory != '') {
    matchStage.mainCategory = mainCategory;
  } else {
    matchStage.subCategory = subCategory;
  }

  // Add screen size condition if provided
  if (query.size && query.size !== 'undefined') {
    matchStage.size = query.size;
  }

  // Add offerPrice range condition if provided
  if (query.price && query.price !== 'undefined') {
    const [minPrice, maxPrice] = (query.price as string).split('-').map(Number);
    matchStage.offerPrice = { $gte: minPrice, $lte: maxPrice };
  }

  // Push the combined match stage into the pipeline
  pipeline.push({
    $match: matchStage,
  });

  return pipeline;
};

export default getFilteringProducts;
