/**
 * 代码来源
 * https://blog.csdn.net/liuxin00020/article/details/125082135
 */
/*
 * @Author: liuxin
 * @Date: 2022-06-09 17:21:17
 * @LastEditors: liuxin
 * @LastEditTime: 2022-06-13 11:46:39
 * @Description: 测试mock接口数据
 */
/**
 * @description:  测试
 * @Author: liuxin
 */
import Mock from "mockjs";

export default [
    {
        url: "/api/getUseList", // 这个url就是后端给的url，需要与apis里面调用的url保持一致
        type: "post",
        getData: (param) => {
            return Mock.mock({
                code: 200,
                message: "success",
                param: param,
                "data|1-5": [{
                    'date': "@date",
                    'name': param.userName + "@string(5)",
                    'age': "@integer(1, 100)",
                    'sex|1': ['男', '女', '未知'],
                }]
            })
        }
    }
];
