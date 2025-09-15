export interface FieldRules {
  [fieldName: string]: "string" | "number";
}

export interface RouteValidationRules {
  [routePath: string]: FieldRules;
}
export const validationRules: RouteValidationRules = {
  "/register": {
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
  },
  "/check-user": {
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
  },
  "/check-query": {
    limit: "number",
    page: "number",
  },
};
