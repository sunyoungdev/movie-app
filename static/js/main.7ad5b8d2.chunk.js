(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{26:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(15),c=n.n(i),r=(n(26),n(6)),o=n.n(r),l=n(16),d=n(17),v=n(18),j=n(21),p=n(20),u=n(19),m=n.n(u),h=n(0),b=function(e){return e.length>180?Object(h.jsxs)("span",{children:[e.slice(0,180),"..."]}):Object(h.jsx)("span",{children:e})},g=function(e){e.id;var t=e.title,n=e.release,s=e.poster,a=e.overview;e.genres;return Object(h.jsxs)("div",{className:"movie__item",children:[Object(h.jsx)("div",{className:"movie__poster",children:Object(h.jsx)("img",{src:"https://www.themoviedb.org/t/p/w440_and_h660_face/".concat(s),alt:t})}),Object(h.jsxs)("div",{className:"movie__content",children:[Object(h.jsx)("h3",{className:"movie__title",children:t}),Object(h.jsx)("p",{className:"movie__release",children:n}),Object(h.jsx)("p",{className:"movie__overview",children:b(a)})]})]})},f=(n(47),n(48),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"30681930d9f8a4d49ec75249be9647a1",n="https://api.themoviedb.org/3/movie/popular?api_key=".concat("30681930d9f8a4d49ec75249be9647a1","&language=en-US&page=1"),t.next=4,m.a.get(n);case 4:s=t.sent,a=s.data.results,e.setState({movies:a,isLoading:!1}),console.log(e.state.movies);case 8:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.isLoading;return Object(h.jsx)("section",{className:"container",children:e?Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading.."})}):Object(h.jsx)("div",{className:"movie",children:this.state.movies.map((function(e){return Object(h.jsx)(g,{id:e.id,title:e.title,release:e.release_date,poster:e.poster_path,overview:e.overview,genres:e.genre_ids})}))})})}}]),n}(s.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),O()}},[[49,1,2]]]);
//# sourceMappingURL=main.7ad5b8d2.chunk.js.map