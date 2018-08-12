webpackJsonp([86125240629531],{855:function(e,o){e.exports={data:{markdownRemark:{html:'<h1 id="victoryzoomcontainer"><a href="#victoryzoomcontainer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>VictoryZoomContainer</h1>\n<p><code class="language-text">VictoryZoomContainer</code> provides pan and zoom behavior for any Victory component that works with an\nx, y axis. Zoom events are controlled by scrolling, and panning events are controlled by dragging.\n<a href="https://formidable.com/open-source/victory/guides/brush-and-zoom">See an example of a zoomable chart</a></p>\n<p><code class="language-text">VictoryZoomContainer</code> may be used with any Victory component that works with an x-y coordinate\nsystem, and should be added as the <code class="language-text">containerComponent</code> of the top-level component. However, the component that uses it must be standalone\n(<code class="language-text">standalone={true}</code>), which is the default for all top-level Victory components.</p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart domainPadding={{ y: 10 }}\n  containerComponent={\n    &lt;VictoryZoomContainer/&gt;\n  }\n&gt;\n  &lt;VictoryScatter\n    y={(datum) =&gt; Math.sin(2 * Math.PI * datum.x)}\n  /&gt;\n&lt;/VictoryChart&gt;</code></pre>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<p><code class="language-text">VictoryZoomContainer</code> uses a superset of props used by <a href="https://formidable.com/open-source/victory/docs/victory-container">VictoryContainer</a>. All props are optional.</p>\n<h3 id="allowpan"><a href="#allowpan" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>allowPan</h3>\n<p><code class="language-text">type: boolean</code></p>\n<p>The optional <code class="language-text">allowPan</code> prop accepts a boolean that enables the panning functionality. Zooming will still be enabled when the <code class="language-text">allowPan</code> prop is set to false.</p>\n<p><em>default:</em> <code class="language-text">allowPan={true}</code></p>\n<h3 id="allowzoom"><a href="#allowzoom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>allowZoom</h3>\n<p><code class="language-text">type: boolean</code></p>\n<p>The optional <code class="language-text">allowZoom</code> prop accepts a boolean that enables the zoom functionality. Panning will still be enabled when the <code class="language-text">allowZoom</code> prop is set to false.</p>\n<p><em>default:</em> <code class="language-text">allowZoom={true}</code></p>\n<h3 id="clipcontainercomponent"><a href="#clipcontainercomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>clipContainerComponent</h3>\n<p><code class="language-text">type: element</code></p>\n<p><code class="language-text">VictoryZoomContainer</code> works by clipping data outside of a given domain. <code class="language-text">VictoryZoomContainer</code> uses <code class="language-text">VictoryClipContainer</code> by default. This prop should not be replaced with a custom component, but you may want to set props on <code class="language-text">VictoryClipContainer</code>, such as <code class="language-text">clipPadding</code></p>\n<p><em>example:</em> <code class="language-text">clipContainerComponent={&lt;VictoryClipContainer clipPadding={{top: 10, right: 10}}}/&gt;}</code></p>\n<h3 id="disable"><a href="#disable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>disable</h3>\n<p><code class="language-text">type: boolean</code></p>\n<p>When the <code class="language-text">disable</code> prop is set to <code class="language-text">true</code>, <code class="language-text">VictoryZoomContainer</code> events will not fire.</p>\n<h3 id="downsample"><a href="#downsample" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>downsample</h3>\n<p><code class="language-text">type: number || boolean</code></p>\n<p>The <code class="language-text">downsample</code> prop limits the number of points that will be displayed. This prop may be given as a boolean or a number corresponding to maximum number of points. When given as a boolean, the maximum number of points that will be plotted is 150.</p>\n<h3 id="minimumzoom"><a href="#minimumzoom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>minimumZoom</h3>\n<p><code class="language-text">type: { x: number, y: number }</code></p>\n<p>The <code class="language-text">minimumZoom</code> prop sets a minimum domain extent for the zoomed chart. When the difference between\nthe maximum and minimum of a zoomed domain is equal to the <code class="language-text">minimumZoom</code> in either dimension, the\ncomponent will stop responding to events that would normally trigger zooming in. Zooming out and\npanning will still be enabled. When this prop is not specified, the default minimum zoom will\ncover 1 / 1000th of the original domain. This prop should be given as an object with numeric values\nfor x and y.</p>\n<p><em>example:</em> <code class="language-text">minimumZoom={{x: 1, y: 0.01}}</code></p>\n<h3 id="onzoomdomainchange"><a href="#onzoomdomainchange" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>onZoomDomainChange</h3>\n<p><code class="language-text">type: function</code></p>\n<p>The optional <code class="language-text">onZoomDomainChange</code> prop accepts an function to be called on each update to the visible domain. The function accepts the parameters <code class="language-text">domain</code> (the updated domain) and <code class="language-text">props</code> (the props used by <code class="language-text">VictoryZoomContainer</code>).</p>\n<p><em>example:</em> <code class="language-text">onZoomDomainChange={(domain, props) =&gt; handleDomainChange(domain, props)}</code></p>\n<h3 id="zoomdomain"><a href="#zoomdomain" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>zoomDomain</h3>\n<p><code class="language-text">type: { x: [low, high], y: [low, high] }</code></p>\n<p>The <code class="language-text">zoomDomain</code> prop describes the zoomed state. This prop is an object that\nspecifies separate arrays for x and y. Each array is a tuple that describes the minimum and maximum\nvalues to render. If this prop is not provided initially, the chart will render without an initial\nzoom, displaying the entire dataset. Updates to <code class="language-text">zoomDomain</code> will trigger a re-render of the chart\nwith the new domain.</p>\n<p><em>example:</em> <code class="language-text">zoomDomain={{x: [0, 100]}}</code></p>\n<h3 id="zoomdimension"><a href="#zoomdimension" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>zoomDimension</h3>\n<p><code class="language-text">type: &quot;x&quot; || &quot;y&quot;</code></p>\n<p>When the <code class="language-text">zoomDimension</code> prop is set, panning and zooming will be restricted to the given dimension\n(either x or y), and the domain of the other dimension will remain static. When this prop is not\nspecified, both x and y dimensions will pan and zoom.</p>\n<p><em>example:</em> <code class="language-text">zoomDimension=&quot;x&quot;</code></p>',frontmatter:{id:31,scope:null,title:"VictoryZoomContainer"},fields:{slug:"/docs/victory-zoom-container/"}}},pathContext:{slug:"/docs/victory-zoom-container/"}}}});
//# sourceMappingURL=path---docs-victory-zoom-container-ca6258f9239087d1a07f.js.map