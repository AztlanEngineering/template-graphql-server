!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=13)}([function(e,n){e.exports=require("mongoose")},function(e,n){e.exports=require("validator")},function(e,n){e.exports=require("apollo-errors")},function(e,n){e.exports=require("bcrypt")},function(e,n){e.exports=require("apollo-server")},function(e,n){e.exports=require("jsonwebtoken")},function(e,n){e.exports=require("passport")},function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("passport-jwt")},function(e,n){e.exports=require("graphql-tools")},function(e,n){e.exports=require("apollo-server-express")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("apollo-cache-control")},function(e,n,t){e.exports=t(15)},function(e,n){e.exports=require("dotenv")},function(e,n,t){"use strict";t.r(n);var r=t(7),a=t.n(r),s=t(0),o=t.n(s);const i=new o.a.Schema({refresh_token:String,provider:String,ps:String,email:String,name:String,scope:String,ts_created:{type:Date,default:Date.now},ts_updated:{type:Date,default:Date.now}}),u=new o.a.Schema({email:String,first_name:String,last_name:String,ts_created:{type:Date,default:Date.now},ts_updated:{type:Date},username:String,password:String,handle:String,profile_picture:String,superuser:Boolean,operator:Boolean,oauth2:[i]});var d=o.a.model("users",u);const l=new o.a.Schema({token:String,duration:{type:String,default:"3600"},user:{type:o.a.Schema.Types.ObjectId,ref:"User"}});var c=new o.a.model("token",l);const p=t(8).Strategy,m=t(8).ExtractJwt,g={};g.jwtFromRequest=m.fromAuthHeaderAsBearerToken(),g.secretOrKey="yooo",g.issuer="",g.audience="",g.algorithms=["HS512"];const f=new p(g,(e,n)=>{"true"===process.env.DEBUG&&console.log("TOKEN INFORMATION",e),d.findById(e.id).then(e=>n(null,e||!1)).catch(e=>console.error(e))});var w=t(9);var h=[...["type Query {\n  _empty: String\n}\nenum CacheControlScope {\n  PUBLIC\n  PRIVATE\n}\n\ndirective @cacheControl (\n  maxAge: Int\n  scope: CacheControlScope\n) on FIELD_DEFINITION | OBJECT | INTERFACE\n","type Mutation {\n  _empty: String\n}\n"],...["type Token {\n  token: String!\n  duration: String!\n}\n\n","extend type Query {\n \tallUsers: [User]!\n \tuser(id:ID!): User\n \tme: User\n  hello: String!\n}\n\nextend type Mutation {\n \taddUser(input:UserInput): User!,\n \tupdateUser(id: ID!, input:UserInput): User!,\n \tupdateMe(input:MeInput): User!,\n \tdeleteUser(id: ID!): Boolean!,\n \tchangePassword(id: ID!, password: String!): Boolean!,\n \tchangeMyPassword(password: String!): Boolean!,\n \tlogin(input: UserLogin): Token!,\n  signup(input: UserInput): Token!,\n}\n\ninput UserInput {\n  first_name: String\n  last_name: String\n  email: String\n  username: String\n  password: String\n  superuser: Boolean\n  operator: Boolean\n  handle: String\n  profile_picture: String\n}\n\ninput MeInput {\n  first_name: String\n  last_name: String\n  email: String\n  username: String\n  password: String\n  handle: String\n  profile_picture: String\n}\n\ninput UserLogin {\n  email: String!\n  password:String!\n}\n\ntype User {\n \tid: ID\n \tts_created: String\n \tts_updated: String\n \tfirst_name: String\n \tlast_name: String\n \temail: String\n  username: String\n  superuser: Boolean\n  operator: Boolean\n  password: String\n  handle: String\n  profile_picture: String\n}\n\ntype MinUser {\n \tid: ID\n \tfirst_name: String\n \tlast_name: String\n  username: String\n  handle: String\n  profile_picture: String\n}\n\n",""],...["# Generator version : 1.1.1\nextend type Query {\n  getPollow: String\n}\n",""]],y=t(3),S=t.n(y),_=t(1),E=t.n(_),v=t(2),x=(Object(v.createError)("ConfigurationError",{message:"There is a problem with the current software configuration."}),Object(v.createError)("NotUniqueError",{message:"One of the required fields should be unique"}));var b=Object(v.createError)("ObjectNotFoundError",{message:"Object not found",options:{showPath:!1,showLocations:!1}}),U=Object(v.createError)("ValidationError",{message:"The provided data is not valid."}),I=t(4);var O=function(e,n){if(n)return e;throw new I.AuthenticationError},q=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length;var D=t(5),P=t.n(D),B=(e,n=null)=>{const t={id:e.id,username:e.username},r=n,a=P.a.sign(t,r,{issuer:"Meccamico",subject:e.id,audience:"dashboard.meccamico.com",expiresIn:86400,algorithm:"HS512"});return new c({duration:86400,token:a,user:e._id}).save()};var T={add:(e,n)=>new d(n).save(),del:async(e,n)=>(console.log("DELETING",n),await d.deleteOne({_id:n},e=>{if(e)return!1}),!0),changePassword:async(e,n)=>{const t=await S.a.genSalt(10),r=await S.a.hash(n.password,t);if(await d.findByIdAndUpdate(n.id,{password:r}))return!0;throw new b},changeMyPassword:async(e,n,t)=>{const r=await S.a.genSalt(10),a=await S.a.hash(n.password,r);if(await d.findByIdAndUpdate(t.user.id,{password:a}))return!0;throw new b},updateMe:async(e,n,t)=>{const r={...n.input};r.ts_updated=Date.now();const a=await d.findByIdAndUpdate(t.user.id,{$set:r});if(a)return a;throw new b},update:async(e,n)=>{const t={...n.input};t.ts_updated=Date.now();const r=await d.findByIdAndUpdate(n.id,{$set:t});if(r)return r;throw new b},users:(e,n)=>d.find({}),user:e=>d.find({token:e}),signup:async(e,n,t)=>{const{errors:r,isValid:a}=function(e){let n={};return e.last_name=q(e.last_name)?"":e.last_name,e.username=q(e.username)?"":e.username,e.first_name=q(e.first_name)?"":e.first_name,e.email=q(e.email)?"":e.email,e.password=q(e.password)?"":e.password,E.a.isLength(e.first_name,{min:2,max:30})||(n.first_name="First name must be between 2 to 30 chars"),E.a.isEmpty(e.last_name)&&(n.last_name="Last name field is required"),E.a.isEmpty(e.first_name)&&(n.first_name="First name field is required"),E.a.isEmpty(e.username)&&(n.username="Username field is required"),E.a.isEmail(e.email)||(n.email="Email is invalid"),E.a.isEmpty(e.email)&&(n.email="Email is required"),E.a.isLength(e.password,{min:6,max:30})||(n.password="Password must have 6 chars"),E.a.isEmpty(e.password)&&(n.password="Password is required"),{errors:n,isValid:q(n)}}(n);if(!a)throw new U({data:r});if(await d.findOne({email:n.email}))throw new x({message:"email already exists",data:{email:"email already exists"}});{const e=new d(n),t=await S.a.genSalt(10),r=await S.a.hash(e.password,t);return e.ts_updated=Date.now(),e.password=r,e.save(),B(e,process.env.JWT_SECRET)}},login:async(e,n,t)=>{const{errors:r,isValid:a}=function(e){let n={};return e.email=q(e.email)?"":e.email,e.password=q(e.password)?"":e.password,E.a.isEmail(e.email)||(n.email="Email is invalid"),E.a.isEmpty(e.email)&&(n.email="Email is required"),E.a.isLength(e.password,{min:6,max:30})||(n.password="Password must have 6 chars"),E.a.isEmpty(e.password)&&(n.password="Password is required"),{errors:n,isValid:q(n)}}(n);if(!a)throw new U({data:r});const s=n.email,o=n.password,i=await d.findOne({email:s});if(i){if(await S.a.compare(o,i.password)){if(!process.env.JWT_SECRET)throw new U({message:"No jwt secret key"});return B(i,process.env.JWT_SECRET)}return new U({message:"Incorrect Password"})}throw new U({message:"user not found"})},me:async(e,n,t)=>{console.log("me function called, r, a ,c",e,n,t)}},j=[...[{Mutation:{addUser:(e,n,t)=>O(T.add(e,n.input),t.user),deleteUser:async(e,n,t)=>O(T.del(e,n.id),t.user),updateUser:async(e,n,t)=>O(T.update(e,n),t.user),changePassword:async(e,n,t)=>O(T.changePassword(e,n,t),t.user),changeMyPassword:async(e,n,t)=>O(T.changeMyPassword(e,n,t),t.user),updateMe:async(e,n,t)=>O(T.updateMe(e,n,t),t.user),login:async(e,n)=>T.login(e,n.input),signup:async(e,n,t)=>"true"===process.ENV.SIGNUP?T.signup(e,n.input,t):{token:"none",duration:"none"}},Query:{allUsers:(e,n,t)=>O(T.users(e,n),t.user),me:(e,n,t)=>t.user}}],...[{Mutation:{},Query:{getHello:(e,n,t)=>"mini hello"}}]],M=Object(w.makeExecutableSchema)({typeDefs:h,resolvers:j}),k=t(10),A=t(11),C=t.n(A),N=t(6),L=t.n(N),R=t(12);process.env.LOCAL&&t(14).config();const{DB_DEBUG:F,DB_HOST:H,DB_USER:V,DB_NAME:$,DB_PASSWORD:G,DEBUG:J,JWT_SECRET:W}=process.env;let Q;const z="true"===J,K="true"===F;if(z){o.a.connection.once("open",()=>{console.log("connected to database at ",o.a.connection.host+o.a.connection.port+"/"+o.a.connection.name)}),Q={endpoint:"/graphql",settings:{"editor.theme":"dark"}}}K&&o.a.set("debug",!0),o.a.connect(`mongodb+srv://${V}:${G}@${H}/${$}?retryWrites=true`,{useNewUrlParser:!0});const X=new k.ApolloServer({schema:M,playground:Q,introspection:z,tracing:!0,debug:z,formatError:void 0,formatResponse:void 0,cacheControl:{},extensions:[()=>new R.CacheControlExtension({defaultMaxAge:604800,calculateHttpHeaders:!0})],context:async({req:e})=>{let n={};const t=e.headers.authorization?e.headers.authorization.split(" ")[1]:"";if(t){const e=await c.findOne({token:t}).populate({path:"user",model:d});let r={expiresIn:e.duration,algorithm:["RS256"]},s="";try{const n=W||null;s=P.a.verify(e.token,n||a.a.readFileSync("./keys/jwt_public.pem"),r)}catch(e){throw new I.AuthenticationError("must authenticate")}n={user:e.user,token:e,authorized:s}}return n.user=e.user,n.client={ip:e.headers.origin,ua:e.headers["user-agent"]},n}}),Y=C()();Y.use(L.a.initialize()),function(e){e.use(f)}(L.a),Y.use("/",(e,n,t)=>{L.a.authenticate("jwt",{session:!1},(n,r,a)=>{r&&(e.user=r),t()})(e,n,t)}),X.applyMiddleware({app:Y}),Y.listen({port:4e3},()=>console.log(`🌋 Server ready at http://localhost:4000${X.graphqlPath}`))}]);