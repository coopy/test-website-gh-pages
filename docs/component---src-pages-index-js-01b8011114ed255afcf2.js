webpackJsonp([35783957827783],{328:function(e,t){"use strict";t.__esModule=!0,t.default=[{title:"Victory",summary:"An ecosystem of modular data visualization components for React. Friendly and flexible.",path:"https://formidable.com/open-source/victory/"},{title:"Spectacle",summary:"A React.js based library for creating sleek presentations using JSX syntax with the ability to live demo your code!",path:"https://formidable.com/open-source/spectacle/"},{title:"Development Dashboards",summary:"Dashboards to organize and intuitively display your dev server and tooling output.",path:"https://formidable.com/open-source/development-dashboards/"},{title:"Radium",summary:"A set of tools to manage inline styles on React elements, giving you powerful styling capabilities without CSS.",path:"https://formidable.com/open-source/radium/"}],e.exports=t.default},350:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),c=l(o),i=a(3),u=l(i),m=a(4),d=a(22),f=l(d),h=a(117),p=l(h),E=a(328),g=l(E),y="Formidable: The JavaScript Consultancy Trusted by Engineers",b="Formidable is a Seattle and London-based engineering consultancy and open source software organization, specializing in React.js, React Native, GraphQL, Node.js, and the extended JavaScript ecosystem.",_="/",w="home page",v=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.default.createElement(m.BasePage,{pageClass:w,description:b,imageUrl:f.default,isOpen:this.props.isOpen,title:y,url:_},c.default.createElement("section",{className:"mast mast--left mast--home section--dark js-scene"},c.default.createElement("figure",{className:"mast__bg"}),c.default.createElement("div",{className:"grid"},c.default.createElement("div",{className:"mast__content"},c.default.createElement("span",{className:"mast__subtitle"},"We’re Formidable —"),c.default.createElement("h1",{className:"mast__title"},"The JavaScript Consultancy Trusted by Engineers.")))),c.default.createElement("div",{className:"section"},c.default.createElement(m.Grid,null,c.default.createElement(m.Grid.Cell,{col:"4"},c.default.createElement(m.Heading,{tag:"h3",theme:"h3",className:"h--underline-alpha-light"},"A JavaScript Consultancy Built for the Modern Web")),c.default.createElement(m.Grid.Cell,{col:"8"},c.default.createElement("p",{className:"home__text"},"Formidable is a Seattle and London-based engineering consultancy and open source software organization, specializing in React.js, React Native, GraphQL, Node.js, and the extended JavaScript ecosystem."),c.default.createElement("p",{className:"home__text"},"Since 2013, our agile team has worked with companies ranging in size from startups, to Fortune 100s, to build quality software and level up engineering teams."),c.default.createElement("p",{className:"home__text"},"Launching a new JavaScript Product? Need Help with an Existing Project?"),c.default.createElement(m.Btn,{href:"/contact/",theme:"alpha"},"Work With Us")))),c.default.createElement("hr",{className:"sep sep--gamma sep--full sep--large"}),p.default.slice(0,3).map(function(e,t){return c.default.createElement("div",{className:"mast mast--work-casestudy",key:"casestudy-"+t},c.default.createElement("figure",{className:"mast__bg mast__bg--"+e.class+" "}),c.default.createElement(m.Grid,null,c.default.createElement("div",{className:"grid__col g-4"},c.default.createElement(m.Heading,{tag:"h1",className:"mast__title",theme:"h3"},e.title),c.default.createElement(m.Heading,{tag:"h2",className:"mast__subtitle h--underline",theme:"subtitle-large"},e.subtitle),c.default.createElement("p",{className:"mast__col"},e.tagline),c.default.createElement("div",{className:"mast__col u-margin-top"},c.default.createElement(m.Btn,{className:"u-nowrap",download:!0,href:e.url,theme:"alpha"},"View Case Study")))))}),c.default.createElement("div",{className:"contact-cta"},c.default.createElement("p",{className:"contact-cta-text"},"What can we do for your company?"),c.default.createElement(m.Btn,{className:"contact-cta-btn",href:"/contact/",theme:"alpha"},"Talk to us")),c.default.createElement("div",{className:"section"},c.default.createElement(m.Grid,null,c.default.createElement(m.Grid.Cell,{col:"4"},c.default.createElement(m.Heading,{tag:"h3",theme:"h3",className:"h--underline-alpha-light"},"Process")),c.default.createElement(m.Grid.Cell,{col:"8"},c.default.createElement("p",{className:"home__text"},"We approach each project with a long-term view, ensuring that sustainability, maintainability, and stability are always at the core of our decisions. Our objective is to help you create quality software that scales well, performs better, improves user satisfaction, and helps you achieve your business goals."),c.default.createElement("p",{className:"home__text"},"Formidable utilizes agile methodologies to ensure an efficient, adaptable process that helps clients meet their project goals and objectives. We quickly identify solutions (no 10-week discovery phases here) and work with you to create an efficient plan to ensure that we’re always delivering. Embedding with your team, we also teach best practices to ensure that your developers can carry each project into the future once our work is done."),c.default.createElement("p",{className:"home__text"},"Want to learn more?"),c.default.createElement(m.Btn,{href:"/about/",theme:"alpha"},"What We Do")))),c.default.createElement("div",{className:"section home__team"},c.default.createElement(m.Grid,null,c.default.createElement("figure",{className:"home__photo--team",alt:"Formidable coworkers pair programming"}),c.default.createElement(m.Grid.Cell,{col:"7",className:"g-offset-5"},c.default.createElement(m.Heading,{tag:"h3",theme:"h3",className:"h--underline-alpha-light"},"The Formidable Team"),c.default.createElement("p",{className:"home__text"},"Our team of JavaScript experts is deeply invested in the JavaScript community. We are React core contributors, open source advocates, and creative thinkers devoted to improving the modern web. Our team is well-known for our contributions to the open source software community, creating software used by everyone from Airbnb to USAFacts. We regularly speak at conferences to share our expertise with the JavaScript community, and attend even more to keep at the forefront of the newest frameworks and technologies."),c.default.createElement(m.Btn,{href:"/careers/",theme:"alpha"},"Careers")))),c.default.createElement("div",{className:"section u-text-center"},c.default.createElement(m.Grid,null,c.default.createElement(m.Grid.Cell,{col:"6",className:"g-offset-3"},c.default.createElement(m.Heading,{tag:"h3",theme:"h3",className:"h--underline-midgrey"},"Open Source"),c.default.createElement("p",{className:"home__text u-text-left"},"Check out some of the tools and products we’ve made in support of advancing the open web."))),c.default.createElement(m.Grid,{className:"u-text-left"},g.default.map(function(e,t){return c.default.createElement(m.Grid.Cell,{col:"6",key:"home_oss_"+t},c.default.createElement(m.Btn,{tag:"outbound",theme:"alpha",modifier:"small",href:e.path},e.title),c.default.createElement("p",{className:"home__projecttext"},e.summary))})),c.default.createElement(m.Btn,{href:"/open-source/",theme:"dark"},"All Open Source Tools")),c.default.createElement("div",{className:"events section--light"},c.default.createElement(m.Grid,null,c.default.createElement(m.Grid.Cell,{col:"12"},c.default.createElement(m.Heading,{tag:"h3",theme:"h3"},"Formidable sightings"),c.default.createElement("table",{className:"events__table"},c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",null,"What"),c.default.createElement("th",null,"When"),c.default.createElement("th",null,"Where"))),c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("td",null,"SeattleJS Meetup"),c.default.createElement("td",null,"August 9, 2018"),c.default.createElement("td",null,"Seattle, WA"),c.default.createElement("td",null,c.default.createElement(m.Btn,{tag:"outbound",href:"https://www.meetup.com/seattlejs/events/dczsvkyxlbmb/",theme:"alpha",modifier:"small"},"Info"))),c.default.createElement("tr",null,c.default.createElement("td",null,"Code on the Beach"),c.default.createElement("td",null,"August 9-12, 2018"),c.default.createElement("td",null,"Atlantic Beach, FL"),c.default.createElement("td",null,c.default.createElement(m.Btn,{tag:"outbound",href:"https://www.codeonthebeach.com/",theme:"alpha",modifier:"small"},"Info"))),c.default.createElement("tr",null,c.default.createElement("td",null,"React Rally"),c.default.createElement("td",null,"August 16-17, 2018"),c.default.createElement("td",null,"Salt Lake City, UT"),c.default.createElement("td",null,c.default.createElement(m.Btn,{tag:"outbound",href:"http://www.reactrally.com/",theme:"alpha",modifier:"small"},"Info")))))))))},t}(o.Component);v.displayName="PagesIndex",v.propTypes={isOpen:u.default.bool},t.default=v,e.exports=t.default}});