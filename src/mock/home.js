import Mock from "mockjs";

export default {
    getHomeLocalData: () => {
        let list = [];
        for (let i = 0; i < 7; i++) {
            list.push(
                Mock.mock({
                    图书1: Mock.Random.float(100, 8000, 0, 0),
                    图书2: Mock.Random.float(100, 8000, 0, 0),
                    图书3: Mock.Random.float(100, 8000, 0, 0),
                    图书4: Mock.Random.float(100, 8000, 0, 0),
                    图书5: Mock.Random.float(100, 8000, 0, 0),
                    图书6: Mock.Random.float(100, 8000, 0, 0),
                    图书7: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            // 表格数据
            tableData: [{
                    name: "图书1",
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    monthBuy: Mock.Random.float(300, 400, 0, 2),
                    totalBuy: Mock.Random.float(10000, 20000, 0, 2)
                },
                {
                    name: "图书2",
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    monthBuy: Mock.Random.float(300, 400, 0, 2),
                    totalBuy: Mock.Random.float(10000, 20000, 0, 2)
                },
                {
                    name: "图书3",
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    monthBuy: Mock.Random.float(300, 400, 0, 2),
                    totalBuy: Mock.Random.float(10000, 20000, 0, 2)
                },
                {
                    name: "图书4",
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    monthBuy: Mock.Random.float(300, 400, 0, 2),
                    totalBuy: Mock.Random.float(10000, 20000, 0, 2)
                },
                {
                    name: "图书5",
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    monthBuy: Mock.Random.float(300, 400, 0, 2),
                    totalBuy: Mock.Random.float(10000, 20000, 0, 2)
                },
            ],
            //  饼图
            countData: [{
                    name: "图书1",
                    value: '299',
                },
                {
                    name: "图书2",
                    value: '1299',
                },
                {
                    name: "图书3",
                    value: '2999',
                },
                {
                    name: "图书4",
                    value: '2299',
                },
                {
                    name: "图书5",
                    value: '2992',
                },
                {
                    name: "图书6",
                    value: '2991',
                },
                {
                    name: "图书7",
                    value: '1299',
                },
            ],
            // 柱状图
            userData: [{
                    date: "周一",
                    new: 5,
                    active: 200,
                },
                {
                    date: "周二",
                    new: 5,
                    active: 200,
                },
                {
                    date: "周三",
                    new: 5,
                    active: 200,
                },
                {
                    date: "周四",
                    new: 5,
                    active: 200,
                },
                {
                    date: "周五",
                    new: 5,
                    active: 200,
                },
                {
                    date: "周六",
                    new: 5,
                    active: 200,
                },
                {
                    date: "周七",
                    new: 5,
                    active: 200,
                },
            ],
            // 折线图
            orderData: {
                date: ["20210101", "20210101", "20210101", "20210101", "20210101", "20210101", "20210101"],
                data: list
            },
        }
    }
}