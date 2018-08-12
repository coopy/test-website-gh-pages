webpackJsonp([0xdaa192231904],{717:function(e,i){e.exports={data:{markdownRemark:{html:'<p><em>Check out Radium Grid on <a href="https://github.com/FormidableLabs/radium-grid">GitHub</a>!</em></p>\n<p>After spending my formative frontend years implementing layouts with the CSS grid systems from both Bootstrap and Foundation, I developed a clear understanding of the strengths and weaknesses of both. Later, grid systems like <a href="http://jeet.gs/">Jeet</a> solved many of the pain points of the old grids: no more fixed-column straitjacket; support for arbitrary fractions; the removal of junk “row” DOM elements (and the obsolesence of the concept of fixed rows).</p>\n<p>Fast-forward to this year, where we at Formidable are hooked on the power of inline styles using Radium. How could I integrate the best of the various (S)CSS grid systems into a simple React component without a CSS preprocessor?</p>\n<p>Enter <strong>Radium Grid</strong>, a powerful, no-fuss grid system component for React. It combines the best decisions from the ecosystem of (S)CSS-based grid systems and implements them hack-free on top of Flexbox.</p>\n<p>What differentiates Radium Grid from the crowd of today’s grid systems?</p>\n<ul>\n<li><em>It&#8217;s just a React component.</em> Don&#8217;t worry about the layout implementation of the grid–just declare what you want in JSX!</li>\n<li><em>Includes sensible defaults.</em> Radium Grid renders the least surprising thing when given no or few props.</li>\n<li><em>Uses arbitrary fractions for cell widths.</em> Mix and match different denominators to your heart&#8217;s content. You can be as precise as you want to be without being beholden to a 12- or 24-column straitjacket!</li>\n<li><em>Infers rows from the given cell sizes.</em> You don&#8217;t even have to declare rows anymore–it&#8217;s just math! No more junk row DOM nodes either!</li>\n<li><em>Customizable horizontal and vertical cell alignment.</em> No hacks here–it&#8217;s just Flexbox!</li>\n<li><em>Customizable fixed-width and fluid-width gutters.</em> You can pass in any CSS unit (e.g. <code>px</code> for fixed, <code>%</code> for fluid) and Radium Grid will calculate everything behind the scenes.</li>\n<li><em>Customizable media queries for grid breakpoint definitions.</em> Radium Grid includes sensible mobile, tablet, and desktop breakpoints, but can accept any number of custom media queries.</li>\n<li><em>Integrates with Radium.</em> Passing arrays to the <code>style</code> prop works just as it would in Radium!</li>\n<li><em>Infinitely customizable with cascading defaults.</em> Set cell props on:\n<ul>\n<li>all cells for all sizes,</li>\n<li>all cells for individual sizes,</li>\n<li>a single cell for all sizes,</li>\n<li>a single cell for individual sizes,</li>\n<li>&#8230;with the lowest props in the tree overriding parent props.</li>\n</ul>\n</li>\n</ul>\n<p>But that’s enough talk. What does Radium Grid look like in practice?</p>\n<h2 id="using-radium-grid"><a href="#using-radium-grid" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>Using Radium Grid</h2>\n<p>Be sure to resize the JSBin output window or follow the links to the following examples to see the behavior of the grid on different screen sizes!</p>\n<p>A barebones Radium Grid looks like the following:</p>\n<p><a class="jsbin-embed" href="https://jsbin.com/loduru/embed?js,output">Radium Grid: Barebones on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.39.18"></script></p>\n<p>The above example will render with the following provided defaults:</p>\n<ul>\n<li>All cells in the grid are 1/3 wide for all screen sizes.</li>\n<li>The grid uses a 16px fixed gutter.</li>\n<li>Cell content is aligned to the top left.</li>\n<li>The breakpoints use the following media queries:\n<ul>\n<li><code>small: "@media only screen and (max-width: 640px)"</code>,</li>\n<li><code>medium: "@media only screen and (min-width: 641px) and (max-width: 1024px)"</code>,</li>\n<li><code>large: "@media only screen and (min-width: 1025px) and (max-width: 1440px)"</code>,</li>\n<li><code>xlarge: "@media only screen and (min-width: 1441px)"</code></li>\n</ul>\n</li>\n</ul>\n<p>To set a default width and alignment for every cell in the grid:</p>\n<p><a class="jsbin-embed" href="https://jsbin.com/cogusas/embed?js,output">Radium Grid: Default Width and Alignment on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.39.19"></script></p>\n<p>An example of setting widths and alignment per screen size for every cell in the grid:</p>\n<p><a class="jsbin-embed" href="https://jsbin.com/nepiwuq/embed?js,output">Radium Grid: Responsive on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.39.19"></script></p>\n<p>An example of custom per-cell widths and alignments:</p>\n<p><a class="jsbin-embed" href="https://jsbin.com/cutamev/embed?js,output">Radium Grid: Custom Cell Width and Alignment on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.39.19"></script></p>\n<p>The same as above, but with different per-cell widths on small screens:</p>\n<p><a class="jsbin-embed" href="https://jsbin.com/tebewu/embed?js,output">Radium Grid: Responsive with Custom Width on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.39.19"></script></p>\n<p>Custom gutters can use any valid CSS value string. Percentage values create fluid gutters, while all other values create fixed gutters. Example:</p>\n<p><a class="jsbin-embed" href="https://jsbin.com/xukuweq/embed?js,output">Radium Grid: Custom Gutters on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.39.19"></script></p>\n<p>While we recommend the default breakpoints, you can customize them:</p>\n<p><a class="jsbin-embed" href="https://jsbin.com/qexewu/embed?js,output">Radium Grid: Custom Breakpoints on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.39.19"></script></p>\n<h2 id="coming-soon-to-a-grid-near-you"><a href="#coming-soon-to-a-grid-near-you" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>Coming Soon to a Grid Near You</h2>\n<p>Our most community-requested feature is cell offsets (made popular in Bootstrap and Foundation), so that’ll be our first priority in the next release. We’re also reconsidering the behavior and media queries of our default breakpoints</p>\n<h2 id="try-radium-grid-today"><a href="#try-radium-grid-today" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>Try Radium Grid Today!</h2>\n<p>Radium Grid is fresh, but has a stable API. We’d love to hear your feedback on the API and any of its default behaviors through the <a href="https://github.com/FormidableLabs/radium-grid/issues">issues</a> in the GitHub repo.</p>\n<p>Discover how powerful the grid can be when you inject a dose of React and Radium!</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 9.090909090909092%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&amp;repo=radium-grid&amp;type=star&amp;count=true&amp;size=large" frameborder="0" scrolling="0" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 9.090909090909092%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://ghbtns.com/github-btn.html?user=tptee&amp;type=follow&amp;count=true&amp;size=large" frameborder="0" scrolling="0" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>',fields:{slug:"/blog/2016/06/20/radium-grid-a-react-grid-system-injected-with-the-power-of-radium/"},frontmatter:{id:15,authorId:7,categoryIds:[5,12,1],date:"2016-06-20",pageDescription:"",pageKeywords:"",pageTitle:"",path:"/2016/06/20/radium-grid-a-react-grid-system-injected-with-the-power-of-radium/",title:"Radium Grid: A React Grid System Injected with the Power of Radium"}}},pathContext:{slug:"/blog/2016/06/20/radium-grid-a-react-grid-system-injected-with-the-power-of-radium/",prev:{fields:{slug:"/blog/2016/06/02/why-we-chose-mobx-over-redux-for-spectacle-editor/"},frontmatter:{authorId:10,categoryIds:[5,13],date:"2016-06-02",id:14,title:"Why we chose MobX over Redux for Spectacle Editor"}}}}}});