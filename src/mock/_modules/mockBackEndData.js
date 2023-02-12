/**
 * 代码参考
 * https://blog.csdn.net/liuxin00020/article/details/125082135
 */
import Mock from "mockjs";

export default [
    {
        url: "/api/getLogList",
        type: "post",
        getData: (param) => {
            return Mock.mock({
                code: 200,
                message: "success",
                param: param,
                "data|1-5": [{
                    'id': "1",
                    'date': "2023-02-12",
                    'title': "文章文章标题",
                    'abstract': "这是文章摘要"
                }]
            })
        }
    },

    {
        url: "/api/getBLogById",
        type: "post",
        getData: (param) => {
            return Mock.mock({
                code: 200,
                message: "success",
                param: param,
                "data": {
                    'id': "1",
                    'date': "这是时间",
                    'title': "文章文章标题",
                    'author': "yongninghe",
                    'abstract': "这是文章摘要",
                    'content': "这是正文\n、这是正文\n,这是正文\n"
                }
            })
        }
    },
    {
        url: "/api/getAbout",
        type: "post",
        getData: (param) => {
            return Mock.mock({
                code: 200,
                message: "success",
                param: param,
                "data": "一个后端程序员用于学习的vue3+elementplus+axios+mock的前端工程（后台取值）"
            })
        }
    }
];
