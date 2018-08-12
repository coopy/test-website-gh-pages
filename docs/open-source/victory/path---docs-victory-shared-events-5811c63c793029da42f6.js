webpackJsonp([59712207971145],{848:function(t,e){t.exports={data:{markdownRemark:{html:'<h1 id="victorysharedevents"><a href="#victorysharedevents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>VictorySharedEvents</h1>\n<p>The <code class="language-text">VictorySharedEvents</code> wrapper coordinates events between its child components. Specify a set of events on the <code class="language-text">VictorySharedEvents</code> wrapper to target children. <a href="https://formidable.com/open-source/victory/docs/victory-chart">VictoryChart</a>, <a href="https://formidable.com/open-source/victory/docs/victory-group">VictoryGroup</a>, and <a href="https://formidable.com/open-source/victory/docs/victory-stack">VictoryStack</a> all use <code class="language-text">VictorySharedEvents</code>, but it may also be used on its own.</p>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<h3 id="children"><a href="#children" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>children</h3>\n<p><code class="language-text">type: array[element]</code></p>\n<p><code class="language-text">VictorySharedEvents</code> renders an array of children with new <code class="language-text">sharedEvents</code> props which define a set of events, and a shared state accessor.</p>\n<h3 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>events</h3>\n<p><code class="language-text">type: array[object]</code></p>\n<p>The <code class="language-text">events</code> prop takes an array of event objects. Event objects are composed of a <code class="language-text">target</code>, an <code class="language-text">eventKey</code>, a <code class="language-text">childName</code> and <code class="language-text">eventHandlers</code>. Targets may be any valid style namespace for a given component, so “data” and “labels” are valid targets for this components like <code class="language-text">VictoryBar</code>. <code class="language-text">eventKey</code> may be given as a single value, or as an array of values to specify individual targets. If <code class="language-text">eventKey</code> is not specified, the given <code class="language-text">eventHandlers</code> will be attached to all elements of the specified <code class="language-text">target</code> type. The <code class="language-text">childName</code> property may be given as a string or an array of strings to target multiple children. The <code class="language-text">eventHandlers</code> object should be given as an object whose keys are standard event names (i.e. <code class="language-text">onClick</code>) and whose values are event callbacks. The return value of an event handler is used to modify elements. The return value should be given as an object or an array of objects with optional <code class="language-text">target</code>, <code class="language-text">childName</code> and <code class="language-text">eventKey</code> keys for specifying the element(s) to be modified, and a <code class="language-text">mutation</code> key whose value is a function. The <code class="language-text">target</code> and <code class="language-text">eventKey</code> keys will default to those corresponding to the element the event handler was attached to. The <code class="language-text">mutation</code> function will be called with the calculated props for each element that should be modified (i.e. a bar label), and the object returned from the mutation function will override the props of that element via object assignment.</p>\n<p><em>examples:</em></p>\n<pre class="pre"><code class="language-playground">&lt;svg viewBox=&quot;0 0 450 350&quot;&gt;\n  &lt;VictorySharedEvents\n    events={[{\n      childName: [&quot;pie&quot;, &quot;bar&quot;],\n      target: &quot;data&quot;,\n      eventHandlers: {\n        onMouseOver: () =&gt; {\n          return [{\n            childName: [&quot;pie&quot;, &quot;bar&quot;],\n            mutation: (props) =&gt; {\n              return {\n                style: Object.assign({}, props.style, {fill: &quot;tomato&quot;})\n              };\n            }\n          }];\n        },\n        onMouseOut: () =&gt; {\n          return [{\n            childName: [&quot;pie&quot;, &quot;bar&quot;],\n            mutation: () =&gt; {\n              return null;\n            }\n          }];\n        }\n      }\n    }]}\n  &gt;\n    &lt;g transform={&quot;translate(150, 50)&quot;}&gt;\n      &lt;VictoryBar name=&quot;bar&quot;\n        width={300}\n        standalone={false}\n        style={{\n          data: { width: 20 },\n          labels: {fontSize: 25}\n        }}\n        data={[\n          {x: &quot;a&quot;, y: 2}, {x: &quot;b&quot;, y: 3}, {x: &quot;c&quot;, y: 5}, {x: &quot;d&quot;, y: 4}\n        ]}\n        labels={[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]}\n        labelComponent={&lt;VictoryLabel y={280}/&gt;}\n      /&gt;\n    &lt;/g&gt;\n    &lt;g transform={&quot;translate(0, -75)&quot;}&gt;\n      &lt;VictoryPie name=&quot;pie&quot;\n        width={250}\n        standalone={false}\n        style={{ labels: {fontSize: 25, padding: 10}}}\n        data={[\n          {x: &quot;a&quot;, y: 1}, {x: &quot;b&quot;, y: 4}, {x: &quot;c&quot;, y: 5}, {x: &quot;d&quot;, y: 7}\n        ]}\n      /&gt;\n    &lt;/g&gt;\n  &lt;/VictorySharedEvents&gt;\n&lt;/svg&gt;</code></pre>\n<h3 id="eventkey"><a href="#eventkey" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>eventKey</h3>\n<p><code class="language-text">type: string || integer || array[string] || function</code></p>\n<p>The <code class="language-text">eventKey</code> prop is used to assign eventKeys to data. This prop operates identically to the <code class="language-text">x</code> and <code class="language-text">y</code> data accessor props. By default, the eventKey of each datum will be equal to its index in the data array. <code class="language-text">eventKey</code> may also be defined directly on each data object.</p>\n<h3 id="externaleventmutations"><a href="#externaleventmutations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>externalEventMutations</h3>\n<p><code class="language-text">type: array[object]</code></p>\n<p>Occasionally is it necessary to trigger events in Victory’s event system from some external element such as a button or a form field. Use the <code class="language-text">externalEventMutation</code> prop to specify a set of mutations to apply to a given chart. The <code class="language-text">externalEventMutations</code> should be given in the following form:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">externalEventMutations<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  callback<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token keyword">function</span><span class="token punctuation">,</span>\n  childName<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>\n    PropTypes<span class="token punctuation">.</span>array\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  eventKey<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    PropTypes<span class="token punctuation">.</span>array<span class="token punctuation">,</span>\n    CustomPropTypes<span class="token punctuation">.</span><span class="token function">allOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>CustomPropTypes<span class="token punctuation">.</span>integer<span class="token punctuation">,</span> CustomPropTypes<span class="token punctuation">.</span>nonNegative<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    PropTypes<span class="token punctuation">.</span>string\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  mutation<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token keyword">function</span><span class="token punctuation">,</span>\n  target<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>\n    PropTypes<span class="token punctuation">.</span>array\n  <span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>The <code class="language-text">target</code>, <code class="language-text">eventKey</code>, and <code class="language-text">childName</code> (when applicable) must always be specified. The <code class="language-text">mutation</code> function will be called with the current props of the element specified by the <code class="language-text">target</code>, <code class="language-text">eventKey</code> and <code class="language-text">childName</code> provided. The mutation function should return a mutation object for that element. The <code class="language-text">callback</code> prop should be used to clear the <code class="language-text">externalEventMutations</code> prop once the mutation has been applied. Clearing <code class="language-text">externalEventMutations</code> is crucial for charts that animate.</p>\n<pre class="pre"><code class="language-playground_norender">class App extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      externalMutations: undefined\n    };\n  }\n\n  removeMutation() {\n    this.setState({\n      externalMutations: undefined\n    });\n  }\n\n  clearClicks() {\n    this.setState({\n      externalMutations: [\n        {\n          childName: [&quot;bar&quot;, &quot;pie&quot;],\n          target: [&quot;data&quot;],\n          eventKey: &quot;all&quot;,\n          mutation: () =&gt; ({ style: undefined }),\n          callback: this.removeMutation.bind(this)\n        }\n      ]\n    });\n  }\n\n  render() {\n    const buttonStyle = {\n      backgroundColor: &quot;black&quot;,\n      color: &quot;white&quot;,\n      padding: &quot;10px&quot;,\n      marginTop: &quot;10px&quot;\n    };\n    return (\n      &lt;div&gt;\n        &lt;button\n          onClick={this.clearClicks.bind(this)}\n          style={buttonStyle}\n        &gt;\n          Reset\n        &lt;/button&gt;\n        &lt;svg viewBox=&quot;0 0 450 350&quot;&gt;\n          &lt;VictorySharedEvents\n            externalEventMutations={this.state.externalMutations}\n            events={[{\n              childName: [&quot;pie&quot;, &quot;bar&quot;],\n              target: &quot;data&quot;,\n              eventHandlers: {\n                onClick: () =&gt; {\n                  return [{\n                    childName: [&quot;pie&quot;, &quot;bar&quot;],\n                    mutation: (props) =&gt; {\n                      return {\n                        style: Object.assign({}, props.style, {fill: &quot;tomato&quot;})\n                      };\n                    }\n                  }];\n                }\n              }\n            }]}\n          &gt;\n            &lt;g transform={&quot;translate(150, 50)&quot;}&gt;\n              &lt;VictoryBar name=&quot;bar&quot;\n                width={300}\n                standalone={false}\n                style={{\n                  data: { width: 20 },\n                  labels: {fontSize: 25}\n                }}\n                data={[\n                  {x: &quot;a&quot;, y: 2}, {x: &quot;b&quot;, y: 3}, {x: &quot;c&quot;, y: 5}, {x: &quot;d&quot;, y: 4}\n                ]}\n                labels={[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]}\n                labelComponent={&lt;VictoryLabel y={280}/&gt;}\n              /&gt;\n            &lt;/g&gt;\n            &lt;g transform={&quot;translate(0, -75)&quot;}&gt;\n              &lt;VictoryPie name=&quot;pie&quot;\n                width={250}\n                standalone={false}\n                style={{ labels: {fontSize: 25, padding: 10}}}\n                data={[\n                  {x: &quot;a&quot;, y: 1}, {x: &quot;b&quot;, y: 4}, {x: &quot;c&quot;, y: 5}, {x: &quot;d&quot;, y: 7}\n                ]}\n              /&gt;\n            &lt;/g&gt;\n          &lt;/VictorySharedEvents&gt;\n        &lt;/svg&gt;\n      &lt;/div&gt;\n    )\n  }\n}\n\nReactDOM.render(&lt;App/&gt;, mountNode)</code></pre>\n<p><em>Note</em> External mutations are applied to the same state object that is used to control events in Victory, so depending on the order in which they are triggered, external event mutations may override mutations caused by internal Victory events or vice versa.</p>',frontmatter:{id:24,scope:null,title:"VictorySharedEvents"},fields:{slug:"/docs/victory-shared-events/"}}},pathContext:{slug:"/docs/victory-shared-events/"}}}});
//# sourceMappingURL=path---docs-victory-shared-events-5811c63c793029da42f6.js.map