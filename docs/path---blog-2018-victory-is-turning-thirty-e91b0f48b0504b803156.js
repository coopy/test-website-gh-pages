webpackJsonp([0x7e09b95e25db],{764:function(e,t){e.exports={data:{markdownRemark:{html:'<h1 id="victory-is-turning-30"><a href="#victory-is-turning-30" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>Victory is turning 30!</h1>\n<p>Victory is making the change to major versions with the release of <code class="language-text">victory@30.0.0</code>!\nThis is an unusual version bump, and a major milestone for the project, so we thought it warranted more explanation than we usually provide in our release notes.</p>\n<h2 id="whats-happening-in-this-version"><a href="#whats-happening-in-this-version" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>What’s happening in this version?</h2>\n<p>The biggest change in <code class="language-text">victory@30.0.0</code> is the transition from multi-repo to monorepo development. After this change, all <code class="language-text">victory-*</code> packages (with the exception of <code class="language-text">victory-native</code>) will be developed and released from a single github repository: <a href="https://github.com/formidablelabs/victory">https://github.com/formidablelabs/victory</a>.</p>\n<p>Other code changes in this version are very minimal and mostly related to naming changes. You can find a complete list in our <a href="https://github.com/FormidableLabs/victory/blob/master/CHANGELOG.md#3000-2018-07-17">changelog</a>.</p>\n<h2 id="why-a-monorepo"><a href="#why-a-monorepo" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>Why a monorepo?</h2>\n<p>Our number one reason for transitioning to a monorepo infrastructure was to improve developer workflow and make it easier for people to contribute to Victory. Before this change, we were using <a href="https://github.com/FormidableLabs/builder">builder</a>, <a href="https://github.com/FormidableLabs/builder-victory-component">archetypes</a>, and some <a href="https://github.com/FormidableLabs/lank">custom tooling</a> to share infrastructure across several github repos. This meant that would-be contributors needed to clone and link several repositories to get started on the project. For maintainers, this meant keeping track of multiple, related pull requests, and carefully coordinating interdependent releases. Transitioning to a <a href="https://lernajs.io/">Lerna</a> monorepo eliminates most of this friction, and comes with several additional benefits:</p>\n<ul>\n<li>\n<p>Easier to understand infrastructure: Lerna is much more commonly used than Builder, so it’s much easier for contributors to find resources to help them get started.</p>\n</li>\n<li>\n<p>Easier to change and update infrastructure: With Builder, most code infrastructure was extracted into a separate archetype package, which added friction to infrastructure changes.</p>\n</li>\n<li>\n<p>Easier to modularize: Because Lerna automates most of the work of updating and publishing packages, it became feasible to break Victory into smaller packages. With our transition to a monorepo, we’ve increased the number of dependent <code class="language-text">victory-*</code> packages from 3 to 25.</p>\n</li>\n<li>\n<p>Better for open source: Issues, pull requests and code together at last!</p>\n</li>\n</ul>\n<h2 id="why-version-3000"><a href="#why-version-3000" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>Why Version 30.0.0?</h2>\n<p>Victory is jumping from pre-1.0.0 to 30.0.0. Why are we skipping all those versions? Our massive version leap is mostly due to our transition to a Lerna monorepo. We decided to use lock-step versions for all of our dependent packages to eliminate potential confusion and version mismatch. In order to give all packages the same version number, we needed to choose a version number <em>higher than the highest version of our existing packages</em>. <code class="language-text">victory-chart</code> was version 27.1.1 prior to this change. We decided to round up.</p>\n<h2 id="what-does-this-mean-for-users"><a href="#what-does-this-mean-for-users" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>What does this mean for users?</h2>\n<p>Users who are consuming Victory components from the main npm <code class="language-text">victory</code> package are unlikely to be affected by this change. Some very minor naming changes are described in our <a href="https://github.com/FormidableLabs/victory/blob/master/CHANGELOG.md#3000-2018-07-17">changelog</a>.</p>\n<p>Users who are consuming Victory components directly from packages like <code class="language-text">victory-chart</code> and <code class="language-text">victory-core</code> should be aware that components have likely moved to new packages. The complete list of components that have moved can be found in our <a href="https://github.com/FormidableLabs/victory/blob/master/CHANGELOG.md#3000-2018-07-17">changelog</a>.</p>\n<p>Users who are using git installs to include Victory in their projects will need to install from npm or an <a href="https://unpkg.com/">unpkg</a> url instead.</p>\n<h2 id="what-can-users-expect-in-the-future"><a href="#what-can-users-expect-in-the-future" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>What can users expect in the future?</h2>\n<p>Victory users can continue to expect frequent releases and up-to-date changelogs. Victory will use standard <a href="https://semver.org/">semantic versioning</a>, with all packages kept in version lock-step. We also hope these changes will help to accelerate Victory’s release cycle and encourage more community contribution.</p>',fields:{slug:"/blog/2018/victory-is-turning-thirty/"},frontmatter:{id:62,authorId:2,categoryIds:[1,4,5,8],date:"2018-07-18",pageDescription:"Announcing Victory 30.0.0 -- a Lerna Monorepo",pageKeywords:"Victory, React, Lerna, Monorepo",pageTitle:"Victory is Turning 30",path:"/2018/victory-is-turning-thirty/",title:"Victory is Turning 30"}}},pathContext:{slug:"/blog/2018/victory-is-turning-thirty/",prev:{fields:{slug:"/blog/2018/screenshot-testing-with-chromatic/"},frontmatter:{authorId:2,categoryIds:[1,4,5,8],date:"2018-05-21",id:61,title:"Screenshot Testing with Chromatic"}}}}}});