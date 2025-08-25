// --- 專案數據庫 ---
// 你只需要修改這個檔案中的內容！
// status: 'green' (正常), 'yellow' (警告), 'red' (危險), 'blue' (預設)

const projectsData = [
    {
        title: "地下街廁所/士林哺乳室",
        status: "blue", // 狀態顏色
        totalProgress: 100.0, // 總進度百分比
        progressChange: 0.0, // 上週進度變化
        weekRange: "08/23 - 08/29", // 本週日期範圍
        tasks: [
            { name: "M14全部付訖", dueDate: "09/15", progress: 100 },
            { name: "M13全部付訖", dueDate: "09/15", progress: 100 },
            { name: "西門驗收請款", dueDate: "09/22", progress: 100 },
            { name: "士林結算", dueDate: "09/30", progress: 100 }
        ]
    },
    {
        title: "中山市府門西門天花板",
        status: "yellow",
        totalProgress: 11.5,
        progressChange: -4.0,
        weekRange: "08/23 - 08/29",
        tasks: [
            { name: "大廳立鋼架安裝", dueDate: "09/10", progress: 50 },
            { name: "月台天花板安裝", dueDate: "09/15", progress: 70 },
            { name: "月台天花板安裝", dueDate: "09/15", progress: 10 },
            { name: "月台天花板安裝", dueDate: "09/30", progress: 50 }
        ]
    },
    {
        title: "GRC牆更新",
        status: "red",
        totalProgress: 95.2,
        progressChange: 9.7,
        weekRange: "08/23 - 08/29",
        tasks: [
            { name: "牆面組立", dueDate: "08/05", progress: 100 },
            { name: "100組立安裝", dueDate: "08/28", progress: 50 }
        ]
    },
    {
        title: "幸安等3站下方包板",
        status: "green",
        totalProgress: 40.0,
        progressChange: 0.1,
        weekRange: "08/23 - 08/29",
        tasks: [
            { name: "幸安拆料包板", dueDate: "08/06", progress: 20 },
            { name: "討論施作方式", dueDate: "08/22", progress: 100 },
            { name: "討論施作方式", dueDate: "09/12", progress: 40 }
        ]
    }
];
