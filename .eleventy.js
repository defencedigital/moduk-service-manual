const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');


// Breadcrumb trail
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');


// Table of contents
const eleventyPluginTOC = require('@thedigitalman/eleventy-plugin-toc-a11y');


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


  eleventyConfig.setUseGitIgnore(false);


  // Copy GOV.UK fonts
  eleventyConfig.addPassthroughCopy({'node_modules/govuk-frontend/govuk/assets/fonts': 'assets/fonts'});


  // Copy MOD.UK assets
  eleventyConfig.addPassthroughCopy({'./src/assets/images': 'assets/images'});


  // Table of contents
  eleventyConfig.addPlugin(eleventyPluginTOC, {
    tags: ['h2'],
    wrapper: 'nav',
    wrapperClass: 'gem-c-contents-list',
    heading: true,
    headingClass: 'gem-c-contents-list__title',
    headingLevel: 'h2',
    headingText: 'Contents',
    listType: 'ol',
    listClass: 'gem-c-contents-list__list',
    listItemClass: 'gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed',
    listItemAnchorClass: 'gem-c-contents-list__link govuk-link govuk-link--no-visited-state',
  });


  // Macros used in markdown files
  eleventyConfig.addCollection('everything', (collectionApi) => {
    const macroImport = `{%- from 'system/component.njk' import component -%}{%- from 'system/modukcomponent.njk' import modukcomponent -%}`
    let collMacros = collectionApi.getFilteredByGlob('src/**/*.md')
    collMacros.forEach((item) => {
      item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`
    })
    return collMacros
  });


  // Markdown configurations
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions).use(markdownItAttrs));


  // Navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);


  // Suppresses output of the paths of all generated files
  eleventyConfig.setQuietMode(false);


  // Configurations
  return {

    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes'
    },
    templateFormats: [ 'md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };


};
