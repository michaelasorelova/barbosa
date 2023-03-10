module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("images");

    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("js");

    return {

        templateFormats: ["njk", "html", "md"],
        
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk", 
    }
};