
5. Prepare documentation on middleware and its usage and store it in middleware.md.

# Middleware Guide

A comprehensive overview of middleware: what it is, how it works, and how to use it effectively in web development.

---

##  Table of Contents

- [What is Middleware?](#what-is-middleware)
- [How Middleware Works](#️how-middleware-works)
- [Common Use Cases](#common-use-cases)
- [Example in Express.js](#example-in-expressjs)
- [Order of Middleware Execution](#order-of-middleware-execution)
- [Types of Middleware](#types-of-middleware)
- [Error Handling Middleware](#error-handling-middleware)
- [Best Practices](#best-practices)
- [References](#references)

---

## What is Middleware?

Middleware is function that acts as an intermediary layer between an application’s request and response cycle. It processes requests before they reach the route handler or processes responses before they are sent back to the client.

In web development (especially in Node.js/Express, Django, Laravel, etc.), middleware functions can:
- Modify the request or response
- Terminate the request-response cycle
- Call the next middleware in the stack

---

##  How Middleware Works

Middleware functions typically take the following parameters:

```js
// (req, res, next) => {
//   // logic here
//   next();
// }
