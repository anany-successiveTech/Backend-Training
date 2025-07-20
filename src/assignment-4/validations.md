It accepts user information like:

- First Name
- Last Name
- Email
- Password

Then it does the following:

- Checks if the data is valid using **Joi**
- Rejects and returns an error if anything is wrong
- Returns success if everything is correct

---

## Why Validation is Important for Security

Validating user input is not just about checking correctness — it's also about **protecting your app** from harmful or unexpected data.

### Benefits of Input Validation:

- **Prevents bad data** from entering your system (e.g. missing fields, wrong formats)
- **Stops attacks** like:
  - SQL Injection
  - Cross-site scripting (XSS)
  - Script injections
- **Avoids crashes** caused by invalid or malformed input
- **Improves reliability** and consistency of your backend logic

> Think of validation as a security gate that filters out anything unwanted before it reaches your app.

---

## How Joi Helps

[Joi](https://joi.dev/) is a JavaScript library used to **define rules** for input data.

For example, in this app:

```js
firstName: Joi.string().min(3).max(30).required();
```
