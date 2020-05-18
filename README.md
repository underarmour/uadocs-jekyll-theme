# UA Docs Jekyll Theme
Jekyll is driven mostly by the theme being used as it can substantively change not only the look and feel but also the way metadata is used.  In this case, we have started with a great theme called [just-the-docs](https://github.com/pmarsceill/just-the-docs) and modified to support some features that we will need as we maintain this documentation.  

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "./uadocs"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: ./uadocs
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install ./uadocs

## Usage

## Inherited Features and Data
The UADocs theme is mostly based on the just-the-docs theme which is fully [documented here](https://pmarsceill.github.io/just-the-docs/) and of course the features that are built into jekyll which are [documented here](https://jekyllrb.com/)

## New Features and Data

### Helpful Includes

#### article_splash
The bulk of the differences lie in the `article_splash.html` include which makes use of the following data:

To see an example of this in the front matter, check out any of the `.md` documents in the repo (except, of course, this one)

#### site_toc
The other newly available feature is the `site_toc.html` include which shows a table of contents showing 
only the top level entries along with the summary for each.  This is used exclusively on the home page `/index.md` 

### Available Properties

* `deprecated` - When set to `true` in the frontmatter of page, a deprecation notice will appear at the top of the page
* `out_of_date` - When set to `true` in the frontmatter of page, an out of date notice will appear at the top of the page
* `title_image` - When set to a relative pat to an image (that is at least 64x64 and square), this image will appear to the left of the title.
* `quicklinks` - An array of objects that include a `title` field and a `link` field.  These will be displayed in "QuickLinks" box that is highlighted in some way from the rest of the content.
* `hide_local_toc` - This is false by default, but when set to true the table of contents which shows the headers in the current page will not be shown.  
* `permission` - This value can be set to `public`.  When set to public, this page will be visible in the left navigation even when being served from the `external-docs` domain. If it is not set or set to anything else, the page will be hidden in the navigation.

And then of course there's the existing data that's also used by that include:
* `title` - The title will be displayed at the top of the article
* `summary` - The summary will appear below the title and will also be seen in tables of content that include summary.

### Available Kramdown Attributes

Kramdown allows for attributes after block level or span-level elements in the markdown.  There are a lot of ways
to take advantage of this helpful feature but the most important one is the addition of css classes. This is a 
list of helpful attributes that can be added to your markdown to create a richer page of documentation:

* `{:.important}` - Creates a box around the block level element with an icon and different background color
* `{: .public}` - This is useful only on pages that have the `public` value for the `permission` attribute.  When appearing after a link, this will prevent that link from getting the "protected" treatment when viewing the page on the "external" domain.

For more about Kramdown's attributes, checkout the [kramdown quick reference page](https://kramdown.gettalong.org/quickref.html).

# License
The theme is available as open source under the terms of the MIT License.
