const customHeader = (headerName, headerValue) => {
    return (req, res, next) => {
        res.setHeader(headerName, headerValue);
        next();
    };
};
export default customHeader;
//# sourceMappingURL=customHeader.js.map