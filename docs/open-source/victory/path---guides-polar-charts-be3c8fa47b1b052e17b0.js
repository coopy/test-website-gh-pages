webpackJsonp([54164079334587],{887:function(t,a){t.exports={data:{markdownRemark:{html:'<h1 id="polar-charts"><a href="#polar-charts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Polar Charts</h1>\n<p>Victory supports polar charts for <code class="language-text">VictoryArea</code>, <code class="language-text">VictoryBar</code>, <code class="language-text">VictoryLine</code> and <code class="language-text">VictoryScatter</code>, as well as wrapper components like <code class="language-text">VictoryChart</code>, <code class="language-text">VictoryGroup</code> and <code class="language-text">VictoryStack</code>. This guide provides explanations for polar-specific props as well as examples of polar charts.</p>\n<pre class="pre"><code class="language-playground">&lt;div&gt;\n  &lt;VictoryChart polar\n    domain={{ x: [0, 360] }}\n    theme={VictoryTheme.material}\n  &gt;\n    &lt;VictoryPolarAxis tickCount={8}/&gt;\n    &lt;VictoryBar\n      data={sampleDataPolar}\n      style={{ data: { fill: &quot;#c43a31&quot;, stroke: &quot;black&quot;, strokeWidth: 2 }}}\n    /&gt;\n  &lt;/VictoryChart&gt;\n\n  &lt;VictoryChart\n    theme={VictoryTheme.material}\n  &gt;\n    &lt;VictoryAxis tickCount={8}/&gt;\n    &lt;VictoryBar\n      data={sampleDataPolar}\n      style={{ data: { fill: &quot;#c43a31&quot;, stroke: &quot;black&quot;, strokeWidth: 2 }}}\n    /&gt;\n  &lt;/VictoryChart&gt;\n&lt;/div&gt;</code></pre>\n<h2 id="creating-polar-charts"><a href="#creating-polar-charts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating Polar Charts</h2>\n<p>In most cases, creating a polar chart is as easy as adding the <code class="language-text">polar</code> prop to the top level component (usually <code class="language-text">VictoryChart</code>).</p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart polar\n  domain={{ x: [0, 360] }}\n  height={400} width={400}\n&gt;\n  &lt;VictoryBar\n    style={{ data: { fill: &quot;#c43a31&quot;, width: 50 }}}\n    data={sampleDataPolar}\n  /&gt;\n&lt;/VictoryChart&gt;</code></pre>\n<p>To configure axes for polar charts, use the <a href="https://formidable.com/open-source/victory/docs/victory-polar-axis"><code class="language-text">VictoryPolarAxis</code></a> component. <code class="language-text">VictoryPolarAxis</code> uses a similar set of props to <code class="language-text">VictoryAxis</code></p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart polar\n  domain={{ x: [0, 360] }}\n  height={400} width={400}\n&gt;\n  &lt;VictoryPolarAxis dependentAxis\n    style={{\n      axis: {stroke: &quot;none&quot;},\n      tickLabels: { fill: &quot;none&quot;},\n       grid: { stroke: &quot;grey&quot;, strokeDasharray: &quot;4, 8&quot; }\n    }}\n  /&gt;\n  &lt;VictoryPolarAxis\n    tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}\n  /&gt;\n  &lt;VictoryBar\n    style={{ data: { fill: &quot;#c43a31&quot;, width: 50 }}}\n    data={sampleDataPolar}\n  /&gt;\n&lt;/VictoryChart&gt;</code></pre>\n<p><code class="language-text">VictoryGroup</code> and <code class="language-text">VictoryStack</code> also work with polar charts:</p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart polar\n  domain={{ x: [0, 360] }}\n  height={400} width={400}\n&gt;\n  &lt;VictoryPolarAxis dependentAxis\n    style={{\n      axis: {stroke: &quot;none&quot;},\n      tickLabels: { fill: &quot;none&quot;},\n       grid: { stroke: &quot;grey&quot;, strokeDasharray: &quot;4, 8&quot; }\n    }}\n  /&gt;\n  &lt;VictoryPolarAxis\n    tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}\n  /&gt;\n  &lt;VictoryStack\n    colorScale={[&quot;#ad1b11&quot;, &quot;#c43a31&quot;, &quot;#dc7a6b&quot;]}\n    style={{ data: { width: 50} }}\n  &gt;\n    &lt;VictoryBar data={sampleDataPolar}/&gt;\n    &lt;VictoryBar data={sampleDataPolar}/&gt;\n    &lt;VictoryBar data={sampleDataPolar}/&gt;\n  &lt;/VictoryStack&gt;\n&lt;/VictoryChart&gt;</code></pre>\n<p>Add interactivity to polar charts with standard events, or container components. The following Polar charts work with <code class="language-text">VictorySelectionContainer</code>, <code class="language-text">VictoryVoronoiContainer</code>, and <code class="language-text">VictoryZoomContainer</code>.</p>\n<pre class="pre"><code class="language-playground">&lt;VictoryChart polar\n  domain={{ x: [0, 360] }}\n  height={400} width={400}\n  containerComponent={&lt;VictoryZoomContainer/&gt;}\n&gt;\n  &lt;VictoryPolarAxis dependentAxis\n    style={{\n      axis: {stroke: &quot;none&quot;},\n      tickLabels: { fill: &quot;none&quot;},\n       grid: { stroke: &quot;grey&quot;, strokeDasharray: &quot;4, 8&quot; }\n    }}\n  /&gt;\n  &lt;VictoryPolarAxis\n    tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}\n  /&gt;\n  &lt;VictoryStack\n    colorScale={[&quot;#ad1b11&quot;, &quot;#c43a31&quot;, &quot;#dc7a6b&quot;]}\n    style={{ data: { width: 50} }}\n  &gt;\n    &lt;VictoryBar data={sampleDataPolar}/&gt;\n    &lt;VictoryBar data={sampleDataPolar}/&gt;\n    &lt;VictoryBar data={sampleDataPolar}/&gt;\n  &lt;/VictoryStack&gt;\n&lt;/VictoryChart&gt;</code></pre>',frontmatter:{id:8,scope:["sampleDataPolar"],title:"Polar Charts"},fields:{slug:"/guides/polar-charts/"}}},pathContext:{slug:"/guides/polar-charts/"}}}});
//# sourceMappingURL=path---guides-polar-charts-be3c8fa47b1b052e17b0.js.map