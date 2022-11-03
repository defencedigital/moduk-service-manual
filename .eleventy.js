if (process.env.ELEVENTY_ENV !== 'production') {
  require('dotenv').config();
}


// Flags whether we compress the output etc
const isProduction = process.env.ELEVENTY_ENV === 'production';


const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItReplaceLink = require('markdown-it-replace-link');


// Breadcrumb trail
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');


// Table of contents
const eleventyPluginTOC = require('@thedigitalman/eleventy-plugin-toc-a11y');


// Dates
const { DateTime } = require('luxon');


const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: false
};


const markdownItAnchorOptions = {
  level: 2,
  tabIndex: false
};


// Replace all markdown links with github pages URL path
const markdownItReplaceLinkOptions = {
  html: true,
  replaceLink: link => link.replace(/^\/.*$/, '/moduk-service-manual' + link)
}


module.exports = function (eleventyConfig) {


  // Watch for changes
  eleventyConfig.addWatchTarget('./src/assets');


  // Date published and updated formatting
  eleventyConfig.addFilter('publishedDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLLL yyyy');
  });


  eleventyConfig.setUseGitIgnore(false);


  // Copy GOV.UK fonts
  eleventyConfig.addPassthroughCopy({'node_modules/govuk-frontend/govuk/assets/fonts': 'assets/fonts'});


  // Copy GOV.UK javascript
  eleventyConfig.addPassthroughCopy({'node_modules/govuk-frontend/govuk/all.js': 'assets/scripts/all.js'});


  // Copy MOD.UK assets
  eleventyConfig.addPassthroughCopy({'./src/assets/images': 'assets/images'});


  // Table of contents
  eleventyConfig.addPlugin(eleventyPluginTOC, {
    tags: ['h2'],
    wrapper: 'nav',
    wrapperClass: 'moduk-contents-list',
    heading: true,
    headingClass: 'moduk-contents-list__title',
    headingLevel: 'h2',
    headingText: 'Contents',
    listType: 'ol',
    listClass: 'moduk-contents-list__list',
    listItemClass: 'moduk-contents-list__list-item moduk-contents-list__list-item--dashed',
    listItemAnchorClass: 'moduk-contents-list__link govuk-link govuk-link--no-visited-state',
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
  if (isProduction) {
    eleventyConfig.setLibrary('md', markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions).use(markdownItReplaceLink, markdownItReplaceLinkOptions).use(markdownItAttrs));
  } else {
    eleventyConfig.setLibrary('md', markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions).use(markdownItAttrs));
  }


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
