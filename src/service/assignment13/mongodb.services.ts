import Order from "../../models/orders"

// 1. Find total revenue generated (sum of totalAmount)
export const findTotalRevenue = async () => {
    const data = await Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalAmount" }
            }
        }
    ]);
    console.log(data);
    return data;
};

// 2. Find total number of orders by status (Pending, Shipped, Delivered)
export const findOrderCountByStatus = async () => {
    const data = await Order.aggregate([
        {
            $group: {
                _id: "$status",
                totalOrders: { $sum: 1 }
            }
        }
    ]);
    console.log(data);
    return data;
};

// 3. Find the top 3 customers who spent the most (sort by totalAmount)
export const findTop3Customers = async () => {
    const data = await Order.aggregate([
        {
            $group: {
                _id: "$customerName",
                totalSpent: { $sum: "$totalAmount" }
            }
        },
        {
            $sort: { totalSpent: -1 }
        },
        {
            $limit: 3
        }
    ]);
    console.log(data);
    return data;
};

// 4. Get the average order amount per customer
export const findAverageOrderAmount = async () => {
    const data = await Order.aggregate([
        {
            $group: {
                _id: null,
                averageOrderAmount: { $avg: "$totalAmount" }
            }
        }
    ]);
    console.log(data);
    return data;
};

// 5. Find products that were sold more than 10 times (total quantity)
export const findPopularProducts = async () => {
    const data = await Order.aggregate([
        { $unwind: "$items" },
        {
            $group: {
                _id: "$items.productName",
                totalQuantitySold: { $sum: "$items.quantity" }
            }
        },
        {
            $match: {
                totalQuantitySold: { $gt: 10 }
            }
        }
    ]);
    console.log(data);
    return data;
};

// 6. List monthly revenue (group by month-year) for the last 6 months
export const findLast6MonthsRevenue = async () => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const data = await Order.aggregate([
        {
            $match: {
                orderDate: { $gte: sixMonthsAgo }
            }
        },
        {
            $group: {
                _id: {
                    year: { $year: "$orderDate" },
                    month: { $month: "$orderDate" }
                },
                totalRevenue: { $sum: "$totalAmount" }
            }
        },
        {
            $sort: { "_id.year": -1, "_id.month": -1 }
        }
    ]);
    console.log(data);
    return data;
};

// 7. Find all customers who placed more than 2 orders
export const findFrequentCustomers = async () => {
    const data = await Order.aggregate([
        {
            $group: {
                _id: "$customerId",
                orderCount: { $sum: 1 }
            }
        },
        {
            $match: {
                orderCount: { $gt: 2 }
            }
        }
    ]);
    console.log(data);
    return data;
};

// 8. Calculate revenue only from Delivered orders
export const findDeliveredOrdersRevenue = async () => {
    const data = await Order.aggregate([
        {
            $match: { status: "Delivered" }
        },
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalAmount" }
            }
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1
            }
        }
    ]);
    console.log(data);
    return data;
};

// 9. Calculate total quantity and total revenue per product
export const findProductWiseSales = async () => {
    const data = await Order.aggregate([
        { $unwind: "$items" },
        {
            $group: {
                _id: "$items.productName",
                totalQuantity: { $sum: "$items.quantity" },
                totalRevenue: {
                    $sum: {
                        $multiply: ["$items.quantity", "$items.price"]
                    }
                }
            }
        }
    ]);
    console.log(data);
    return data;
};
