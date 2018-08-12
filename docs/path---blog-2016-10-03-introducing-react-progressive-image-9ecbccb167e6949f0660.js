webpackJsonp([0x5b261b602c9d],{731:function(e,a){e.exports={data:{markdownRemark:{html:'<h2>Progressive Image Loading Made Easy</h2>\n<p>Images can be big, and big can be bad on slow networks. Nobody wants to stare at whitespace while their network struggles to load your beautiful background image, so what can we do?</p>\n<p>That&#8217;s where progressive image loading comes in. Progressive image loading can be the difference between a blank page and a smooth user experience. That&#8217;s why we made <a href="https://github.com/FormidableLabs/react-progressive-image"><code>react-progressive-image</code></a>, a small React component that lets you render a smaller or inlined version of your image, or a loading icon (or anything else!) while your actual image is loaded in the background.</p>\n<p>react-progressive-image has a single export, <code>ProgressiveImage</code>, that takes a <code>src</code> and <code>placeholder</code> prop and asks that you provide a function as the only child. This function will be called with <code>placeholder</code> when the <code>src</code> image hasn&#8217;t loaded yet, and <code>src</code> when it has.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>ProgressiveImage src<span class="token operator">=</span><span class="token string">\'beautiful-hero.jpg\'</span> placeholder<span class="token operator">=</span><span class="token string">\'inlined-or-small-hero.jpg\'</span><span class="token operator">></span>\n  <span class="token punctuation">{</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Hero src<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>ProgressiveImage<span class="token operator">></span></code></pre>\n      </div>\n<p>Requiring a function that takes the active image and returns the active children makes <code>&lt;ProgressiveImage/&gt;</code> extremely flexible.<br />\nYou can render an <code>&lt;img/&gt;</code> directly, pass the active image to another component, use it as a <code>backgroundImage</code>, or anything else you<br />\ncould possibly think of.</p>\n<p>We hope this will make progressive easier for everyone, as a progressive user experience is a good user experience.</p>\n<p><em><a href="https://github.com/FormidableLabs/react-progressive-image">View the source code for React-Progressive-Image</a></em>.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 9.090909090909092%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&amp;repo=react-progressive-image&amp;type=star&amp;count=true&amp;size=large" frameborder="0" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 9.090909090909092%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://ghbtns.com/github-btn.html?user=aweary&amp;type=follow&amp;count=true&amp;size=large" frameborder="0" scrolling="0" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>',fields:{slug:"/blog/2016/10/03/introducing-react-progressive-image/"},frontmatter:{id:29,authorId:6,categoryIds:[6],date:"2016-10-03",pageDescription:"Progressive image loading for React",pageKeywords:"",pageTitle:"",path:"/2016/10/03/introducing-react-progressive-image/",title:"Introducing React Progressive Image"}}},pathContext:{slug:"/blog/2016/10/03/introducing-react-progressive-image/",prev:{fields:{slug:"/blog/2016/09/29/london-formidable-has-landed/"},frontmatter:{authorId:1,categoryIds:[4,6],date:"2016-09-29",id:28,title:"London: Formidable Has Landed."}}}}}});