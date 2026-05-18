# ReactJS — Assignment 1

---

## 1. What is React?

React is a JavaScript Library developed by **Meta**, that is used to build fast and interactive User Interfaces (UI).

---

## 2. Who made React?

React was developed by **Jordan Walke**, a software engineer at **Meta (formerly Facebook)**. It was first deployed on Facebook's News Feed in **2011** and publicly open-sourced in **2013**.

---

## 3. What is Babel?

**Babel** is a JavaScript compiler/transpiler that converts modern JavaScript (ES6+) and **JSX** code into older JavaScript that all browsers can understand.

In React, Babel specifically converts JSX syntax into `React.createElement()` calls behind the scenes.

---

## 4. How does Babel convert HTML code in React into valid code?

Babel takes JSX (which looks like HTML written inside JavaScript) and transforms it into plain `React.createElement()` function calls that the browser can execute.

**Example:**


```jsx
// JSX — what you write
const el = <h1 className="title">Hello</h1>;

// After Babel compiles it
const el = React.createElement("h1", { className: "title" }, "Hello");
```

---

## 5. What is ReactDOM used for? Write an example.

`ReactDOM` is used to **render React elements into the actual browser DOM**. It acts as the bridge between React's Virtual DOM and the real DOM displayed in the browser.

**Example:**

```html
<!-- index.html -->
<div id="root"></div>

<script>
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(React.createElement("h1", null, "Hello World"));
</script>
```

---

## 6. What packages do you need to import to work with React?

Two core packages are required:

| Package | Purpose |
|---|---|
| `react` | Core library — handles components, JSX, state, hooks |
| `react-dom` | Renders React components to the browser DOM |

**Via CDN (no install needed):**

```html
<script src="https://unpkg.com/react/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
```

**Via npm:**

```bash
npm install react react-dom
```

---

## 7. How do you add React to a web application?

There are two common ways:

### Method 1 — CDN (Quick setup, no build tools)
Add React and ReactDOM script tags directly in your HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<h1>Hello from React!</h1>);
    </script>
  </body>
</html>
```

### Method 2 — npm + Vite (Production setup)

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

---

## 8. What is `React.createElement`?

`React.createElement` is a function that **creates a React element**, which is a lightweight description of what to render (a virtual DOM node).

JSX is just syntactic sugar — every JSX tag gets converted by Babel into a `React.createElement()` call under the hood.

```js
// These two are exactly the same
const el = <h1>Hello</h1>;
const el = React.createElement("h1", null, "Hello");
```

---

## 9. What are the three properties that `createElement` accepts?

```js
React.createElement(type, props, children)
```

| Parameter | Description | Example |
|---|---|---|
| `type` | HTML tag name or a React component | `"div"`, `"h1"`, `MyComponent` |
| `props` | Object of attributes/properties, or `null` | `{ className: "box", id: "main" }` |
| `children` | Content inside the element (text, other elements) | `"Hello"`, another `createElement` |

**Example:**

```js
React.createElement("h1", { className: "title" }, "Hello World");
//                   type        props                  children
```

---

## 10. What is the meaning of `render` and `root`?

### `root`
The **root** is the DOM node where your entire React app gets mounted. It is usually a `<div id="root">` in `index.html`. You select it using:

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

### `render`
`render` is the method called on the root that **paints the React element onto the page**. It takes your React component/element and displays it inside the root node.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// React App is now visible in the browser inside #root
```

**In simple terms:**
- `root` = *where* to display
- `render` = *what* to display

---

*Assignment 1 | ReactJS | Web Development II*