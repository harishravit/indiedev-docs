---
prev: text:"Home"
  link:"/"
---

# Introduction to TypeScript

## What is TypeScript?

- TypeScript is a compiler language built on top of the JavaScript,it helps to add static types for javascript code.

## Why Typescript exist?

Because JavaScript is a dynamically typed language, which means it automatically<br>
assigns a type based on the value.

- This flexibility is useful for small projects, but in large projects it can become a problem. Because variable types can change freely, it may lead to unexpected bugs and errors in future development.

* To solve this problem, TypeScript was introduced.
  <div class="custom-info">
    <div class="custom-info-title">
      💡 Important
    </div>

    <p>
      Don't worry about the code for now.
      Focus only on understanding the TypeScript foundation and theory.
    </p>
  </div>

##### JavaScript Example :

- Here, I declare a variable called `name` and assign the value `"hello world"`. Now the variable type is `string`.
- Later, if we change the value from `string` to `number`, JavaScript automatically changes the type.

```js:line-numbers {2,5} [index.js]
let name = "hello world";
console.log(typeof name); // string

name = 10;
console.log(typeof name); // number
```

Here, the same variable changes from string to number.

##### Typescript Example :

- Here, I try the same code using TypeScript. You can see TypeScript throws this error:

```ts:line-numbers [index.ts]
let name: string = "hello world";

name = 10;
Error: Type 'number' is not assignable to type 'string'.// [!code error];
/*
TypeScript : Hey, the variable "name" is already defined as a string.
ButYou are trying to assign a number.I will not allow.
because the type is fixed.*/
```

See the difference,TypeScript prevents changing the type after it is defined.
so this reson developers love typescript.

## Benefits of TypeScript

- Helps avoid bugs and errors during build time.
- Better auto-suggestions and IntelliSense.
- Improves development speed because TypeScript understands our codebase and data types.
- Makes large projects easier to manage and maintain.
  ::: tip Note
  JavaScript also gives suggestions, but TypeScript gives more accurate suggestions because it understands types.
  :::

## When to Use TypeScript?

- TypeScript is mostly used in JavaScript projects such as web development.
- It is commonly used with frameworks and libraries like:
  - React
  - Next.js
  - Node.js
  - TanStack
  - Express.js
  - Angular

## How Does TypeScript Work?

- Browsers can only understand JavaScript code directly.it can't understand TypeScript code. So what do we do?
- We use the TypeScript compiler to converts `.ts` files into normal `.js` files, and then the browser can understand and run that JavaScript code.

## What does the TypeScript compiler do?

- When we run the TypeScript compiler, it converts `.ts` files into normal JavaScript files.
- During compilation, all TypeScript-related syntax is removed
- because TypeScript only helps during development/build time, it does't help on runtime.

```ts:line-numbers {4} [index.ts]
const heyThere: string = "Can you easily understand this documentation?";

//Compiled JavaScript Code
const heyThere = "Can you easily understand this documentation?";
```

The `type (: string)` is removed after compilation because TypeScript only works during development.

##### File Types

`.ts file`

- TypeScript file used for writing typeScript code requires compilation.<br>

`.js file`

- JavaScript file Runs directly in browser no compilation needed.

### Summary

- TypeScript is a programming language built on top of JavaScript that adds static type checking. it allow quick auto suggestions to improve code typing faster,helps detect bugs and errors during development before runtime . browser can’t understand typescript code directly so we compile then converted into normal plain js After compilation, the browser can execute the generated JavaScript code.

> We learn more about in next upcoming session.any feedback or quires please leave it github discussion or issue pages. if this session more helpful and easily can understand put like to encourage to me . every like motivate to me upload more contents.stay connect with me get more contents.🙌thanks to you come to visit my site❤️.
