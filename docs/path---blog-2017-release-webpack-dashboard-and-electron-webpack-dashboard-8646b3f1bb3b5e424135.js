webpackJsonp([0x60483a67da2f],{753:function(a,e){a.exports={data:{markdownRemark:{html:'<p><em>“Tang sucks”</em> - Buzz Aldrin</p>\n<p>After releasing Webpack Dashboard and Electron Webpack Dashboard, we realized that we had hit a sweet spot for developer tooling. Developers wanted to be able to have more transparency and more visual feedback from their build processes (and they liked feeling like they worked at NASA, too). So we gathered our finest minds, opened our editors and got working on a stable release.</p>\n<p>That release is finally here: stable 1.0 releases of Webpack Dashboard and Electron Webpack Dashboard. We have done some major bug fixing, added better documentation, and added a couple of new cool features. If you haven’t tried either before, get started by downloading <a href="https://github.com/FormidableLabs/electron-webpack-dashboard/releases">Electron Webpack Dashboard</a>, or learn how to get <a href="https://github.com/FormidableLabs/webpack-dashboard">Webpack Dashboard</a> running for your project.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; z-index: 0 !important;; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.39851024208566%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAADLElEQVQ4y21T224TVxT1N/QNGgIxtud+89xnPDP22Inj4BZoAIkfQCjcoW+VeOA/kCDQQlWp/4DUryC2I0KaGKoWYkAql3p1n2M7DSoPS/vMPuess/Zeewof338aD7f62Pz92XiwuYWNjR76/U1sPO2ht9HHYLCJXm/A17PIcn1aP6PzAzr7fGsb29s7eDN6i8LLF3+ge+rc2KvlCNMl+LUmgqQFn8CiE9ZRDbIpUh5tgps2EecdOHGDn1OqIX7+5VcUdneH4zBrw6g1xnHrBLL8W4TJEuJ6B1HahmL4EGQHouJA0jwOthbtAHqSQ7ICiIaHQ0UJ99Z/YoQvUKOXbL+JdKWLrHMStWwZSYMRLiMm+I0WrKgO2yN1fh2Wm0B1Y7jREnQn4ermKxrWHz5CYTh8iSBbhF5NsNg9g8VvCCdW0eycQpKfRJzQYysNCH6EsmihLFch6wE9kKPq50QWEQIcKau4zwipZKRUqmKEkKk8ieRzmLS2JhAJmlPjEC3aIwLNTyBTFAwXih1irqxMCbd3EX93GqWzHVTOLKO82kbl/AqEmC5LNu+ZbAZ0iZToIVe330fVpW+fxARYEKwJ4c7OLhqd01D9DDq5Z0ZNCOxlzeUXmHLDTaF7KSyHHPcaMJ0MmhXTAwFfW4SFijkrmUwhA6xqHSb1UWSOyjaEqQLWW8UKIZoe5WzKTfIc+gQKOf31cRn3HxwgtL0WvKjNiWZgl5gCxQyhk8sGzaroETkZJAYx7y0bGebyXEk5QEhjY9gZDFIzUzEhdCifQmV9W2lBPN+FcK7DUVldhuAEvBrWx7mi/F/JUb0NzazR5QQV+XNC1Yi4KRINMned+ssmQJi2hUHWPcwtHCDMWl1U3RwmqZGYc9M/gkXby/nwyoxMcfn+7MwMKrk8f1zF+o+PmctD2PS/FoUqDa2D+ZKKo2UNR0sajyUanaJk4Zhk7Of296ffRcHAV4eLuHvvAQp//fkKP9y+g4uXruHy9e9x6erNz7B25QbW2Prarf/tzXD5+i1cWLuCJ09+Q+HTx3/w7u077L3aw95rhtE0TjDi36Mv7h3MjfZG+PD3B/wLQ5mTKhqyhXsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Webpack Dashboard"\n        title=""\n        src="/static/dashboard-terminal-55f9eba3cd3adac14432218b38ca5aff-fc76f.png"\n        srcset="/static/dashboard-terminal-55f9eba3cd3adac14432218b38ca5aff-290b0.png 200w,\n/static/dashboard-terminal-55f9eba3cd3adac14432218b38ca5aff-14201.png 400w,\n/static/dashboard-terminal-55f9eba3cd3adac14432218b38ca5aff-fc76f.png 800w,\n/static/dashboard-terminal-55f9eba3cd3adac14432218b38ca5aff-0fcde.png 1200w,\n/static/dashboard-terminal-55f9eba3cd3adac14432218b38ca5aff-946fa.png 1600w,\n/static/dashboard-terminal-55f9eba3cd3adac14432218b38ca5aff-4f340.png 2148w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h2 id="so-whats-new"><a href="#so-whats-new" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>So What’s New?</h2>\n<p>The biggest update to Webpack Dashboard is that it’s now fully compatible with Webpack 3. You can now see the sizes, assets, and any problems for each of your modules. It also still works with Webpack 2.</p>\n<p><strong>Other fixes and features:</strong></p>\n<ul>\n<li>Inspectpack no longer runs in minimal mode, and the minimal mode box-sizing issue has been fixed to ensure that panels for status and progress always align.</li>\n<li>The issue with the logs showing duplicate errors has been fixed.</li>\n<li>You can now navigate through the main log using your keyboard arrows.</li>\n<li>We’ve added support for custom hostnames via the plugin config object.</li>\n<li>When the NODE_ENV is production and doesn’t run Inspectpack, Webpack Dashboard now shows a warning instead of displaying errors.</li>\n</ul>\n<p>Electron Webpack Dashboard builds upon the Webpack Dashboard 1.0 Plugin and now has full compatibility with Webpack 2 and Webpack 3. We have also added better-looking scrollbars, a status bar for the NODE_ENV, and fixes for various visual glitches.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; z-index: 0 !important;; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 63.315217391304344%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYUlEQVQ4y4VSyXISURTlF6xKygRlaIYe6GZsCGMIkUlICyQhSgi6Un/FIjEbjX6B7txDqoxZ+BEGrFRZpX6BuuV4b9OdImbh4tTtd9955517+jkuL7/NhkevMTw6mb0YvsIVDueV+jg6fovD4zcmrnEs3vDlifn97v0HOEajj3B6wjOnJ4KlVRlLTnleVyXcorriUiEEEvAECVR5f5lhc2+LcLo1LN9R0HywD8fp6aeZIOooVTqzuvEIteZDVBt7KN3vIlPpIFpowJe6BzGUhqhm5tBykKLrUCJ5BHNNyPENuIQoOt0ncIzHZ/BLKRjtA+z1nsLoDFA1ekiSqKZvQkuUIBHkcJ4ECpBJTCSxUKqCcK4B7/YziLUevOS+vfvYdGiOope3UescoE4OK+SuuNlCYq2COEFPM6qIU1XJDYuqJB5OliGVtiGVu/D647bgGVxBHfGigWarjy0SbVCtkqhu7EPKN6BFCyRUhBorIhRbp7puOlfZKQkrVF2+GNo7g7lDNy0UGilkERgy50M9zktUswvIEK+AVK5uXhBQ0mYcd4UYWizIGfqkJGIpss9hE5jAh1k4QjnaPYZkXWB/y5YRt58y3KGRxzQyPwm+jUO3YR9g8vyH5K/1F3l81h2wBHlkL2Vo5sMjW7DJiz0elYVNkYW+Rj/KG0yis0vPZkQj08OGX07T6KkrCCIjafb98poJXygLgdbcX+RyjisuDVvtPhzn558hqWnKK2chu4ActFj+CopegpLY+IeTNfeEYBz9wXM4fv/6g+nkKyYX0//jy4Tq5GZ/MsUF7f34/hN/Aedk7rQcoWSeAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Electron Webpack Dashboard"\n        title=""\n        src="/static/electron-dashboard-9d12459a7bb4a32a02bc4e7b92e4adac-fc76f.png"\n        srcset="/static/electron-dashboard-9d12459a7bb4a32a02bc4e7b92e4adac-290b0.png 200w,\n/static/electron-dashboard-9d12459a7bb4a32a02bc4e7b92e4adac-14201.png 400w,\n/static/electron-dashboard-9d12459a7bb4a32a02bc4e7b92e4adac-fc76f.png 800w,\n/static/electron-dashboard-9d12459a7bb4a32a02bc4e7b92e4adac-0fcde.png 1200w,\n/static/electron-dashboard-9d12459a7bb4a32a02bc4e7b92e4adac-946fa.png 1600w,\n/static/electron-dashboard-9d12459a7bb4a32a02bc4e7b92e4adac-ce901.png 2400w,\n/static/electron-dashboard-9d12459a7bb4a32a02bc4e7b92e4adac-a8b27.png 2944w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h2 id="so-whats-next"><a href="#so-whats-next" aria-hidden="true" class="anchor"><span aria-hidden=\'true\' class=\'anchor-icon\' /></a>So What’s Next?</h2>\n<p>After releasing the beta version of Electron Webpack Dashboard, we had a ton of requests asking us to add capability to run multiple instances for different projects. As a result, we’ll be adding support for multiple tabs and port configurations for macOS, and multiple window support for Linux and Windows.</p>\n<p>Beyond that, we intend to evolve alongside the Webpack project. We are excited to see what new features we can do cool things with and look into ways that we can provide even more value and reason to open up the dashboard window. Additionally, we are committed to providing data that’s as accurate as possible and will take care to not misrepresent asset/module sizes in our displays. This will be an iterative process, but because your dashboard updates automatically, it will just roll right out to you.</p>\n<p>If you haven’t tried our dashboards yet, give them a spin. We’ve gotten feedback that they have helped companies reduce bundle sizes and unearth bundling issues, so you may reap similar benefits. Worst case scenario, you are just going to look cool AF.</p>',fields:{slug:"/blog/2017/release-webpack-dashboard-and-electron-webpack-dashboard/"},frontmatter:{id:54,authorId:22,categoryIds:[4,5],date:"2017-10-17",pageDescription:"Stable 1.0 releases of Webpack Dashvoard and Electron Webpack Dashboard have arrived.",pageKeywords:"Webpack, Webpack Dashboard, Electron, Release",pageTitle:"Introducing Webpack Dashboard & Electron Webpack Dashboard 1.0",path:"/2017/release-webpack-dashboard-and-electron-webpack-dashboard/",title:"Introducing Webpack Dashboard & Electron Webpack Dashboard 1.0"}}},pathContext:{slug:"/blog/2017/release-webpack-dashboard-and-electron-webpack-dashboard/",prev:{fields:{slug:"/blog/2017/adaptive-uis-with-react-image-palette/"},frontmatter:{authorId:6,categoryIds:[1,4,5],date:"2017-10-9",id:53,title:"Adaptive UIs with react-image-palette"}}}}}});