webpackJsonp([0xfdc5886f1874],{883:function(t,e){t.exports={data:{markdownRemark:{html:'<h1 id="custom-components"><a href="#custom-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Components</h1>\n<p>Every element that a Victory component renders may be altered or completely replaced. Most components expose <code class="language-text">dataComponent</code>, <code class="language-text">labelComponent</code>, <code class="language-text">groupComponent</code>, and <code class="language-text">containerComponent</code> props. The primitive components that Victory components render by default are simple, stateless components with a consistent set of props whenever possible. These <a href="https://formidable.com/open-source/victory/docs/victory-primitives">primitive components</a> are exported for users to alter, wrap, extend and reference when creating custom components.</p>\n<h2 id="altering-default-components"><a href="#altering-default-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Altering default components</h2>\n<p>Victory components set props on their primitive components, but these may be overridden or augmented by setting props directly on the primitive component instances.</p>\n<pre class="pre"><code class="language-playground">  &lt;VictoryBar\n    data={[\n      {x: 1, y: 3, label: &quot;Alpha&quot;},\n      {x: 2, y: 4, label: &quot;Bravo&quot;},\n      {x: 3, y: 6, label: &quot;Charlie&quot;},\n      {x: 4, y: 3, label: &quot;Delta&quot;},\n      {x: 5, y: 7, label: &quot;Echo&quot;},\n    ]}\n    labelComponent={\n      &lt;VictoryLabel angle={90} verticalAnchor=&quot;middle&quot; textAnchor=&quot;end&quot;/&gt;\n    }\n  /&gt;</code></pre>\n<h2 id="wrapping-components"><a href="#wrapping-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wrapping components</h2>\n<p>Victory components may be wrapped to customize or change behavior. Wrapper components should apply any props they receive from other Victory components to the components they render.</p>\n<pre class="pre"><code class="language-playground_norender">class WrapperComponent extends React.Component {\n  renderChildren() {\n    const children = React.Children.toArray(this.props.children);\n    return children.map((child) =&gt; {\n      // children should be rendered with props from their parent Victory components assigned\n      // Components like `VictoryChart` expect to control props like `domain` for their children\n      // Some props should be merged rather than overridden\n      const style = _.merge(child.props.style, this.props.style);\n      return React.cloneElement(child, Object.assign({}, child.props, this.props, { style }));\n    });\n  }\n\n  render() {\n    return (\n      &lt;g transform=&quot;translate(20, 40)&quot;&gt;\n        &lt;VictoryLabel text={&quot;add labels&quot;} x={110} y={30}/&gt;\n        &lt;VictoryLabel text={&quot;offset data from axes&quot;} x={70} y={150}/&gt;\n        &lt;VictoryLabel text={&quot;alter props&quot;} x={280} y={150}/&gt;\n        { this.renderChildren() }\n      &lt;/g&gt;\n    );\n  }\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      &lt;VictoryChart&gt;\n        &lt;WrapperComponent&gt;\n          &lt;VictoryScatter\n            y={(d) =&gt; Math.sin(2 * Math.PI * d.x)}\n            samples={15}\n            symbol=&quot;square&quot;\n            size={6}\n            style={{ data: { stroke: &quot;tomato&quot;, strokeWidth: 3 }}}\n          /&gt;\n        &lt;/WrapperComponent&gt;\n      &lt;/VictoryChart&gt;\n    );\n  }\n}\nReactDOM.render(&lt;App/&gt;, mountNode);</code></pre>\n<h2 id="creating-new-components"><a href="#creating-new-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating new components</h2>\n<p>Any component that renders valid svg elements (or elements wrapped in <code class="language-text">&lt;foreignObject&gt;</code>) may be used as a <code class="language-text">dataComponent</code> or <code class="language-text">labelComponent</code> in Victory components. Custom components will be provided with the same props as default components. In the following example, a custom <code class="language-text">CatPoint</code> component is used in place of <code class="language-text">Point</code> in <code class="language-text">VictoryScatter</code>.</p>\n<pre class="pre"><code class="language-playground_norender">class CatPoint extends React.Component {\n  render() {\n    const {x, y, datum} = this.props;\n    const cat = datum._y &gt;= 0 ? &quot;😻&quot; : &quot;😹&quot;;\n    return (\n      &lt;text x={x} y={y} fontSize={30}&gt;\n        {cat}\n      &lt;/text&gt;\n    );\n  }\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      &lt;VictoryChart&gt;\n        &lt;VictoryScatter\n          y={(d) =&gt;\n            Math.sin(2 * Math.PI * d.x)\n          }\n          samples={25}\n          dataComponent={&lt;CatPoint/&gt;}\n        /&gt;\n      &lt;/VictoryChart&gt;\n    );\n  }\n}\nReactDOM.render(&lt;App/&gt;, mountNode);</code></pre>\n<p>More complex components may be supplied as direct children of <code class="language-text">VictoryChart</code>. These components will have access to shared chart props such as <code class="language-text">scale</code>. In the example below, the custom <code class="language-text">Polygon</code> components draws a polygon based on a collection of points. The scale provided by <code class="language-text">VictoryChart</code> is used to correctly position the points within the chart.</p>\n<pre class="pre"><code class="language-playground_norender">const SAMPLE_DATA = [\n\t{x: 2, y: 1},\n\t{x: 3, y: 5},\n\t{x: 6, y: 3}\n];\n\nclass Polygon extends React.Component {\n  getPoints(data, scale) {\n    return data.reduce((pointStr, {x, y}) =&gt;\n\t\t\t`${pointStr} ${scale.x(x)},${scale.y(y)}`\n\t\t, &#39;&#39;);\n  }\n\n  render() {\n    // data and style are explicitly supplied to the Polygon component\n    // scale is provided by VictoryChart\n    const { data, style, scale } = this.props;\n    const points = this.getPoints(data, scale);\n    return &lt;polygon points={points} style={style}/&gt;;\n  }\n}\n\nclass App extends React.Component {\n  render() {\n    return &lt;VictoryChart\n      height={400}\n      width={400}\n      domain={[-10, 10]}\n    &gt;\n      &lt;Polygon\n        data={SAMPLE_DATA}\n        style={{ fill: &quot;tomato&quot;, opacity: 0.5 }}\n      /&gt;\n      &lt;VictoryScatter\n        data={SAMPLE_DATA}\n      /&gt;\n    &lt;/VictoryChart&gt;;\n  }\n}\n\nReactDOM.render(&lt;App/&gt;, mountNode)</code></pre>\n<p>Other Victory components may even be used in creating custom components, as in the example below.</p>\n<pre class="pre"><code class="language-playground_norender">class CustomPie extends React.Component {\n  render() {\n    const {datum, x, y} = this.props;\n    const pieWidth = 120;\n\n    return (\n      &lt;g transform={\n        `translate(${x - pieWidth / 2}, ${y - pieWidth / 2})`\n        }\n      &gt;\n        &lt;VictoryPie\n          standalone={false}\n          height={pieWidth}\n          width={pieWidth}\n          data={datum.pie}\n          style={{labels: {fontSize: 0}}}\n          colorScale={[&quot;#f77&quot;, &quot;#55e&quot;, &quot;#8af&quot;]}\n        /&gt;\n      &lt;/g&gt;\n    );\n  }\n}\n\nclass CustomDataComponent extends React.Component {\n  render() {\n    const data = [\n      {x: &quot;Jan&quot;, y: 30},\n      {x: &quot;Feb&quot;, y: 32},\n      {x: &quot;Mar&quot;, y: 65},\n      {x: &quot;Apr&quot;, y: 38},\n      {x: &quot;May&quot;, y: 50},\n      {x: &quot;Jun&quot;, y: 47},\n      {x: &quot;Jul&quot;, y: 38},\n      {x: &quot;Aug&quot;, y: 48},\n      {x: &quot;Sep&quot;, y: 80},\n      {x: &quot;Oct&quot;, y: 73},\n      {x: &quot;Nov&quot;, y: 76},\n      {x: &quot;Dec&quot;, y: 100}\n    ];\n\n    const pieData = data.map((datum) =&gt; {\n      datum.pie = [\n        {x: &quot;Lions&quot;, y: Math.round(Math.random() * 10)},\n        {x: &quot;Tigers&quot;, y: Math.round(Math.random() * 10)},\n        {x: &quot;Bears&quot;, y: Math.round(Math.random() * 10)}\n      ];\n      return datum;\n    });\n\n    return (\n      &lt;VictoryChart domain={{y: [0, 100]}}&gt;\n        &lt;VictoryAxis/&gt;\n        &lt;VictoryGroup data={pieData}&gt;\n          &lt;VictoryLine/&gt;\n          &lt;VictoryScatter\n            dataComponent={&lt;CustomPie /&gt;}\n          /&gt;\n        &lt;/VictoryGroup&gt;\n      &lt;/VictoryChart&gt;\n    );\n  }\n}\n\nReactDOM.render(&lt;CustomDataComponent/&gt;, mountNode)</code></pre>',frontmatter:{id:4,scope:["range","random"],title:"Custom Components"},fields:{slug:"/guides/custom-components/"}}},pathContext:{slug:"/guides/custom-components/"}}}});
//# sourceMappingURL=path---guides-custom-components-06c380451c5ed732f700.js.map