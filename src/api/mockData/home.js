export default {
    getTableData: () => {
        return {
            code: 200,
            data: {
                tableData: [
                    {
                        name:"oppo",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name:"vivo",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name:"苹果",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name:"小米",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name:"三星",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name:"魅族",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    }
                ]
            },
        }
    },
    getCountData: () => {
        return {
            code: 200,
            data: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "StarFilled",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "GoodFilled",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "StarFilled",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "GoodFilled",
                    color: "#5ab1ef",
                },
            ]
        }
    }
}