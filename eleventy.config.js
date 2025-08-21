module.exports = function(eleventyConfig) {
  // Add a collection for link files in /links/
  eleventyConfig.addCollection("link", function(collectionApi) {
    return collectionApi.getFilteredByGlob("links/*.md");
  });

  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
