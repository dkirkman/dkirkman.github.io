webpackJsonp([0xd49956f9f765],{221:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Wild Silicon",subtitle:"David's development blog",copyright:"Copyright © 2018 David Kirkman. All rights reserved.",author:{name:"David Kirkman",twitter:"#"},disqusShortname:"",url:"https://wildsilicon.com"}},markdownRemark:{id:"/Users/david/src/wild-silicon/src/pages/blog/2018/munker/index.md absPath of file >>> MarkdownRemark",htmlAst:{type:"root",children:[{type:"element",tagName:"noscript",properties:{},children:[{type:"text",value:"\nMunker Illusion requires javascript (sorry!)\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blog-munker-illusion",properties:{reactclass:"MunkerIllusion",background:"blue",bar:"yellow",grating:"red"},children:[{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"While writing my last "},{type:"element",tagName:"a",properties:{href:"/blog/2018/cyclical-colormaps/"},children:[{type:"text",value:"post"}]},{type:"text",value:"\nI was reminded of two interesting aspects of psychophysics: color\nperception depends to a large degree on surrounding colors, and color\nperception is different on large and small spatial scales.  These\neffects combined are the basis of the Munker-White illusion."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In the image/widget above there are only three colors.  The background\nis a alternating series of yellow and then blue constant width\nstripes.  Over the background are two red gratings — the width of the\ngratings exactly matches the width of the background stripes.  On the\nleft, the grating is aligned such that it obscures the yellow stripes\nand allows the blue stripes to shine through.  On the right, the\ngrating is aligned to obscure the blue stripes."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"With the initial parameters, most people will perceive the colors of\nthe two red gratings too be distinctly different.  To me it looks\nredish, perhaps a bit magentaish on the left, and orangish on the\nright.  The two gratings, of course, have identical colors.  To see\nthis, play with the background slider and take the background to\nwhite.  If you don’t believe me, the\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/dkirkman/ws-munker-illusion"},children:[{type:"text",value:"code"}]},{type:"text",value:" for the\nillusion is on github."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"What is going on?  At first glance, you might imagine that somehow the\ncolors are combining — the blue and red combine to make purple and\nthe red and yellow combine to make orange.  If you make the stripes\nsmall enough, that is exactly what is going on.  In the widget above\nthe smallest you can make the stripes is one pixel, which depending on\nthe DPI and viewing distance to your display may be enough.  But even\nif your eyesight is sufficient to resolve the 1 pixel stripes,\ncombining colors (e.g. red and green to make yellow) is exactly what\nis going on at the subpixel level of your display."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"But what’s going on in this illusion is different: the color shift\noccurs even when the stripes are quite wide.  And the magnitude of the\ncolor shift depends on how wide the stripes are — if you use the\nslider to adjust the stripes to be wide enough the color shift will\ndisappear entirely.  Adjust the strip width to a point where the\nstripes are as wide as possible but you still see a color shift.  The\ntrippy thing is that color shift is uniform across the red grating\nelements: it’s not like it is more pronounced near the edges."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Again, what’s going on here?  It turns out that nobody really knows.\nWikipedia has\n"},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/White%27s_illusion"},children:[{type:"text",value:"explanations"}]},{type:"text",value:" of\nwhat’s "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"not"}]},{type:"text",value:" going on and several theories about what "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"might"}]},{type:"text",value:" be a\ncorrect explanation.  But at the moment, this is an unsolved problem."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Perception is tricky.  Psychophysics is at the intersection of\nphysics, biology, and information theory.  It’s messy.\nRoughly 30% of our cortex is dedicated to processing visual\ninformation. This is why visualization so powerfully helps us\nunderstand data — it quite literally allows us to use more of our\nbrain.  But we can’t feed it arbitrary input and expect it to make\nsense of that input for us."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Our visual system is designed to make sense of a rainforest or\nsavanna.  To build a 3d mental model of the world that we can\nnavigate.  Our primate heritage means that our color perception is\nprobably geared towards finding ripe fruit and avoiding dangerous\ncritters — and to do so in a variety of lighting conditions.  It just\nspeculation of course, but it strongly seems that we are wired to see\n“red” fruit as red, no matter what the physics of the illumination\nhappens to be at the moment.  What matters isn’t so much the spectrum\nof the reflected light, but the spectrum "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"relative"}]},{type:"text",value:" to the foliage\naround the fruit.  Psychophysics is fun, but psychophysics is\ncomplicated."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We should always keep this in mind when designing visualization.  Our\nvisual cortex brings tremendous processing power and modeling ability\nto help us understand our data.  But if we feed it unnatural scenes\nit’s not likely to behave as we expect."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This illusion is not a color-only affect, the original\nWhite illusion (minus Munker!) is just grayscale.  It’s reproduced\nbelow."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"One last thing: what color was the\n"},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/The_dress"},children:[{type:"text",value:"dress"}]},{type:"text",value:" again?"}]},{type:"text",value:"\n"},{type:"element",tagName:"noscript",properties:{},children:[{type:"text",value:"\nMunker Illusion requires javascript (sorry!)\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blog-munker-illusion",properties:{reactclass:"MunkerIllusion",background:"black",bar:"white",grating:"gray"},children:[{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{tagSlugs:["/blog/tags/illusions/","/blog/tags/psychophysics/"]},frontmatter:{title:"Interactive Munker-White illusion",tags:["illusions","psychophysics"],date:"2018-05-23T00:00:00.000Z",description:"Demonstration that a single color can be perceived quite differently depending on what it's surrounded with."}}},pathContext:{slug:"/blog/2018/munker-illusion/"}}}});
//# sourceMappingURL=path---blog-2018-munker-illusion-7a1272337d7de08fec70.js.map