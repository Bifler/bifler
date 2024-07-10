module.exports = function(eleventyConfig) {
    // Copy `src/style.css` to `_site/style.css`
    eleventyConfig.addPassthroughCopy("src/css/main.css");
    eleventyConfig.addPassthroughCopy("src/js/color-modes.js");
    eleventyConfig.addPassthroughCopy("src/vidz/bifler (3).webm");
    eleventyConfig.addPassthroughCopy("src/img/bifler (3).png");
    //sort gigs by date
    eleventyConfig.addCollection("gigs", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/gigs/*.md").sort((a, b) => {
          return a.date - b.date;
        });
      });
    // Set custom directories for input, output, includes, and data
    return {
        // When a passthrough file is modified, rebuild the pages:
        passthroughFileCopy: true,
      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
  };