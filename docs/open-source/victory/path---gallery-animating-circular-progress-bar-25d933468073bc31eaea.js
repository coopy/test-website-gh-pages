webpackJsonp([0xfb4dcafa3a48],{858:function(t,n){t.exports={data:{markdownRemark:{html:'<pre class="pre"><code class="language-playground_norender">class App extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      percent: 25, data: this.getData(0)\n    };\n  }\n\n  componentDidMount() {\n    let percent = 25;\n    this.setStateInterval = window.setInterval(() =&gt; {\n      percent += (Math.random() * 25);\n      percent = (percent &gt; 100) ? 0 : percent;\n      this.setState({\n        percent, data: this.getData(percent)\n      });\n    }, 2000);\n  }\n\n  componentWillUnmount() {\n    window.clearInterval(this.setStateInterval);\n  }\n\n  getData(percent) {\n    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];\n  }\n\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;svg viewBox=&quot;0 0 400 400&quot; width=&quot;100%&quot; height=&quot;100%&quot;&gt;\n          &lt;VictoryPie\n            standalone={false}\n            animate={{ duration: 1000 }}\n            width={400} height={400}\n            data={this.state.data}\n            innerRadius={120}\n            cornerRadius={25}\n            labels={() =&gt; null}\n            style={{\n              data: { fill: (d) =&gt; {\n                const color = d.y &gt; 30 ? &quot;green&quot; : &quot;red&quot;;\n                return d.x === 1 ? color : &quot;transparent&quot;;\n              }\n              }\n            }}\n          /&gt;\n          &lt;VictoryAnimation duration={1000} data={this.state}&gt;\n            {(newProps) =&gt; {\n              return (\n                &lt;VictoryLabel\n                  textAnchor=&quot;middle&quot; verticalAnchor=&quot;middle&quot;\n                  x={200} y={200}\n                  text={`${Math.round(newProps.percent)}%`}\n                  style={{ fontSize: 45 }}\n                /&gt;\n              );\n            }}\n          &lt;/VictoryAnimation&gt;\n        &lt;/svg&gt;\n      &lt;/div&gt;\n    );\n  }\n}\n\nReactDOM.render(&lt;App/&gt;, mountNode);</code></pre>',frontmatter:{id:1,scope:null,title:"Animating Circular Progress Bar"},fields:{slug:"/gallery/animating-circular-progress-bar/"}}},pathContext:{slug:"/gallery/animating-circular-progress-bar/"}}}});
//# sourceMappingURL=path---gallery-animating-circular-progress-bar-25d933468073bc31eaea.js.map