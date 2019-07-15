import React from 'react';

function testable(isLoading: boolean) {
  return function(target: { isLoading: boolean; }) {
    target.isLoading = isLoading;
  }
}

@testable(true)
class MyTestableClass {
  static isLoading: any;
}

@testable(false)
class MyClass {
  static isLoading: any;
}

export default function Page () {
  return (
    <div>
      <h1>Experimental Decorators</h1>
      <h2>装饰器（实验阶段）</h2>
      <div>
        <pre>
{`
function testable(isLoading: boolean) {
  // props.isLoading = true;
  return function(target: { isLoading: boolean; }) {
    target.isLoading = isLoading;
  }
}

@testable(true)
class MyTestableClass {
    static isLoading: any;
}
    
@testable(false)
class MyClass {
    static isLoading: any;
}

console.log(MyTestableClass.isLoading); // output: true
console.log(MyClass.isLoading); // output: false
`}
        </pre>
      </div>
    </div>
  )
}