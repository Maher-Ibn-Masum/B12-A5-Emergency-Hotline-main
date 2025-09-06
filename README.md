## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

- **getElementById("id")**
  - Finds **one element** by its unique `id` with a single element in return.

- **getElementsByClassName("class")**
  - Finds **all elements** with a specific class with a *HTMLCollection* (kind of like an array) in return.

- **querySelector("selector")**
  - Finds the **first element** that matches a CSS selector.

- **querySelectorAll("selector")**
  - Finds **all elements** that match a CSS selector with a *NodeList* in return. (can be looped with `forEach`).

---

## 2. How to create and insert a new element into the DOM?

1. Create an element: `document.createElement("div")`
2. Add text or attributes: `element.textContent = "Hello"`
3. Insert it into the page with `.appendChild()` or `.append()`

Example:
```js
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);
```

---

## 3. What is Event Bubbling?

When clicking on an element, the event first runs on that element, then moves upward to its parent, then to the parent’s parent, all the way until the `document`.

---

## 4. What is Event Delegation and Why is it Useful?

Instead of attaching event listeners to every child element, one listener on the parent is placed. 
When events bubble up, which child triggered it can be checked.

✅ Benefits:

Saves memory (fewer listeners)

Works for dynamically added elements

---

## 5. What is Event Delegation and Why is it Useful?

preventDefault() : Stops the browser’s default action.

stopPropagation() : Stops the event from bubbling up to parent elements.
