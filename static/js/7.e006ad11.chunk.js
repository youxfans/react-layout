(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{201:function(n,t,a){"use strict";function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return e})},332:function(n,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var e,i,o,s,c,l,r=a(201),u=a(1),d=a.n(u);function g(n){return function(t){t.isLoading=n}}var f=g(!0)((o=i=function n(){Object(r.a)(this,n)},i.isLoading=void 0,e=o))||e,L=g(!1)((l=c=function n(){Object(r.a)(this,n)},c.isLoading=void 0,s=l))||s;function p(){return d.a.createElement("div",null,d.a.createElement("h1",null,"Experimental Decorators"),d.a.createElement("h2",null,"\u88c5\u9970\u5668\uff08\u5b9e\u9a8c\u9636\u6bb5\uff09"),d.a.createElement("div",null,d.a.createElement("pre",null,"\nfunction testable(isLoading: boolean) {\n  // props.isLoading = true;\n  return function(target: { isLoading: boolean; }) {\n    target.isLoading = isLoading;\n  }\n}\n\n@testable(true)\nclass MyTestableClass {\n    static isLoading: any;\n}\n    \n@testable(false)\nclass MyClass {\n    static isLoading: any;\n}\n\nconsole.log(MyTestableClass.isLoading); // output: ".concat(f.isLoading,"\nconsole.log(MyClass.isLoading); // output: ").concat(L.isLoading,"\n"))))}}}]);
//# sourceMappingURL=7.e006ad11.chunk.js.map