webpackJsonp([0x9ff3667d324],{426:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=n(i),l=r(81),u=n(l),f=r(431),p=n(f),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"Page-content"},c.default.createElement("article",{className:"Article"},c.default.createElement("h1",{className:"u-noMargin"},"Victory: Charting for React and React Native"),c.default.createElement("p",null,c.default.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"160px",height:"30px"}," "),c.default.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=watch&count=true&size=large&v=2",frameBorder:"0",scrolling:"0",width:"160px",height:"30px"}," "),c.default.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=fork&count=true&size=large",frameBorder:"0",scrolling:"0",width:"158px",height:"30px"}," ")),c.default.createElement("p",null,"Victory is a set of modular charting components for React and React Native. Victory makes it easy to get started without sacrificing flexibility. Create one of a kind data visualizations with fully customizable styles and behaviors. Victory uses the same API for web and React Native applications for easy cross-platform charting."),c.default.createElement("p",null,"Victory is helmed by Formidable’s"," ",c.default.createElement("a",{href:"https://github.com/boygirl"}," Lauren Eastridge"),"."),c.default.createElement("p",null,c.default.createElement("a",{href:"https://github.com/FormidableLabs/victory/graphs/contributors"},"See Victory Contributors")),c.default.createElement("h2",{id:"showcase"},"Victory in Use"),c.default.createElement("p",null,"Victory is used for charting across the web, from publicly-consumed informational graphs to internal tracking and reporting."),c.default.createElement(p.default,null),c.default.createElement("h1",null,"About Formidable"),c.default.createElement("p",null,"Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for some of the world’s biggest companies, while helping their internal teams develop smart, thoughtful, and scalable systems.")),c.default.createElement(u.default,null))},t}(c.default.Component);t.default=d,e.exports=t.default},430:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=n(i),l=r(3),u=n(l),f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"Grid Grid--guttersSm Grid--center Grid--full medium-Grid--fit u-textLarge"},c.default.createElement("div",{className:"Grid-cell Grid-cell--autoSize u-maxWidth"},c.default.createElement("img",{alt:this.props.screenshot.alt,className:"Showcase-img fancyBorder",src:this.props.screenshot.src})),c.default.createElement("div",{className:"Grid-cell"},c.default.createElement("h3",{className:"SubHeading u-textLeft u-noMargin"},this.props.company),c.default.createElement("p",null,this.props.description)))},t}(c.default.Component);f.propTypes={company:u.default.string.isRequired,description:u.default.string.isRequired,even:u.default.bool,screenshot:u.default.shape({src:u.default.string.isRequired,alt:u.default.string.isRequired})},t.default=f,e.exports=t.default},431:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=n(i),l=r(430),u=n(l),f=r(1058),p=n(f),d=r(1059),h=n(d),m=r(1060),y=n(m),b=r(1057),g=n(b),w=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.getShowcaseApps=function(){var e=[{company:"FiveThirtyEight",screenshot:{src:p.default,alt:"FiveThirtyEight screenshot"},description:"FiveThirtyEight uses Victory for data visualizations, including this one about the history of sumo wrestling."},{company:"Postmark",screenshot:{src:h.default,alt:"Postmark screenshot"},description:"Postmark uses Victory on its status page to let users know how their service is performing."},{company:"Tune",screenshot:{src:y.default,alt:"Tune screenshot"},description:"Tune uses Victory in its Marketing Console, a tool for marketers to track all of their mobile data."},{company:"Cumul8",screenshot:{src:g.default,alt:"Cumul8 screenshot"},description:"Cumul8 uses Victory for Cirrus, a SaaS platform for businesses to manage their internal data."}];return e.map(function(e,t){return c.default.createElement(u.default,{key:t,company:e.company,screenshot:e.screenshot,description:e.description})})},t.prototype.render=function(){return c.default.createElement("div",{className:"Showcases"},this.getShowcaseApps())},t}(c.default.Component);t.default=w,e.exports=t.default},1057:function(e,t,r){e.exports=r.p+"static/showcase-cumul8.14bbd950.png"},1058:function(e,t,r){e.exports=r.p+"static/showcase-fivethirtyeight.a4b71a40.png"},1059:function(e,t,r){e.exports=r.p+"static/showcase-postmark.998d19d8.png"},1060:function(e,t,r){e.exports=r.p+"static/showcase-tune.8b6c34e7.png"}});
//# sourceMappingURL=component---src-pages-about-index-js-aadfccde97acb0cec350.js.map