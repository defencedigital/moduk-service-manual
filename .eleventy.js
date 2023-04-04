if (process.env.ELEVENTY_ENV !== 'production') {
  require('dotenv').config();
}

// Flags whether we compress the output etc
const isProduction = process.env.ELEVENTY_ENV === 'production';

const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: false
};

const markdownItAnchorOptions = {
  level: 2,
  tabIndex: false
};

module.exports = function (eleventyConfig) {

  // Watch for changes
  eleventyConfig.addWatchTarget('./src/assets');

  eleventyConfig.setUseGitIgnore(false);

  // Copy GOV.UK assets
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets/images': 'assets/images' });

  // Copy MOD.UK assets
  eleventyConfig.addPassthroughCopy({ './src/assets/images': 'assets/images' });

  // Macros used in markdown files
  eleventyConfig.addCollection('everything', (collectionApi) => {
    const macroImport = `{%- from 'system/component.njk' import component -%}`
    let collMacros = collectionApi.getFilteredByGlob('src/**/*.md')
    collMacros.forEach((item) => {
      item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`
    })
    return collMacros
  });

  // Markdown configurations
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions).use(markdownItAttrs));

  // Configurations
  return {

    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };

};
