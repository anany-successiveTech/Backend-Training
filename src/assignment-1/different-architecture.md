3. Create a file named 'different-architecture.md' and elucidate the distinctions among various architectural types, outlining their unique characteristics and differences from one another.

# Software Architecture Overview

## 📘 Introduction

This document briefly describes different types of software architecture I've learned while diving into backend development. These patterns illustrate how applications are structured and scaled.

---

## 🧱 Monolithic Architecture

**Characteristics**

- Single, unified codebase
- All logic, UI, and database access in one place

**Pros**

- Simple to develop and deploy
- Easier debugging in small applications

**Cons**

- Harder to scale
- Tight coupling between components

---

## 🔗 Microservices Architecture

**Characteristics**

- Application split into independent services
- Each service handles a single function

**Pros**

- Scalable and flexible
- Services can use different technology stacks

**Cons**

- Complex communication between services
- Higher deployment and maintenance effort

---

## ☁️ Serverless Architecture

**Characteristics**

- Uses cloud functions (e.g., AWS Lambda)
- Runs in response to events

**Pros**

- No server management required
- Pay only for actual usage

**Cons**

- Cold starts can slow response times
- Limited execution time per function

---

## ⚙️ Event-Driven Architecture

**Characteristics**

- Services react to events or messages
- Common in real-time systems

**Pros**

- Decoupled and highly scalable
- Well-suited for asynchronous tasks

**Cons**

- Harder to track data flow across components
- Requires robust event management

---

## 🎯 Conclusion

Each architectural style offers distinct strengths. I’m learning when and why to use each based on application size, complexity, and performance needs.
