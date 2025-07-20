# API Error Codes Guide

This document outlines the standard HTTP error codes and custom error handling conventions used in this project.

---

##  1xx – Informational Responses

| Code | Message              | Description |
|------|----------------------|-------------|
| 100  | Continue             | Initial part of the request received, continue with the request body. |
| 101  | Switching Protocols  | Switching to a new protocol, e.g., WebSocket. |

---

##  2xx – Success

| Code | Message      | Description |
|------|--------------|-------------|
| 200  | OK           | Request was successful. |
| 201  | Created      | Resource was successfully created. |
| 204  | No Content   | Request succeeded, no content to return. |

---

##  3xx – Redirection

| Code | Message           | Description |
|------|-------------------|-------------|
| 301  | Moved Permanently | Resource has moved to a new URL. |
| 302  | Found             | Temporary redirect. |
| 304  | Not Modified      | Resource hasn't changed since last request. |

---

##  4xx – Client Errors

| Code | Message                | Description | Example Use Case |
|------|------------------------|-------------|------------------|
| 400  | Bad Request            | Malformed or missing parameters. | Invalid JSON, missing fields |
| 401  | Unauthorized           | Missing or invalid credentials. | No token provided |
| 403  | Forbidden              | Authenticated but not allowed. | Insufficient permissions |
| 404  | Not Found              | Resource not found. | Wrong endpoint or ID |
| 405  | Method Not Allowed     | HTTP method not supported. | GET used instead of POST |
| 409  | Conflict               | Resource state conflict. | Duplicate email or username |
| 422  | Unprocessable Entity   | Valid input but logic fails. | Schema passed, business logic fails |
| 429  | Too Many Requests      | Rate limit exceeded. | Too many API calls |

---

##  5xx – Server Errors

| Code | Message                  | Description | Example Use Case |
|------|--------------------------|-------------|------------------|
| 500  | Internal Server Error    | Generic error. | Unhandled exception |
| 501  | Not Implemented          | Feature not implemented. | Placeholder route |
| 502  | Bad Gateway              | Invalid response from upstream. | Proxy error |
| 503  | Service Unavailable      | Server overloaded or under maintenance. | Server restart |
| 504  | Gateway Timeout          | Upstream request timed out. | Downstream delay |

---

##  Error Response Format

All errors follow this standard JSON structure:

```json
{
  "error": "Validation failed. Email is required.",
  "code": 400
}
