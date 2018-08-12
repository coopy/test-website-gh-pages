webpackJsonp([0x8d99dd95123e],{890:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="zoom-on-large-datasets"><a href="#zoom-on-large-datasets" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Zoom on Large Datasets</h1>\n<p>Victory can handle hundreds of data points, but what if you’d like chart thousands of points?\n<a href="https://formidable.com/open-source/victory/docs/victory-zoom-container">VictoryZoomContainer</a> can be useful here, allowing the user to focus on the subset of data they are most interested in.</p>\n<p>By default Victory will render all data points in a dataset.\nFor large datasets this behavior can be overridden, and this guide will show you how.\nIf you haven’t used it before, read about the <a href="https://formidable.com/open-source/victory/docs/victory-zoom-container">VictoryZoomContainer</a> first, then come back to this guide.</p>\n<p>In a hurry? <a href="https://formidable.com/open-source/victory/guides/zoom-large-data#demo">Skip to the demo</a>.</p>\n<h2 id="basic-scenario-time-series-data"><a href="#basic-scenario-time-series-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic scenario: time-series data</h2>\n<p>In this guide, we’ll be working with time-series data. We’ll make a few basic assumptions:</p>\n<ol>\n<li>zooming will be done only on the x (or time) dimension,</li>\n<li>our data will be ordered by x, from earliest to latest, and</li>\n<li>the dataset is static - no new data will arrive while the user is interacting with the chart.</li>\n</ol>\n<p>These just serve to simplify the example. We’ll start with a simple chart:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CustomChart</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  \t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>VictoryChart containerComponent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>VictoryZoomContainer<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span>VictoryScatter data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>VictoryChart<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>CustomChart data<span class="token operator">=</span><span class="token punctuation">{</span>allData<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="render-only-visible-points"><a href="#render-only-visible-points" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Render only visible points</h2>\n<p>Rather than passing all our data to the <code class="language-text">data</code> prop, we’ll first remove any data that isn’t currently visible.\nTo do this, we must keep track of the chart’s visible domain;\n<a href="https://formidable.com/open-source/victory/docs/victory-zoom-container">VictoryZoomContainer</a> has an <code class="language-text">onZoomDomainChange</code> prop that will allow us to do exactly that:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>VictoryChart\n  containerComponent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>VictoryZoomContainer\n    onZoomDomainChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDomainChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n  <span class="token operator">&lt;</span>VictoryScatter data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>VictoryChart<span class="token operator">></span></code></pre>\n      </div>\n<p>Update the state every time the domain changes (note that we are only keeping track of the <code class="language-text">x</code> dimension):</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">onDomainChange</span><span class="token punctuation">(</span>domain<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    zoomedXDomain<span class="token punctuation">:</span> domain<span class="token punctuation">.</span>x<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Use this <code class="language-text">zoomedXDomain</code> state to filter out all data that isn’t currently visible.\nHere we’re making a simple <code class="language-text">getData</code> method; note the data array’s <code class="language-text">filter</code> function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> zoomedXDomain <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n    <span class="token comment">// is d "between" the ends of the visible x-domain?</span>\n    <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>d<span class="token punctuation">.</span>x <span class="token operator">>=</span> zoomedXDomain<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> d<span class="token punctuation">.</span>x <span class="token operator">&lt;=</span> zoomedXDomain<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Because we are dynamically changing the <code class="language-text">data</code> prop on <a href="https://formidable.com/open-source/victory/docs/victory-chart">VictoryChart</a>,\nwe must also explicitly set its <code class="language-text">domain</code>.\nBy default <code class="language-text">VictoryChart</code> will calculate a domain from <code class="language-text">data</code>;\nin this case that would mean that the chart would “forget” about the rest of the data as the user zoomed in.\nIn fact, there would be no way to zoom back out!</p>\n<p>To remedy this, we must calculate the domain of the entire dataset:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">getEntireDomain</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    y<span class="token punctuation">:</span> <span class="token punctuation">[</span>_<span class="token punctuation">.</span><span class="token function">minBy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> d <span class="token operator">=></span> d<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">.</span>y<span class="token punctuation">,</span> _<span class="token punctuation">.</span><span class="token function">maxBy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> d <span class="token operator">=></span> d<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">.</span>y<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    x<span class="token punctuation">:</span> <span class="token punctuation">[</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> _<span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>x <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We use <a href="https://lodash.com/">Lodash</a>’s <code class="language-text">minBy</code> and <code class="language-text">maxBy</code> functions to find the domain of <code class="language-text">y</code>.\nBecause we assume that the data is ordered by <code class="language-text">x</code>, we can use the first and last points for the <code class="language-text">x</code> domain.</p>\n<p>Because we are assuming the data is static we just need to call this function once, in the constructor of <code class="language-text">CustomChart</code>.\nThe calculated <code class="language-text">x</code> domain will also be used as the initial value for <code class="language-text">state.zoomedXDomain</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>entireDomain <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEntireDomain</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    zoomedXDomain<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>entireDomain<span class="token punctuation">.</span>x<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The static value <code class="language-text">this.entireDomain</code> can then be used by <code class="language-text">VictoryChart</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>VictoryChart\n  domain<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>entireDomain<span class="token punctuation">}</span>\n  containerComponent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>VictoryZoomContainer\n    zoomDimension<span class="token operator">=</span><span class="token string">"x"</span>\n    onZoomDomainChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDomainChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n  <span class="token operator">&lt;</span>VictoryScatter data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>VictoryChart<span class="token operator">></span></code></pre>\n      </div>\n<p>Now we are only rendering the visible points, but this step isn’t nearly enough:\nwhen the chart is zoomed out we still render all of the data points!</p>\n<h2 id="render-a-small-sample-of-points"><a href="#render-a-small-sample-of-points" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Render a small sample of points</h2>\n<p>There are a number of possible methods to reducing the number of visible data points rendered.\nWe’ll use the simplest method: selecting only every <code class="language-text">k</code>th point, and discarding all others.\n<code class="language-text">k</code> is determined simply:\nif there are 5,000 points and we only want to show 100, then <code class="language-text">k</code> is 50.</p>\n<p>We’ll add a <code class="language-text">maxPoints</code> prop to <code class="language-text">CustomChart</code>\nwhich will determine the maximum number of points returned by <code class="language-text">getData</code>.\nAll of the existing logic in <code class="language-text">getData</code> will stay\nand another <code class="language-text">filter</code> will be added afterwards:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> zoomedXDomain <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> maxPoints <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> filtered <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>d<span class="token punctuation">.</span>x <span class="token operator">>=</span> zoomedXDomain<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> d<span class="token punctuation">.</span>x <span class="token operator">&lt;=</span> zoomedXDomain<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// new code here...</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>filtered<span class="token punctuation">.</span>length <span class="token operator">></span> maxPoints <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> k <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>filtered<span class="token punctuation">.</span>length <span class="token operator">/</span> maxPoints<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> filtered<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n      <span class="token punctuation">(</span>d<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">%</span> k<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> filtered<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now the chart will always render at most <code class="language-text">maxPoints</code>,\nno matter the zoom level.</p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<pre class="pre"><code class="language-playground_norender">// 10000 points (10 / 0.001 = 10000) - see what happens when you render 50k or 100k\nconst allData = _.range(0, 10, 0.001).map(x =&gt; ({\n\tx: x,\n  y: Math.sin(Math.PI*x/2) * x / 10\n}));\n\nclass CustomChart extends React.Component {\n  constructor(props) {\n  \tsuper();\n    this.entireDomain = this.getEntireDomain(props);\n   \tthis.state = {\n    \tzoomedXDomain: this.entireDomain.x,\n    };\n  }\n\tonDomainChange(domain) {\n  \tthis.setState({\n    \tzoomedXDomain: domain.x,\n    });\n  }\n  getData() {\n  \tconst { zoomedXDomain } = this.state;\n    const { data, maxPoints } = this.props;\n  \tconst filtered = data.filter(\n    \t(d) =&gt; (d.x &gt;= zoomedXDomain[0] &amp;&amp; d.x &lt;= zoomedXDomain[1]));\n\n    if (filtered.length &gt; maxPoints ) {\n      const k = Math.ceil(filtered.length / maxPoints);\n    \treturn filtered.filter(\n      \t(d, i) =&gt; ((i % k) === 0)\n      );\n    }\n    return filtered;\n  }\n  getEntireDomain(props) {\n  \tconst { data } = props;\n    return {\n    \ty: [_.minBy(data, d =&gt; d.y).y, _.maxBy(data, d =&gt; d.y).y],\n      x: [ data[0].x, _.last(data).x ]\n    };\n  }\n  getZoomFactor() {\n    const { zoomedXDomain } = this.state;\n    const factor = 10 / (zoomedXDomain[1] - zoomedXDomain[0]);\n    return _.round(factor, factor &lt; 3 ? 1 : 0);\n  }\n\trender() {\n    const renderedData = this.getData();\n  \treturn (\n    \t&lt;div&gt;\n        &lt;VictoryChart\n          domain={this.entireDomain}\n          containerComponent={&lt;VictoryZoomContainer\n            zoomDimension=&quot;x&quot;\n            onZoomDomainChange={this.onDomainChange.bind(this)}\n            minimumZoom={{x: 1/10000}}\n          /&gt;}\n        &gt;\n          &lt;VictoryScatter data={renderedData} /&gt;\n        &lt;/VictoryChart&gt;\n        &lt;div&gt;\n          {this.getZoomFactor()}x zoom;\n          rendering {renderedData.length} of {this.props.data.length}\n        &lt;/div&gt;\n      &lt;/div&gt;\n    );\n  }\n}\n\nReactDOM.render(&lt;CustomChart data={allData} maxPoints={120} /&gt;, mountNode);</code></pre>\n<h2 id="extending-this-demo"><a href="#extending-this-demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending this Demo</h2>\n<p>This guide serves a start, but you might have some questions:</p>\n<ul>\n<li><em>How big should <code class="language-text">maxPoints</code> be?</em> For most situations between 50 and 150 is ideal.</li>\n<li><em>What if I want to render millions of data points?</em> This concept can be extended to millions of points, but you’ll need the help of a library to handle the sampling. Try <a href="http://square.github.io/crossfilter/">Crossfilter</a>.</li>\n<li><em>Can I remove the “flicker” of points as I zoom in?</em> Yes, but <code class="language-text">getData()</code> will have to be a little more complex.\nThis apparent movement of the points while zooming happens because different points are chosen to be displayed.\nHere is an example that reduces flicker by reliably choosing the same data points to display:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> <span class="token punctuation">{</span> zoomedXDomain <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\t<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> maxPoints <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n\t<span class="token keyword">const</span> startIndex <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">=></span> d<span class="token punctuation">.</span>x <span class="token operator">>=</span> zoomedXDomain<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">const</span> endIndex <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">=></span> d<span class="token punctuation">.</span>x <span class="token operator">></span> zoomedXDomain<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">const</span> filtered <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>filtered<span class="token punctuation">.</span>length <span class="token operator">></span> maxPoints <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// limit k to powers of 2, e.g. 64, 128, 256</span>\n\t\t<span class="token comment">// so that the same points will be chosen reliably, reducing flicker</span>\n\t\t<span class="token keyword">const</span> k <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">log2</span><span class="token punctuation">(</span>filtered<span class="token punctuation">.</span>length <span class="token operator">/</span> maxPoints<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">return</span> filtered<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n\t\t\t<span class="token comment">// ensure modulo is always calculated from same reference: i + startIndex</span>\n\t\t\t<span class="token punctuation">(</span>d<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">+</span> startIndex<span class="token punctuation">)</span> <span class="token operator">%</span> k<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> filtered<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{id:10,scope:["_"],title:"Zoom on Large Datasets"},fields:{slug:"/guides/zoom-large-data/"}}},pathContext:{slug:"/guides/zoom-large-data/"}}}});
//# sourceMappingURL=path---guides-zoom-large-data-78c3d5282b86d233c9e2.js.map