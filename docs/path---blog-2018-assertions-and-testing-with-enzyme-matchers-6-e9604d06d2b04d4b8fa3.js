webpackJsonp([17945094823378],{758:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Enzyme Matchers allows you to run common assertions on your React components using Enzyme in a Jest or Jasmine environment. With it, you can easily test styles, disabled states, stylesheet classes, text and more. With version 6.0, Enzyme Matchers simplifies setup of your test environment in Jest, making it even easier to get started with.</p>\n<h2 id="builtin-matchers-for-common-test-patterns"><a href="#builtin-matchers-for-common-test-patterns" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>Built–In Matchers for Common Test Patterns</h2>\n<p>The assertions in Enzyme Matchers make it easier to test your React components, and can even simplify the testing of certain styles.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">props</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>expect<span class="token punctuation">.</span><span class="token function">objectContaining</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>becomes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveStyle</span><span class="token punctuation">(</span><span class="token string">\'backgroundColor\'</span><span class="token punctuation">,</span> <span class="token string">\'red\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>You can also easily test if your mounted components contain other React components.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">List</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>ul<span class="token operator">></span>\n    <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>Dog name<span class="token operator">=</span><span class="token string">"Leo"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n    <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>Dog name<span class="token operator">=</span><span class="token string">"Dixie"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>List <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContainReact</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Dog name<span class="token operator">=</span><span class="token string">"Leo"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toContainReact</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Dog name<span class="token operator">=</span><span class="token string">"Milo"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Assertions for matching classes, html markup, refs, state, and more are also included.</p>\n<h2 id="simplified-test-environment-setup"><a href="#simplified-test-environment-setup" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>Simplified Test Environment Setup</h2>\n<p>With Enzyme Matchers 6, getting your Jest test environment running has never been easier. The React 16 Enzyme adapter is applied by default, so you no longer have to manually set one up. If you need to change the version, you can do so inside your <code class="language-text">package.json</code>’s jest object. The <code class="language-text">jest-environment-enzyme</code> package eliminates the need to import React, shallow, mount, or render to every test file. A corresponding <code class="language-text">eslint-config-jest-enzyme</code> package takes care of any linting issues around those global variables.</p>\n<h2 id="how-to-get-started"><a href="#how-to-get-started" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>How To Get Started</h2>\n<p>To start using Enzyme Matchers and the simplified test environment using yarn or npm install, add <code class="language-text">jest-enzyme jest-environment-enzyme</code> to your dev dependencies. You can also install <code class="language-text">eslint-config-jest-enzyme</code> if you’re using ESLint. The assertions in Enzyme Matchers are included with <code class="language-text">jest-enzyme</code>.</p>\n<p>All you have to add to your package.json is:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token string">"jest"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"testEnvironment"</span><span class="token punctuation">:</span> <span class="token string">"enzyme"</span><span class="token punctuation">,</span>\n  <span class="token string">"setupTestFrameworkScriptFile"</span><span class="token punctuation">:</span> <span class="token string">"./node_modules/jest-enzyme/lib/index.js"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>To learn more about Enzyme Matchers visit the <a href="https://github.com/FormidableLabs/enzyme-matchers">GitHub repo</a> or send a tweet to <a href="https://twitter.com/blainekasten">Blaine Kasten</a>.</p>',fields:{slug:"/blog/2018/assertions-and-testing-with-enzyme-matchers-6/"},frontmatter:{id:58,authorId:20,categoryIds:[1,4,5],date:"2018-03-26",pageDescription:"Enzyme Matchers allows you to run common assertions on your React components using Enzyme in a Jest or Jasmine environment.",pageKeywords:"Enzyme, Enzyme Matchers, React, Jest, Jasmine, test environemnts, React components",pageTitle:"Effortless Assertions and Testing with Enzyme Matchers 6",path:"/2018/assertions-and-testing-with-enzyme-matchers-6/",title:"Effortless Assertions and Testing with Enzyme Matchers 6"}}},pathContext:{slug:"/blog/2018/assertions-and-testing-with-enzyme-matchers-6/",prev:{fields:{slug:"/blog/2018/introducing-urql/"},frontmatter:{authorId:9,categoryIds:[1,4,5,20],date:"2018-01-30",id:57,title:"Introducing URQL (beta), a Universal React Query Library"}}}}}});