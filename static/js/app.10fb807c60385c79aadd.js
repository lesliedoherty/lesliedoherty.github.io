webpackJsonp([0],[,function(t,e,s){var a=s(0)(s(12),s(43),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(14),s(48),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(17),s(57),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(18),s(44),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(24),s(47),null,null);t.exports=a.exports},,function(t,e,s){"use strict";var a=s(62),i=s(6),n=s(60),o=s.n(n),r=s(59);!function(){window.Portfolio=window.Portfolio||{},window.Portfolio.Vue=a.a,window.Portfolio.Vue.use(i.a),window.Portfolio.Vue.use(o.a),window.Portfolio.Vue.use(r.a)}()},function(t,e,s){"use strict";var a=s(6),i=s(40),n=s.n(i),o=s(42),r=s.n(o),l=s(41),c=s.n(l),u=new a.a({mode:"history",routes:[{path:"/",name:"Landing",component:n.a},{path:"/styleguide",name:"Styles",component:r.a},{path:"/sandbox",name:"Sandbox",component:c.a}]});e.a=u},function(t,e,s){s(29);var a=s(0)(s(11),s(52),null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(s(7),s(8)),i=s(9),n=s.n(i),o=[{name:"Layout Example Data",id:"one",path:"/static/data/examples.json"},{name:"Project Data",id:"two",path:"/static/data/projects.json"}];new window.Portfolio.Vue({el:"#app",router:a.a,template:"<layout-view></layout-view>",components:{"layout-view":n.a},data:{sources:o}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(38),i=s.n(a),n=s(39),o=s.n(n);e.default={name:"layout-view",components:{"app-footer":i.a,"app-navigation":o.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(32),i=s.n(a),n=s(30),o=s.n(n),r={inputClasses:{valid:"is-success",invalid:"is-danger"}};e.default={name:"contact",mixins:[new i.a(r)],data:function(){return{formstate:{},finished:!1,model:{name:"",_replyto:"",message:"",_subject:"You've Got Mail!"}}},methods:{fieldClassName:function(t){return t?(t.$touched||t.$submitted)&&t.$valid?"has-success":(t.$touched||t.$submitted)&&t.$invalid?"has-danger":void 0:""},onSubmit:function(){console.log("onSubmit Function");if(this.formstate.$invalid)console.log("uhoh");else{var t=this.model;console.log(t),o.a.ajax({url:"https://formspree.io/leslie@catapultwebdevelopment.com",method:"POST",data:t,dataType:"json",success:function(t){this.finished=!0,console.log("reply success "+t)}.bind(this),error:function(t){console.log("reply error "+t)},complete:function(t,e){console.log("Local completion callback.")}})}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"grid",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hero",props:["heroClass","heroMsg"],data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project-item-description-list-item",props:["id","content","label"],data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project-item-header",props:["name","client"],data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project-macbook",props:["id","image"],data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project-tablet",props:["id","image"],data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project-testimonial",props:["id","link","quote","name"],data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"select-source",data:function(){return{sources:this.$root.$data.sources,source:"",items:[]}},methods:{sourceChanged:function(t){for(var e=0;e<this.sources.length;e++)this.sources[e].id==t.target.value&&(this.source=this.sources[e].path);this.$emit("sourceChanged",this.source)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app-footer",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),i=s.n(a);e.default={name:"appNav",components:{hero:i.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(5),i=s.n(a),n=s(1),o=s.n(n);e.default={name:"landing",components:{"project-item":i.a,contact:o.a},data:function(){return{sources:this.$root.$data.sources,source:"",items:[]}},created:function(){var t=this;this.source=this.sources[1].path,console.log("created in select-- this.source "+this.source),this.$http.get(this.source).then(function(e){t.items=e.data.items,console.log("created in select items are  "+e.data.items)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(35),i=s.n(a),n=s(34),o=s.n(n),r=s(36),l=s.n(r),c=s(4),u=s.n(c),d=s(3),m=s.n(d);e.default={name:"project-item",components:{"project-item-header":i.a,"project-item-description-list-item":o.a,"project-testimonial":l.a,"project-tablet":u.a,"project-macbook":m.a},props:["source","items"],data:function(){return{projects:this.items}},methods:{updateSource:function(t){var e=this;console.log("Update Source In Project-Item "+t),console.log("Source Path "+t),this.$http.get(t).then(function(t){e.items=t.data.items,console.log("items are "+e.items)})}},created:function(){this.updateSource(this.source)},watch:{source:function(t){this.updateSource(t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"test",components:{},data:function(){return{msg:"Testing API Calls",heroWrapperClass:""}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(5),i=s.n(a),n=s(33),o=s.n(n),r=s(2),l=s.n(r),c=s(4),u=s.n(c),d=s(3),m=s.n(d),v=s(1),_=s.n(v),p=s(37),h=s.n(p);e.default={name:"styles",components:{"project-item":i.a,grid:o.a,hero:l.a,"project-tablet":u.a,"project-macbook":m.a,contact:_.a,"select-source":h.a},data:function(){return{msg:"Styles and Components",heroWrapperClass:"",sources:this.$root.$data.sources,source:"",items:[]}},methods:{sourceChanged:function(t,e){this.source=t,this.items=e}},created:function(){var t=this;this.source=this.sources[0].path,console.log("created in select-- this.source "+this.source),this.$http.get(this.source).then(function(e){t.items=e.data.items,console.log("created in select items are  "+e.data.items)})}}},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){t.exports=s.p+"static/img/apple-contact.f5be5c5.png"},,function(t,e,s){var a=s(0)(s(13),s(45),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(15),s(54),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(16),s(49),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(19),s(55),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(20),s(53),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(21),s(58),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(22),s(50),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(23),s(56),null,null);t.exports=a.exports},function(t,e,s){s(28);var a=s(0)(s(25),s(51),"data-v-41aa76a3",null);t.exports=a.exports},function(t,e,s){s(27);var a=s(0)(s(26),s(46),"data-v-279a386a",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact_form--group"},[!1===t.finished?s("vue-form",{staticClass:"contact_form",attrs:{state:t.formstate},on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[s("validate",{staticClass:"field",class:t.fieldClassName(t.formstate.name),attrs:{"auto-label":""}},[s("label",{staticClass:"label",attrs:{"label-for":"name"}},[t._v("Name")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],staticClass:"input",attrs:{id:"name",type:"text",name:"name",placeholder:"Hello! My name is",required:""},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||(t.model.name=e.target.value)}}})]),t._v(" "),s("field-messages",{staticClass:"form-control-feedback",attrs:{"auto-label":"",name:"name",show:"$touched || $submitted"}},[s("div",[t._v("Nice to meet you, "+t._s(t.model.name))]),t._v(" "),s("div",{slot:"required"},[t._v("Let me know how to address you.")])])],1),t._v(" "),s("validate",{staticClass:"field",class:t.fieldClassName(t.formstate._replyto),attrs:{"auto-label":""}},[s("label",{staticClass:"label",attrs:{"label-for":"email"}},[t._v("Email")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.model._replyto,expression:"model._replyto"}],staticClass:"input",attrs:{id:"email",type:"email",placeholder:"Email",name:"_replyto",required:""},domProps:{value:t.model._replyto},on:{input:function(e){e.target.composing||(t.model._replyto=e.target.value)}}})]),t._v(" "),s("field-messages",{staticClass:"form-control-feedback",attrs:{"auto-label":"",name:"_replyto",show:"$touched || $submitted"}},[s("div",{slot:"required"},[t._v("Email is a required field")]),t._v(" "),s("div",{slot:"email"},[t._v("Email is not valid")])])],1),t._v(" "),s("validate",{staticClass:"field",attrs:{"auto-label":""}},[s("label",{staticClass:"label",attrs:{"label-for":"message"}},[t._v("Message")]),t._v(" "),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.message,expression:"model.message"}],staticClass:"textarea",attrs:{id:"message",name:"message",placeholder:"What can I do for you?"},domProps:{value:t.model.message},on:{input:function(e){e.target.composing||(t.model.message=e.target.value)}}})])]),t._v(" "),s("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"_gotcha"}}),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-large is-outlined is-primary"},[t._v("Say Hello")])])])],1):t._e(),t._v(" "),!0===t.finished?s("div",{staticClass:"contact_form-finished"},[s("h3",[t._v("Thank you for your mail.")]),t._v(" "),s("p",[t._v("You should hear back within 24 hours. While you wait, here's a great clip to demonstrate the famous Edison Quote, “I have not failed. I've just found 10,000 ways that won't work.”")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"video-container"},[s("iframe",{attrs:{width:"853px",height:"480px",src:"https://www.youtube.com/embed/Awf45u6zrP0",frameborder:"0",allowfullscreen:""}})],1)]):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Let's work together and discover the 10,001"),s("sup",[t._v("st")]),t._v(" way that works. I'm looking forward to it.")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ipad",style:{"background-image":"url("+t.image+")"}},[s("img",{attrs:{src:"/static/base/ipad-frame.png"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container"},[s("article",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{staticClass:"notification is-info"},[t._v("First column")])]),t._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"notification is-success"},[t._v("Second column")])]),t._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"notification is-warning"},[t._v("Third column")])]),t._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"notification is-danger"},[t._v("Fourth column")])])]),t._v(" "),s("article",{staticClass:"example-fill columns is-multiline",attrs:{id:"grid"}},[s("div",{staticClass:"column is-three-quarters"},[s("p",[s("code",{staticClass:"html"},[t._v("is-three-quarters")])])]),t._v(" "),s("div",{staticClass:"column"},[s("p",[t._v("Auto")])]),t._v(" "),s("div",{staticClass:"column"},[s("p",[t._v("Auto")])]),t._v(" "),s("div",{staticClass:"column is-10 is-offset-1"},[s("p",[s("code",[t._v("is-10 is-offset-1")])])])]),t._v(" "),s("article",{staticClass:"example-fill columns",attrs:{id:"offsetEx"}},[s("div",{staticClass:"column is-half is-offset-one-quarter"},[s("p",[s("code",[t._v("is-half is-offset-one-quarter")])])])]),t._v(" "),s("article",{staticClass:"example-fill columns"},[s("div",{staticClass:"column is-4 is-offset-8"},[s("p",[s("code",[t._v("is-4 is-offset-8")])])])]),t._v(" "),s("article",{staticClass:"example-fill columns",attrs:{id:"multiline"}},[s("div",{staticClass:"column is-one-quarter"},[s("p",[s("code",[t._v("is-one-quarte")])])]),t._v(" "),s("div",{staticClass:"column is-one-quarter"},[s("p",[s("code",[t._v("is-one-quarter")])])]),t._v(" "),s("div",{staticClass:"column is-one-quarter"},[s("p",[s("code",[t._v("is-one-quarter")])])]),t._v(" "),s("div",{staticClass:"column is-one-quarter"},[s("p",[s("code",[t._v("is-one-quarter")])])])]),t._v(" "),s("article",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-8"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary"},[s("p",{staticClass:"global_title"},[t._v("Vertical...")]),t._v(" "),s("p",{staticClass:"global_subtitle"},[t._v("Top tile")])]),t._v(" "),s("article",{staticClass:"tile is-child notification is-warning"},[s("p",{staticClass:"global_title"},[t._v("...tiles")]),t._v(" "),s("p",{staticClass:"global_subtitle"},[t._v("Bottom tile")])])]),t._v(" "),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-info"},[s("p",{staticClass:"global_title"},[t._v("Middle tile")]),t._v(" "),s("p",{staticClass:"global_subtitle"},[t._v("With an image")]),t._v(" "),s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"http://bulma.io/images/placeholders/640x480.png"}})])])])]),t._v(" "),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-danger"},[s("p",{staticClass:"global_title"},[t._v("Wide tile")]),t._v(" "),s("p",{staticClass:"global_subtitle"},[t._v("Aligned with the right tile")]),t._v(" "),s("div",{staticClass:"content"})])])]),t._v(" "),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-success"},[s("div",{staticClass:"content"},[s("p",{staticClass:"global_title"},[t._v("Tall tile")]),t._v(" "),s("p",{staticClass:"global_subtitle"},[t._v("With even more content")]),t._v(" "),s("div",{staticClass:"content"})])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"parent"},[s("article",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("For other cool stuff that you can do with a styleguide, check out the "),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:3500},expression:"{ duration: 3500}"}],attrs:{href:"#layouts"}},[t._v("Layout Options")])]),t._v(" "),s("div",{staticClass:"control"},[s("label",{staticClass:"radio",attrs:{for:"one"}},[t._v("From June 2017 in "),s("a",{attrs:{href:"https://goo.gl/maps/U85xFTNvxgn"}},[t._v("Langland Bay")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.heroWrapperClass,expression:"heroWrapperClass"}],attrs:{type:"radio",id:"one",value:"wales"},domProps:{checked:t._q(t.heroWrapperClass,"wales")},on:{__c:function(e){t.heroWrapperClass="wales"}}})])]),t._v(" "),s("div",{staticClass:"control"},[s("label",{staticClass:"radio",attrs:{for:"two"}},[t._v("My son as a toddler on a hill\n                "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.heroWrapperClass,expression:"heroWrapperClass"}],attrs:{type:"radio",id:"two",value:"bc"},domProps:{checked:t._q(t.heroWrapperClass,"bc")},on:{__c:function(e){t.heroWrapperClass="bc"}}})])]),t._v(" "),s("h3",[t._v("You're viewing: "+t._s(t.heroWrapperClass))])]),t._v(" "),s("article",{staticClass:"container"},[s("header",[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("p",[t._v('A little insight in to "How I Work". These are components rendered on the same page for easy reference.\n                Bonus! Quick UI check at breakpoints for the entire site in one place.')])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),s("article",{staticClass:"container"},[t._m(4),t._v(" "),s("div",{staticClass:"container"},[s("contact")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("div",{staticClass:"container animation--iPad"}),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("hero",{attrs:{heroClass:"bc"}}),t._v(" "),s("hero",{attrs:{heroClass:"default"}}),t._v(" "),t._m(9),t._v(" "),s("article",{staticClass:"container",attrs:{id:"layouts"}},[t._m(10),t._v(" "),t._m(11),t._v(" "),s("aside",[s("h2",[t._v("Select A Source*")]),t._v(" "),s("p",[t._v("Coming up: Fixing the state so props don't mutate and kill each other with their Ood-like mutations.")]),t._v(" "),s("select-source",{on:{sourceChanged:t.sourceChanged}})],1)]),t._v(" "),s("project-item",{attrs:{source:t.source,items:t.items}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("h1",[t._v("Testing Hero Backgrounds")]),t._v(" "),s("h2",[t._v("IN PROGRESS")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Pick a class to change the hero background."),s("br"),t._v(" "),s("small",[t._v("Coming Soon: Write up of vue and styleguides to help clients and designers visualize in the browser like this.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"typography"}},[s("h1",{attrs:{id:"headings"}},[t._v("Headings")]),t._v(" "),s("h1",[t._v("h1. Heading")]),t._v(" "),s("h2",[t._v("h2. Heading")]),t._v(" "),s("h3",[t._v("h3. Heading")]),t._v(" "),s("h4",[t._v("h4. Heading")]),t._v(" "),s("h5",[t._v("h5. Heading")]),t._v(" "),s("h1",{attrs:{id:"paragraph"}},[t._v("Paragraph")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, "),s("a",{attrs:{href:"#",title:"test link"}},[t._v("test link")]),t._v(" adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, "),s("em",[t._v("emphasis")]),t._v(" consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"break"},[s("h1",[t._v("Contact")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("h1",[t._v("Contact Component")]),t._v(" "),s("p",[t._v("Section layout will depend on parent. "),s("code",[t._v('class="contact"')]),t._v(" will set the width and layout on the landing page. Without the contact container, form responds as seen:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"break"},[s("h1",[t._v("Animations")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"container"},[s("header",[s("h1",[t._v("iPad Animated Background")])]),t._v(" "),s("div",{staticClass:"component_usage"},[s("p",[t._v("Based on the animation property in the media object. I "),s("a",{attrs:{href:"https://github.com/lesliedoherty/portfolio/commit/853a10b4fcda03f7322ae8d0f145a181dd4a64ac"}},[t._v("decided")]),t._v(" to make use of "),s("code",[t._v("transform: rotateZ(360deg)")]),t._v(" to use the GPU power more than the CPU since it was running high at ~40% in Chrome.\n            ")]),t._v(" "),s("p",[t._v("The conditional is used inside the for project loop.\n                "),s("code",[t._v('\n                    v-if="project.media.animation"\n                ')])]),t._v(" "),s("p",[t._v("Next we evaluate the kind of animation frame we are using:\n                "),s("code",[t._v("\n                    v-if=\"project.media.animation.frame === 'iPad'\n                ")])]),t._v(" "),s("p",[t._v("Finally we pass the correct props to the component:\n                "),s("code",[t._v('\n                    :image="project.media.animation.image"\n                ')])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"break"},[s("h1",[t._v("Hero Component* Needs review")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"container"},[s("header",[s("h1",[t._v("Hero Component")]),t._v(" "),s("p",[t._v("Originally had two backgrounds I couldn't decide between: ")])]),t._v(" "),s("div",{staticClass:"component_usage"},[s("p",[t._v("Based on the class used when embedding the component.")]),t._v(" "),s("p",[t._v("Pass in the following when used to see the picture from Wales (used above the router view so on all pages at the top):\n                "),s("code",[t._v('\n                    class="wales"\n                ')])]),t._v(" "),s("p",[t._v("I used a dark background placeholder for the swing photo for now:\n                "),s("code",[t._v('\n                    class="bc"\n                ')])]),t._v(" "),s("p",[t._v("Or for the Old Photo Of Me:\n                "),s("code",[t._v('\n                    class="default"\n                ')])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"break"},[s("h1",[t._v("Project Item Layouts")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("h1",[t._v("Layout Classes")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"component_usage"},[s("p",[t._v("Classes are passed in with the data for each project as part of the JSON Schema for projectItem. The following classes and results are available and demonstrated:")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",t._l(t.items,function(e){return s("article",{key:e.id,staticClass:"project_item",class:e.class},[s("div",{staticClass:"container"},[s("div",{staticClass:"project_item--body"},[s("project-item-header",{attrs:{name:e.name,client:e.client}}),t._v(" "),s("dl",{staticClass:"project_item--content"},[e.description?s("project-item-description-list-item",{attrs:{label:"Description",id:e.id,content:e.description}}):t._e(),t._v(" "),e.challenges?s("project-item-description-list-item",{attrs:{label:"Challenges",id:e.id,content:e.challenges}}):t._e(),t._v(" "),e.solution?s("project-item-description-list-item",{attrs:{label:"Solution",id:e.id,content:e.solution}}):t._e()],1),t._v(" "),s("aside",[s("dl",[e.role?s("project-item-description-list-item",{attrs:{label:"Role",id:e.id,content:e.role}}):t._e(),t._v(" "),s("div",[s("dt",{staticClass:"project_item--tech-label",attrs:{id:"project_tech_"+e.id}},[t._v("Tech :")]),t._v(" "),t._l(e.technology,function(a){return s("dd",{key:a,staticClass:"project_item--tech",attrs:{"aria-labelledby":"project_tech_"+e.id}},[t._v(t._s(a))])})],2)],1)]),t._v(" "),e.testimonial[0]?[s("project-testimonial",{attrs:{id:e.id,link:e.testimonial[0].link,quote:e.testimonial[0].quote,name:e.testimonial[0].name}})]:t._e()],2)]),t._v(" "),e.media.animation?["iPad"===e.media.animation.frame?s("div",{staticClass:"project_item--preview"},[s("div",{staticClass:"container project_item--preview-item animation--iPad"},[s("project-tablet",{attrs:{image:e.media.animation.image}})],1)]):t._e(),t._v(" "),"macbook"===e.media.animation.frame?s("div",{staticClass:"project_item--preview"},[s("div",{staticClass:"container project_item--preview-item animation--macbook"},[s("project-macbook",{attrs:{image:e.media.animation.image}})],1)]):t._e()]:e.media.preview?[e.media.preview?s("div",{staticClass:"project_item--preview"},[s("img",{staticClass:"project_item--preview-item",attrs:{src:e.media.preview,alt:e.name}})]):t._e()]:t._e()],2)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero header",class:t.heroClass},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"highlight"},[s("span",[t._v("A passionate speaker and empathetic developer looking to work with great teams, produce beautiful code, and share insights along the way.\n        You can see a bit of how I work "),s("router-link",{attrs:{to:"/styleguide"}},[t._v("at the living styleguide,")]),t._v(" see "),s("a",{attrs:{href:"https://github.com/lesliedoherty/portfolio"}},[t._v("the code here")]),t._v(".\n      ")],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"project_item--header"},[s("h1",{staticClass:"global_title"},[t._v("\n        "+t._s(t.name)+"\n    ")]),t._v(" "),s("h2",{staticClass:"global_subtitle project_item--subtitle"},[t._v("\n        "+t._s(t.client)+"\n    ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero-wrap wales"},[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"nav_links"},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:5e3},expression:"{ duration: 5000}"}],staticClass:"nav_item",attrs:{href:"/#work"}},[t._v("\n          Work\n        ")]),t._v(" "),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:3500},expression:"{ duration: 3500}"}],staticClass:"nav_item",attrs:{href:"/#contact"}},[t._v("\n          Contact\n        ")])])])]),t._v(" "),s("hero",{staticClass:"wales"})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"nav_branding content"},[s("h1",{staticClass:"global_title"},[t._v("Leslie Doherty")]),t._v(" "),s("h2",{staticClass:"global_subtitle"},[t._v("Front-end Architect")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"parent"},[s("article",{staticClass:"container"},[s("header",[s("h1",[t._v(t._s(t.msg))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("app-navigation"),t._v(" "),s("main",{staticClass:"content",attrs:{role:"main","aria-labelledby":"Label"}},[s("router-view")],1),t._v(" "),s("app-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select is-primary"},[s("select",{on:{change:t.sourceChanged}},t._l(t.sources,function(e){return s("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("dt",{attrs:{id:"project_"+t.label+"_"+t.id}},[t._v(t._s(t.label)+" :")]),t._v(" "),s("dd",{attrs:{"aria-labelledby":"project_"+t.label+"_"+t.id}},[t._v(t._s(t.content))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"project_item--testimonial-wrapper"},[s("blockquote",{key:t.id,staticClass:"project_item--testimonial",attrs:{cite:t.link}},[t._v("\n        "+t._s(t.quote)+"\n        "),s("cite",[t._v(t._s(t.name))])])],1)},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"parent"},[t._m(0),t._v(" "),a("project-item",{attrs:{source:t.source,items:t.items}}),t._v(" "),a("section",{staticClass:"contact contact-wrapper",attrs:{id:"contact"}},[t._m(1),t._v(" "),a("article",{staticClass:"container contact_form-wrapper"},[a("contact"),t._v(" "),a("img",{attrs:{src:s(31)}})],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"container",attrs:{id:"work"}},[s("h1",{staticClass:"global_subtitle"},[t._v("Recent Work")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"container"},[s("h1",{staticClass:"global_subtitle"},[t._v("Contact")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"macbook",style:{"background-image":"url("+t.image+")"}},[s("img",{attrs:{src:"/static/base/macbook-frame.png"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer",attrs:{role:"contentinfo"}},[s("section",{staticClass:"container"},[s("div",{staticClass:"footer_links"},[s("a",{staticClass:"footer_links--item",attrs:{href:"https://github.com/lesliedoherty",target:"_blank"}},[t._v("\n        Github\n      ")]),t._v(" "),s("a",{staticClass:"footer_links--item",attrs:{href:"https://twitter.com/mrsflinger",target:"_blank"}},[t._v("\n        Twitter\n      ")]),t._v(" "),s("a",{staticClass:"footer_links--item",attrs:{href:"https://instagram.com/mrsflinger",target:"_blank"}},[t._v("\n        Pretty(ish) Pictures\n      ")])]),t._v(" "),s("div",{staticClass:"footer_misc"},[s("h4",[t._v(" ©2017")]),t._v(" "),s("ul",[s("li",[t._v("Please don't use any of this content without permission, not even code.")]),t._v(" "),s("li",[t._v("Please do learn and ask how I can mentor you or work for you.")]),t._v(" "),s("li",[t._v("Please do kindly tell me how I can improve my code.")]),t._v(" "),s("li",[t._v("As always, this is a work in progress, just like I am.")])])])])])}]}},,,,,,function(t,e){}],[10]);
//# sourceMappingURL=app.10fb807c60385c79aadd.js.map