(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{103:function(e,t,c){},108:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),i=c(24),a=c.n(i),r=(c(55),c(56),c(19)),o=c.n(r),l=c(25),d=c(17),j=c(44),b=c.n(j).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(c(76),"13c41f29c5b2898fe03cf5066bd90fa4"),u={fetchTrending:"/trending/all/week?api_key=".concat(h,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(h,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(h,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(h,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(h,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(h,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(h,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(h,"&with_genres=99")},x=c(2),p=function(){var e,t,c=Object(n.useState)([]),s=Object(d.a)(c,2),i=s[0],a=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(u.fetchNetflixOriginals);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(x.jsxs)("header",{style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")')},className:"banner",children:[Object(x.jsxs)("div",{className:"banner__contents",children:[Object(x.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(x.jsxs)("div",{className:"banner__buttons",children:[Object(x.jsx)("button",{className:"banner__button",children:"Play"}),Object(x.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(x.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(x.jsx)("div",{className:"banner--fadeButton"})]})},m=(c(78),c(9)),O=(c(79),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(m.f)(),a=function(){window.scrollY>100?s(!0):s(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),Object(x.jsx)("div",{className:"nav  ".concat(c&&"nav_black"),children:Object(x.jsxs)("div",{className:"nav_contents",children:[Object(x.jsx)("img",{onClick:function(){return i.push("/")},className:"nav_logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(x.jsx)("img",{onClick:function(){return i.push("/profile")},className:"nav_avatar",src:"https://image.flaticon.com/icons/png/512/147/147144.png",alt:""})]})})}),v=c(46),f=c(49),g=c.n(f),_=(c(103),function(e){var t=e.title,c=e.fetchUrl,s=e.isLargeRow,i=void 0!==s&&s,a=Object(n.useState)([]),r=Object(d.a)(a,2),j=r[0],h=r[1],u=Object(n.useState)(""),p=Object(d.a)(u,2),m=p[0],O=p[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(c);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]);return console.log(j),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("h2",{children:t}),Object(x.jsx)("div",{className:"row__posters",children:j.map((function(e){return(i&&(null===e||void 0===e?void 0:e.poster_path)||!i&&(null===e||void 0===e?void 0:e.backdrop_path))&&Object(x.jsx)("img",{onClick:function(){return function(e){""!==m?O(""):g()(null===e||void 0===e?void 0:e.name,{tmdbId:null===e||void 0===e?void 0:e.id}).then((function(e){var t=new URLSearchParams(new URL(e).search);O(t.get("v"))})).catch((function(e){console.log(e)}))}(e)},className:"row__poster ".concat(i&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?null===e||void 0===e?void 0:e.poster_path:null===e||void 0===e?void 0:e.backdrop_path),alt:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))}),""!==m?Object(x.jsx)(v.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}):null]})}),N=function(){return Object(x.jsxs)("div",{className:"homeScreen",children:[Object(x.jsx)(O,{}),Object(x.jsx)(p,{}),Object(x.jsx)(_,{title:"NETFLIX ORIGINAL",fetchUrl:u.fetchNetflixOriginals,isLargeRow:!0}),Object(x.jsx)(_,{title:"Trending Now",fetchUrl:u.fetchTrending}),Object(x.jsx)(_,{title:"Top Rated",fetchUrl:u.fetchTopRated}),Object(x.jsx)(_,{title:"Action Movies",fetchUrl:u.fetchActionMovies}),Object(x.jsx)(_,{title:"Comedy Movies",fetchUrl:u.fetchComedyMovies}),Object(x.jsx)(_,{title:"Horror Movies",fetchUrl:u.fetchHorrorMovies}),Object(x.jsx)(_,{title:"Romance Movies",fetchUrl:u.fetchRomanceMovies}),Object(x.jsx)(_,{title:"Documentaries",fetchUrl:u.fetchDocumentaries})]})},w=(c(43),c(32)),y=(w.a.initializeApp({apiKey:"AIzaSyCce_gYp80pRwsKmdOMGVSP0RKe6osdW3I",authDomain:"netflix-clone-1f045.firebaseapp.com",projectId:"netflix-clone-1f045",storageBucket:"netflix-clone-1f045.appspot.com",messagingSenderId:"681986599931",appId:"1:681986599931:web:d066db8ffe982fb1e5395e"}).firestore(),w.a.auth()),S=(c(108),function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(x.jsx)("div",{className:"signUpScreen",children:Object(x.jsxs)("form",{action:"",children:[Object(x.jsx)("h1",{children:"Sign In"}),Object(x.jsx)("input",{ref:e,type:"email",placeholder:"Email"}),Object(x.jsx)("input",{ref:t,placeholder:"Password",type:"password"}),Object(x.jsx)("button",{type:"submit",onClick:function(c){c.preventDefault(),y.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign In"}),Object(x.jsxs)("h4",{children:[Object(x.jsx)("span",{className:"signUpScreen__grey",children:"New to Netflix ?"}),Object(x.jsx)("span",{className:"signUpScreen__link",onClick:function(c){c.preventDefault(),y.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign Up Now."})]})]})})}),k=c.p+"static/media/netflixlogo.774e8c16.png",T=c.p+"static/media/landingdownload.3f31c58c.jpg",C=c.p+"static/media/homevideo.2b5105f6.mp4",I=c.p+"static/media/homevideo2.89c040b2.mp4",E=function(e){var t=e.updateSignIn;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"devider"}),Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsxs)("div",{className:"text__box row1__col1",children:[Object(x.jsx)("h1",{children:"Enjoy on your TV."}),Object(x.jsx)("p",{children:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."})]}),Object(x.jsx)("div",{className:"row1__col2",children:Object(x.jsxs)("video",{className:"video__box",width:"400",autoplay:"autoplay",muted:!0,loop:!0,children:[Object(x.jsx)("source",{src:C,type:"video/mp4"}),"Your browser does not support HTML video."]})})]}),Object(x.jsx)("div",{className:"devider"}),Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsx)("div",{className:"text__box row2__col1 ",children:Object(x.jsx)("img",{src:T,className:"img__box",alt:""})}),Object(x.jsxs)("div",{className:"row2__col2",children:[Object(x.jsxs)("h1",{children:["Download your shows",Object(x.jsx)("br",{}),"to watch offline."]}),Object(x.jsx)("p",{children:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."})]})]}),Object(x.jsx)("div",{className:"devider"}),Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsxs)("div",{className:"text__box row1__col1",children:[Object(x.jsx)("h1",{children:"Watch everywhere."}),Object(x.jsx)("p",{children:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."})]}),Object(x.jsx)("div",{className:"row1__col2",children:Object(x.jsxs)("video",{className:"video__box",width:"400",autoplay:"autoplay",muted:!0,loop:!0,children:[Object(x.jsx)("source",{src:I,type:"video/mp4"}),"Your browser does not support HTML video."]})})]}),Object(x.jsx)("div",{className:"devider"}),Object(x.jsxs)("div",{className:"faq",children:[Object(x.jsx)("h1",{children:"Frequently Asked Questions"}),Object(x.jsxs)("div",{className:"faq__box",children:[Object(x.jsx)("p",{children:"What is Netflix?"}),Object(x.jsx)("p",{children:"+"})]}),Object(x.jsxs)("div",{className:"faq__box",children:[Object(x.jsx)("p",{children:"How much does Netflix cost?"}),Object(x.jsx)("p",{children:"+"})]}),Object(x.jsxs)("div",{className:"faq__box",children:[Object(x.jsx)("p",{children:"Where can I watch?"}),Object(x.jsx)("p",{children:"+"})]}),Object(x.jsxs)("div",{className:"faq__box",children:[Object(x.jsx)("p",{children:"How do I cancel?"}),Object(x.jsx)("p",{children:"+"})]}),Object(x.jsxs)("div",{className:"faq__box",children:[Object(x.jsx)("p",{children:"What can I watch on Netflix?"}),Object(x.jsx)("p",{children:"+"})]}),Object(x.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(x.jsx)("div",{className:"loginScreen__input",children:Object(x.jsxs)("form",{action:"",children:[Object(x.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(x.jsx)("button",{onClick:function(){return t()},className:"loginScreen__getStarted",children:"GET STARTED \u25b6"})]})})]}),Object(x.jsx)("div",{className:"devider"}),Object(x.jsxs)("section",{className:"footer",children:[Object(x.jsx)("p",{children:"Questions? Call 000-800-040-1843"}),Object(x.jsxs)("section",{className:"box__section",children:[Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("p",{children:"FAQ"}),Object(x.jsx)("p",{children:"Investor Relations"}),Object(x.jsx)("p",{children:"Privacy"}),Object(x.jsx)("p",{children:"Speed Test"})]}),Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("p",{children:"Help Centre"}),Object(x.jsx)("p",{children:"Jobs"}),Object(x.jsx)("p",{children:"Cookie Preferences"}),Object(x.jsx)("p",{children:"Legal Notices"})]}),Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("p",{children:"Account"}),Object(x.jsx)("p",{children:"Ways to Watch"}),Object(x.jsx)("p",{children:"Corporate Information"}),Object(x.jsx)("p",{children:"Netflix Originals"})]}),Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("p",{children:"Media Centre"}),Object(x.jsx)("p",{children:"Terms of Use"}),Object(x.jsx)("p",{children:"Contact Us"})]})]}),Object(x.jsxs)("select",{className:"language",name:"",id:"",children:[Object(x.jsx)("option",{value:"English",children:"English"}),Object(x.jsx)("option",{value:"Hindi",children:"Hindi"})]}),Object(x.jsx)("p",{children:"Netflix India"})]})]})},R=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(x.jsxs)("div",{className:"loginScreen",children:[Object(x.jsxs)("div",{className:"loginScreen__background",children:[Object(x.jsx)("img",{className:"loginScreen__logo",src:k,alt:"netflix logo"}),Object(x.jsx)("button",{onClick:function(){return s(!0)},className:"loginScreen__button",children:"Sign In"}),Object(x.jsx)("div",{className:"loginScreen__gradient",children:Object(x.jsx)("div",{className:"loginScreen__body",children:c?Object(x.jsx)(S,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h1",{children:["Unlimited movies, TV ",Object(x.jsx)("br",{}),"shows and more."]}),Object(x.jsx)("h2",{children:"Watch anywhere. Cancel at any time."}),Object(x.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(x.jsx)("div",{className:"loginScreen__input",children:Object(x.jsxs)("form",{action:"",children:[Object(x.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(x.jsx)("button",{onClick:function(){return s(!0)},className:"loginScreen__getStarted",children:"GET STARTED \u25b6"})]})})]})})})]}),c?null:Object(x.jsx)(E,{updateSignIn:function(){s(!0)}})]})},U=c(30),M=c(20),A=c(26),L=Object(A.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),P=L.actions,W=P.login,q=P.logout,H=function(e){return e.user.user},D=L.reducer,V=(c(110),function(){var e=Object(n.useState)([{name:"Premium",quality:"4k + HDR"},{name:"Basic",quality:"720p"},{name:"Standard",quality:"1080p"}]),t=Object(d.a)(e,2),c=t[0];t[1];return Object(x.jsx)("div",{className:"planScreen",children:c.map((function(e){return Object(x.jsxs)("div",{className:"plan__box",children:[Object(x.jsx)("p",{children:null===e||void 0===e?void 0:e.name}),Object(x.jsx)("small",{children:null===e||void 0===e?void 0:e.quality}),Object(x.jsx)("button",{children:"Subscribe"})]})}))})}),B=(c(111),function(){var e=Object(M.c)(H);return console.log(e),Object(x.jsxs)("div",{className:"profileScreen",children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{className:"profileScreen__body",children:[Object(x.jsx)("h1",{children:"Edit Profile"}),Object(x.jsxs)("div",{className:"profileScreen__info",children:[Object(x.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/147/147144.png",alt:""}),Object(x.jsxs)("div",{className:"profileScreen__details",children:[Object(x.jsxs)("h2",{children:[" ",null===e||void 0===e?void 0:e.emial," "]}),Object(x.jsxs)("div",{className:"profileScreen__plans",children:[Object(x.jsx)("h3",{children:"Plans (Current Plans premium)"}),Object(x.jsx)(V,{}),Object(x.jsx)("button",{onClick:function(){return y.signOut()},className:"profileScreen__signOut",children:"Sign Out"})]})]})]})]})]})}),F=function(){var e=Object(M.c)(H),t=Object(M.b)();return Object(n.useEffect)((function(){var e=y.onAuthStateChanged((function(e){e?(console.log(e),t(W({uid:e.uid,emial:e.email}))):t(q())}));return e}),[t]),Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(U.a,{children:e?Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{exact:!0,path:"/profile",component:B}),Object(x.jsx)(m.a,{exact:!0,path:"/",component:N})]}):Object(x.jsx)(R,{})})})},G=Object(A.a)({reducer:{user:D}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(M.a,{store:G,children:Object(x.jsx)(F,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){}},[[112,1,2]]]);
//# sourceMappingURL=main.8c5d3133.chunk.js.map