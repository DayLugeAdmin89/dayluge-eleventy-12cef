module.exports = function(eleventyConfig) {
  // Collection: all link markdown files in /links/
  eleventyConfig.addCollection("link", function(collectionApi) {
    return collectionApi.getFilteredByGlob("links/*.md");
  });

  // Pass through CSS
  eleventyConfig.addPassthroughCopy("css");

  // Filter needed by sitemap.xml.njk
  eleventyConfig.addFilter("htmlBaseUrl", function (url) {
    return "https://thedayluge.com" + (url || "");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
