(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),A=a(173),c=a(168);t.default=function(){return r.a.createElement(A.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},157:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),A=a(1),c=a.n(A),i=(a(36),a(158),r.a.createContext({})),s=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},158:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio Grid"}}}}},165:function(e,t,a){"use strict";a.r(t);a(27);var n=a(0),r=a.n(n),A=a(1),c=a.n(A),i=a(63),s=a(3),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},166:function(e){e.exports={data:{freelancerPhoto:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHEtU9QzXAnkCIH/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxETMf/aAAgBAQABBQJVBllQCjxTjWgtRFbnOrNNn//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAEFAQAAAAAAAAAAAAAAAAEAECExcRH/2gAIAQEABj8CQsawUDYYEWuUG//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExcUFR/9oACAEBAAE/IUbcBupUyFWCGco6KvOpunTwlpi2NRmHsfB+BF3kHpP/2gAMAwEAAgADAAAAEKAAAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQVFxYf/aAAgBAQABPxCyXeAq/hjI5VCJ2zjOZEcfV3hG0hrzvLBwVQILyeN5yAmpl9uxTbdTKKoijL9xlN+wXP/Z",aspectRatio:1.0161507402422612,src:"/portfoliogrid/static/92fe23489f58e852af9a19ba8de8d83f/32ee9/freelancer.jpg",srcSet:"/portfoliogrid/static/92fe23489f58e852af9a19ba8de8d83f/0aa4b/freelancer.jpg 125w,\n/portfoliogrid/static/92fe23489f58e852af9a19ba8de8d83f/4d406/freelancer.jpg 250w,\n/portfoliogrid/static/92fe23489f58e852af9a19ba8de8d83f/32ee9/freelancer.jpg 500w,\n/portfoliogrid/static/92fe23489f58e852af9a19ba8de8d83f/9f583/freelancer.jpg 750w,\n/portfoliogrid/static/92fe23489f58e852af9a19ba8de8d83f/e23d9/freelancer.jpg 755w",sizes:"(max-width: 500px) 100vw, 500px"}}}}}},168:function(e,t,a){"use strict";var n=a(169),r=a(0),A=a.n(r),c=a(1),i=a.n(c),s=a(175),o=a.n(s);function l(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title,s=n.data.site,l=t||s.siteMetadata.description;return A.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)},A.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.8.2/js/all.js",integrity:"sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH",crossorigin:"anonymous"}),A.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}))}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=l},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio Grid",description:"Portfolio Grid is a portfolio website template for freelancers written in Gatsby using Bootstrap.",author:"Ray Bernard"}}}}},173:function(e,t,a){"use strict";var n=a(164),r=a(0),A=a.n(r),c=a(1),i=a.n(c),s=a(157),o=a(166),l=a(167),m=a.n(l),d=a(58),p=a(61),f=(a(174),Object(d.b)(function(e){return{isHomeOpen:e.app.isHomeOpen,isWorkOpen:e.app.isWorkOpen,isResumeOpen:e.app.isResumeOpen,isContactOpen:e.app.isContactOpen}},null)(function(e){var t=e.isHomeOpen,a=e.isResumeOpen,n=e.isWorkOpen,r=e.isContactOpen,c=e.dispatch;return A.a.createElement(s.a,{query:"1144785502",render:function(e){return A.a.createElement("div",{className:"container"},A.a.createElement("header",{id:"main-header"},A.a.createElement("div",{className:"row no-gutters"},A.a.createElement("div",{className:"col-md-4"},A.a.createElement(m.a,{fluid:e.freelancerPhoto.childImageSharp.fluid,style:{width:"100%",height:"100%"}})),A.a.createElement("div",{className:"col-md-8"},A.a.createElement("div",{className:"d-flex flex-column"},A.a.createElement("div",{className:"p-5 bg-dark text-white"},A.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-between align-items-center"},A.a.createElement("h1",{className:"display-4 col-sm-12 col-md-9 pl-0"},"John Doe"),A.a.createElement("div",null,A.a.createElement("a",{href:"https://twitter.com",className:"text-white"},A.a.createElement("i",{className:"fab fa-twitter"}))),A.a.createElement("div",null,A.a.createElement("a",{href:"https://facebook.com",className:"text-white"},A.a.createElement("i",{className:"fab fa-facebook"}))),A.a.createElement("div",null,A.a.createElement("a",{href:"https://instagram.com",className:"text-white"},A.a.createElement("i",{className:"fab fa-instagram"}))),A.a.createElement("div",null,A.a.createElement("a",{href:"https://github.com",className:"text-white"},A.a.createElement("i",{className:"fab fa-github"}))))),A.a.createElement("div",{className:"p-4 bg-black text-white"},"Experienced Full Stack Web Developer"),A.a.createElement("div",null,A.a.createElement("div",{className:"d-flex flex-row text-white align-items-stretch text-center"},A.a.createElement("div",{className:"port-item col-3 p-4 bg-primary",onClick:function(){return c(Object(p.c)(!t))},"aria-controls":"home-section","aria-expanded":t},A.a.createElement("i",{className:"fas fa-home fa-2x"}),A.a.createElement("span",{className:"d-none d-sm-block"},"Home")),A.a.createElement("div",{className:"port-item col-3 p-4 bg-success",onClick:function(){return c(Object(p.d)(!a))},"aria-controls":"resume-section","aria-expanded":a},A.a.createElement("i",{className:"fas fa-graduation-cap fa-2x"}),A.a.createElement("span",{className:"d-none d-sm-block"},"Resume")),A.a.createElement("div",{className:"port-item col-3 p-4 bg-warning",onClick:function(){return c(Object(p.e)(!n))},"aria-controls":"work-section","aria-expanded":n},A.a.createElement("i",{className:"fas fa-folder-open fa-2x"}),A.a.createElement("span",{className:"d-none d-sm-block"},"Work")),A.a.createElement("div",{className:"port-item col-3 p-4 bg-danger",onClick:function(){return c(Object(p.b)(!r))},"aria-controls":"contact-section","aria-expanded":r},A.a.createElement("i",{className:"fas fa-envelope fa-2x"}),A.a.createElement("span",{className:"d-none d-sm-block"},"Contact")))))))))},data:o})})),u=function(){return A.a.createElement("div",{className:"container"},A.a.createElement("footer",{id:"main-footer",className:"p-5 bg-dark text-white"},A.a.createElement("div",{className:"row"},A.a.createElement("div",{className:"col-md-6"},A.a.createElement("a",{href:"/",className:"btn btn-outline-light"},A.a.createElement("i",{className:"fas fa-cloud"})," Download Resume")))))},E=function(e){var t=e.children;return A.a.createElement(s.a,{query:"755544856",render:function(e){return A.a.createElement(A.a.Fragment,null,A.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),t,A.a.createElement(u,null))},data:n})};E.propTypes={children:i.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-6005f360cfbcb1196bf8.js.map