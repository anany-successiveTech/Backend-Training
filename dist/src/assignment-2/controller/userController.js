import mockDataList from "../mockData.js";
export const getUserData = (req, res) => {
    res.status(200).json(mockDataList);
    console.log(mockDataList);
};
//# sourceMappingURL=userController.js.map