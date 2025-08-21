module.exports = function(eleventyConfig) {
  // Collection: all link markdown files in /links/
  eleventyConfig.addCollection("link", function(collectionApi) {
    return collectionApi.getFilteredByGlob("links/*.md");
  });

  // Pass through CSS
  eleventyConfig.addPassthroughCopy("css");

  // Filter required by content/sitemap.xml.njk
  // Simple passthrough: returns the URL unchanged
  // (If you later need absolute URLs, change to prepend "https://thedayluge.com")
  eleventyConfig.addFilter("htmlBaseUrl", function(url) {
    return url || "";
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

