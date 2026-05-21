---
prev: false
next: false
---

# Basic types in typescript

## What are Types in TypeScript?

Types tell TypeScript:

> “What kind of value should be stored inside a variable.”

Example:

```tsx [index.tsx]
let username: string = "Harish";
```

Here:

- `username` → variable name
- `string` → type
- `"Harish"` → value

Now TypeScript allows only string values.

```tsx [index.tsx]
username = "Kumar"; // ✅ Correct

username = 10; // ❌ Error
```

# Why Types are Important?

Types help developers:

- Find errors early
- Write safer code
- Improve auto suggestions in VS Code
- Make code easier to understand
- Reduce bugs

# Basic Types Available in TypeScript

- string
- number
- boolean
- null
- object
- array
- object

## 1. `string`

Used for text values.

```tsx [index.tsx]
let username: string = "Harish";
```

### Examples

```tsx [index.tsx]
let city: string = "Chennai";
let message: string = "Welcome";
```

---

## 2. `number`

Used for numeric values.

```tsx [index.tsx]
let age: number = 21;
```

### Examples

```tsx [index.tsx]
let price: number = 99;
let temperature: number = 36.5;
```

---

## 3. `boolean`

Used for true or false values.

```tsx
let isLoggedIn: boolean = true;
```

### Examples

```tsx [index.tsx]
let isAdmin: boolean = false;
let hasPermission: boolean = true;
```

---

## 4. `null`

Represents an intentionally empty value.

```tsx [index.tsx]
let data: null = null;
```

---

## 5. `undefined`

Represents a variable without a value.

```tsx [index.tsx]
let value: undefined = undefined;
```

---

## 6. `bigint`

Used for very large numbers.

```tsx [index.tsx]
let bigNumber: bigint = 12345678901234567890n;
```

> Add `n` at the end of bigint values.

---

## 7. `symbol`

Used for creating unique values.

```tsx [index.tsx]
let id: symbol = Symbol("id");
```

Mostly used in advanced development.

---

# How to Apply Types in Code?

The syntax:

```tsx [index.tsx]
let variableName: type = value;
```

## Example

```tsx [index.tsx]
let username: string = "Harish";
let age: number = 21;
let isStudent: boolean = true;
```

---

# Type Inference

TypeScript can automatically detect types.

```tsx [index.tsx]
let username = "Harish";
```

TypeScript understands this as:

```tsx [index.tsx]
let username: string = "Harish";
```

This feature is called:

# Type Inference

---

# Multiple Examples

## Example 1

```tsx [index.tsx]
let productName: string = "Keyboard";
let productPrice: number = 1200;
let isAvailable: boolean = true;
```

---

## Example 2

```tsx [index.tsx]
let language: string = "TypeScript";

console.log(language);
```

---

## Example 3

```tsx [index.tsx]
let score: number = 100;

score = 200; // ✅ Correct

score = "high"; // ❌ Error
```

---

# Common Beginner Mistake

```tsx [index.tsx]
let age: number = "21";
```

❌ Wrong because `"21"` is a string.

Correct way:

```tsx [index.tsx]
let age: number = 21;
```

---

# Summary Table

| Type        | Used For      | Example     |
| ----------- | ------------- | ----------- |
| `string`    | Text          | `"Hello"`   |
| `number`    | Numbers       | `10`        |
| `boolean`   | True/False    | `true`      |
| `null`      | Empty value   | `null`      |
| `undefined` | No value      | `undefined` |
| `bigint`    | Large numbers | `100n`      |
| `symbol`    | Unique values | `Symbol()`  |
