const dataCommon = {
    data: [{
            id: 0,
            author: '李明',
            title: '爸爸去哪儿',
            startime: '2021-5-10',
            endtime: '2021-6-10'
        },
        {
            id: 1,
            author: '李明1',
            title: '爸爸去哪儿',
            startime: '2021-5-10',
            endtime: '2021-6-10'
        },
        {
            id: 2,
            author: '李明2',
            title: '爸爸去哪儿',
            startime: '2021-5-10',
            endtime: '2021-6-10'
        },
        {
            id: 1,
            author: '李明3',
            title: '爸爸去哪儿',
            startime: '2021-5-10',
            endtime: '2021-6-10'
        },
        {
            id: 1,
            author: '李明4',
            title: '爸爸去哪儿',
            startime: '2021-5-10',
            endtime: '2021-6-10'
        }
    ],
    total: 5
}
const treedata = [{
    title: '一级 1',
    id: 1,
    children: [{
        id: 2,
        title: '二级 1-1',
        children: [{
            id: 3,
            title: '三级 1-1-1'
        }]
    }]
}, {
    title: '一级 2',
    id: 4,
    disabled: true,
    children: [{
        id: 5,
        title: '二级 2-1',
        children: [{
            title: '三级 2-1-1',
            disabled: true,
            id: 6
        }]
    }, {
        title: '二级 2-2',
        id: 7,
        children: [{
            title: '三级 2-2-1',
            id: 8,
        }]
    }]
}, {
    title: '一级 3',
    id: 9,
    children: [{
        title: '二级 3-1',
        id: 10,
        children: [{
            title: '三级 3-1-1',
            id: 11,
        }]
    }, {
        title: '二级 3-2',
        id: 12,
        children: [{
            title: '三级 3-2-1',
            id: 13,
        }]
    }]
}]
const optionsdatas = [{
    value: 'zhinan',
    label: '指南',
    id: 0,
    children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        id: 1,
        children: [{
            value: 'yizhi',
            label: '一致',
            id: 2
        }, {
            value: 'fankui',
            label: '反馈',
            id: 3
        }]
    }, {
        value: 'daohang',
        label: '导航',
        id: 4,
        children: [{
            value: 'cexiangdaohang',
            label: '侧向导航',
            id: 5,
        }, {
            value: 'dingbudaohang',
            label: '顶部导航',
            id: 6,
        }]
    }]
}, {
    value: 'zujian',
    label: '组件',
    id: 9,
    children: [{
        value: 'basic',
        label: 'Basic',
        id: 10,
        children: [{
            value: 'layout',
            label: 'Layout 布局',
            id: 11
        }, {
            value: 'color',
            label: 'Color 色彩',
            id: 12
        }]
    }, {
        value: 'form',
        label: 'Form',
        id: 13,
        children: [{
            value: 'radio',
            label: 'Radio 单选框',
            id: 14
        }, {
            value: 'checkbox',
            label: 'Checkbox 多选框',
            id: 15
        }]
    }, {
        value: 'data',
        label: 'Data',
        id: 16,
        children: [{
            value: 'table',
            label: 'Table 表格',
            id: 17
        }, {
            value: 'tag',
            label: 'Tag 标签',
            id: 18
        }]
    }, {
        value: 'others',
        label: 'Others',
        id: 19,
        children: [{
            value: 'dialog',
            label: 'Dialog 对话框',
            id: 20
        }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示',
            id: 21
        }]
    }]
}]
export default { dataCommon, treedata, optionsdatas };