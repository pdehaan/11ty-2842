/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("image", function (src, alt="") {
    return `<img src="${src}" alt="${alt}" />`;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
