const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: "Invalid input. Please re-enter the values.",
                details: error.details[0].message,
            });
        }
        next();
    };
};
export default validateRequest;
//# sourceMappingURL=validateUser.js.map