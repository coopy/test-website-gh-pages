webpackJsonp([80599720568370],{709:function(e,t){e.exports={data:{markdownRemark:{html:'<p>A team here at Formidable was recently tasked with choosing a JavaScript loader in order to dynamically load scripts in the browser. After exhaustively testing every script loader we could think of, we found them all to fail in at least one way. With a complete test suite in hand, we set out to build the first correct script loader ever made.</p>\n<p>Today we’d like to introduce <a href="https://github.com/walmartlabs/little-loader">little-loader</a>; clocking in at only ~865 bytes (minified) and no dependencies!</p>\n<figure id="media-937" class="align-none" style="max-width: 600px;">\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 0 !important;; max-width: 600px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 124.83333333333336%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAIAAAC+dZmEAAAACXBIWXMAAAsSAAALEgHS3X78AAAEr0lEQVQ4yzWU2VfiSBjF+f8f5mnOmTk9D72MYBKyVFKpLRUISSCLIG7YqMdWu9sNbRVZEgjgTMU5U69wc+u79ftuZbPZvL1t7m5vxi8vRVFkWbYs8kV5sqJY3tz8vPp+dX5++vB4t1ov8zxfLMtf87z8W2X86+7HaHwutLPl7m4PQkhPde5y1Nd5ikFPwh6s9T98ufmNnGkN7FmHcrPTMF29M3Iqs+lkPs8eX+bj2bLTaauqeuQAZMME6wGFXaS3GD4wa7fWx4EDDBt3LdljBGnKddKsbN7P4zibLzdJEmua9o1igvG+bcWEHNpWSOkxkF/V6gVFBiED0wi4QzX1JWpXxGDiXD9MJvMiTRJd09mhQihGSZ2FECUSCdCZVt9JP5CBQiwHplXeohqSkx9UiIu3zfrhef4yXaZJDADY8y1KSOyagYtjbjRd8lVXwt6faWxgzGOn3mo42NIu971SnC+Kx/F8mhVpmghxvAMoo16gey3UCjXeIqdAPW197PR0grkXKl6L20g7PnMrq1XxPMm+jyZCHEWRLCthVLeR7TYVt2E1mjJz4VdVugefoo4KTOR6Vc6xptcGQ6eyXq/mefF9NJ3mq253B9r2XoRczpMAdXwnacHA5ydQHxHpIEKUN3oN0PabjJiXg6Ai0ppni9tf09fZMoo6Im3Wl4Uzasu0BVBnG3nWsC5dw49uT8Ymk3c/ER/rUEoukHBeC8KK1Tov3sTMqqYdNyElOGWgw3GXAd+lQ0O+pp+PfIggM3pbNKREq9/uCefFYjLLvgnCpos4inRdt48kRJCVyjg0QVqzfThUNW/vDzDcpqYD0r8dj6hYCq7t0vmft02+XM0XG+FsAHDOsHiqfQQTRg8Q7FDiRdENw5cYmsw5soxQRGIYz3FbzLx4fs1+Poi0l0lcEnbCbYJRD5kRw31s+g49NuQnY+uU2wCTfVvzuSOuPUqD0nm13mSLIvsfz6EjxLhHzA4juxgI8cCQHsHWybt4Dwkxw0LcDcu0Z1l+8zgZz8qZDcM4x+idbZgQfGCZASFHhjRRqhcIASo+pAeO4+j6cxhUNuu1wOP+eS6c0zQVYuewTkTcgu02xKnyzrYW7X7AX2UGXbhTdX1mYCX+SUvCnsbZ9cN0lhfCWVGUvnheZLcd3ed25KgNjofq9gX7q+8DE+KIKQ1OTE0q2V4VxetscXU/mWRFUi6GGaXidqTlG4Jtz9e4h/uUXDVg2DUJdlq+4nlOyfbQLRdD3PzpNZst3vGEEJ2qDmewr7IUwb06icgxoXs9OepDlzSNg1qjw4GrBSNaBiY2ejzJhHNcLoZsHVZtBI2ohgMA0qrdsr5q9TSVdkLDMrCWfqZNJFlbJSSbzfpxnF/eTab5WryzIMw63hZVYnYl1AZGt2YH5gBY4SHWT0vC1N0vjk9UIrXu7EqW5fdPU9EkYvI4LsuA75dp01h1AkhihfjoTFXi9Hd2KDPbtZNqw2cmUdNLUnl7Z/P+Zb74bzFUTXRV+c7QSuh7h7Gyw6Za7ZISA5cdFnJOVXUcd4RzJkp49DT5NZ6LDhNpD13MKN1lMOa0T2DA2cCqP1i1kwaG1NnHIHA5M427nfBfnw6Ygi55RgsAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;" alt="little loader" title="" src="/static/little-loader-fb7c639e5812a03cbabb3296dcd20826-1f94d.png" srcset="/static/little-loader-fb7c639e5812a03cbabb3296dcd20826-9d82b.png 200w,\n/static/little-loader-fb7c639e5812a03cbabb3296dcd20826-d804b.png 400w,\n/static/little-loader-fb7c639e5812a03cbabb3296dcd20826-1f94d.png 600w" sizes="(max-width: 600px) 100vw, 600px">\n    </span>\n  </span>\n  </figure>\n<p>For a more detailed overview you can watch our very own Brian Beck talk about some of the things that went in to creating little-loader including the comprehensive script loader test suite (script-atomic-onload) and a fancy SVG badge creator (badge-matrix).</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 75%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube.com/embed/F080X3Tp6_8?feature=oembed" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>little-loader: <a href="https://github.com/walmartlabs/little-loader">https://github.com/walmartlabs/little-loader</a><br />\nTesting suite: <a href="https://github.com/exogen/script-atomic-onload">https://github.com/exogen/script-atomic-onload</a><br />\nBadge creator: <a href="https://github.com/exogen/badge-matrix">https://github.com/exogen/badge-matrix</a></p>',fields:{slug:"/blog/2016/01/07/the-only-correct-script-loader-ever-made/"},frontmatter:{id:7,authorId:3,categoryIds:[5,6],date:"2016-01-07",pageDescription:"",pageKeywords:"",pageTitle:"",path:"/2016/01/07/the-only-correct-script-loader-ever-made/",title:"The Only Correct Script Loader Ever Made"}}},pathContext:{slug:"/blog/2016/01/07/the-only-correct-script-loader-ever-made/",prev:{fields:{slug:"/blog/2015/12/04/using-react-is-a-business-decision-not-a-technology-choice/"},frontmatter:{authorId:12,categoryIds:[6,1],date:"2015-12-04",id:6,title:"Using React is a Business Decision, not a Technology Choice"}}}}}});