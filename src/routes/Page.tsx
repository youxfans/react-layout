import React from 'react';

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

export default function Page () {
  console.log(MyTestableClass.isLoading);
  console.log(MyClass.isLoading);
  return (
    <div>
      <h1>Page</h1>
      <div>
        认识自己的不足
      </div>
    </div>
  )
}