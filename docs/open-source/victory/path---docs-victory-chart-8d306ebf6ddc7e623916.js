webpackJsonp([0xcf0945bb2ad8],{833:function(a,e){a.exports={data:{markdownRemark:{html:'<h1 id="victorychart"><a href="#victorychart" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>VictoryChart</h1>\n<p><code class="language-text">VictoryChart</code> is a wrapper component that renders a given set of children on a set of Cartesian or polar axes. <code class="language-text">VictoryChart</code> reconciles the domain for all its children, controls the layout of the chart, and coordinates animations and shared events. If no children are provided, <code class="language-text">VictoryChart</code> will render a set of empty default axes.</p>\n<pre class="pre"><code class="language-playground">&lt;div&gt;\n  &lt;VictoryChart\n    theme={VictoryTheme.material}\n  &gt;\n    &lt;VictoryArea data={sampleData}/&gt;\n    &lt;VictoryAxis/&gt;\n  &lt;/VictoryChart&gt;\n  &lt;VictoryChart polar\n    theme={VictoryTheme.material}\n  &gt;\n    &lt;VictoryArea data={sampleData}/&gt;\n    &lt;VictoryPolarAxis/&gt;\n  &lt;/VictoryChart&gt;\n&lt;/div&gt;</code></pre>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<h3 id="animate"><a href="#animate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>animate</h3>\n<p><code class="language-text">type: boolean || object</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">animate</code> prop. <a href="/open-source/victory/docs/common-props/#animate">Read about it here</a></p>\n<p>See the <a href="https://formidable.com/open-source/victory/guides/animations">Animations Guide</a> for more detail on animations and transitions</p>\n<p><strong>note: <code class="language-text">VictoryChart</code> controls the <code class="language-text">animate</code> prop of its children when set. To animate individual children of <code class="language-text">VictoryChart</code>, set the <code class="language-text">animate</code> prop only on children, and not on the <code class="language-text">VictoryChart</code> wrapper.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">animate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n  duration<span class="token punctuation">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>\n  onLoad<span class="token punctuation">:</span> <span class="token punctuation">{</span> duration<span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="children"><a href="#children" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>children</h3>\n<p><code class="language-text">type: element || array[element]</code></p>\n<p><code class="language-text">VictoryChart</code> works with any combination of the following children: <a href="https://formidable.com/open-source/victory/docs/victory-area">VictoryArea</a>, <a href="https://formidable.com/open-source/victory/docs/victory-axis">VictoryAxis</a> / <a href="https://formidable.com/open-source/victory/docs/victory-polar-axis">VictoryPolarAxis</a>, <a href="https://formidable.com/open-source/victory/docs/victory-bar">VictoryBar</a>, <a href="https://formidable.com/open-source/victory/docs/victory-candlestick">VictoryCandlestick</a>, <a href="https://formidable.com/open-source/victory/docs/victory-errorbar">VictoryErrorBar</a>, <a href="https://formidable.com/open-source/victory/docs/victory-group">VictoryGroup</a>, <a href="https://formidable.com/open-source/victory/docs/victory-line">VictoryLine</a>, <a href="https://formidable.com/open-source/victory/docs/victory-scatter">VictoryScatter</a>, <a href="https://formidable.com/open-source/victory/docs/victory-stack">VictoryStack</a>, and <a href="https://formidable.com/open-source/victory/docs/victory-voronoi">VictoryVoronoi</a>. Children supplied to <code class="language-text">VictoryChart</code> will be cloned and rendered with new props so that all children share common props such as <code class="language-text">domain</code> and <code class="language-text">scale</code>.</p>\n<p><strong>Note: polar charts must use <code class="language-text">VictoryPolarAxis</code> rather than <code class="language-text">VictoryAxis</code></strong></p>\n<h3 id="containercomponent"><a href="#containercomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>containerComponent</h3>\n<p><code class="language-text">type: element</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">containerComponent</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#containercomponent">Read about it in detail here</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">containerComponent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VictoryVoronoiContainer</span><span class="token punctuation">/></span></span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="domain"><a href="#domain" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>domain</h3>\n<p><code class="language-text">type: array[low, high] || { x: [low, high], y: [low, high] }</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">domain</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#domain">Read about it in detail here</a></p>\n<p><strong>note: <code class="language-text">VictoryChart</code> controls the <code class="language-text">domain</code> prop of its children.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">domain<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="domainpadding"><a href="#domainpadding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>domainPadding</h3>\n<p><code class="language-text">type: number || array[left, right] || { x: [left, right], y: [bottom, top] }</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">domainPadding</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props#domainpadding">Read about it in detail here</a></p>\n<p><strong>note: <code class="language-text">VictoryChart</code> controls the <code class="language-text">domainPadding</code> prop of its children.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">domainPadding<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="endangle"><a href="#endangle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>endAngle</h3>\n<p><code class="language-text">type: number</code></p>\n<p>The <code class="language-text">endAngle</code> props defines the overall end angle of a polar chart in degrees. This prop is used in conjunction with <code class="language-text">startAngle</code> to create polar chart that spans only a segment of a circle, or to change overall rotation of the chart. This prop should be given as a number of degrees. Degrees are defined as starting at the 3 o’clock position, and proceeding counterclockwise.</p>\n<p><em>default:</em> <code class="language-text">endAngle={360}</code></p>\n<pre class="pre"><code class="language-playground">&lt;div&gt;\n  &lt;VictoryChart polar\n    theme={VictoryTheme.material}\n    startAngle={90}\n    endAngle={450}\n  &gt;\n    &lt;VictoryPolarAxis\n      tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}\n      labelPlacement=&quot;vertical&quot;\n    /&gt;\n    &lt;VictoryBar style={{ data: { fill: &quot;tomato&quot;, width: 30 } }}\n      data={[\n        { x: 0, y: 2 },\n        { x: 60, y: 3 },\n        { x: 120, y: 5 },\n        { x: 180, y: 4 },\n        { x: 240, y: 4 },\n        { x: 300, y: 4 }\n      ]}\n    /&gt;\n  &lt;/VictoryChart&gt;\n\n  &lt;VictoryChart polar\n    theme={VictoryTheme.material}\n    startAngle={0}\n    endAngle={180}\n  &gt;\n    &lt;VictoryPolarAxis\n      tickValues={[0, 45, 90, 135, 180]}\n      labelPlacement=&quot;vertical&quot;\n    /&gt;\n    &lt;VictoryBar style={{ data: { fill: &quot;tomato&quot;, width: 30 } }}\n      data={[\n        { x: 0, y: 2 },\n        { x: 45, y: 3 },\n        { x: 90, y: 5 },\n        { x: 135, y: 4 },\n        { x: 180, y: 7 }\n      ]}\n    /&gt;\n  &lt;/VictoryChart&gt;\n&lt;/div&gt;</code></pre>\n<h3 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>events</h3>\n<p><code class="language-text">type: array[object]</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">events</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#events">Read about it in more detail here</a></p>\n<p>See the <a href="https://formidable.com/open-source/victory/guides/events">Events Guide</a> for more information on defining events.</p>\n<p><strong>Note: <code class="language-text">VictoryChart</code> coordinates events between children using the <code class="language-text">VictorySharedEvents</code> and the <code class="language-text">sharedEvents</code> prop</strong></p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart\n  events={[{\n    childName: &quot;all&quot;,\n    target: &quot;data&quot;,\n    eventHandlers: {\n      onClick: () =&gt; {\n        return [\n          {\n            childName: &quot;area-2&quot;,\n            target: &quot;data&quot;,\n            mutation: (props) =&gt; ({ style: Object.assign({}, props.style, { fill: &quot;gold&quot; }) })\n          }, {\n            childName: &quot;area-3&quot;,\n            target: &quot;data&quot;,\n            mutation: (props) =&gt; ({ style: Object.assign({}, props.style, { fill: &quot;orange&quot; }) })\n          }, {\n            childName: &quot;area-4&quot;,\n            target: &quot;data&quot;,\n            mutation: (props) =&gt; ({ style: Object.assign({}, props.style, { fill: &quot;red&quot; }) })\n          }\n        ];\n      }\n    }\n  }]}\n&gt;\n  &lt;VictoryStack&gt;\n    &lt;VictoryArea name=&quot;area-1&quot; data={sampleData}/&gt;\n    &lt;VictoryArea name=&quot;area-2&quot; data={sampleData}/&gt;\n    &lt;VictoryArea name=&quot;area-3&quot; data={sampleData}/&gt;\n    &lt;VictoryArea name=&quot;area-4&quot; data={sampleData}/&gt;\n  &lt;/VictoryStack&gt;\n&lt;/VictoryChart&gt;</code></pre>\n<h3 id="externaleventmutations"><a href="#externaleventmutations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>externalEventMutations</h3>\n<p><code class="language-text">type: array[object]</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">externalEventMutations</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#externalEventsMutations">Read about it in detail</a></p>\n<h3 id="groupcomponent"><a href="#groupcomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>groupComponent</h3>\n<p><code class="language-text">type: element</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">groupComponent</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#groupcomponent">Read about it in detail here</a></p>\n<p><em>default:</em> <code class="language-text">&lt;g/&gt;</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">groupComponent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>translate(10, 10)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="height"><a href="#height" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>height</h3>\n<p><code class="language-text">type: number</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">height</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#height">Read about it in detail here</a></p>\n<p><strong>note: <code class="language-text">VictoryChart</code> controls the <code class="language-text">height</code> prop of its children.</strong></p>\n<p><em>default (provided by default theme):</em> <code class="language-text">height={300}</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="innerradius"><a href="#innerradius" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>innerRadius</h3>\n<p><code class="language-text">type: number</code></p>\n<p>When the <code class="language-text">innerRadius</code> prop is set, polar charts will be hollow rather than circular.</p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart polar theme={VictoryTheme.material} innerRadius={50}&gt;\n  &lt;VictoryPolarAxis/&gt;\n  &lt;VictoryPolarAxis dependentAxis tickValues={[1, 3, 5]} axisAngle={40}/&gt;\n  &lt;VictoryBar data={sampleData} style={{ data: { fill: &quot;#c43a31&quot;, width: 30 } }}/&gt;\n&lt;/VictoryChart&gt;</code></pre>\n<h3 id="maxdomain"><a href="#maxdomain" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>maxDomain</h3>\n<p><code class="language-text">type: number || { x: number, y: number }</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">maxDomain</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props#maxDomain">Read about it in detail</a></p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart maxDomain={{ y: 4.5 }}&gt;\n  &lt;VictoryLine data={sampleData}/&gt;\n&lt;/VictoryChart&gt;</code></pre>\n<h3 id="mindomain"><a href="#mindomain" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>minDomain</h3>\n<p><code class="language-text">type: number || { x: number, y: number }</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">minDomain</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props#minDomain">Read about it in detail</a></p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart minDomain={{ y: 0 }}&gt;\n  &lt;VictoryLine data={sampleData}/&gt;\n&lt;/VictoryChart&gt;</code></pre>\n<h3 id="padding"><a href="#padding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>padding</h3>\n<p><code class="language-text">type: number || { top: number, bottom: number, left: number, right: number }</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">padding</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#padding">Read about it in detail here</a></p>\n<p><strong>note: <code class="language-text">VictoryChart</code> controls the <code class="language-text">padding</code> prop of its children.</strong></p>\n<p><em>default (provided by default theme):</em> <code class="language-text">padding={50}</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">padding<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> top<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> bottom<span class="token punctuation">:</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="polar"><a href="#polar" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>polar</h3>\n<p><code class="language-text">type: boolean</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">polar</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#polar">Read about it in detail here</a></p>\n<p><strong>Notes:</strong></p>\n<ul>\n<li><code class="language-text">VictoryChart</code> controls the <code class="language-text">polar</code> prop of its children</li>\n<li>Polar charts should use <code class="language-text">VictoryPolarAxis</code> rather than <code class="language-text">VictoryAxis</code></li>\n</ul>\n<pre class="pre"><code class="language-playground">&lt;div&gt;\n  &lt;VictoryChart polar\n    theme={VictoryTheme.material}\n  &gt;\n    &lt;VictoryPolarAxis/&gt;\n    &lt;VictoryBar\n      data={sampleData}\n      style={{ data: { fill: &quot;#c43a31&quot;, stroke: &quot;black&quot;, strokeWidth: 2 }}}\n    /&gt;\n  &lt;/VictoryChart&gt;\n\n  &lt;VictoryChart\n    theme={VictoryTheme.material}\n  &gt;\n    &lt;VictoryAxis/&gt;\n    &lt;VictoryBar\n      data={sampleData}\n      style={{ data: { fill: &quot;#c43a31&quot;, stroke: &quot;black&quot;, strokeWidth: 2 }}}\n    /&gt;\n  &lt;/VictoryChart&gt;\n&lt;/div&gt;</code></pre>\n<h3 id="range"><a href="#range" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>range</h3>\n<p><code class="language-text">type: array[low, high] || { x: [low, high], y: [low, high] }</code></p>\n<p><strong>The <code class="language-text">range</code> prop is usually calculated based on other props. It will not typically be necessary to set a <code class="language-text">range</code> prop manually</strong></p>\n<p><strong>note: <code class="language-text">VictoryChart</code> controls the <code class="language-text">range</code> prop of its children.</strong></p>\n<p><a href="https://formidable.com/open-source/victory/docs/common-props/#range">Read about the <code class="language-text">range</code> prop in detail</a></p>\n<h3 id="scale"><a href="#scale" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>scale</h3>\n<p><code class="language-text">type: scale || { x: scale, y: scale }</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">scale</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#scale">Read about it here</a>\nOptions for scale include “linear”, “time”, “log”, “sqrt” and the <code class="language-text">d3-scale</code> functions that correspond to these options.</p>\n<p><strong>note: <code class="language-text">VictoryChart</code> controls the <code class="language-text">scale</code> prop of its children.</strong></p>\n<p><em>default:</em> <code class="language-text">scale=&quot;linear&quot;</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">scale<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token string">"linear"</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token string">"log"</span><span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="sharedevents"><a href="#sharedevents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>sharedEvents</h3>\n<p><strong>The <code class="language-text">sharedEvents</code> prop is used internally to coordinate events between components. It should not be set manually.</strong></p>\n<h3 id="singlequadrantdomainpadding"><a href="#singlequadrantdomainpadding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>singleQuadrantDomainPadding</h3>\n<p><code class="language-text">type: boolean || { x: boolean, y: boolean }</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">singleQuadrantDomainPadding</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props#singlequadrantdomainpadding">Read about it here</a></p>\n<h3 id="standalone"><a href="#standalone" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>standalone</h3>\n<p><code class="language-text">type: boolean</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">standalone</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#standalone">Read about it in detail here</a></p>\n<p><strong>note:</strong> <code class="language-text">VictoryChart</code> sets `standalone={false} for all of its children.</p>\n<p><em>default:</em> <code class="language-text">standalone={true}</code></p>\n<pre class="pre"><code class="language-playground">&lt;svg width={300} height={300}&gt;\n  &lt;circle cx={150} cy={150} r={150} fill=&quot;#c43a31&quot;/&gt;\n  &lt;VictoryChart\n    standalone={false}\n    width={300} height={300}\n  /&gt;\n&lt;/svg&gt;</code></pre>\n<h3 id="startangle"><a href="#startangle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>startAngle</h3>\n<p><code class="language-text">type: number</code></p>\n<p>The <code class="language-text">startAngle</code> props defines the overall start angle of a polar chart in degrees. This prop is used in conjunction with <code class="language-text">endAngle</code> to create polar chart that spans only a segment of a circle, or to change overall rotation of the chart. This prop should be given as a number of degrees. Degrees are defined as starting at the 3 o’clock position, and proceeding counterclockwise.</p>\n<p><em>default:</em> <code class="language-text">startAngle={0}</code></p>\n<pre class="pre"><code class="language-playground">&lt;div&gt;\n  &lt;VictoryChart polar\n    theme={VictoryTheme.material}\n    startAngle={90}\n    endAngle={450}\n  &gt;\n    &lt;VictoryPolarAxis\n      tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}\n      labelPlacement=&quot;vertical&quot;\n    /&gt;\n    &lt;VictoryBar style={{ data: { fill: &quot;tomato&quot;, width: 30 } }}\n      data={[\n        { x: 0, y: 2 },\n        { x: 60, y: 3 },\n        { x: 120, y: 5 },\n        { x: 180, y: 4 },\n        { x: 240, y: 4 },\n        { x: 300, y: 4 }\n      ]}\n    /&gt;\n  &lt;/VictoryChart&gt;\n\n  &lt;VictoryChart polar\n    theme={VictoryTheme.material}\n    startAngle={0}\n    endAngle={180}\n  &gt;\n    &lt;VictoryPolarAxis\n      tickValues={[0, 45, 90, 135, 180]}\n      labelPlacement=&quot;vertical&quot;\n    /&gt;\n    &lt;VictoryBar style={{ data: { fill: &quot;tomato&quot;, width: 30 } }}\n      data={[\n        { x: 0, y: 2 },\n        { x: 45, y: 3 },\n        { x: 90, y: 5 },\n        { x: 135, y: 4 },\n        { x: 180, y: 7 }\n      ]}\n    /&gt;\n  &lt;/VictoryChart&gt;\n&lt;/div&gt;</code></pre>\n<h3 id="style"><a href="#style" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>style</h3>\n<p><code class="language-text">type: { parent: object }</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">style</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#style">Read about it in detail here</a></p>\n<p><em>default (provided by default theme):</em> See <a href="https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-theme/grayscale.js">grayscale theme</a> for more detail</p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart\n  style={{\n    parent: {\n      border: &quot;1px solid #ccc&quot;\n    }\n  }}\n/&gt;</code></pre>\n<h3 id="theme"><a href="#theme" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>theme</h3>\n<p><code class="language-text">type: object</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">theme</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#theme">Read about it in detail here</a></p>\n<p>See the <a href="https://formidable.com/open-source/victory/guides/themes">Themes Guide</a> for information about creating custom themes.</p>\n<p><em>default:</em> <code class="language-text">theme={VictoryTheme.grayscale}</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">theme<span class="token operator">=</span><span class="token punctuation">{</span>VictoryTheme<span class="token punctuation">.</span>material<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="width"><a href="#width" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>width</h3>\n<p><code class="language-text">type: number</code></p>\n<p><code class="language-text">VictoryChart</code> uses the standard <code class="language-text">width</code> prop. <a href="https://formidable.com/open-source/victory/docs/common-props/#width">Read about it in detail here</a></p>\n<p><strong>note: <code class="language-text">VictoryChart</code> controls the <code class="language-text">width</code> prop of its children.</strong></p>\n<p><em>default (provided by default theme):</em> <code class="language-text">width={450}</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></code></pre>\n      </div>',
frontmatter:{id:9,scope:["sampleData"],title:"VictoryChart"},fields:{slug:"/docs/victory-chart/"}}},pathContext:{slug:"/docs/victory-chart/"}}}});
//# sourceMappingURL=path---docs-victory-chart-8d306ebf6ddc7e623916.js.map