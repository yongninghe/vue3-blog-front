/**
 * 代码参考
 * https://blog.csdn.net/liuxin00020/article/details/125082135
 */
import Mock from "mockjs";

const item1 = {
    'id': "1",
    'date': "2023-02-12",
    'title': "小朋友们要开学啦",
    'author': "张三",
    'abstract': "要准备开学了",
    'content': "啦啦啦，啦啦啦，小朋友们终于要开学啦"
};
const item2 = {
    'id': "2",
    'date': "2023-02-13",
    'title': "春暖花开",
    'author': "李四",
    'abstract': "油菜花开了",
    'content': "油菜花开了，等天气好一些，应该去看油菜花啦"
};
const item3 = {
    'id': "3",
    'date': "2023-02-14",
    'title': "一年之计在于春",
    'author': "王五",
    'abstract': "一生之计在于勤",
    'content': "一年之计在于春，一生之计在于勤。我们要好好学习，天天向上"
};

const items = [item1, item2, item3];
export default [{
    url: "/api/getLogList", type: "post", getData: (param) => {
        return Mock.mock({
            code: 200, message: "success", param: param, "data": items
        })
    }
}, {
    url: "/api/blog", type: "post", getData: (param) => {
        let id = param.id
        // 只模拟了三条数据
        if (id && id > 0 && id <= 3) {
            id -= 1;
        } else {
            id = 0;
        }
        return Mock.mock({
            code: 200, message: "success", param: param, "data": items[id]
        })
    }
}, {
    url: "/api/getAbout", type: "post", getData: (param) => {
        return Mock.mock({
            code: 200, message: "success", param: param, "data": "一个后端程序员用于学习的vue3+elementplus+axios+mock的前端工程"
        })
    }
}];
