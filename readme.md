1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-getElementById(): Returns a single element with the specified ID

getElementsByClassName(): Returns a live HTMLCollection of elements with the specified class name

querySelector(): Returns the first element that matches a CSS selector

querySelectorAll(): Returns a static NodeList of all elements matching a CSS selector

2. How do you create and insert a new element into the DOM?
- First, you create the element using document.createElement(). Then, you modify it by adding content, attributes, or styles. Finally, you insert it into the DOM using methods like appendChild(), insertBefore(), or insertAdjacentElement() to place it in the desired location within the document tree.


3. What is Event Bubbling and how does it work?
-Event bubbling is when an event triggers on the target element first, then bubbles up through its parent elements in the DOM hierarchy.

4. What is Event Delegation in JavaScript? Why is it useful?
-Event delegation attaches a single event listener to a parent element to handle events from multiple child elements. It's useful because it reduces memory usage, and works dynamically added elements


5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault(): Prevents the browser's default behavior 
stopPropagation(): Stops the event from bubbling up the DOM tree, preventing parent handlers from executing