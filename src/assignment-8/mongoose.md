# Mongoose Documentation

## Table of Contents
1. [Introduction to MongoDB](#introduction-to-mongodb)
2. [What is an ORM?](#what-is-an-orm)
3. [What is Mongoose?](#what-is-mongoose)
4. [Mongoose in Practice](#mongoose-in-practice)
5. [RDBMS vs NoSQL Databases](#rdbms-vs-nosql-databases)

---

## Introduction to MongoDB

**MongoDB** is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in relational databases, MongoDB makes use of collections and documents.

- **Document**: A data record in BSON (binary JSON) format. Analogous to a row in relational databases.
- **Collection**: A group of MongoDB documents. Equivalent to a table in RDBMS.
- **Schema-less**: MongoDB allows for a flexible data model where each document can have a different structure.
- **Scalable**: MongoDB is designed for horizontal scalability using sharding.
- **Use Cases**: Real-time analytics, content management, Internet of Things (IoT), mobile apps, and more.

---

## What is an ORM?

**ORM (Object Relational Mapping)** is a programming technique for converting data between incompatible systems—in this case, between objects in code and relational databases.

- Allows developers to interact with the database using their programming language’s object-oriented paradigm.
- Simplifies CRUD (Create, Read, Update, Delete) operations.


Although MongoDB is not relational, a similar concept is used for mapping JavaScript objects to MongoDB documents. This leads to tools like **Mongoose**, which are technically ODMs (Object Document Mappers) rather than ORMs.

---

## What is Mongoose?

**Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and translates between objects in code and MongoDB documents.

### Key Features:
- Schema-based data modeling
- Built-in type casting and validation
- Middleware (pre/post hooks)
- Query building
- Model-based interactions

### Installation
```bash
npm install mongoose
