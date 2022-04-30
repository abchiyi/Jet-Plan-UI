<template>
    <div>
        <h1>数据表格/Table</h1>
        <p>用于各种表格数据的展示</p>
        <hr />

        <doc-item name="Props:" title-is="h2">
            <li id="table-data">
                <p><high-lighter>data</high-lighter>: type: object, required</p>
                <p>
                    表格数据对象，读取属性
                    <high-lighter>list</high-lighter>
                    来渲染条目
                </p>
            </li>
        </doc-item>

        <h2>示例：</h2>
        <hr />
        <demo-box
            expand
            title="<j-table/>"
            code="
const data = {
    list: [
        {
            '姓名/age': '伍杰瑞',
            '年龄/age': '6',
            '电话/tel': '13761660735',
            '日期/date': '2068/04/05',
        },
        {
            '姓名/age': '杨洋辉',
            '年龄/age': '12',
            '电话/tel': '17025475035',
            '日期/date': '2059/08/16',
        },
        {
            '姓名/age': '蒋心怡',
            '年龄/age': '2',
            '电话/tel': '18787165659',
            '日期/date': '2052/04/15',
        },
        {
            '姓名/age': '欧阳尚',
            '年龄/age': '82',
            '电话/tel': '19880260356',
            '日期/date': '2049/02/04',
        },
        {
            '姓名/age': '殷欣汝',
            '年龄/age': '8',
            '电话/tel': '18964666999',
            '日期/date': '1059/10/30',
        },
        {
            '姓名/age': '安晓东',
            '年龄/age': '20',
            '电话/tel': '13560946008',
            '日期/date': '2077/06/30',
        },
        {
            '姓名/age': '凤昊轩',
            '年龄/age': '9',
            '电话/tel': '18739900056',
            '日期/date': '2048/12/12',
        },
    ],
};

<j-table :data='data'></j-table>

        "
        >
            <j-table :data="user"></j-table>
        </demo-box>
    </div>
</template>

<script>
export default {
    name: 'the-demo-table',
    data() {
        return {
            user: {
                list: [
                    {
                        '姓名/age': '伍杰瑞',
                        '年龄/age': '6',
                        '电话/tel': '13761660735',
                        '日期/date': '2068/04/05',
                    },
                    {
                        '姓名/age': '杨洋辉',
                        '年龄/age': '12',
                        '电话/tel': '17025475035',
                        '日期/date': '2059/08/16',
                    },
                    {
                        '姓名/age': '蒋心怡',
                        '年龄/age': '2',
                        '电话/tel': '18787165659',
                        '日期/date': '2052/04/15',
                    },
                    {
                        '姓名/age': '欧阳尚',
                        '年龄/age': '82',
                        '电话/tel': '19880260356',
                        '日期/date': '2049/02/04',
                    },
                    {
                        '姓名/age': '殷欣汝',
                        '年龄/age': '8',
                        '电话/tel': '18964666999',
                        '日期/date': '1059/10/30',
                    },
                    {
                        '姓名/age': '安晓东',
                        '年龄/age': '20',
                        '电话/tel': '13560946008',
                        '日期/date': '2077/06/30',
                    },
                    {
                        '姓名/age': '凤昊轩',
                        '年龄/age': '9',
                        '电话/tel': '18739900056',
                        '日期/date': '2048/12/12',
                    },
                ],
            },
        };
    },
};
</script>

<style>
</style>
