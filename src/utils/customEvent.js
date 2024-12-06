import {navigateTo} from "@/utils/navigateUtil";
const btnValueMap = {
    "职工": "职工",
    "外包": "外包",
    "试用": "试用期",
    "实习": "实习生",
    "其他": "其他"
}

const btnList = [
    {
        id: '1728896302000_48545',
        value: '全部',
        eventName: 'all',
        refreshValue: ''
    },
    {
        id: '1728896574000_98819',
        value: '公司领导',
        eventName: 'gsld',
        refreshValue: '2',
    },
    {
        id: '1728896592000_95116',
        value: '再担保业务部"',
        eventName: 'zdbywb',
        refreshValue: '3'
    },
    {
        id: '1728896686000_67403',
        value: '工程担保业务部',
        eventName: 'gcdbywb',
        refreshValue: '5'
    },
    {
        id: '1728896683000_91544',
        value: '科创业务部',
        eventName: 'kjywb',
        refreshValue: '4'
    },
    {
        id: '1728896674000_10696',
        value: '创投业务部',
        eventName: 'ctywb',
        refreshValue: '6'
    },
    {
        id: '1728896696000_91075',
        value: '风险管理部',
        eventName: 'fxglb',
        refreshValue: '7'
    },
    {
        id: '1728896677000_95653',
        value: '法律合规部',
        eventName: 'flhgb',
        refreshValue: '8'
    },
    {
        id: '1728896776000_97455',
        value: '金融科技部',
        eventName: 'jrkjb',
        refreshValue: '15'
    },
    {
        id: '1728896770000_46594',
        value: '研究发展部',
        eventName: 'yjfzb',
        refreshValue: '9'
    },
    {
        id: '1728896768000_31752',
        value: '综合管理部',
        eventName: 'zhglb',
        refreshValue: '10'
    },
    {
        id: '1728896765000_61352',
        value: '人力资源部',
        eventName: 'rlzyb',
        refreshValue: '11'
    },
    {
        id: '1728896773000_68621',
        value: '财务管理部',
        eventName: 'cwglb',
        refreshValue: '12'
    },
    {
        id: '1728896837000_98923',
        value: '党群工作部',
        eventName: 'dqgzb',
        refreshValue: '13'
    },
    {
        id: '1728896834000_99976',
        value: '纪检审计部',
        eventName: 'jjsjb',
        refreshValue: '14'
    }
]
const columnList = [
    {
        id: '1728897612000_64748',
        value: '全部',
        eventName: 'qb',
        ids: ['1728897612000_22915', '1728897612000_99953']
    },
    {
        id: '1728897612000_27351',
        value: '职工',
        eventName: 'zg',
        ids: ['1728897612000_20231', '1728897612000_88434']
    },
    {
        id: '1728897612000_93318',
        value: '试用',
        eventName: 'sy',
        ids: ['1728897612000_98096', '1728897612000_38947']
    },
    {
        id: '1728897612000_739',
        value: '实习',
        eventName: 'sx',
        ids: ['1728897612000_43634', '1728897612000_96067']
    },
    {
        id: '1728897612000_86388',
        value: '外包',
        eventName: 'wb',
        ids: ['1728897612000_98201', '1728897612000_24459']
    },
    {
        id: '1728897612000_47420',
        value: '其他',
        eventName: 'qt',
        ids: ['1728897612000_15916', '1728897612000_99725']
    },
    {
        id: '1728897612000_11547',
        value: '修改信息审核',
        eventName: 'xgxxsh',
        ids: ['1728897612000_43832']
    }
]
const tabEvent = [
    'all', 'gsld',
    'zdbywb', 'gcdbywb',
    'kjywb', 'ctywb',
    'fxglb', 'flhgb',
    'jrkjb', 'yjfzb',
    'zhglb', 'rlzyb',
    'cwglb', 'dqgzb',
    'jjsjb'
]
const headEvent = [
    'qb', 'zg',
    'sy', 'sx',
    'wb', 'qt'
]
const lines = ['sortEle_1729075782000_79786','sortEle_1728977638000_28214']
// 筛选器id
const filtrateId = '1728897676000_12319'
// 水平容器id
const rowViewId = '1728897612000_73327'
// 刷新动态数据容器id
const refreshId = '1728977753000_37350'
// 表单列表id
const formTableViewId = '1728974876000_46108'
// 动态数据容器整体 垂直容器id
const dynamicViewId = '1728977625000_32760'
// 操作按钮id
const operateBtnId = 'sortEle_1728977652000_60149'
const opIds = ['sortEle_1728977652000_85273','sortEle_1728977652000_64333']
const globalColor = 'rgba(22,93,255,1)'

// 信用公司
const xygs = {
    btnList: [
        {
            id: '1728896302000_48545',
            value: '全部',
            eventName: 'all_xygs',
            refreshValue: ''
        },
        {
            id: '1728896574000_98819',
            value: '公司领导',
            eventName: 'gsld_xygs',
            refreshValue: '22'
        },
        {
            id: '1728896592000_95116',
            value: '业务发展部',
            eventName: 'ywfzb_xygs',
            refreshValue: '23'
        },
        {
            id: '1728896686000_67403',
            value: '产品管理部',
            eventName: 'cpglb_xygs',
            refreshValue: '24'
        },
        {
            id: '1728896683000_91544',
            value: '系统开发部',
            eventName: 'xtkfb_xygs',
            refreshValue: '25'
        },
        {
            id: '1728896674000_10696',
            value: '系统运维部',
            eventName: 'xtywb_xygs',
            refreshValue: '26'
        },
        {
            id: '1728896696000_91075',
            value: '行政人事部',
            eventName: 'xzzrb_xygs',
            refreshValue: '40'
        },
        {
            id: '1728896677000_95653',
            value: '财务管理部',
            eventName: 'cwglb_xygs',
            refreshValue: '41'
        }
    ],
    columnList: [
        {
            id: '1728897612000_64748',
            value: '全部',
            eventName: 'qb_xygs',
            ids: ['1728897612000_22915', '1728897612000_99953']
        },
        {
            id: '1728897612000_27351',
            value: '职工',
            eventName: 'zg_xygs',
            ids: ['1728897612000_20231', '1728897612000_88434']
        },
        {
            id: '1728897612000_93318',
            value: '试用',
            eventName: 'sy_xygs',
            ids: ['1728897612000_98096', '1728897612000_38947']
        },
        {
            id: '1728897612000_739',
            value: '实习',
            eventName: 'sx_xygs',
            ids: ['1728897612000_43634', '1728897612000_96067']
        },
        {
            id: '1728897612000_86388',
            value: '外包',
            eventName: 'wb_xygs',
            ids: ['1728897612000_98201', '1728897612000_24459']
        },
        {
            id: '1728897612000_47420',
            value: '其他',
            eventName: 'qt_xygs',
            ids: ['1728897612000_15916', '1728897612000_99725']
        },
        {
            id: '1728897612000_11547',
            value: '修改信息审核',
            eventName: 'xgxxsh_xygs',
            ids: ['1728897612000_43832']
        }
    ],
    tabEvent: [
        'all_xygs', 'gsld_xygs', 'ywfzb_xygs', 'cpglb_xygs', 'xtkfb_xygs', 'xtywb_xygs', 'xzzrb_xygs', 'cwglb_xygs'
    ],
    headEvent: [
        'qb_xygs', 'zg_xygs', 'sy_xygs', 'sx_xygs', 'wb_xygs', 'qt_xygs'
    ],
    // 筛选器id
    filtrateId: '1728897676000_12319',
    // 水平容器id
    rowViewId: '1728897612000_73327',
    // 刷新动态数据容器id
    refreshId: '1731058142537_62520',
    // 表单列表id
    formTableViewId: '1728974876000_46108',
    // 动态数据容器整体 垂直容器id
    dynamicViewId: '1728977625000_32760',
    operateBtnId: 'sortEle_1728977652000_60149',
    lines: ['sortEle_1729075782000_79786','sortEle_1728977638000_28214'],
    opIds: ['sortEle_1728977652000_85273','sortEle_1728977652000_64333']
}
// 国华公司
const gh = {
    btnList: [
        {
            id: '1728896302000_48545',
            value: '全部',
            eventName: 'all_gh',
            refreshValue: ''
        },
        {
            id: '1728896574000_98819',
            value: '公司领导',
            eventName: 'gsld_gh',
            refreshValue: '31'
        },
        {
            id: '1728896592000_95116',
            value: '业务一部',
            eventName: 'ywyb_gh',
            refreshValue: '32'
        },
        {
            id: '1728896686000_67403',
            value: '业务二部',
            eventName: 'yweb_gh',
            refreshValue: '33'
        },
        {
            id: '1728896683000_91544',
            value: '业务三部',
            eventName: 'ywsb_gh',
            refreshValue: '34'
        },
        {
            id: '1728896674000_10696',
            value: '业务四部',
            eventName: 'ywsib_gh',
            refreshValue: '35'
        },
        {
            id: '1728896696000_91075',
            value: '业务五部',
            eventName: 'ywwb_gh',
            refreshValue: '42'
        },
        {
            id: '1728896677000_95653',
            value: '业务六部',
            eventName: 'ywlb_gh',
            refreshValue: '43'
        },
        {
            id: '1728896776000_97455',
            value: '风险管理部',
            eventName: 'fxglb_gh',
            refreshValue: '36'
        },
        {
            id: '1728896770000_46594',
            value: '法律合规部',
            eventName: 'flhgb_gh',
            refreshValue: '37'
        },
        {
            id: '1728896768000_31752',
            value: '行政人事部',
            eventName: 'xzhrsb_gh',
            refreshValue: '38'
        },
        {
            id: '1728896765000_61352',
            value: '财务部',
            eventName: 'cwb_gh',
            refreshValue: '39'
        }
    ],
    columnList: [
        {
            id: '1728897612000_64748',
            value: '全部',
            eventName: 'qb_gh',
            ids: ['1728897612000_22915', '1728897612000_99953']
        },
        {
            id: '1728897612000_27351',
            value: '职工',
            eventName: 'zg_gh',
            ids: ['1728897612000_20231', '1728897612000_88434']
        },
        {
            id: '1728897612000_93318',
            value: '试用',
            eventName: 'sy_gh',
            ids: ['1728897612000_98096', '1728897612000_38947']
        },
        {
            id: '1728897612000_739',
            value: '实习',
            eventName: 'sx_gh',
            ids: ['1728897612000_43634', '1728897612000_96067']
        },
        {
            id: '1728897612000_86388',
            value: '外包',
            eventName: 'wb_gh',
            ids: ['1728897612000_98201', '1728897612000_24459']
        },
        {
            id: '1728897612000_47420',
            value: '其他',
            eventName: 'qt_gh',
            ids: ['1728897612000_15916', '1728897612000_99725']
        },
        {
            id: '1728897612000_11547',
            value: '修改信息审核',
            eventName: 'xgxxsh_gh',
            ids: ['1728897612000_43832']
        }
    ],
    tabEvent: [
        'all_gh', 'gsld_gh', 'ywyb_gh', 'yweb_gh', 'ywsb_gh', 'ywsib_gh', 'ywwb_gh', 'ywlb_gh', 'fxglb_gh',
        'flhgb_gh', 'xzhrsb_gh', 'cwb_gh'
    ],
    headEvent: [
        'qb_gh', 'zg_gh', 'sy_gh', 'sx_gh', 'wb_gh', 'qt_gh'
    ],
    // 筛选器id
    filtrateId: '1728897676000_12319',
    // 水平容器id
    rowViewId: '1728897612000_73327',
    // 刷新动态数据容器id
    refreshId: '1731058116068_73253',
    // 表单列表id
    formTableViewId: '1728974876000_46108',
    // 动态数据容器整体 垂直容器id
    dynamicViewId: '1728977625000_32760',
    operateBtnId: 'sortEle_1728977652000_60149',
    lines: ['sortEle_1729075782000_79786','sortEle_1728977638000_28214'],
    opIds: ['sortEle_1728977652000_85273','sortEle_1728977652000_64333']
}



export function customerFunc(context, funcName, EventService, _commonStore) {
    if (funcName === 'addUser') {
        let active = _commonStore.customerEventContainer
        if (active) {
            if (active.deptId) {
                navigateTo('XinZengYuanGong', {p_deptId: active.deptId})
            } else {
                navigateTo('XinZengYuanGong', {})
            }
        }
    } else if(funcName === 'customExport') {
        let active = _commonStore.customerEventContainer
        if(active && active.hasOwnProperty('deptId')) {
            let ele = {
                "event": {
                    "type": 65,
                    "formObj": {
                        "dbName": "vs3b4c151p04",
                        "systemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                        "systemName": "再担保OA管理系统",
                        "formGrounpId": "b49e1cca-0a87-4632-8165-421cf9c65258",
                        "formId": "803b2b0e-842c-4dd9-99bb-77e7645c6022",
                        "formName": "员工档案1_0",
                        "formType": "form",
                        "authId": "8f34f38b-5d70-40cb-a8ac-38ba1866b46e",
                        "formDataType": "default",
                        "detailTableRuleId": "origin",
                        "formProp": [
                            {
                                "name": "主键",
                                "key": "_id",
                                "model": "_id",
                                "type": "_id",
                                "read": true
                            },
                            {
                                "type": "input",
                                "name": "员工ID",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713336410000_72858",
                                    "inputkey": ""
                                },
                                "key": "1713336410000_72858",
                                "model": "input_1713336410000_72858",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and",
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "魔点门禁对应人员ID",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1720492365000_39225",
                                    "inputkey": ""
                                },
                                "key": "1720492365000_39225",
                                "model": "input_1720492365000_39225",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "deparadio",
                                "name": "部门",
                                "icon": "formic_bmdanxuan",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "remote": "0",
                                    "sinmulti": false,
                                    "statswe": 0,
                                    "dataType": "string",
                                    "required": true,
                                    "remoteFunc": "func_1713405599000_3421",
                                    "inputkey": "",
                                    "editableLink": true
                                },
                                "key": "1713405599000_3421",
                                "model": "deparadio_1713405599000_3421",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "dataRange": "",
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "any", "value": "等于任何一个" }
                                },
                                "queryConditon": [
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "部门类型",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        {
                                            "value": "两级班子成员",
                                            "key": "两级班子成员",
                                            "textColor": "#e27e6e"
                                        },
                                        { "value": "前台部门", "key": "前台部门" },
                                        { "value": "中台部门", "key": "中台部门" },
                                        { "value": "后台部门", "key": "后台部门" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1721288176000_81973",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1721288176000_81973",
                                "model": "select_1721288176000_81973",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "层级",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": {
                                        "value": "中级管理层",
                                        "key": "中级管理层",
                                        "textColor": "#e27e6e"
                                    },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "高层管理岗", "key": "高层管理岗" },
                                        { "value": "中层管理岗", "key": "中层管理岗" },
                                        { "value": "技术序列", "key": "技术序列" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337159000_85091",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null
                                },
                                "key": "1713337159000_85091",
                                "model": "select_1713337159000_85091",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "职级",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "下拉框1", "key": "下拉框1" },
                                        { "value": "下拉框2", "key": "下拉框2" },
                                        { "value": "下拉框3", "key": "下拉框3" }
                                    ],
                                    "remote": "2",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1716723628000_76522",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "sort": {},
                                    "rel": "and",
                                    "globalFilter": true,
                                    "logicFilter": false,
                                    "screen": [
                                        {
                                            "targetModel": "deparadio_1716454449000_32187",
                                            "tatgetType": "deparadio",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "deparadio_1713405599000_3421",
                                            "rule": "sourcetab",
                                            "sourceName": ""
                                        },
                                        {
                                            "targetModel": "select_1713335224000_64033",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1713337159000_85091",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        }
                                    ],
                                    "linkage": {
                                        "linkedSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "linkedForm": {
                                            "fId": "7a16032a-322c-440d-925b-dd0856fea76e",
                                            "fName": "职级管理1.0",
                                            "fSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                            "fSystemName": "再担保OA管理系统",
                                            "fUserName": "vs3b4c151p04"
                                        },
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {
                                            "icon": "formic_danhangwenben",
                                            "key": "1716451374000_5165",
                                            "model": "input_1716451374000_5165",
                                            "name": "职级",
                                            "type": "input"
                                        }
                                    },
                                    "inputvalue": null
                                },
                                "key": "1716723628000_76522",
                                "model": "select_1716723628000_76522",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "职位",
                                "icon": "formic_fuxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": [],
                                    "showLabel": false,
                                    "options": [
                                        { "value": "选项1", "key": "选项1" },
                                        { "value": "选项2", "key": "选项2" },
                                        { "value": "选项3", "key": "选项3" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "2",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337069000_94692",
                                    "dataType": "Array",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "7a16032a-322c-440d-925b-dd0856fea76e",
                                        "input_1713335233000_73409",
                                        "vs3b4c151p04"
                                    ],
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "radio",
                                                "field": "radio_1713335238000_4862",
                                                "method": "equal",
                                                "value": "启用"
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "linkOptions": [],
                                    "WidgetMap": false,
                                    "inputkey": "",
                                    "openTransfer": false,
                                    "openSelect": true,
                                    "inputvalue": null,
                                    "sort": { "input_1713335269000_8766": 1 },
                                    "sortModel": "",
                                    "sortType": 1,
                                    "describe": "",
                                    "globalFilter": true,
                                    "logicFilter": false,
                                    "screen": [
                                        {
                                            "targetModel": "deparadio_1716722657000_97251",
                                            "tatgetType": "deparadio",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "deparadio_1713405599000_3421",
                                            "rule": "sourcetab",
                                            "sourceName": ""
                                        },
                                        {
                                            "targetModel": "select_1716722657000_20259",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1713337159000_85091",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        },
                                        {
                                            "targetModel": "select_1716722709000_86470",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1716723628000_76522",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        }
                                    ],
                                    "linkage": {
                                        "linkedSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "linkedForm": {
                                            "fId": "d2ef45f0-1b9c-4493-9999-c66fd3ff3f89",
                                            "fName": "职位管理1.0",
                                            "fSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                            "fSystemName": "再担保OA管理系统",
                                            "fUserName": "vs3b4c151p04"
                                        },
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {
                                            "icon": "formic_danhangwenben",
                                            "key": "1716722657000_6174",
                                            "model": "input_1716722657000_6174",
                                            "name": "职位",
                                            "type": "input"
                                        }
                                    },
                                    "rel": "and"
                                },
                                "key": "1713337069000_94692",
                                "model": "checkbox_1713337069000_94692",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "党内职务",
                                "icon": "formic_fuxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": [],
                                    "showLabel": false,
                                    "options": [
                                        { "value": "选项1", "key": "选项1" },
                                        { "value": "选项2", "key": "选项2" },
                                        { "value": "选项3", "key": "选项3" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1718712223000_75916",
                                    "dataType": "Array",
                                    "inputkey": "",
                                    "sort": { "input_1718712011000_16938": 1 },
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "46b981b9-58c0-48eb-8bab-e0168e0a4aa1",
                                        "input_1718711923000_13084"
                                    ],
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "radio",
                                                "field": "radio_1718711931000_5964",
                                                "method": "include_any",
                                                "value": ["启用"]
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "sortModel": "input_1718712011000_16938",
                                    "sortType": 1,
                                    "openSelect": true
                                },
                                "key": "1718712223000_75916",
                                "model": "checkbox_1718712223000_75916",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "人员类型",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "职工", "key": "职工", "WidgetMapping": [] },
                                        { "value": "外包", "key": "外包" },
                                        { "value": "试用期", "key": "试用期", "textColor": "#818eec" },
                                        { "value": "实习生", "key": "实习生" },
                                        {
                                            "value": "其他",
                                            "key": "其他",
                                            "textColor": "#818eec",
                                            "WidgetMapping": ["input_1714112248000_7992"]
                                        }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337276000_66931",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null,
                                    "WidgetMap": true
                                },
                                "key": "1713337276000_66931",
                                "model": "select_1713337276000_66931",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "其它人员类型",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1714112248000_7992",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1714112248000_7992",
                                "model": "input_1714112248000_7992",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "外派情况",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": { "value": "未外派", "key": "未外派" },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "未外派", "key": "未外派" },
                                        { "value": "外派", "key": "外派" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713343769000_97275",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null
                                },
                                "key": "1713343769000_97275",
                                "model": "select_1713343769000_97275",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "姓名",
                                "icon": "formic_fullname",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": true,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713443242000_93791",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713443242000_93791",
                                "model": "input_1713443242000_93791",
                                "rules": [{ "required": true, "message": "请填写" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "like", "value": "包含" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "userradio",
                                "name": "员工",
                                "icon": "formic_cydanxuan",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "remote": "0",
                                    "sinmulti": false,
                                    "statswe": 2,
                                    "dataType": "string",
                                    "required": false,
                                    "remoteFunc": "func_1710295237000_55445",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1710295237000_55445",
                                "model": "userradio_1710295237000_55445",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "any", "value": "等于任何一个" }
                                },
                                "fixed": true,
                                "queryConditon": [
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "人员类别",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "下拉框1", "key": "下拉框1" },
                                        { "value": "下拉框2", "key": "下拉框2" },
                                        { "value": "下拉框3", "key": "下拉框3" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1721289627000_18944",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "d414843d-1cbe-46db-be33-8adeaa7a0615",
                                        "input_1721207280000_90534"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "sort": { "input_1721207337000_83958": 1 },
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1721207259000_38625",
                                                "method": "include_any",
                                                "value": ["人员类别"]
                                            },
                                            {
                                                "type": "radio",
                                                "field": "radio_1721207289000_40731",
                                                "method": "include_any",
                                                "value": ["正常"]
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "sortModel": "input_1721207337000_83958",
                                    "sortType": 1
                                },
                                "key": "1721289627000_18944",
                                "model": "select_1721289627000_18944",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "人员异动情况",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "date",
                                                "name": "异动时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713344379000_61853",
                                                    "inputvalue": null,
                                                    "inputkey": "",
                                                    "remote": "0"
                                                },
                                                "key": "1713344379000_61853",
                                                "model": "date_1713344379000_61853",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "异动前岗位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1716456217000_19888",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1716456217000_19888",
                                                "model": "input_1716456217000_19888",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "select",
                                                "name": "异动方式",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        { "value": "调动", "key": "调动" },
                                                        { "value": "转岗", "key": "转岗" },
                                                        { "value": "晋升", "key": "晋升" },
                                                        {
                                                            "value": "入职",
                                                            "key": "入职",
                                                            "textColor": "#e27e6e"
                                                        },
                                                        {
                                                            "value": "转正",
                                                            "key": "转正",
                                                            "textColor": "#818eec"
                                                        },
                                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713344406000_75298",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713344406000_75298",
                                                "model": "select_1713344406000_75298",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "input",
                                                "name": "异动后岗位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1716456219000_10827",
                                                    "inputkey": "",
                                                    "inputvalue": null,
                                                    "format": "HH:mm:ss"
                                                },
                                                "key": "1716456219000_10827",
                                                "model": "input_1716456219000_10827",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加异动记录",
                                    "remoteFunc": "func_1713344369000_27587",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713344369000_27587",
                                "model": "subform_1713344369000_27587",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "任现岗位时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713345131000_79189",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713345155000_12023",
                                "model": "date_1713345155000_12023",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "任现岗位年限",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 2,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1713345160000_27739",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "f0d948e5-331d-401d-a6c2-dd2869ade614",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715743921000_92445",
                                                "name": "riqi",
                                                "model": "date_1713345155000_12023",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "nianXian" }],
                                        "outputKey": "nianXian"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    }
                                },
                                "key": "1713345160000_27739",
                                "model": "input_1713345160000_27739",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "任现职级时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713345131000_79189",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713345131000_79189",
                                "model": "date_1713345131000_79189",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "radio",
                                "name": "性别",
                                "icon": "formic_gender",
                                "options": {
                                    "inline": true,
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "showLabel": false,
                                    "options": [
                                        { "value": "男", "key": "男" },
                                        { "value": "女", "key": "女" }
                                    ],
                                    "required": true,
                                    "width": "",
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "patternType": "gender",
                                    "remoteFunc": "func_1710295256000_60786",
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1710295256000_60786",
                                "model": "radio_1710295256000_60786",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "民族",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "调动", "key": "调动" },
                                        { "value": "转岗", "key": "转岗" },
                                        { "value": "晋升", "key": "晋升" },
                                        { "value": "入职", "key": "入职", "textColor": "#e27e6e" },
                                        { "value": "转正", "key": "转正", "textColor": "#818eec" },
                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713347090000_54579",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                        "input_1713347675000_62402"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1713346954000_21809",
                                                "method": "include_any",
                                                "value": ["民族"]
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "other": true,
                                    "inputvalue": null,
                                    "format": "HH:mm:ss",
                                    "sort": { "input_1713348065000_92353": 1 },
                                    "sortModel": "input_1713348065000_92353",
                                    "sortType": 1
                                },
                                "key": "1713348217000_64022",
                                "model": "select_1713348217000_64022",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "政治面貌",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "调动", "key": "调动" },
                                        { "value": "转岗", "key": "转岗" },
                                        { "value": "晋升", "key": "晋升" },
                                        { "value": "入职", "key": "入职", "textColor": "#e27e6e" },
                                        { "value": "转正", "key": "转正", "textColor": "#818eec" },
                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713347090000_54579",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                        "input_1713347675000_62402"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1713346954000_21809",
                                                "method": "include_any",
                                                "value": ["政治面貌"]
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "other": true,
                                    "inputvalue": null,
                                    "format": "HH:mm:ss",
                                    "sort": { "input_1713348065000_92353": 1 },
                                    "sortModel": "input_1713348065000_92353",
                                    "sortType": 1
                                },
                                "key": "1713347090000_54579",
                                "model": "select_1713347090000_54579",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false,
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "婚姻状况",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "未婚", "key": "未婚" },
                                        { "value": "已婚", "key": "已婚" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713348289000_30889",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "format": "HH:mm:ss",
                                    "inputvalue": null
                                },
                                "key": "1713348289000_30889",
                                "model": "select_1713348289000_30889",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "出生年月",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295261000_88575",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1710295261000_88575",
                                "model": "date_1710295261000_88575",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "年龄",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710726288000_53177",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "042d1932-e81b-4a84-9f38-a5f08a3b2106",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715743600000_92421",
                                                "name": "birthDay",
                                                "model": "date_1710295261000_88575",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "nianLing" }],
                                        "outputKey": "nianLing"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    }
                                },
                                "key": "1710726288000_53177",
                                "model": "input_1710726288000_53177",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "年龄区段",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "25岁及以下", "key": "25岁及以下" },
                                        { "value": "25-35岁", "key": "25-35岁" },
                                        { "value": "35-45岁", "key": "35-45岁" },
                                        { "value": "45岁以上", "key": "45岁以上", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1719053121000_37628",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1719053121000_37628",
                                "model": "select_1719053121000_37628",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "身份证号",
                                "icon": "formic_idCard",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "idCard",
                                    "remoteFunc": "func_1713348337000_15601",
                                    "inputkey": ""
                                },
                                "rules": [
                                    {
                                        "pattern": "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)",
                                        "message": "身份证号格式不匹配"
                                    }
                                ],
                                "key": "1713348337000_15601",
                                "model": "input_1713348337000_15601",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "户籍地址（废弃）",
                                "icon": "formic_dizhi",
                                "options": {
                                    "addressType": "string",
                                    "width": "60%",
                                    "address": {
                                        "pname": {},
                                        "cname": {},
                                        "bname": {},
                                        "detail_address": ""
                                    },
                                    "required": false,
                                    "remote": "0",
                                    "disabled": false,
                                    "street": true,
                                    "dataType": "Object",
                                    "lineWidth": "100%",
                                    "appAutoFill": false,
                                    "remoteFunc": "func_1710295375000_22532",
                                    "inputkey": "",
                                    "isSelectSmallLevel": false
                                },
                                "key": "1713354784000_4253",
                                "model": "address_1713354784000_4253",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "belong_to", "value": "属于" }
                                },
                                "relationCondition": "and",
                                "queryConditon": [
                                    { "key": "belong_to", "value": "属于" },
                                    { "key": "not_of", "value": "不属于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "户籍地址",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1716516549000_25789",
                                    "inputkey": ""
                                },
                                "key": "1716516549000_25789",
                                "model": "input_1716516549000_25789",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "户口性质",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "本市城镇", "key": "本市城镇" },
                                        { "value": "本市农村", "key": "本市农村" },
                                        { "value": "外阜城镇", "key": "外阜城镇" },
                                        { "value": "外阜农村", "key": "外阜农村", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713348457000_26052",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713348457000_26052",
                                "model": "select_1713348457000_26052",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "现住地址",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1716516552000_6252",
                                    "inputkey": ""
                                },
                                "key": "1716516552000_6252",
                                "model": "input_1716516552000_6252",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "现住地址（废弃）",
                                "icon": "formic_dizhi",
                                "options": {
                                    "addressType": "string",
                                    "width": "60%",
                                    "address": {
                                        "pname": {},
                                        "cname": {},
                                        "bname": {},
                                        "detail_address": ""
                                    },
                                    "required": false,
                                    "remote": "0",
                                    "disabled": false,
                                    "street": true,
                                    "dataType": "Object",
                                    "lineWidth": "100%",
                                    "appAutoFill": false,
                                    "remoteFunc": "func_1710295375000_22532",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1710295375000_22532",
                                "model": "address_1710295375000_22532",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "belong_to", "value": "属于" }
                                },
                                "queryConditon": [
                                    { "key": "belong_to", "value": "属于" },
                                    { "key": "not_of", "value": "不属于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "籍贯",
                                "icon": "formic_dizhi",
                                "options": {
                                    "addressType": "string",
                                    "width": "60%",
                                    "address": {
                                        "pname": {},
                                        "cname": {},
                                        "bname": {},
                                        "detail_address": ""
                                    },
                                    "required": false,
                                    "remote": "0",
                                    "disabled": false,
                                    "street": 3,
                                    "dataType": "Object",
                                    "lineWidth": "100%",
                                    "appAutoFill": false,
                                    "remoteFunc": "func_1713354862000_75349",
                                    "inputkey": ""
                                },
                                "key": "1713354862000_75349",
                                "model": "address_1713354862000_75349",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "belong_to", "value": "属于" }
                                },
                                "queryConditon": [
                                    { "key": "belong_to", "value": "属于" },
                                    { "key": "not_of", "value": "不属于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "最高学历",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "专科", "key": "专科", "textColor": "#e27e6e" },
                                        { "value": "本科", "key": "本科" },
                                        { "value": "硕士研究生", "key": "硕士研究生" },
                                        { "value": "博士研究生", "key": "博士研究生" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713355509000_64384",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713356717000_60587",
                                "model": "select_1713356717000_60587",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "最高学位",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": {
                                        "value": "双学士",
                                        "key": "双学士",
                                        "textColor": "#818eec"
                                    },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "双学士", "key": "双学士", "textColor": "#818eec" },
                                        { "value": "学士", "key": "学士" },
                                        { "value": "硕士", "key": "硕士" },
                                        { "value": "博士", "key": "博士" },
                                        { "value": "博士后", "key": "博士后", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713355509000_64384",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713356722000_89567",
                                "model": "select_1713356722000_89567",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "末次学习专业",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842905000_11617",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1713842905000_11617",
                                "model": "input_1713842905000_11617",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "末次毕业院校",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842903000_26187",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1713842903000_26187",
                                "model": "input_1713842903000_26187",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "末次毕业时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "month",
                                    "format": "yyyy-MM",
                                    "valueFormat": "yyyy-MM",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713356786000_87249",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1713356786000_87249",
                                "model": "date_1713356786000_87249",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "过往学历",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "select",
                                                "name": "学历",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        {
                                                            "value": "高中",
                                                            "key": "高中",
                                                            "textColor": "#e27e6e"
                                                        },
                                                        {
                                                            "value": "专科",
                                                            "key": "专科",
                                                            "textColor": "#818eec"
                                                        },
                                                        { "value": "本科", "key": "本科" },
                                                        { "value": "硕士研究生", "key": "硕士研究生" },
                                                        { "value": "博士研究生", "key": "博士研究生" }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713356719000_29460",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713356719000_29460",
                                                "model": "select_1713356719000_29460",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "select",
                                                "name": "学位",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        { "value": "学士", "key": "学士" },
                                                        { "value": "硕士", "key": "硕士" },
                                                        { "value": "博士", "key": "博士" },
                                                        {
                                                            "value": "双学士",
                                                            "key": "双学士",
                                                            "textColor": "#e27e6e"
                                                        }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713356729000_80085",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713356729000_80085",
                                                "model": "select_1713356729000_80085",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "毕业院校",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713842918000_73506",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713842918000_73506",
                                                "model": "input_1713842918000_73506",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "input",
                                                "name": "学习专业",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713842913000_97783",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713842913000_97783",
                                                "model": "input_1713842913000_97783",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "毕业时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "month",
                                                    "format": "yyyy-MM",
                                                    "valueFormat": "yyyy-MM",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713356775000_48022",
                                                    "inputvalue": null,
                                                    "inputkey": "",
                                                    "remote": "0"
                                                },
                                                "key": "1713356782000_5732",
                                                "model": "date_1713356782000_5732",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加过往学历",
                                    "remoteFunc": "func_1713355488000_91179",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713355488000_91179",
                                "model": "subform_1713355488000_91179",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "初次参加工作日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1710295917000_86225",
                                "model": "date_1710295917000_86225",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "工作年限",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710295953000_78807",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "describe": "",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "de1f8189-b63f-43fb-a0a8-968c9a0d4577",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715744162000_11873",
                                                "name": "ruzhiDay",
                                                "model": "date_1710295917000_86225",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "siLing" }],
                                        "outputKey": "siLing"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    }
                                },
                                "key": "1710295963000_85670",
                                "model": "input_1710295963000_85670",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "职称",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842895000_88149",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713842895000_88149",
                                "model": "input_1713842895000_88149",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "职称专业",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842887000_93620",
                                    "inputkey": ""
                                },
                                "key": "1713842887000_93620",
                                "model": "input_1713842887000_93620",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "职业资格",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842889000_63540",
                                    "inputkey": ""
                                },
                                "key": "1713842889000_63540",
                                "model": "input_1713842889000_63540",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "入职日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713357219000_67724",
                                "model": "date_1713357219000_67724",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "加入国资系统时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1710295929000_83842",
                                "model": "date_1710295929000_83842",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "加入再担保系统时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1724294603000_41327",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1724294603000_41327",
                                "model": "date_1724294603000_41327",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "司龄",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 2,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710295953000_78807",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "describe": "单位：年",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "de1f8189-b63f-43fb-a0a8-968c9a0d4577",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715744079000_83254",
                                                "name": "ruzhiDay",
                                                "model": "date_1713357219000_67724",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "siLing" }],
                                        "outputKey": "siLing"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    },
                                    "rel": "and"
                                },
                                "key": "1710295953000_78807",
                                "model": "input_1710295953000_78807",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and",
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "司龄区段",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "0-5年", "key": "0-5年" },
                                        { "value": "5-10年", "key": "5-10年" },
                                        { "value": "10-15年", "key": "10-15年" },
                                        { "value": "15-20年", "key": "15-20年", "textColor": "#e27e6e" },
                                        {
                                            "value": "20年以上",
                                            "key": "20年以上",
                                            "textColor": "#818eec"
                                        },
                                        { "value": "未维护", "key": "未维护", "textColor": "#cb5075" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1719053003000_37095",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1719053003000_37095",
                                "model": "select_1719053003000_37095",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false,
                                "relationCondition": "and",
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "试用期开始日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1710315644000_1955",
                                "model": "date_1710315644000_1955",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "试用期结束日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": ""
                                },
                                "key": "1710295640000_42830",
                                "model": "date_1710295640000_42830",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "转正日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": ""
                                },
                                "key": "1710295631000_5522",
                                "model": "date_1710295631000_5522",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "就职状态",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": { "value": "在职", "key": "在职" },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "在职", "key": "在职" },
                                        { "value": "离职", "key": "离职" },
                                        { "value": "退休", "key": "退休" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713839264000_65529",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "inputvalue": null
                                },
                                "key": "1713839264000_65529",
                                "model": "select_1713839264000_65529",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "联系方式",
                                "icon": "formic_phone",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": true,
                                    "dataType": "string",
                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "privacyRules": { "frontLen": 3, "endLen": 3 },
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "phone",
                                    "remoteFunc": "func_1710295248000_23503",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "rules": [
                                    { "required": true, "message": "请填写" },
                                    {
                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                        "message": "联系方式格式不匹配"
                                    }
                                ],
                                "key": "1710295248000_23503",
                                "model": "input_1710295248000_23503",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "fixed": false,
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "电子信箱",
                                "icon": "formic_maill",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "maill",
                                    "remoteFunc": "func_1713357348000_33380",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "rules": [
                                    {
                                        "pattern": "^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$",
                                        "message": "电子信箱格式不匹配"
                                    }
                                ],
                                "key": "1713357348000_33380",
                                "model": "input_1713357348000_33380",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "紧急联系人",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "input",
                                                "name": "姓名",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357382000_73998",
                                                    "inputkey": "",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357382000_73998",
                                                "model": "input_1713357382000_73998",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "unWrite": false,
                                                "filter": true,
                                                "condition": {
                                                    "value": "",
                                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                                }
                                            },
                                            {
                                                "type": "input",
                                                "name": "联系方式",
                                                "icon": "formic_phone",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "privacyRules": { "frontLen": 3, "endLen": 3 },
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "patternType": "phone",
                                                    "remoteFunc": "func_1713357386000_13343",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "rules": [
                                                    {
                                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                        "message": "联系方式格式不匹配"
                                                    }
                                                ],
                                                "key": "1713357386000_13343",
                                                "model": "input_1713357386000_13343",
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "unWrite": false,
                                                "filter": true,
                                                "condition": {
                                                    "value": "",
                                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                                }
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加紧急联系人",
                                    "remoteFunc": "func_1713357377000_54758",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357377000_54758",
                                "model": "subform_1713357377000_54758",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "过往工作经历",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "input",
                                                "name": "就职单位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357440000_83164",
                                                    "inputkey": "",
                                                    "inputvalue": null,
                                                    "describe": "“就职单位”请填写劳动合同签约单位名称，若“受聘职位”所在单位与劳动合同签约单位名称不一致，请在“受聘职位”内予以体现（例：填表人与北京ABC集团公司签署劳动合同，但被派往地处上海，隶属于北京ABC集团公司的上海DEF公司，担任总经理职务。应按如下方式填写，就职单位：北京ABC集团公司；受聘职位：上海DEF公司总经理）。"
                                                },
                                                "key": "1713357440000_83164",
                                                "model": "input_1713357440000_83164",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "受聘职位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357445000_12798",
                                                    "inputkey": "",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357457000_56874",
                                                "model": "input_1713357457000_56874",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "任职开始时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713404734000_77391",
                                                    "inputkey": "",
                                                    "remote": "0",
                                                    "inputvalue": null
                                                },
                                                "key": "1713404734000_77391",
                                                "model": "date_1713404734000_77391",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "date",
                                                "name": "任职结束时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713404736000_56902",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713404736000_56902",
                                                "model": "date_1713404736000_56902",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加工作经历",
                                    "remoteFunc": "func_1713357423000_8372",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357423000_8372",
                                "model": "subform_1713357423000_8372",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "家庭信息",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "select",
                                                "name": "社会关系",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        {
                                                            "value": "母子/母女",
                                                            "key": "母子/母女",
                                                            "WidgetMapping": []
                                                        },
                                                        {
                                                            "value": "父子/父女",
                                                            "key": "父子/父女",
                                                            "WidgetMapping": []
                                                        },
                                                        { "value": "夫妻", "key": "夫妻", "WidgetMapping": [] },
                                                        {
                                                            "value": "子女",
                                                            "key": "子女",
                                                            "textColor": "#e27e6e",
                                                            "WidgetMapping": []
                                                        }
                                                    ],
                                                    "remote": "1",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1720062070000_45527",
                                                    "remoteKey": [
                                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                                        "input_1713347675000_62402"
                                                    ],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputkey": "",
                                                    "WidgetMap": false,
                                                    "inputvalue": null,
                                                    "sort": { "input_1713348065000_92353": 1 },
                                                    "query": {
                                                        "cond": [
                                                            {
                                                                "type": "select",
                                                                "field": "select_1713346954000_21809",
                                                                "method": "include_any",
                                                                "value": ["社会关系"]
                                                            },
                                                            {
                                                                "type": "radio",
                                                                "field": "radio_1713423930000_22069",
                                                                "method": "include_any",
                                                                "value": ["启用"]
                                                            }
                                                        ],
                                                        "rel": "and"
                                                    },
                                                    "linkOptions": [],
                                                    "sortModel": "input_1713348065000_92353",
                                                    "sortType": 1
                                                },
                                                "key": "1720062070000_45527",
                                                "model": "select_1720062070000_45527",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "社会关系",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357263000_47427",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357263000_47427",
                                                "model": "input_1713357263000_47427",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "姓名",
                                                "icon": "formic_fullname",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357301000_50163",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357301000_50163",
                                                "model": "input_1713357301000_50163",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "联系方式",
                                                "icon": "formic_phone",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "patternType": "phone",
                                                    "remoteFunc": "func_1713357305000_64141",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "rules": [
                                                    {
                                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                        "message": "联系方式格式不匹配"
                                                    }
                                                ],
                                                "key": "1713357305000_64141",
                                                "model": "input_1713357305000_64141",
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "工作单位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357314000_79445",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357437000_45906",
                                                "model": "input_1713357437000_45906",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "职位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357326000_18071",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357326000_18071",
                                                "model": "input_1713357326000_18071",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "出生日期",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": true,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1710295333000_45645",
                                                    "inputkey": "",
                                                    "remote": "0",
                                                    "inputvalue": null
                                                },
                                                "key": "1710295333000_45645",
                                                "model": "date_1710295333000_45645",
                                                "rules": [{ "required": true, "message": "请选择" }],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "备注",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1720076883000_44003",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1720076883000_44003",
                                                "model": "input_1720076883000_44003",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加家庭信息",
                                    "remoteFunc": "func_1710295312000_34934",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1710295312000_34934",
                                "model": "subform_1710295312000_34934",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "textarea",
                                "name": "备注",
                                "icon": "formic_duohangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": "",
                                    "required": false,
                                    "disabled": false,
                                    "msgCheck": false,
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "dataType": "string",
                                    "maxlength": "",
                                    "remoteFunc": "func_1713357469000_63438",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357469000_63438",
                                "model": "textarea_1713357469000_63438",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "like", "value": "包含" }
                                },
                                "queryConditon": [
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "separator",
                                "name": "附件",
                                "icon": "formic_fengexian",
                                "options": {
                                    "pageData": {
                                        "color": "#DDDDDD",
                                        "linewidth": 1,
                                        "style": "solid"
                                    },
                                    "form": {
                                        "align": "center",
                                        "color": "rgba(109, 109, 109, 1)",
                                        "decoration": "none",
                                        "family": "Tahoma",
                                        "lineHeight": 2.75,
                                        "size": 15,
                                        "style": "normal",
                                        "weight": ""
                                    },
                                    "defaultValue": "#ffffff00",
                                    "width": "100%",
                                    "remoteFunc": "func_1713357477000_53960",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713357477000_53960",
                                "model": "separator_1713357477000_53960",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "uploading",
                                "name": "附件",
                                "icon": "formic_shangchuan",
                                "options": {
                                    "defaultValue": [],
                                    "tokenFunc": "funcGetToken",
                                    "domain": "",
                                    "disabled": false,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "length": 1,
                                    "fileSize": 20,
                                    "required": false,
                                    "remoteFunc": "func_1713406382000_70234",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1713406382000_70234",
                                "model": "uploading_1713406382000_70234",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "学历学位证书",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 2,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710295459000_21445",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1710295524000_34857",
                                "model": "imgupload_1710295524000_34857",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "身份证正反面照片",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 2,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710295459000_21445",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1710295459000_21445",
                                "model": "imgupload_1710295459000_21445",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "保密协议",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 8,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710311227000_70164",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1710311232000_13178",
                                "model": "imgupload_1710311232000_13178",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "竞业协议",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 8,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710311227000_70164",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "inputvalue": null
                                },
                                "key": "1710311227000_70164",
                                "model": "imgupload_1710311227000_70164",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "离职日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1710295941000_54351",
                                "model": "date_1710295941000_54351",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "退休日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713839214000_11945",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1713839214000_11945",
                                "model": "date_1713839214000_11945",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "部门序列（排序使用）",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1718097070000_77293",
                                    "inputkey": ""
                                },
                                "key": "1718097070000_77293",
                                "model": "input_1718097070000_77293",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "radio",
                                "name": "是否党员",
                                "icon": "formic_danxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": "",
                                    "showLabel": false,
                                    "options": [
                                        { "value": "党员", "key": "党员" },
                                        { "value": "非党员", "key": "非党员" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1722928230000_24190",
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1722928230000_24190",
                                "model": "radio_1722928230000_24190",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false,
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "员工照片",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 1,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1725502742000_15000",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1725502742000_15000",
                                "model": "imgupload_1725502742000_15000",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "relationCondition": "and",
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "name": "创建人",
                                "key": "create_user",
                                "model": "create_user",
                                "type": "input",
                                "options": { "dataType": "string" },
                                "read": true
                            },
                            {
                                "name": "创建时间",
                                "key": "create_time",
                                "model": "create_time",
                                "type": "date",
                                "options": { "dataType": "date" },
                                "read": true
                            },
                            {
                                "name": "更新时间",
                                "key": "update_time",
                                "model": "update_time",
                                "type": "date",
                                "options": { "dataType": "date" },
                                "read": true
                            }
                        ],
                        "exportType": "normal",
                        "correlationId": ""
                    },
                    "isAssociationFilter": false,
                    "associationFilterList": [],
                    "customFileName": true,
                    "exportFileName": active.name&&active.name!='全部'?"北京再担保本部-"+active.name+"员工":"北京再担保本部员工",
                    "inParams": []
                },
            }
            if(active.deptId) {
                ele.event.inParams =  [
                    {
                        "name": "",
                        "propKey": "deparadio_1713405599000_3421",
                        "key": "1728994772000_22968",
                        "paramType": "custom",
                        "propName": "部门",
                        "type": "deparadio",
                        "method": "any",
                        "param": active.deptId
                    }
                ]
            }
            EventService.resolveClick(ele, null, context)
        }
    } else if (funcName === 'xgxxsh') {
        // 修改信息审核
        setStyle(`sortEle_${filtrateId}`, 'display', 'none')
        setStyle(`sortEle_${dynamicViewId}`, 'display', 'none')
        setStyle(`sortEle_${formTableViewId}`, 'display', 'block')
        setStyle(`sortEle_${operateBtnId}`, 'display', 'none')
        columnList.forEach(v => {
            setColor(v.id, v.id !== '1728897612000_11547' ? '#666' : globalColor, columnList)
        })
    } else if (tabEvent.includes(funcName)) {
        refreshData(context, funcName, EventService, _commonStore)
        opIds.forEach(v =>{
            setStyle(v, 'display', 'block')
        })
        _commonStore.setCustomerEventActiveBtn({type: 'benbu', value: funcName})
    } else if (headEvent.includes(funcName)) {
        _commonStore.setCustomerEventActive(funcName)
        refreshHeadData(context, funcName, EventService, _commonStore)
    } else if (funcName === 'initPage') {
        initPage(context, funcName, EventService, _commonStore)
    } else if (funcName.includes('_xygs')){
        xygsEvent(context, funcName, EventService, _commonStore)
    } else if (funcName.includes('_gh')) {
        ghEvent(context, funcName, EventService, _commonStore)
    } else if(funcName.includes('_btnRefresh')) {
        if(funcName === 'bb_btnRefresh') {
            refreshHeadData(context, funcName, EventService, _commonStore)
            setStyle(`sortEle_${filtrateId}`, 'display', _commonStore.customerEventActiveBtn === 'all' ? 'block' : 'none')
        } else if(funcName === 'gh_btnRefresh') {
            ghRefreshHeadData(context, funcName, EventService, _commonStore)
            setStyle(`sortEle_${gh.filtrateId}`, 'display', _commonStore.customerEventActiveBtn === 'all_gh' ? 'block' : 'none')
        } else if(funcName === 'xygs_btnRefresh') {
            xygsRefreshHeadData(context, funcName, EventService, _commonStore)
            setStyle(`sortEle_${xygs.filtrateId}`, 'display', _commonStore.customerEventActiveBtn === 'all_xygs' ? 'block' : 'none')
        }
    }
}

// 刷新动态数据容器
function refreshData(context, funcName, EventService, _commonStore) {
    const btn = btnList.find(item => item.eventName === funcName)
    if (btn) {
        let active = {
            deptId: btn.refreshValue,
            name: btn.value
        }
        _commonStore.setCustomerEventContainer(active)
        let conditionList = btn.refreshValue ? [
            {
                "field": "deparadio_1713405599000_3421",
                "method": "any",
                "type": "deparadio",
                "value": btn.refreshValue
            }
        ] : []
        EventService.proxy.bus.emit(refreshId, {
            type: "refreshList",
            conditionList: conditionList,
            pageNum: 1,
            pageSize: 12
        });
        btnList.forEach(v => {
            const btnEle = document.getElementById(v.id)
            if (v.id !== btn.id) {
                btnEle.classList.remove('btnActive')
            } else {
                btnEle.classList.add('btnActive')
            }
        })
        if (btn.eventName === 'all') {
            setStyle(`sortEle_${filtrateId}`, 'display', 'block')
            setStyle(`sortEle_${rowViewId}`, 'display', 'block')
            columnList.forEach(column => {
                setColor(column.id, column.id === '1728897612000_64748' ? globalColor : '#666', columnList)
            })
        } else {
            setStyle(`sortEle_${filtrateId}`, 'display', 'none')
            setStyle(`sortEle_${rowViewId}`, 'display', 'none')
        }
        _commonStore.setCustomerEventActive('qb')
        lines.forEach(v =>{
            if(funcName === 'all') {
                setStyle(v, 'display', 'block')
            } else {
                setStyle(v, 'display', 'none')
            }
        })
        setStyle(`sortEle_${dynamicViewId}`, 'display', 'block')
        setStyle(`sortEle_${formTableViewId}`, 'display', 'none')
        opIds.forEach(v =>{
            setStyle(v, 'display', 'none')
        })
    }
}

function refreshHeadData(context, funcName, EventService, _commonStore) {
    const btn = columnList.find(item => item.eventName === funcName) || columnList.find(item => item.eventName === _commonStore.customerEventActive)
    if (btn) {
        let conditionList = [
            {
                "field": "deparadio_1713405599000_3421",
                "method": "any",
                "type": "deparadio",
                "value": _commonStore.customerEventContainer && _commonStore.customerEventContainer.deptId ? _commonStore.customerEventContainer.deptId : "2,29,3,5,4,6,7,8,15,9,10,11,12,13,14,30"
            }
        ]
        if (btn.eventName !== 'qb') {
            conditionList.push({
                "field": "select_1713337276000_66931",
                "method": "equal",
                "type": "select",
                "value": btnValueMap[btn.value]
            })
        }
        EventService.proxy.bus.emit(refreshId, {
            type: "refreshList",
            conditionList: conditionList,
            pageNum: 1,
            pageSize: 12
        });
        columnList.forEach(v => {
            setColor(v.id, v.id !== btn.id ? '#666' : globalColor, columnList)
        })
        setStyle(`sortEle_${dynamicViewId}`, 'display', 'block')
        setStyle(`sortEle_${formTableViewId}`, 'display', 'none')
        setStyle(`sortEle_${filtrateId}`, 'display', 'block')
        opIds.forEach(v =>{
            setStyle(v, 'display', btn.eventName === 'qb' ? 'block' : 'none')
        })
    }
}

function initPage(context, funcName, EventService, _commonStore) {
    setTimeout(() => {
        setStyle(`sortEle_${formTableViewId}`, 'display', 'none')
        btnList.forEach(v =>{
            const btnEle = document.getElementById(v.id)
            if(btnEle) {
                v.id != '1728896302000_48545' ? btnEle.classList.remove('btnActive') : btnEle.classList.add('btnActive')
            }
        })
        setColor('1728897612000_64748', globalColor, columnList)
        let activeKey = _commonStore.customerEventActiveBtn['benbu'] || "all"
        if(!_commonStore.customerEventActiveBtn['benbu']) {
            _commonStore.setCustomerEventActiveBtn({type: 'benbu', value: "all"})
        }
        refreshData(context, activeKey, EventService, _commonStore)
    }, 100)

}

/**
 * 信用公司事件
 * @param {*} context
 * @param {*} funcName
 * @param {*} EventService
 * @param {*} _commonStore
 */
function xygsEvent(context, funcName, EventService, _commonStore) {
    if (funcName === 'addUser_xygs') {
        let active = _commonStore.customerEventContainer
        if (active) {
            if (active[funcName]) {
                navigateTo('XinZengYuanGong', {p_deptId: active[funcName]})
            } else {
                navigateTo('XinZengYuanGong', {})
            }
        }
    } else if(funcName === 'customExport_xygs') {
        let active = _commonStore.customerEventContainer
        if(active && active.hasOwnProperty('deptId')) {
            let ele = {
                "event": {
                    "type": 65,
                    "formObj": {
                        "dbName": "vs3b4c151p04",
                        "systemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                        "systemName": "再担保OA管理系统",
                        "formGrounpId": "b49e1cca-0a87-4632-8165-421cf9c65258",
                        "formId": "803b2b0e-842c-4dd9-99bb-77e7645c6022",
                        "formName": "员工档案1_0",
                        "formType": "form",
                        "authId": "73e949c6-864a-455b-bdb9-1a2841987e2c",
                        "formDataType": "default",
                        "detailTableRuleId": "origin",
                        "formProp": [
                            {
                                "name": "主键",
                                "key": "_id",
                                "model": "_id",
                                "type": "_id",
                                "read": true
                            },
                            {
                                "type": "input",
                                "name": "员工ID",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713336410000_72858",
                                    "inputkey": ""
                                },
                                "key": "1713336410000_72858",
                                "model": "input_1713336410000_72858",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "input",
                                "name": "魔点门禁对应人员ID",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1720492365000_39225",
                                    "inputkey": ""
                                },
                                "key": "1720492365000_39225",
                                "model": "input_1720492365000_39225",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "deparadio",
                                "name": "部门",
                                "icon": "formic_bmdanxuan",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "remote": "0",
                                    "sinmulti": false,
                                    "statswe": 0,
                                    "dataType": "string",
                                    "required": true,
                                    "remoteFunc": "func_1713405599000_3421",
                                    "inputkey": "",
                                    "editableLink": true
                                },
                                "key": "1713405599000_3421",
                                "model": "deparadio_1713405599000_3421",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "dataRange": "",
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "any", "value": "等于任何一个" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "部门类型",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        {
                                            "value": "两级班子成员",
                                            "key": "两级班子成员",
                                            "textColor": "#e27e6e"
                                        },
                                        { "value": "前台部门", "key": "前台部门" },
                                        { "value": "中台部门", "key": "中台部门" },
                                        { "value": "后台部门", "key": "后台部门" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1721288176000_81973",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1721288176000_81973",
                                "model": "select_1721288176000_81973",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "层级",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "高层管理岗", "key": "高层管理岗" },
                                        { "value": "中层管理岗", "key": "中层管理岗" },
                                        { "value": "技术序列", "key": "技术序列" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337159000_85091",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null
                                },
                                "key": "1713337159000_85091",
                                "model": "select_1713337159000_85091",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "职级",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "下拉框1", "key": "下拉框1" },
                                        { "value": "下拉框2", "key": "下拉框2" },
                                        { "value": "下拉框3", "key": "下拉框3" }
                                    ],
                                    "remote": "2",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1716723628000_76522",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "sort": {},
                                    "rel": "and",
                                    "globalFilter": true,
                                    "logicFilter": false,
                                    "screen": [
                                        {
                                            "targetModel": "deparadio_1716454449000_32187",
                                            "tatgetType": "deparadio",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "deparadio_1713405599000_3421",
                                            "rule": "sourcetab",
                                            "sourceName": ""
                                        },
                                        {
                                            "targetModel": "select_1713335224000_64033",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1713337159000_85091",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        }
                                    ],
                                    "linkage": {
                                        "linkedSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "linkedForm": {
                                            "fId": "7a16032a-322c-440d-925b-dd0856fea76e",
                                            "fName": "职级管理1.0",
                                            "fSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                            "fSystemName": "再担保OA管理系统",
                                            "fUserName": "vs3b4c151p04"
                                        },
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {
                                            "icon": "formic_danhangwenben",
                                            "key": "1716451374000_5165",
                                            "model": "input_1716451374000_5165",
                                            "name": "职级",
                                            "type": "input"
                                        }
                                    },
                                    "inputvalue": null
                                },
                                "key": "1716723628000_76522",
                                "model": "select_1716723628000_76522",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                }
                            },
                            {
                                "type": "checkbox",
                                "name": "职位",
                                "icon": "formic_fuxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": [],
                                    "showLabel": false,
                                    "options": [
                                        { "value": "选项1", "key": "选项1" },
                                        { "value": "选项2", "key": "选项2" },
                                        { "value": "选项3", "key": "选项3" }
                                    ],
                                    "required": true,
                                    "width": "",
                                    "remote": "2",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337069000_94692",
                                    "dataType": "Array",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "7a16032a-322c-440d-925b-dd0856fea76e",
                                        "input_1713335233000_73409",
                                        "vs3b4c151p04"
                                    ],
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "radio",
                                                "field": "radio_1713335238000_4862",
                                                "method": "equal",
                                                "value": "启用"
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "linkOptions": [],
                                    "WidgetMap": false,
                                    "inputkey": "",
                                    "openTransfer": false,
                                    "openSelect": true,
                                    "inputvalue": null,
                                    "sort": { "input_1713335269000_8766": 1 },
                                    "sortModel": "",
                                    "sortType": 1,
                                    "describe": "",
                                    "globalFilter": true,
                                    "logicFilter": false,
                                    "screen": [
                                        {
                                            "targetModel": "deparadio_1716722657000_97251",
                                            "tatgetType": "deparadio",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "deparadio_1713405599000_3421",
                                            "rule": "sourcetab",
                                            "sourceName": ""
                                        },
                                        {
                                            "targetModel": "select_1716722657000_20259",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1713337159000_85091",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        },
                                        {
                                            "targetModel": "select_1716722709000_86470",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1716723628000_76522",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        }
                                    ],
                                    "linkage": {
                                        "linkedSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "linkedForm": {
                                            "fId": "d2ef45f0-1b9c-4493-9999-c66fd3ff3f89",
                                            "fName": "职位管理1.0",
                                            "fSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                            "fSystemName": "再担保OA管理系统",
                                            "fUserName": "vs3b4c151p04"
                                        },
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {
                                            "icon": "formic_danhangwenben",
                                            "key": "1716722657000_6174",
                                            "model": "input_1716722657000_6174",
                                            "name": "职位",
                                            "type": "input"
                                        }
                                    },
                                    "rel": "and"
                                },
                                "key": "1713337069000_94692",
                                "model": "checkbox_1713337069000_94692",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                }
                            },
                            {
                                "type": "checkbox",
                                "name": "党内职务",
                                "icon": "formic_fuxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": [],
                                    "showLabel": false,
                                    "options": [
                                        { "value": "选项1", "key": "选项1" },
                                        { "value": "选项2", "key": "选项2" },
                                        { "value": "选项3", "key": "选项3" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1718712223000_75916",
                                    "dataType": "Array",
                                    "inputkey": "",
                                    "sort": { "input_1718712011000_16938": 1 },
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "46b981b9-58c0-48eb-8bab-e0168e0a4aa1",
                                        "input_1718711923000_13084"
                                    ],
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "radio",
                                                "field": "radio_1718711931000_5964",
                                                "method": "include_any",
                                                "value": ["启用"],
                                                "sourceType": "",
                                                "sourceField": "",
                                                "sourceValueType": "value"
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "sortModel": "input_1718712011000_16938",
                                    "sortType": 1,
                                    "openSelect": true,
                                    "inputvalue": null
                                },
                                "key": "1718712223000_75916",
                                "model": "checkbox_1718712223000_75916",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                }
                            },
                            {
                                "type": "select",
                                "name": "人员类型",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "职工", "key": "职工", "WidgetMapping": [] },
                                        { "value": "外包", "key": "外包" },
                                        { "value": "试用期", "key": "试用期", "textColor": "#818eec" },
                                        { "value": "实习生", "key": "实习生" },
                                        {
                                            "value": "其他",
                                            "key": "其他",
                                            "textColor": "#818eec",
                                            "WidgetMapping": ["input_1714112248000_7992"]
                                        }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337276000_66931",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null,
                                    "WidgetMap": true
                                },
                                "key": "1713337276000_66931",
                                "model": "select_1713337276000_66931",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "input",
                                "name": "其它人员类型",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1714112248000_7992",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1714112248000_7992",
                                "model": "input_1714112248000_7992",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "外派情况",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": { "value": "未外派", "key": "未外派" },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "未外派", "key": "未外派" },
                                        { "value": "外派", "key": "外派" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713343769000_97275",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null
                                },
                                "key": "1713343769000_97275",
                                "model": "select_1713343769000_97275",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "input",
                                "name": "姓名",
                                "icon": "formic_fullname",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": true,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713443242000_93791",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713443242000_93791",
                                "model": "input_1713443242000_93791",
                                "rules": [{ "required": true, "message": "请填写" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "like", "value": "包含" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "userradio",
                                "name": "员工",
                                "icon": "formic_cydanxuan",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "remote": "0",
                                    "sinmulti": false,
                                    "statswe": 2,
                                    "dataType": "string",
                                    "required": false,
                                    "remoteFunc": "func_1710295237000_55445",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "editableLink": true
                                },
                                "key": "1710295237000_55445",
                                "model": "userradio_1710295237000_55445",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "any", "value": "等于任何一个" }
                                },
                                "fixed": true
                            },
                            {
                                "type": "select",
                                "name": "人员类别（绩效判断）",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "下拉框1", "key": "下拉框1" },
                                        { "value": "下拉框2", "key": "下拉框2" },
                                        { "value": "下拉框3", "key": "下拉框3" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1721289627000_18944",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "d414843d-1cbe-46db-be33-8adeaa7a0615",
                                        "input_1721207280000_90534"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "sort": { "input_1721207337000_83958": 1 },
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1721207259000_38625",
                                                "method": "include_any",
                                                "value": ["人员类别"],
                                                "sourceType": "defaultValue",
                                                "sourceField": "",
                                                "sourceValueType": "value"
                                            },
                                            {
                                                "type": "radio",
                                                "field": "radio_1721207289000_40731",
                                                "method": "include_any",
                                                "value": ["正常"],
                                                "sourceType": "",
                                                "sourceField": "",
                                                "sourceValueType": "value"
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "sortModel": "input_1721207337000_83958",
                                    "sortType": 1
                                },
                                "key": "1721289627000_18944",
                                "model": "select_1721289627000_18944",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "subform",
                                "name": "人员异动情况",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "date",
                                                "name": "异动时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713344379000_61853",
                                                    "inputvalue": null,
                                                    "inputkey": "",
                                                    "remote": "0"
                                                },
                                                "key": "1713344379000_61853",
                                                "model": "date_1713344379000_61853",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "异动前岗位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1716456217000_19888",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1716456217000_19888",
                                                "model": "input_1716456217000_19888",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "select",
                                                "name": "异动方式",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        { "value": "调动", "key": "调动" },
                                                        { "value": "转岗", "key": "转岗" },
                                                        { "value": "晋升", "key": "晋升" },
                                                        {
                                                            "value": "入职",
                                                            "key": "入职",
                                                            "textColor": "#e27e6e"
                                                        },
                                                        {
                                                            "value": "转正",
                                                            "key": "转正",
                                                            "textColor": "#818eec"
                                                        },
                                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713344406000_75298",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713344406000_75298",
                                                "model": "select_1713344406000_75298",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "input",
                                                "name": "异动后岗位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1716456219000_10827",
                                                    "inputkey": "",
                                                    "inputvalue": null,
                                                    "format": "HH:mm:ss"
                                                },
                                                "key": "1716456219000_10827",
                                                "model": "input_1716456219000_10827",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加异动记录",
                                    "remoteFunc": "func_1713344369000_27587",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713344369000_27587",
                                "model": "subform_1713344369000_27587",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "任现岗位时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713345131000_79189",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713345155000_12023",
                                "model": "date_1713345155000_12023",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "input",
                                "name": "任现岗位年限",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 2,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1713345160000_27739",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "f0d948e5-331d-401d-a6c2-dd2869ade614",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715743921000_92445",
                                                "name": "riqi",
                                                "model": "date_1713345155000_12023",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "nianXian" }],
                                        "outputKey": "nianXian"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    },
                                    "rel": "and"
                                },
                                "key": "1713345160000_27739",
                                "model": "input_1713345160000_27739",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "date",
                                "name": "任现职级时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713345131000_79189",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713345131000_79189",
                                "model": "date_1713345131000_79189",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "radio",
                                "name": "性别",
                                "icon": "formic_gender",
                                "options": {
                                    "inline": true,
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "showLabel": false,
                                    "options": [
                                        { "value": "男", "key": "男" },
                                        { "value": "女", "key": "女" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "patternType": "gender",
                                    "remoteFunc": "func_1710295256000_60786",
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "disabled": false,
                                    "inputvalue": null
                                },
                                "key": "1710295256000_60786",
                                "model": "radio_1710295256000_60786",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "民族",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "调动", "key": "调动" },
                                        { "value": "转岗", "key": "转岗" },
                                        { "value": "晋升", "key": "晋升" },
                                        { "value": "入职", "key": "入职", "textColor": "#e27e6e" },
                                        { "value": "转正", "key": "转正", "textColor": "#818eec" },
                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713347090000_54579",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                        "input_1713347675000_62402"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1713346954000_21809",
                                                "method": "include_any",
                                                "value": ["民族"],
                                                "sourceType": "defaultValue",
                                                "sourceField": "",
                                                "sourceValueType": "value"
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "other": true,
                                    "inputvalue": null,
                                    "format": "HH:mm:ss",
                                    "sort": { "input_1713348065000_92353": 1 },
                                    "sortModel": "input_1713348065000_92353",
                                    "sortType": 1
                                },
                                "key": "1713348217000_64022",
                                "model": "select_1713348217000_64022",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "政治面貌",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "调动", "key": "调动" },
                                        { "value": "转岗", "key": "转岗" },
                                        { "value": "晋升", "key": "晋升" },
                                        { "value": "入职", "key": "入职", "textColor": "#e27e6e" },
                                        { "value": "转正", "key": "转正", "textColor": "#818eec" },
                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713347090000_54579",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                        "input_1713347675000_62402"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1713346954000_21809",
                                                "method": "include_any",
                                                "value": ["政治面貌"],
                                                "sourceType": "defaultValue",
                                                "sourceField": "",
                                                "sourceValueType": "value"
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "other": true,
                                    "inputvalue": null,
                                    "format": "HH:mm:ss",
                                    "sort": { "input_1713348065000_92353": 1 },
                                    "sortModel": "input_1713348065000_92353",
                                    "sortType": 1
                                },
                                "key": "1713347090000_54579",
                                "model": "select_1713347090000_54579",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false
                            },
                            {
                                "type": "select",
                                "name": "婚姻状况",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "未婚", "key": "未婚" },
                                        { "value": "已婚", "key": "已婚" },
                                        { "value": "离异", "key": "离异", "textColor": "#3f95f2" },
                                        { "value": "丧偶", "key": "丧偶", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713348289000_30889",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "format": "HH:mm:ss",
                                    "inputvalue": null
                                },
                                "key": "1713348289000_30889",
                                "model": "select_1713348289000_30889",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                }
                            },
                            {
                                "type": "date",
                                "name": "出生年月",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295261000_88575",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1710295261000_88575",
                                "model": "date_1710295261000_88575",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "input",
                                "name": "年龄",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710726288000_53177",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "042d1932-e81b-4a84-9f38-a5f08a3b2106",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715743600000_92421",
                                                "name": "birthDay",
                                                "model": "date_1710295261000_88575",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "nianLing" }],
                                        "outputKey": "nianLing"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    },
                                    "rel": "and"
                                },
                                "key": "1710726288000_53177",
                                "model": "input_1710726288000_53177",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "年龄区段",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "25岁及以下", "key": "25岁及以下" },
                                        { "value": "25-35岁", "key": "25-35岁" },
                                        { "value": "35-45岁", "key": "35-45岁" },
                                        { "value": "45岁以上", "key": "45岁以上", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1719053121000_37628",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1719053121000_37628",
                                "model": "select_1719053121000_37628",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "input",
                                "name": "身份证号",
                                "icon": "formic_idCard",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "idCard",
                                    "remoteFunc": "func_1713348337000_15601",
                                    "inputkey": ""
                                },
                                "rules": [
                                    {
                                        "pattern": "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)",
                                        "message": "身份证号格式不匹配"
                                    }
                                ],
                                "key": "1713348337000_15601",
                                "model": "input_1713348337000_15601",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "input",
                                "name": "户籍地址",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1716516549000_25789",
                                    "inputkey": ""
                                },
                                "key": "1716516549000_25789",
                                "model": "input_1716516549000_25789",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "户口性质",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "本市城镇", "key": "本市城镇" },
                                        { "value": "本市农村", "key": "本市农村" },
                                        { "value": "外阜城镇", "key": "外阜城镇" },
                                        { "value": "外阜农村", "key": "外阜农村", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713348457000_26052",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713348457000_26052",
                                "model": "select_1713348457000_26052",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "input",
                                "name": "现住地址",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1716516552000_6252",
                                    "inputkey": ""
                                },
                                "key": "1716516552000_6252",
                                "model": "input_1716516552000_6252",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "address",
                                "name": "籍贯",
                                "icon": "formic_dizhi",
                                "options": {
                                    "addressType": "string",
                                    "width": "60%",
                                    "address": {
                                        "pname": {},
                                        "cname": {},
                                        "bname": {},
                                        "detail_address": ""
                                    },
                                    "required": false,
                                    "remote": "0",
                                    "disabled": false,
                                    "street": 3,
                                    "dataType": "Object",
                                    "lineWidth": "100%",
                                    "appAutoFill": false,
                                    "remoteFunc": "func_1713354862000_75349",
                                    "inputkey": "",
                                    "isSelectSmallLevel": false
                                },
                                "key": "1713354862000_75349",
                                "model": "address_1713354862000_75349",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "belong_to", "value": "属于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "最高学历",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "专科", "key": "专科", "textColor": "#e27e6e" },
                                        { "value": "本科", "key": "本科" },
                                        { "value": "硕士研究生", "key": "硕士研究生" },
                                        { "value": "博士研究生", "key": "博士研究生" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713355509000_64384",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713356717000_60587",
                                "model": "select_1713356717000_60587",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                }
                            },
                            {
                                "type": "select",
                                "name": "最高学位",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "双学士", "key": "双学士", "textColor": "#818eec" },
                                        { "value": "学士", "key": "学士" },
                                        { "value": "硕士", "key": "硕士" },
                                        { "value": "博士", "key": "博士" },
                                        { "value": "博士后", "key": "博士后", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713355509000_64384",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713356722000_89567",
                                "model": "select_1713356722000_89567",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                }
                            },
                            {
                                "type": "input",
                                "name": "末次学习专业",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842905000_11617",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1713842905000_11617",
                                "model": "input_1713842905000_11617",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "input",
                                "name": "末次毕业院校",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842903000_26187",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1713842903000_26187",
                                "model": "input_1713842903000_26187",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "末次毕业时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "month",
                                    "format": "yyyy-MM",
                                    "valueFormat": "yyyy-MM",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713356786000_87249",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1713356786000_87249",
                                "model": "date_1713356786000_87249",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "subform",
                                "name": "过往学历",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "select",
                                                "name": "学历",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        {
                                                            "value": "高中",
                                                            "key": "高中",
                                                            "textColor": "#e27e6e"
                                                        },
                                                        {
                                                            "value": "专科",
                                                            "key": "专科",
                                                            "textColor": "#818eec"
                                                        },
                                                        { "value": "本科", "key": "本科" },
                                                        { "value": "硕士研究生", "key": "硕士研究生" },
                                                        { "value": "博士研究生", "key": "博士研究生" }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713356719000_29460",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713356719000_29460",
                                                "model": "select_1713356719000_29460",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "select",
                                                "name": "学位",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        { "value": "学士", "key": "学士" },
                                                        { "value": "硕士", "key": "硕士" },
                                                        { "value": "博士", "key": "博士" },
                                                        {
                                                            "value": "双学士",
                                                            "key": "双学士",
                                                            "textColor": "#e27e6e"
                                                        }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713356729000_80085",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713356729000_80085",
                                                "model": "select_1713356729000_80085",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "毕业院校",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713842918000_73506",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713842918000_73506",
                                                "model": "input_1713842918000_73506",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "input",
                                                "name": "学习专业",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713842913000_97783",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713842913000_97783",
                                                "model": "input_1713842913000_97783",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "毕业时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "month",
                                                    "format": "yyyy-MM",
                                                    "valueFormat": "yyyy-MM",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713356775000_48022",
                                                    "inputvalue": null,
                                                    "inputkey": "",
                                                    "remote": "0"
                                                },
                                                "key": "1713356782000_5732",
                                                "model": "date_1713356782000_5732",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加过往学历",
                                    "remoteFunc": "func_1713355488000_91179",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713355488000_91179",
                                "model": "subform_1713355488000_91179",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "初次参加工作日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1710295917000_86225",
                                "model": "date_1710295917000_86225",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "input",
                                "name": "工作年限",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710295953000_78807",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "describe": "",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "46c0950f-df12-4b3e-96e2-5b5631a4f652",
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    },
                                    "rel": "and",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1728990985000_91177",
                                                "name": "ruzhiDay",
                                                "model": "date_1710295917000_86225",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "siLing" }],
                                        "outputKey": "siLing"
                                    }
                                },
                                "key": "1710295963000_85670",
                                "model": "input_1710295963000_85670",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "input",
                                "name": "职称",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842895000_88149",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713842895000_88149",
                                "model": "input_1713842895000_88149",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "input",
                                "name": "职称专业",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842887000_93620",
                                    "inputkey": ""
                                },
                                "key": "1713842887000_93620",
                                "model": "input_1713842887000_93620",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "input",
                                "name": "职业资格",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842889000_63540",
                                    "inputkey": ""
                                },
                                "key": "1713842889000_63540",
                                "model": "input_1713842889000_63540",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "入职日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713357219000_67724",
                                "model": "date_1713357219000_67724",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "加入国资系统时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1710295929000_83842",
                                "model": "date_1710295929000_83842",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "加入再担保系统时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1724294603000_41327",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1724294603000_41327",
                                "model": "date_1724294603000_41327",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "input",
                                "name": "司龄",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 2,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710295953000_78807",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "describe": "单位：年",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "de1f8189-b63f-43fb-a0a8-968c9a0d4577",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715744079000_83254",
                                                "name": "ruzhiDay",
                                                "model": "date_1713357219000_67724",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "siLing" }],
                                        "outputKey": "siLing"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    },
                                    "rel": "and"
                                },
                                "key": "1710295953000_78807",
                                "model": "input_1710295953000_78807",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "select",
                                "name": "司龄区段",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "0-5年", "key": "0-5年" },
                                        { "value": "5-10年", "key": "5-10年" },
                                        { "value": "10-15年", "key": "10-15年" },
                                        { "value": "15-20年", "key": "15-20年", "textColor": "#e27e6e" },
                                        {
                                            "value": "20年以上",
                                            "key": "20年以上",
                                            "textColor": "#818eec"
                                        },
                                        { "value": "未维护", "key": "未维护", "textColor": "#cb5075" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1719053003000_37095",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1719053003000_37095",
                                "model": "select_1719053003000_37095",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false,
                                "relationCondition": "and"
                            },
                            {
                                "type": "date",
                                "name": "试用期开始日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1710315644000_1955",
                                "model": "date_1710315644000_1955",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "试用期结束日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": ""
                                },
                                "key": "1710295640000_42830",
                                "model": "date_1710295640000_42830",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "转正日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": ""
                                },
                                "key": "1710295631000_5522",
                                "model": "date_1710295631000_5522",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "select",
                                "name": "就职状态",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": { "value": "在职", "key": "在职" },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "在职", "key": "在职" },
                                        { "value": "离职", "key": "离职" },
                                        { "value": "退休", "key": "退休" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713839264000_65529",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "inputvalue": null
                                },
                                "key": "1713839264000_65529",
                                "model": "select_1713839264000_65529",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "input",
                                "name": "联系方式",
                                "icon": "formic_phone",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": true,
                                    "dataType": "string",
                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "privacyRules": { "frontLen": 3, "endLen": 3 },
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "phone",
                                    "remoteFunc": "func_1710295248000_23503",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "rules": [
                                    { "required": true, "message": "请填写" },
                                    {
                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                        "message": "联系方式格式不匹配"
                                    }
                                ],
                                "key": "1710295248000_23503",
                                "model": "input_1710295248000_23503",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "fixed": false
                            },
                            {
                                "type": "input",
                                "name": "电子信箱",
                                "icon": "formic_maill",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "maill",
                                    "remoteFunc": "func_1713357348000_33380",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "rules": [
                                    {
                                        "pattern": "^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$",
                                        "message": "电子信箱格式不匹配"
                                    }
                                ],
                                "key": "1713357348000_33380",
                                "model": "input_1713357348000_33380",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "subform",
                                "name": "紧急联系人",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "input",
                                                "name": "姓名",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357382000_73998",
                                                    "inputkey": "",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357382000_73998",
                                                "model": "input_1713357382000_73998",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "unWrite": false,
                                                "filter": true,
                                                "condition": {
                                                    "value": "",
                                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                                }
                                            },
                                            {
                                                "type": "input",
                                                "name": "联系方式",
                                                "icon": "formic_phone",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "privacyRules": { "frontLen": 3, "endLen": 3 },
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "patternType": "phone",
                                                    "remoteFunc": "func_1713357386000_13343",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "rules": [
                                                    {
                                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                        "message": "联系方式格式不匹配"
                                                    }
                                                ],
                                                "key": "1713357386000_13343",
                                                "model": "input_1713357386000_13343",
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "unWrite": false,
                                                "filter": true,
                                                "condition": {
                                                    "value": "",
                                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                                }
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加紧急联系人",
                                    "remoteFunc": "func_1713357377000_54758",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357377000_54758",
                                "model": "subform_1713357377000_54758",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "subform",
                                "name": "过往工作经历",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "input",
                                                "name": "就职单位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357440000_83164",
                                                    "inputkey": "",
                                                    "inputvalue": null,
                                                    "describe": "“就职单位”请填写劳动合同签约单位名称，若“受聘职位”所在单位与劳动合同签约单位名称不一致，请在“受聘职位”内予以体现（例：填表人与北京ABC集团公司签署劳动合同，但被派往地处上海，隶属于北京ABC集团公司的上海DEF公司，担任总经理职务。应按如下方式填写，就职单位：北京ABC集团公司；受聘职位：上海DEF公司总经理）。"
                                                },
                                                "key": "1713357440000_83164",
                                                "model": "input_1713357440000_83164",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "受聘职位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357445000_12798",
                                                    "inputkey": "",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357457000_56874",
                                                "model": "input_1713357457000_56874",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "任职开始时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713404734000_77391",
                                                    "inputkey": "",
                                                    "remote": "0",
                                                    "inputvalue": null
                                                },
                                                "key": "1713404734000_77391",
                                                "model": "date_1713404734000_77391",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "date",
                                                "name": "任职结束时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713404736000_56902",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713404736000_56902",
                                                "model": "date_1713404736000_56902",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加工作经历",
                                    "remoteFunc": "func_1713357423000_8372",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357423000_8372",
                                "model": "subform_1713357423000_8372",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "subform",
                                "name": "家庭信息",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "select",
                                                "name": "社会关系",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        {
                                                            "value": "母子/母女",
                                                            "key": "母子/母女",
                                                            "WidgetMapping": []
                                                        },
                                                        {
                                                            "value": "父子/父女",
                                                            "key": "父子/父女",
                                                            "WidgetMapping": []
                                                        },
                                                        { "value": "夫妻", "key": "夫妻", "WidgetMapping": [] },
                                                        {
                                                            "value": "子女",
                                                            "key": "子女",
                                                            "textColor": "#e27e6e",
                                                            "WidgetMapping": []
                                                        }
                                                    ],
                                                    "remote": "1",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1720062070000_45527",
                                                    "remoteKey": [
                                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                                        "input_1713347675000_62402"
                                                    ],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputkey": "",
                                                    "WidgetMap": false,
                                                    "inputvalue": null,
                                                    "sort": { "input_1713348065000_92353": 1 },
                                                    "query": {
                                                        "cond": [
                                                            {
                                                                "type": "select",
                                                                "field": "select_1713346954000_21809",
                                                                "method": "include_any",
                                                                "value": ["社会关系"]
                                                            },
                                                            {
                                                                "type": "radio",
                                                                "field": "radio_1713423930000_22069",
                                                                "method": "include_any",
                                                                "value": ["启用"]
                                                            }
                                                        ],
                                                        "rel": "and"
                                                    },
                                                    "linkOptions": [],
                                                    "sortModel": "input_1713348065000_92353",
                                                    "sortType": 1
                                                },
                                                "key": "1720062070000_45527",
                                                "model": "select_1720062070000_45527",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "社会关系",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357263000_47427",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357263000_47427",
                                                "model": "input_1713357263000_47427",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "姓名",
                                                "icon": "formic_fullname",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357301000_50163",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357301000_50163",
                                                "model": "input_1713357301000_50163",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "联系方式",
                                                "icon": "formic_phone",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "patternType": "phone",
                                                    "remoteFunc": "func_1713357305000_64141",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "rules": [
                                                    {
                                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                        "message": "联系方式格式不匹配"
                                                    }
                                                ],
                                                "key": "1713357305000_64141",
                                                "model": "input_1713357305000_64141",
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "工作单位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357314000_79445",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357437000_45906",
                                                "model": "input_1713357437000_45906",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "职位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357326000_18071",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357326000_18071",
                                                "model": "input_1713357326000_18071",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "出生日期",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1710295333000_45645",
                                                    "inputkey": "",
                                                    "remote": "0",
                                                    "inputvalue": null
                                                },
                                                "key": "1710295333000_45645",
                                                "model": "date_1710295333000_45645",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "input",
                                                "name": "备注",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1720076883000_44003",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1720076883000_44003",
                                                "model": "input_1720076883000_44003",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加家庭信息",
                                    "remoteFunc": "func_1710295312000_34934",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1710295312000_34934",
                                "model": "subform_1710295312000_34934",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "textarea",
                                "name": "备注",
                                "icon": "formic_duohangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": "",
                                    "required": false,
                                    "disabled": false,
                                    "msgCheck": false,
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "dataType": "string",
                                    "maxlength": "",
                                    "remoteFunc": "func_1713357469000_63438",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357469000_63438",
                                "model": "textarea_1713357469000_63438",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "like", "value": "包含" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "separator",
                                "name": "附件",
                                "icon": "formic_fengexian",
                                "options": {
                                    "pageData": {
                                        "color": "#DDDDDD",
                                        "linewidth": 1,
                                        "style": "solid"
                                    },
                                    "form": {
                                        "align": "center",
                                        "color": "rgba(109, 109, 109, 1)",
                                        "decoration": "none",
                                        "family": "Tahoma",
                                        "lineHeight": 2.75,
                                        "size": 15,
                                        "style": "normal",
                                        "weight": ""
                                    },
                                    "defaultValue": "#ffffff00",
                                    "width": "100%",
                                    "remoteFunc": "func_1713357477000_53960",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713357477000_53960",
                                "model": "separator_1713357477000_53960",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "uploading",
                                "name": "附件",
                                "icon": "formic_shangchuan",
                                "options": {
                                    "defaultValue": [],
                                    "tokenFunc": "funcGetToken",
                                    "domain": "",
                                    "disabled": false,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "length": 20,
                                    "fileSize": 200,
                                    "required": false,
                                    "remoteFunc": "func_1713406382000_70234",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "inputvalue": null
                                },
                                "key": "1713406382000_70234",
                                "model": "uploading_1713406382000_70234",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "uploading",
                                "name": "学历学位证书",
                                "icon": "formic_shangchuan",
                                "options": {
                                    "defaultValue": [],
                                    "tokenFunc": "funcGetToken",
                                    "domain": "",
                                    "disabled": false,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "length": 20,
                                    "fileSize": 200,
                                    "required": false,
                                    "remoteFunc": "func_1728911136000_53678",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1728911136000_53678",
                                "model": "uploading_1728911136000_53678",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                }
                            },
                            {
                                "type": "uploading",
                                "name": "身份证正反面照片",
                                "icon": "formic_shangchuan",
                                "options": {
                                    "defaultValue": [],
                                    "tokenFunc": "funcGetToken",
                                    "domain": "",
                                    "disabled": false,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "length": 20,
                                    "fileSize": 200,
                                    "required": false,
                                    "remoteFunc": "func_1728911182000_67570",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1728911182000_67570",
                                "model": "uploading_1728911182000_67570",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                }
                            },
                            {
                                "type": "uploading",
                                "name": "保密协议",
                                "icon": "formic_shangchuan",
                                "options": {
                                    "defaultValue": [],
                                    "tokenFunc": "funcGetToken",
                                    "domain": "",
                                    "disabled": false,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "length": 20,
                                    "fileSize": 200,
                                    "required": false,
                                    "remoteFunc": "func_1728911201000_78098",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1728911201000_78098",
                                "model": "uploading_1728911201000_78098",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                }
                            },
                            {
                                "type": "uploading",
                                "name": "竞业协议",
                                "icon": "formic_shangchuan",
                                "options": {
                                    "defaultValue": [],
                                    "tokenFunc": "funcGetToken",
                                    "domain": "",
                                    "disabled": false,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "length": 20,
                                    "fileSize": 200,
                                    "required": false,
                                    "remoteFunc": "func_1728911218000_66085",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1728911218000_66085",
                                "model": "uploading_1728911218000_66085",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                }
                            },
                            {
                                "type": "imgupload",
                                "name": "学历学位证书（废弃）",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 2,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710295459000_21445",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1710295524000_34857",
                                "model": "imgupload_1710295524000_34857",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "imgupload",
                                "name": "身份证正反面照片（废弃）",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 2,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710295459000_21445",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1710295459000_21445",
                                "model": "imgupload_1710295459000_21445",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "imgupload",
                                "name": "保密协议（废弃）",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 8,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710311227000_70164",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1710311232000_13178",
                                "model": "imgupload_1710311232000_13178",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "imgupload",
                                "name": "竞业协议（废弃）",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 8,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710311227000_70164",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "inputvalue": null
                                },
                                "key": "1710311227000_70164",
                                "model": "imgupload_1710311227000_70164",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "relationCondition": "and"
                            },
                            {
                                "type": "date",
                                "name": "离职日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1710295941000_54351",
                                "model": "date_1710295941000_54351",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "date",
                                "name": "退休日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713839214000_11945",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1713839214000_11945",
                                "model": "date_1713839214000_11945",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "input",
                                "name": "部门序列（排序使用）",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1718097070000_77293",
                                    "inputkey": ""
                                },
                                "key": "1718097070000_77293",
                                "model": "input_1718097070000_77293",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                }
                            },
                            {
                                "type": "radio",
                                "name": "是否党员",
                                "icon": "formic_danxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": "",
                                    "showLabel": false,
                                    "options": [
                                        { "value": "党员", "key": "党员" },
                                        { "value": "非党员", "key": "非党员" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1722928230000_24190",
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "disabled": false
                                },
                                "key": "1722928230000_24190",
                                "model": "radio_1722928230000_24190",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false,
                                "relationCondition": "and"
                            },
                            {
                                "type": "imgupload",
                                "name": "员工照片",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 1,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1725502742000_15000",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1725502742000_15000",
                                "model": "imgupload_1725502742000_15000",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "relationCondition": "and",
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                }
                            },
                            {
                                "name": "创建人",
                                "key": "create_user",
                                "model": "create_user",
                                "type": "input",
                                "options": { "dataType": "string" },
                                "read": true
                            },
                            {
                                "name": "创建时间",
                                "key": "create_time",
                                "model": "create_time",
                                "type": "date",
                                "options": { "dataType": "date" },
                                "read": true
                            },
                            {
                                "name": "更新时间",
                                "key": "update_time",
                                "model": "update_time",
                                "type": "date",
                                "options": { "dataType": "date" },
                                "read": true
                            }
                        ]
                    },
                    "isAssociationFilter": false,
                    "associationFilterList": [],
                    "customFileName": true,
                    "exportFileName": active.name&&active.name!='全部'?"信用公司-"+active.name+"员工":"信用公司员工",
                    "inParams": [],
                    "funcName": "customExport"
                },
            }
            if(active.deptId) {
                ele.event.inParams =  [
                    {
                        "name": "",
                        "propKey": "deparadio_1713405599000_3421",
                        "key": "1728994772000_22968",
                        "paramType": "custom",
                        "propName": "部门",
                        "type": "deparadio",
                        "method": "any",
                        "param": active.deptId
                    }
                ]
            }
            EventService.resolveClick(ele, null, context)
        }
    } else if (funcName === 'xgxxsh_xygs') {
        // 修改信息审核
        setStyle(`sortEle_${xygs.filtrateId}`, 'display', 'none')
        setStyle(`sortEle_${xygs.dynamicViewId}`, 'display', 'none')
        setStyle(`sortEle_${xygs.formTableViewId}`, 'display', 'block')
        setStyle(`sortEle_${xygs.operateBtnId}`, 'display', 'none')
        xygs.columnList.forEach(v => {
            setColor(v.id, v.id !== '1728897612000_11547' ? '#666' : globalColor, xygs.columnList)
        })
    } else if (xygs.tabEvent.includes(funcName)) {
        xygsRefreshData(context, funcName, EventService, _commonStore)
        opIds.forEach(v =>{
            setStyle(v, 'display', 'block')
        })
        _commonStore.setCustomerEventActiveBtn({type: 'xygs', value: funcName})
    } else if (xygs.headEvent.includes(funcName)) {
        _commonStore.setCustomerEventActive(funcName)
        xygsRefreshHeadData(context, funcName, EventService, _commonStore)
    } else if (funcName === 'initPage_xygs') {
        xygsInitPage(context, funcName, EventService, _commonStore)
    }
}
function xygsRefreshData(context, funcName, EventService, _commonStore) {
    const btn = xygs.btnList.find(item => item.eventName === funcName)
    if (btn) {
        let active = {
            deptId: btn.refreshValue,
            name: btn.value
        }
        _commonStore.setCustomerEventContainer(active)
        let conditionList = btn.refreshValue ? [
            {
                "field": "deparadio_1713405599000_3421",
                "method": "any",
                "type": "deparadio",
                "value": btn.refreshValue
            }
        ] : []
        EventService.proxy.bus.emit(xygs.refreshId, {
            type: "refreshList",
            conditionList: conditionList,
            pageNum: 1,
            pageSize: 12
        });
        xygs.btnList.forEach(v => {
            const btnEle = document.getElementById(v.id)
            if (v.id !== btn.id) {
                btnEle.classList.remove('btnActive')
            } else {
                btnEle.classList.add('btnActive')
            }
        })
        if (btn.eventName === 'all_xygs') {
            setStyle(`sortEle_${xygs.filtrateId}`, 'display', 'block')
            setStyle(`sortEle_${xygs.rowViewId}`, 'display', 'block')
            xygs.columnList.forEach(column => {
                setColor(column.id, column.id === '1728897612000_64748' ? globalColor : '#666', xygs.columnList)
            })
        } else {
            setStyle(`sortEle_${xygs.filtrateId}`, 'display', 'none')
            setStyle(`sortEle_${xygs.rowViewId}`, 'display', 'none')
        }
        _commonStore.setCustomerEventActive('qb_xygs')
        xygs.lines.forEach(v =>{
            if(funcName === 'all_xygs') {
                setStyle(v, 'display', 'block')
            } else {
                setStyle(v, 'display', 'none')
            }
        })
        setStyle(`sortEle_${xygs.dynamicViewId}`, 'display', 'block')
        setStyle(`sortEle_${xygs.formTableViewId}`, 'display', 'none')
        xygs.opIds.forEach(v =>{
            setStyle(v, 'display', 'block')
        })
    }
}

function xygsRefreshHeadData(context, funcName, EventService, _commonStore) {
    const btn = xygs.columnList.find(item => item.eventName === funcName) || xygs.columnList.find(item => item.eventName === _commonStore.customerEventActive)
    if (btn) {
        let conditionList = [
            {
                "field": "deparadio_1713405599000_3421",
                "method": "any",
                "type": "deparadio",
                "value": _commonStore.customerEventContainer && _commonStore.customerEventContainer.deptId ? _commonStore.customerEventContainer.deptId : "17,22,23,24,25,26,40,41"
            }
        ]
        if (btn.eventName !== 'qb_xygs') {
            conditionList.push({
                "field": "select_1713337276000_66931",
                "method": "equal",
                "type": "select",
                "value": btnValueMap[btn.value]
            })
        }
        EventService.proxy.bus.emit(xygs.refreshId, {
            type: "refreshList",
            conditionList: conditionList,
            pageNum: 1,
            pageSize: 12
        });
        xygs.columnList.forEach(v => {
            setColor(v.id, v.id !== btn.id ? '#666' : globalColor, xygs.columnList)
        })
        setStyle(`sortEle_${xygs.dynamicViewId}`, 'display', 'block')
        setStyle(`sortEle_${xygs.formTableViewId}`, 'display', 'none')
        setStyle(`sortEle_${xygs.filtrateId}`, 'display', 'block')
        opIds.forEach(v =>{
            setStyle(v, 'display', btn.eventName === 'qb_xygs' ? 'block' : 'none')
        })
    }
}

function xygsInitPage(context, funcName, EventService, _commonStore) {
    setTimeout(() => {
        setStyle(`sortEle_${xygs.formTableViewId}`, 'display', 'none')
        xygs.btnList.forEach(v =>{
            const btnEle = document.getElementById(v.id)
            if(btnEle) {
                v.id != '1728896302000_48545' ? btnEle.classList.remove('btnActive') : btnEle.classList.add('btnActive')
            }
        })
        setColor('1728897612000_64748', globalColor, xygs.columnList)
        let activeKey = _commonStore.customerEventActiveBtn['xygs'] || "all_xygs"
        if(!_commonStore.customerEventActiveBtn['xygs']) {
            _commonStore.setCustomerEventActiveBtn({type: 'xygs', value: "all_xygs"})
        }
        xygsRefreshData(context, activeKey, EventService, _commonStore)
    }, 100)

}

/**
 * 国华事件
 */

function ghEvent(context, funcName, EventService, _commonStore) {
    if (funcName === 'addUser_gh') {
        let active = _commonStore.customerEventContainer
        if (active) {
            if (active.deptId) {
                navigateTo('XinZengYuanGong', {p_deptId: active.deptId})
            } else {
                navigateTo('XinZengYuanGong', {})
            }
        }
    } else if(funcName === 'customExport_gh') {
        let active = _commonStore.customerEventContainer
        if(active && active.hasOwnProperty('deptId')) {
            let ele = {
                "event": {
                    "type": 65,
                    "formObj": {
                        "dbName": "vs3b4c151p04",
                        "systemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                        "systemName": "再担保OA管理系统",
                        "formGrounpId": "b49e1cca-0a87-4632-8165-421cf9c65258",
                        "formId": "803b2b0e-842c-4dd9-99bb-77e7645c6022",
                        "formName": "员工档案1_0",
                        "formType": "form",
                        "authId": "2419712a-1851-42d8-9aaa-6b64b17e0737",
                        "formDataType": "default",
                        "detailTableRuleId": "origin",
                        "formProp": [
                            {
                                "name": "主键",
                                "key": "_id",
                                "model": "_id",
                                "type": "_id",
                                "read": true
                            },
                            {
                                "type": "input",
                                "name": "员工ID",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713336410000_72858",
                                    "inputkey": ""
                                },
                                "key": "1713336410000_72858",
                                "model": "input_1713336410000_72858",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and",
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "魔点门禁对应人员ID",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1720492365000_39225",
                                    "inputkey": ""
                                },
                                "key": "1720492365000_39225",
                                "model": "input_1720492365000_39225",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "deparadio",
                                "name": "部门",
                                "icon": "formic_bmdanxuan",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "remote": "0",
                                    "sinmulti": false,
                                    "statswe": 0,
                                    "dataType": "string",
                                    "required": true,
                                    "remoteFunc": "func_1713405599000_3421",
                                    "inputkey": "",
                                    "editableLink": true
                                },
                                "key": "1713405599000_3421",
                                "model": "deparadio_1713405599000_3421",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "dataRange": "",
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "any", "value": "等于任何一个" }
                                },
                                "queryConditon": [
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "部门类型",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        {
                                            "value": "两级班子成员",
                                            "key": "两级班子成员",
                                            "textColor": "#e27e6e"
                                        },
                                        { "value": "前台部门", "key": "前台部门" },
                                        { "value": "中台部门", "key": "中台部门" },
                                        { "value": "后台部门", "key": "后台部门" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1721288176000_81973",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1721288176000_81973",
                                "model": "select_1721288176000_81973",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "层级",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": {
                                        "value": "中级管理层",
                                        "key": "中级管理层",
                                        "textColor": "#e27e6e"
                                    },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "高层管理岗", "key": "高层管理岗" },
                                        { "value": "中层管理岗", "key": "中层管理岗" },
                                        { "value": "技术序列", "key": "技术序列" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337159000_85091",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null
                                },
                                "key": "1713337159000_85091",
                                "model": "select_1713337159000_85091",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "职级",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "下拉框1", "key": "下拉框1" },
                                        { "value": "下拉框2", "key": "下拉框2" },
                                        { "value": "下拉框3", "key": "下拉框3" }
                                    ],
                                    "remote": "2",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1716723628000_76522",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "sort": {},
                                    "rel": "and",
                                    "globalFilter": true,
                                    "logicFilter": false,
                                    "screen": [
                                        {
                                            "targetModel": "deparadio_1716454449000_32187",
                                            "tatgetType": "deparadio",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "deparadio_1713405599000_3421",
                                            "rule": "sourcetab",
                                            "sourceName": ""
                                        },
                                        {
                                            "targetModel": "select_1713335224000_64033",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1713337159000_85091",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        }
                                    ],
                                    "linkage": {
                                        "linkedSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "linkedForm": {
                                            "fId": "7a16032a-322c-440d-925b-dd0856fea76e",
                                            "fName": "职级管理1.0",
                                            "fSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                            "fSystemName": "再担保OA管理系统",
                                            "fUserName": "vs3b4c151p04"
                                        },
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {
                                            "icon": "formic_danhangwenben",
                                            "key": "1716451374000_5165",
                                            "model": "input_1716451374000_5165",
                                            "name": "职级",
                                            "type": "input"
                                        }
                                    },
                                    "inputvalue": null
                                },
                                "key": "1716723628000_76522",
                                "model": "select_1716723628000_76522",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "职位",
                                "icon": "formic_fuxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": [],
                                    "showLabel": false,
                                    "options": [
                                        { "value": "选项1", "key": "选项1" },
                                        { "value": "选项2", "key": "选项2" },
                                        { "value": "选项3", "key": "选项3" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "2",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337069000_94692",
                                    "dataType": "Array",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "7a16032a-322c-440d-925b-dd0856fea76e",
                                        "input_1713335233000_73409",
                                        "vs3b4c151p04"
                                    ],
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "radio",
                                                "field": "radio_1713335238000_4862",
                                                "method": "equal",
                                                "value": "启用"
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "linkOptions": [],
                                    "WidgetMap": false,
                                    "inputkey": "",
                                    "openTransfer": false,
                                    "openSelect": true,
                                    "inputvalue": null,
                                    "sort": { "input_1713335269000_8766": 1 },
                                    "sortModel": "",
                                    "sortType": 1,
                                    "describe": "",
                                    "globalFilter": true,
                                    "logicFilter": false,
                                    "screen": [
                                        {
                                            "targetModel": "deparadio_1716722657000_97251",
                                            "tatgetType": "deparadio",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "deparadio_1713405599000_3421",
                                            "rule": "sourcetab",
                                            "sourceName": ""
                                        },
                                        {
                                            "targetModel": "select_1716722657000_20259",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1713337159000_85091",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        },
                                        {
                                            "targetModel": "select_1716722709000_86470",
                                            "tatgetType": "select",
                                            "method": "equal",
                                            "multiple": false,
                                            "source": "select_1716723628000_76522",
                                            "rule": "sourcetab",
                                            "sourceName": "",
                                            "valueType": "value",
                                            "mainType": "value"
                                        }
                                    ],
                                    "linkage": {
                                        "linkedSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "linkedForm": {
                                            "fId": "d2ef45f0-1b9c-4493-9999-c66fd3ff3f89",
                                            "fName": "职位管理1.0",
                                            "fSystemId": "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                            "fSystemName": "再担保OA管理系统",
                                            "fUserName": "vs3b4c151p04"
                                        },
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {
                                            "icon": "formic_danhangwenben",
                                            "key": "1716722657000_6174",
                                            "model": "input_1716722657000_6174",
                                            "name": "职位",
                                            "type": "input"
                                        }
                                    },
                                    "rel": "and"
                                },
                                "key": "1713337069000_94692",
                                "model": "checkbox_1713337069000_94692",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "党内职务",
                                "icon": "formic_fuxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": [],
                                    "showLabel": false,
                                    "options": [
                                        { "value": "选项1", "key": "选项1" },
                                        { "value": "选项2", "key": "选项2" },
                                        { "value": "选项3", "key": "选项3" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1718712223000_75916",
                                    "dataType": "Array",
                                    "inputkey": "",
                                    "sort": { "input_1718712011000_16938": 1 },
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "46b981b9-58c0-48eb-8bab-e0168e0a4aa1",
                                        "input_1718711923000_13084"
                                    ],
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "radio",
                                                "field": "radio_1718711931000_5964",
                                                "method": "include_any",
                                                "value": ["启用"]
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "sortModel": "input_1718712011000_16938",
                                    "sortType": 1,
                                    "openSelect": true
                                },
                                "key": "1718712223000_75916",
                                "model": "checkbox_1718712223000_75916",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "人员类型",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "职工", "key": "职工", "WidgetMapping": [] },
                                        { "value": "外包", "key": "外包" },
                                        { "value": "试用期", "key": "试用期", "textColor": "#818eec" },
                                        { "value": "实习生", "key": "实习生" },
                                        {
                                            "value": "其他",
                                            "key": "其他",
                                            "textColor": "#818eec",
                                            "WidgetMapping": ["input_1714112248000_7992"]
                                        }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713337276000_66931",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null,
                                    "WidgetMap": true
                                },
                                "key": "1713337276000_66931",
                                "model": "select_1713337276000_66931",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "其它人员类型",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1714112248000_7992",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1714112248000_7992",
                                "model": "input_1714112248000_7992",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "外派情况",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": { "value": "未外派", "key": "未外派" },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "未外派", "key": "未外派" },
                                        { "value": "外派", "key": "外派" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713343769000_97275",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "inputvalue": null
                                },
                                "key": "1713343769000_97275",
                                "model": "select_1713343769000_97275",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "姓名",
                                "icon": "formic_fullname",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": true,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713443242000_93791",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713443242000_93791",
                                "model": "input_1713443242000_93791",
                                "rules": [{ "required": true, "message": "请填写" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "like", "value": "包含" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "userradio",
                                "name": "员工",
                                "icon": "formic_cydanxuan",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "remote": "0",
                                    "sinmulti": false,
                                    "statswe": 2,
                                    "dataType": "string",
                                    "required": false,
                                    "remoteFunc": "func_1710295237000_55445",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1710295237000_55445",
                                "model": "userradio_1710295237000_55445",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "any", "value": "等于任何一个" }
                                },
                                "fixed": true,
                                "queryConditon": [
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "人员类别",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "下拉框1", "key": "下拉框1" },
                                        { "value": "下拉框2", "key": "下拉框2" },
                                        { "value": "下拉框3", "key": "下拉框3" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1721289627000_18944",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "d414843d-1cbe-46db-be33-8adeaa7a0615",
                                        "input_1721207280000_90534"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "sort": { "input_1721207337000_83958": 1 },
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1721207259000_38625",
                                                "method": "include_any",
                                                "value": ["人员类别"]
                                            },
                                            {
                                                "type": "radio",
                                                "field": "radio_1721207289000_40731",
                                                "method": "include_any",
                                                "value": ["正常"]
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "sortModel": "input_1721207337000_83958",
                                    "sortType": 1
                                },
                                "key": "1721289627000_18944",
                                "model": "select_1721289627000_18944",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "人员异动情况",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "date",
                                                "name": "异动时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713344379000_61853",
                                                    "inputvalue": null,
                                                    "inputkey": "",
                                                    "remote": "0"
                                                },
                                                "key": "1713344379000_61853",
                                                "model": "date_1713344379000_61853",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "异动前岗位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1716456217000_19888",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1716456217000_19888",
                                                "model": "input_1716456217000_19888",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "select",
                                                "name": "异动方式",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        { "value": "调动", "key": "调动" },
                                                        { "value": "转岗", "key": "转岗" },
                                                        { "value": "晋升", "key": "晋升" },
                                                        {
                                                            "value": "入职",
                                                            "key": "入职",
                                                            "textColor": "#e27e6e"
                                                        },
                                                        {
                                                            "value": "转正",
                                                            "key": "转正",
                                                            "textColor": "#818eec"
                                                        },
                                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713344406000_75298",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713344406000_75298",
                                                "model": "select_1713344406000_75298",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "input",
                                                "name": "异动后岗位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1716456219000_10827",
                                                    "inputkey": "",
                                                    "inputvalue": null,
                                                    "format": "HH:mm:ss"
                                                },
                                                "key": "1716456219000_10827",
                                                "model": "input_1716456219000_10827",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加异动记录",
                                    "remoteFunc": "func_1713344369000_27587",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713344369000_27587",
                                "model": "subform_1713344369000_27587",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "任现岗位时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713345131000_79189",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713345155000_12023",
                                "model": "date_1713345155000_12023",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "任现岗位年限",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 2,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1713345160000_27739",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "f0d948e5-331d-401d-a6c2-dd2869ade614",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715743921000_92445",
                                                "name": "riqi",
                                                "model": "date_1713345155000_12023",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "nianXian" }],
                                        "outputKey": "nianXian"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    }
                                },
                                "key": "1713345160000_27739",
                                "model": "input_1713345160000_27739",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "任现职级时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713345131000_79189",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713345131000_79189",
                                "model": "date_1713345131000_79189",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "radio",
                                "name": "性别",
                                "icon": "formic_gender",
                                "options": {
                                    "inline": true,
                                    "lineWidth": "100%",
                                    "defaultValue": {},
                                    "showLabel": false,
                                    "options": [
                                        { "value": "男", "key": "男" },
                                        { "value": "女", "key": "女" }
                                    ],
                                    "required": true,
                                    "width": "",
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "patternType": "gender",
                                    "remoteFunc": "func_1710295256000_60786",
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1710295256000_60786",
                                "model": "radio_1710295256000_60786",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "民族",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "调动", "key": "调动" },
                                        { "value": "转岗", "key": "转岗" },
                                        { "value": "晋升", "key": "晋升" },
                                        { "value": "入职", "key": "入职", "textColor": "#e27e6e" },
                                        { "value": "转正", "key": "转正", "textColor": "#818eec" },
                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713347090000_54579",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                        "input_1713347675000_62402"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1713346954000_21809",
                                                "method": "include_any",
                                                "value": ["民族"]
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "other": true,
                                    "inputvalue": null,
                                    "format": "HH:mm:ss",
                                    "sort": { "input_1713348065000_92353": 1 },
                                    "sortModel": "input_1713348065000_92353",
                                    "sortType": 1
                                },
                                "key": "1713348217000_64022",
                                "model": "select_1713348217000_64022",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "政治面貌",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "调动", "key": "调动" },
                                        { "value": "转岗", "key": "转岗" },
                                        { "value": "晋升", "key": "晋升" },
                                        { "value": "入职", "key": "入职", "textColor": "#e27e6e" },
                                        { "value": "转正", "key": "转正", "textColor": "#818eec" },
                                        { "value": "离职", "key": "离职", "textColor": "#cb5075" }
                                    ],
                                    "remote": "1",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713347090000_54579",
                                    "remoteKey": [
                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                        "input_1713347675000_62402"
                                    ],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "query": {
                                        "cond": [
                                            {
                                                "type": "select",
                                                "field": "select_1713346954000_21809",
                                                "method": "include_any",
                                                "value": ["政治面貌"]
                                            }
                                        ],
                                        "rel": "and"
                                    },
                                    "other": true,
                                    "inputvalue": null,
                                    "format": "HH:mm:ss",
                                    "sort": { "input_1713348065000_92353": 1 },
                                    "sortModel": "input_1713348065000_92353",
                                    "sortType": 1
                                },
                                "key": "1713347090000_54579",
                                "model": "select_1713347090000_54579",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false,
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "婚姻状况",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "未婚", "key": "未婚" },
                                        { "value": "已婚", "key": "已婚" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713348289000_30889",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "other": true,
                                    "format": "HH:mm:ss",
                                    "inputvalue": null
                                },
                                "key": "1713348289000_30889",
                                "model": "select_1713348289000_30889",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "出生年月",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295261000_88575",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1710295261000_88575",
                                "model": "date_1710295261000_88575",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "年龄",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710726288000_53177",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "042d1932-e81b-4a84-9f38-a5f08a3b2106",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715743600000_92421",
                                                "name": "birthDay",
                                                "model": "date_1710295261000_88575",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "nianLing" }],
                                        "outputKey": "nianLing"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    }
                                },
                                "key": "1710726288000_53177",
                                "model": "input_1710726288000_53177",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "年龄区段",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "25岁及以下", "key": "25岁及以下" },
                                        { "value": "25-35岁", "key": "25-35岁" },
                                        { "value": "35-45岁", "key": "35-45岁" },
                                        { "value": "45岁以上", "key": "45岁以上", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1719053121000_37628",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1719053121000_37628",
                                "model": "select_1719053121000_37628",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "身份证号",
                                "icon": "formic_idCard",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "idCard",
                                    "remoteFunc": "func_1713348337000_15601",
                                    "inputkey": ""
                                },
                                "rules": [
                                    {
                                        "pattern": "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)",
                                        "message": "身份证号格式不匹配"
                                    }
                                ],
                                "key": "1713348337000_15601",
                                "model": "input_1713348337000_15601",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "户籍地址（废弃）",
                                "icon": "formic_dizhi",
                                "options": {
                                    "addressType": "string",
                                    "width": "60%",
                                    "address": {
                                        "pname": {},
                                        "cname": {},
                                        "bname": {},
                                        "detail_address": ""
                                    },
                                    "required": false,
                                    "remote": "0",
                                    "disabled": false,
                                    "street": true,
                                    "dataType": "Object",
                                    "lineWidth": "100%",
                                    "appAutoFill": false,
                                    "remoteFunc": "func_1710295375000_22532",
                                    "inputkey": "",
                                    "isSelectSmallLevel": false
                                },
                                "key": "1713354784000_4253",
                                "model": "address_1713354784000_4253",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "belong_to", "value": "属于" }
                                },
                                "relationCondition": "and",
                                "queryConditon": [
                                    { "key": "belong_to", "value": "属于" },
                                    { "key": "not_of", "value": "不属于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "户籍地址",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1716516549000_25789",
                                    "inputkey": ""
                                },
                                "key": "1716516549000_25789",
                                "model": "input_1716516549000_25789",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "户口性质",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "本市城镇", "key": "本市城镇" },
                                        { "value": "本市农村", "key": "本市农村" },
                                        { "value": "外阜城镇", "key": "外阜城镇" },
                                        { "value": "外阜农村", "key": "外阜农村", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713348457000_26052",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713348457000_26052",
                                "model": "select_1713348457000_26052",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "现住地址",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1716516552000_6252",
                                    "inputkey": ""
                                },
                                "key": "1716516552000_6252",
                                "model": "input_1716516552000_6252",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "现住地址（废弃）",
                                "icon": "formic_dizhi",
                                "options": {
                                    "addressType": "string",
                                    "width": "60%",
                                    "address": {
                                        "pname": {},
                                        "cname": {},
                                        "bname": {},
                                        "detail_address": ""
                                    },
                                    "required": false,
                                    "remote": "0",
                                    "disabled": false,
                                    "street": true,
                                    "dataType": "Object",
                                    "lineWidth": "100%",
                                    "appAutoFill": false,
                                    "remoteFunc": "func_1710295375000_22532",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1710295375000_22532",
                                "model": "address_1710295375000_22532",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "belong_to", "value": "属于" }
                                },
                                "queryConditon": [
                                    { "key": "belong_to", "value": "属于" },
                                    { "key": "not_of", "value": "不属于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "籍贯",
                                "icon": "formic_dizhi",
                                "options": {
                                    "addressType": "string",
                                    "width": "60%",
                                    "address": {
                                        "pname": {},
                                        "cname": {},
                                        "bname": {},
                                        "detail_address": ""
                                    },
                                    "required": false,
                                    "remote": "0",
                                    "disabled": false,
                                    "street": 3,
                                    "dataType": "Object",
                                    "lineWidth": "100%",
                                    "appAutoFill": false,
                                    "remoteFunc": "func_1713354862000_75349",
                                    "inputkey": ""
                                },
                                "key": "1713354862000_75349",
                                "model": "address_1713354862000_75349",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "belong_to", "value": "属于" }
                                },
                                "queryConditon": [
                                    { "key": "belong_to", "value": "属于" },
                                    { "key": "not_of", "value": "不属于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "最高学历",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": true,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "专科", "key": "专科", "textColor": "#e27e6e" },
                                        { "value": "本科", "key": "本科" },
                                        { "value": "硕士研究生", "key": "硕士研究生" },
                                        { "value": "博士研究生", "key": "博士研究生" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713355509000_64384",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713356717000_60587",
                                "model": "select_1713356717000_60587",
                                "rules": [{ "required": true, "message": "请选择" }],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "最高学位",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": {
                                        "value": "双学士",
                                        "key": "双学士",
                                        "textColor": "#818eec"
                                    },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "双学士", "key": "双学士", "textColor": "#818eec" },
                                        { "value": "学士", "key": "学士" },
                                        { "value": "硕士", "key": "硕士" },
                                        { "value": "博士", "key": "博士" },
                                        { "value": "博士后", "key": "博士后", "textColor": "#e27e6e" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713355509000_64384",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713356722000_89567",
                                "model": "select_1713356722000_89567",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "末次学习专业",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842905000_11617",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1713842905000_11617",
                                "model": "input_1713842905000_11617",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "末次毕业院校",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842903000_26187",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1713842903000_26187",
                                "model": "input_1713842903000_26187",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "末次毕业时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "month",
                                    "format": "yyyy-MM",
                                    "valueFormat": "yyyy-MM",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713356786000_87249",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1713356786000_87249",
                                "model": "date_1713356786000_87249",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "过往学历",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "select",
                                                "name": "学历",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        {
                                                            "value": "高中",
                                                            "key": "高中",
                                                            "textColor": "#e27e6e"
                                                        },
                                                        {
                                                            "value": "专科",
                                                            "key": "专科",
                                                            "textColor": "#818eec"
                                                        },
                                                        { "value": "本科", "key": "本科" },
                                                        { "value": "硕士研究生", "key": "硕士研究生" },
                                                        { "value": "博士研究生", "key": "博士研究生" }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713356719000_29460",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713356719000_29460",
                                                "model": "select_1713356719000_29460",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "select",
                                                "name": "学位",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        { "value": "学士", "key": "学士" },
                                                        { "value": "硕士", "key": "硕士" },
                                                        { "value": "博士", "key": "博士" },
                                                        {
                                                            "value": "双学士",
                                                            "key": "双学士",
                                                            "textColor": "#e27e6e"
                                                        }
                                                    ],
                                                    "remote": "0",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1713356729000_80085",
                                                    "remoteKey": [],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1713356729000_80085",
                                                "model": "select_1713356729000_80085",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "毕业院校",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713842918000_73506",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713842918000_73506",
                                                "model": "input_1713842918000_73506",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "input",
                                                "name": "学习专业",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713842913000_97783",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713842913000_97783",
                                                "model": "input_1713842913000_97783",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "毕业时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "month",
                                                    "format": "yyyy-MM",
                                                    "valueFormat": "yyyy-MM",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713356775000_48022",
                                                    "inputvalue": null,
                                                    "inputkey": "",
                                                    "remote": "0"
                                                },
                                                "key": "1713356782000_5732",
                                                "model": "date_1713356782000_5732",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加过往学历",
                                    "remoteFunc": "func_1713355488000_91179",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713355488000_91179",
                                "model": "subform_1713355488000_91179",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "初次参加工作日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1710295917000_86225",
                                "model": "date_1710295917000_86225",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "工作年限",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710295953000_78807",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "describe": "",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "de1f8189-b63f-43fb-a0a8-968c9a0d4577",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715744162000_11873",
                                                "name": "ruzhiDay",
                                                "model": "date_1710295917000_86225",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "siLing" }],
                                        "outputKey": "siLing"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    }
                                },
                                "key": "1710295963000_85670",
                                "model": "input_1710295963000_85670",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "职称",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842895000_88149",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713842895000_88149",
                                "model": "input_1713842895000_88149",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "职称专业",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842887000_93620",
                                    "inputkey": ""
                                },
                                "key": "1713842887000_93620",
                                "model": "input_1713842887000_93620",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "职业资格",
                                "icon": "formic_danhangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "msgCheck": false,
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "remoteFunc": "func_1713842889000_63540",
                                    "inputkey": ""
                                },
                                "key": "1713842889000_63540",
                                "model": "input_1713842889000_63540",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "入职日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1713357219000_67724",
                                "model": "date_1713357219000_67724",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "加入国资系统时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0",
                                    "inputvalue": null
                                },
                                "key": "1710295929000_83842",
                                "model": "date_1710295929000_83842",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "加入再担保系统时间",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1724294603000_41327",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1724294603000_41327",
                                "model": "date_1724294603000_41327",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "司龄",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "1",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 2,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1710295953000_78807",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "describe": "单位：年",
                                    "inputvalue": null,
                                    "globalFilter": false,
                                    "logicFilter": true,
                                    "logicId": "de1f8189-b63f-43fb-a0a8-968c9a0d4577",
                                    "logicInfo": {
                                        "paramList": [
                                            {
                                                "id": "1715744079000_83254",
                                                "name": "ruzhiDay",
                                                "model": "date_1713357219000_67724",
                                                "isSub": false
                                            }
                                        ],
                                        "outputParams": [{ "key": "siLing" }],
                                        "outputKey": "siLing"
                                    },
                                    "linkage": {
                                        "linkedSystemId": "",
                                        "linkedForm": {},
                                        "judgeCurrent": {},
                                        "judgeLinkedlist": {},
                                        "linkedFormfield": {}
                                    },
                                    "rel": "and"
                                },
                                "key": "1710295953000_78807",
                                "model": "input_1710295953000_78807",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "relationCondition": "and",
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "司龄区段",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": "",
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "0-5年", "key": "0-5年" },
                                        { "value": "5-10年", "key": "5-10年" },
                                        { "value": "10-15年", "key": "10-15年" },
                                        { "value": "15-20年", "key": "15-20年", "textColor": "#e27e6e" },
                                        {
                                            "value": "20年以上",
                                            "key": "20年以上",
                                            "textColor": "#818eec"
                                        },
                                        { "value": "未维护", "key": "未维护", "textColor": "#cb5075" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1719053003000_37095",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1719053003000_37095",
                                "model": "select_1719053003000_37095",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false,
                                "relationCondition": "and",
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "试用期开始日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "key": "1710315644000_1955",
                                "model": "date_1710315644000_1955",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "试用期结束日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": ""
                                },
                                "key": "1710295640000_42830",
                                "model": "date_1710295640000_42830",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "转正日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": ""
                                },
                                "key": "1710295631000_5522",
                                "model": "date_1710295631000_5522",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "select",
                                "name": "就职状态",
                                "icon": "formic_xiala",
                                "options": {
                                    "defaultValue": { "value": "在职", "key": "在职" },
                                    "multiple": false,
                                    "disabled": false,
                                    "clearable": false,
                                    "placeholder": "",
                                    "required": false,
                                    "showLabel": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "options": [
                                        { "value": "在职", "key": "在职" },
                                        { "value": "离职", "key": "离职" },
                                        { "value": "退休", "key": "退休" }
                                    ],
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1713839264000_65529",
                                    "remoteKey": [],
                                    "selectsScreen": false,
                                    "enablePopup": false,
                                    "dataType": "Object",
                                    "inputkey": "",
                                    "format": "HH:mm:ss",
                                    "inputvalue": null
                                },
                                "key": "1713839264000_65529",
                                "model": "select_1713839264000_65529",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "联系方式",
                                "icon": "formic_phone",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": true,
                                    "dataType": "string",
                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "privacyRules": { "frontLen": 3, "endLen": 3 },
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "phone",
                                    "remoteFunc": "func_1710295248000_23503",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "rules": [
                                    { "required": true, "message": "请填写" },
                                    {
                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                        "message": "联系方式格式不匹配"
                                    }
                                ],
                                "key": "1710295248000_23503",
                                "model": "input_1710295248000_23503",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": false,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "fixed": false,
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "电子信箱",
                                "icon": "formic_maill",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "string",
                                    "pattern": "^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "maxlength": "",
                                    "privacy": false,
                                    "getPhoneNumber": false,
                                    "getInvoiceTitle": false,
                                    "patternType": "maill",
                                    "remoteFunc": "func_1713357348000_33380",
                                    "inputkey": "",
                                    "inputvalue": null
                                },
                                "rules": [
                                    {
                                        "pattern": "^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$",
                                        "message": "电子信箱格式不匹配"
                                    }
                                ],
                                "key": "1713357348000_33380",
                                "model": "input_1713357348000_33380",
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "紧急联系人",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "input",
                                                "name": "姓名",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357382000_73998",
                                                    "inputkey": "",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357382000_73998",
                                                "model": "input_1713357382000_73998",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "unWrite": false,
                                                "filter": true,
                                                "condition": {
                                                    "value": "",
                                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                                }
                                            },
                                            {
                                                "type": "input",
                                                "name": "联系方式",
                                                "icon": "formic_phone",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "privacyRules": { "frontLen": 3, "endLen": 3 },
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "patternType": "phone",
                                                    "remoteFunc": "func_1713357386000_13343",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "rules": [
                                                    {
                                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                        "message": "联系方式格式不匹配"
                                                    }
                                                ],
                                                "key": "1713357386000_13343",
                                                "model": "input_1713357386000_13343",
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "unWrite": false,
                                                "filter": true,
                                                "condition": {
                                                    "value": "",
                                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                                }
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加紧急联系人",
                                    "remoteFunc": "func_1713357377000_54758",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357377000_54758",
                                "model": "subform_1713357377000_54758",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "过往工作经历",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "input",
                                                "name": "就职单位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357440000_83164",
                                                    "inputkey": "",
                                                    "inputvalue": null,
                                                    "describe": "“就职单位”请填写劳动合同签约单位名称，若“受聘职位”所在单位与劳动合同签约单位名称不一致，请在“受聘职位”内予以体现（例：填表人与北京ABC集团公司签署劳动合同，但被派往地处上海，隶属于北京ABC集团公司的上海DEF公司，担任总经理职务。应按如下方式填写，就职单位：北京ABC集团公司；受聘职位：上海DEF公司总经理）。"
                                                },
                                                "key": "1713357440000_83164",
                                                "model": "input_1713357440000_83164",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "受聘职位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357445000_12798",
                                                    "inputkey": "",
                                                    "format": "HH:mm:ss",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357457000_56874",
                                                "model": "input_1713357457000_56874",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "任职开始时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713404734000_77391",
                                                    "inputkey": "",
                                                    "remote": "0",
                                                    "inputvalue": null
                                                },
                                                "key": "1713404734000_77391",
                                                "model": "date_1713404734000_77391",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true,
                                                "relationCondition": "and"
                                            },
                                            {
                                                "type": "date",
                                                "name": "任职结束时间",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1713404736000_56902",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713404736000_56902",
                                                "model": "date_1713404736000_56902",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加工作经历",
                                    "remoteFunc": "func_1713357423000_8372",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357423000_8372",
                                "model": "subform_1713357423000_8372",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "subform",
                                "name": "家庭信息",
                                "icon": "formic_zibiaodan",
                                "columns": [
                                    {
                                        "span": 12,
                                        "list": [
                                            {
                                                "type": "select",
                                                "name": "社会关系",
                                                "icon": "formic_xiala",
                                                "options": {
                                                    "defaultValue": "",
                                                    "multiple": false,
                                                    "disabled": false,
                                                    "clearable": false,
                                                    "placeholder": "",
                                                    "required": false,
                                                    "showLabel": false,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "options": [
                                                        {
                                                            "value": "母子/母女",
                                                            "key": "母子/母女",
                                                            "WidgetMapping": []
                                                        },
                                                        {
                                                            "value": "父子/父女",
                                                            "key": "父子/父女",
                                                            "WidgetMapping": []
                                                        },
                                                        { "value": "夫妻", "key": "夫妻", "WidgetMapping": [] },
                                                        {
                                                            "value": "子女",
                                                            "key": "子女",
                                                            "textColor": "#e27e6e",
                                                            "WidgetMapping": []
                                                        }
                                                    ],
                                                    "remote": "1",
                                                    "remoteOptions": [],
                                                    "props": { "value": "value", "label": "label" },
                                                    "remoteFunc": "func_1720062070000_45527",
                                                    "remoteKey": [
                                                        "5d5ff223-e57b-4bfe-90ed-5069099ffc09",
                                                        "098aa522-3553-4091-b815-6ce4f6c41fcd",
                                                        "input_1713347675000_62402"
                                                    ],
                                                    "selectsScreen": false,
                                                    "enablePopup": false,
                                                    "dataType": "Object",
                                                    "inputkey": "",
                                                    "WidgetMap": false,
                                                    "inputvalue": null,
                                                    "sort": { "input_1713348065000_92353": 1 },
                                                    "query": {
                                                        "cond": [
                                                            {
                                                                "type": "select",
                                                                "field": "select_1713346954000_21809",
                                                                "method": "include_any",
                                                                "value": ["社会关系"]
                                                            },
                                                            {
                                                                "type": "radio",
                                                                "field": "radio_1713423930000_22069",
                                                                "method": "include_any",
                                                                "value": ["启用"]
                                                            }
                                                        ],
                                                        "rel": "and"
                                                    },
                                                    "linkOptions": [],
                                                    "sortModel": "input_1713348065000_92353",
                                                    "sortType": 1
                                                },
                                                "key": "1720062070000_45527",
                                                "model": "select_1720062070000_45527",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "社会关系",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357263000_47427",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357263000_47427",
                                                "model": "input_1713357263000_47427",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "姓名",
                                                "icon": "formic_fullname",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357301000_50163",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357301000_50163",
                                                "model": "input_1713357301000_50163",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "联系方式",
                                                "icon": "formic_phone",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "patternType": "phone",
                                                    "remoteFunc": "func_1713357305000_64141",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "rules": [
                                                    {
                                                        "pattern": "^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$",
                                                        "message": "联系方式格式不匹配"
                                                    }
                                                ],
                                                "key": "1713357305000_64141",
                                                "model": "input_1713357305000_64141",
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "工作单位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357314000_79445",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357437000_45906",
                                                "model": "input_1713357437000_45906",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "职位",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1713357326000_18071",
                                                    "inputkey": "",
                                                    "inputvalue": null
                                                },
                                                "key": "1713357326000_18071",
                                                "model": "input_1713357326000_18071",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "date",
                                                "name": "出生日期",
                                                "icon": "formic_riqi",
                                                "options": {
                                                    "defaultValue": "",
                                                    "readonly": false,
                                                    "disabled": false,
                                                    "editable": true,
                                                    "clearable": true,
                                                    "placeholder": "",
                                                    "startPlaceholder": "",
                                                    "endPlaceholder": "",
                                                    "type": "date",
                                                    "format": "yyyy-MM-dd",
                                                    "valueFormat": "yyyy-MM-dd",
                                                    "timestamp": false,
                                                    "required": true,
                                                    "width": "",
                                                    "lineWidth": "100%",
                                                    "dataType": "date",
                                                    "remoteFunc": "func_1710295333000_45645",
                                                    "inputkey": "",
                                                    "remote": "0",
                                                    "inputvalue": null
                                                },
                                                "key": "1710295333000_45645",
                                                "model": "date_1710295333000_45645",
                                                "rules": [{ "required": true, "message": "请选择" }],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            },
                                            {
                                                "type": "input",
                                                "name": "备注",
                                                "icon": "formic_danhangwenben",
                                                "options": {
                                                    "width": "100%",
                                                    "lineWidth": "100%",
                                                    "defaultValue": null,
                                                    "required": false,
                                                    "dataType": "string",
                                                    "pattern": "",
                                                    "placeholder": "",
                                                    "remote": "0",
                                                    "disabled": false,
                                                    "maxlength": "",
                                                    "msgCheck": false,
                                                    "privacy": false,
                                                    "getPhoneNumber": false,
                                                    "getInvoiceTitle": false,
                                                    "remoteFunc": "func_1720076883000_44003",
                                                    "inputvalue": null,
                                                    "inputkey": ""
                                                },
                                                "key": "1720076883000_44003",
                                                "model": "input_1720076883000_44003",
                                                "rules": [],
                                                "fieldDisplay": {
                                                    "backEnd": true,
                                                    "frontEnd": true,
                                                    "backEndOperation": true,
                                                    "only": false,
                                                    "miniprogramAdmin": true
                                                },
                                                "columnHiding": false,
                                                "checked": true
                                            }
                                        ]
                                    }
                                ],
                                "options": {
                                    "gutter": 0,
                                    "size": 6,
                                    "justify": "start",
                                    "align": "top",
                                    "dataType": "Array",
                                    "lineWidth": "100%",
                                    "firstShow": false,
                                    "quantityCond": "unlimited",
                                    "quantity": 0,
                                    "addButtName": "添加家庭信息",
                                    "remoteFunc": "func_1710295312000_34934",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "format": "HH:mm:ss"
                                },
                                "key": "1710295312000_34934",
                                "model": "subform_1710295312000_34934",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "textarea",
                                "name": "备注",
                                "icon": "formic_duohangwenben",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": "",
                                    "required": false,
                                    "disabled": false,
                                    "msgCheck": false,
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "dataType": "string",
                                    "maxlength": "",
                                    "remoteFunc": "func_1713357469000_63438",
                                    "inputkey": "",
                                    "inputvalue": null,
                                    "format": "HH:mm:ss"
                                },
                                "key": "1713357469000_63438",
                                "model": "textarea_1713357469000_63438",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "like", "value": "包含" }
                                },
                                "queryConditon": [
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "separator",
                                "name": "附件",
                                "icon": "formic_fengexian",
                                "options": {
                                    "pageData": {
                                        "color": "#DDDDDD",
                                        "linewidth": 1,
                                        "style": "solid"
                                    },
                                    "form": {
                                        "align": "center",
                                        "color": "rgba(109, 109, 109, 1)",
                                        "decoration": "none",
                                        "family": "Tahoma",
                                        "lineHeight": 2.75,
                                        "size": 15,
                                        "style": "normal",
                                        "weight": ""
                                    },
                                    "defaultValue": "#ffffff00",
                                    "width": "100%",
                                    "remoteFunc": "func_1713357477000_53960",
                                    "inputvalue": null,
                                    "inputkey": ""
                                },
                                "key": "1713357477000_53960",
                                "model": "separator_1713357477000_53960",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "uploading",
                                "name": "附件",
                                "icon": "formic_shangchuan",
                                "options": {
                                    "defaultValue": [],
                                    "tokenFunc": "funcGetToken",
                                    "domain": "",
                                    "disabled": false,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "length": 1,
                                    "fileSize": 20,
                                    "required": false,
                                    "remoteFunc": "func_1713406382000_70234",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1713406382000_70234",
                                "model": "uploading_1713406382000_70234",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "学历学位证书",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 2,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710295459000_21445",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1710295524000_34857",
                                "model": "imgupload_1710295524000_34857",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "身份证正反面照片",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 2,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710295459000_21445",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1710295459000_21445",
                                "model": "imgupload_1710295459000_21445",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "保密协议",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 8,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710311227000_70164",
                                    "inputkey": "",
                                    "msgCheck": false
                                },
                                "key": "1710311232000_13178",
                                "model": "imgupload_1710311232000_13178",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "竞业协议",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 8,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1710311227000_70164",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "inputvalue": null
                                },
                                "key": "1710311227000_70164",
                                "model": "imgupload_1710311227000_70164",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "离职日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1710295631000_5522",
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1710295941000_54351",
                                "model": "date_1710295941000_54351",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "date",
                                "name": "退休日期",
                                "icon": "formic_riqi",
                                "options": {
                                    "defaultValue": "",
                                    "readonly": false,
                                    "disabled": false,
                                    "editable": true,
                                    "clearable": true,
                                    "placeholder": "",
                                    "startPlaceholder": "",
                                    "endPlaceholder": "",
                                    "type": "date",
                                    "format": "yyyy-MM-dd",
                                    "valueFormat": "yyyy-MM-dd",
                                    "timestamp": false,
                                    "required": false,
                                    "width": "",
                                    "lineWidth": "100%",
                                    "dataType": "date",
                                    "remoteFunc": "func_1713839214000_11945",
                                    "inputvalue": null,
                                    "inputkey": "",
                                    "remote": "0"
                                },
                                "key": "1713839214000_11945",
                                "model": "date_1713839214000_11945",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "more_equal", "value": "大于等于" },
                                    { "key": "more", "value": "大于" },
                                    { "key": "less", "value": "小于" },
                                    { "key": "less_equal", "value": "小于等于" },
                                    { "key": "betwwen", "value": "选择范围" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "input",
                                "name": "部门序列（排序使用）",
                                "icon": "formic_shuzi",
                                "options": {
                                    "width": "100%",
                                    "lineWidth": "100%",
                                    "defaultValue": null,
                                    "required": false,
                                    "dataType": "number",
                                    "pattern": "",
                                    "placeholder": "",
                                    "remote": "0",
                                    "disabled": false,
                                    "privacy": false,
                                    "decimalNumber": 0,
                                    "showThousand": false,
                                    "showInputRange": false,
                                    "maxValue": 100,
                                    "minValue": 0,
                                    "remoteFunc": "func_1718097070000_77293",
                                    "inputkey": ""
                                },
                                "key": "1718097070000_77293",
                                "model": "input_1718097070000_77293",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "equal", "value": "等于" }
                                },
                                "queryConditon": [
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "any", "value": "等于任何一个" },
                                    { "key": "not_any", "value": "不等于任何一个" },
                                    { "key": "like", "value": "包含" },
                                    { "key": "not_like", "value": "不包含" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "radio",
                                "name": "是否党员",
                                "icon": "formic_danxuan",
                                "options": {
                                    "inline": false,
                                    "lineWidth": "100%",
                                    "defaultValue": "",
                                    "showLabel": false,
                                    "options": [
                                        { "value": "党员", "key": "党员" },
                                        { "value": "非党员", "key": "非党员" }
                                    ],
                                    "required": false,
                                    "width": "",
                                    "remote": "0",
                                    "remoteOptions": [],
                                    "props": { "value": "value", "label": "label" },
                                    "remoteFunc": "func_1722928230000_24190",
                                    "dataType": "Object",
                                    "inputkey": ""
                                },
                                "key": "1722928230000_24190",
                                "model": "radio_1722928230000_24190",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": {
                                        "key": "include_any",
                                        "value": "包含任意一个"
                                    }
                                },
                                "fixed": false,
                                "queryConditon": [
                                    { "key": "include_any", "value": "包含任意一个" },
                                    { "key": "include_all", "value": "同时包含" },
                                    { "key": "equal", "value": "等于" },
                                    { "key": "not_equal", "value": "不等于" },
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "type": "imgupload",
                                "name": "员工照片",
                                "icon": "formic_tupian",
                                "options": {
                                    "defaultValue": [],
                                    "size": { "width": 100, "height": 100 },
                                    "width": "",
                                    "tokenFunc": "funcGetToken",
                                    "token": "",
                                    "domain": "",
                                    "disabled": false,
                                    "length": 1,
                                    "minLength": 1,
                                    "multiple": true,
                                    "dataType": "string",
                                    "lineWidth": "100%",
                                    "required": false,
                                    "wxSetting": {
                                        "onlyCamera": false,
                                        "mediaType": "image",
                                        "waterMarkSet": {
                                            "waterMark": false,
                                            "waterMarkContent": [],
                                            "customerContent": [],
                                            "bindLocation": ""
                                        },
                                        "is3DImg": false
                                    },
                                    "compressSize": { "compressWidth": 1024, "compressHeight": 1024 },
                                    "remoteFunc": "func_1725502742000_15000",
                                    "inputkey": "",
                                    "msgCheck": false,
                                    "remote": "0"
                                },
                                "key": "1725502742000_15000",
                                "model": "imgupload_1725502742000_15000",
                                "rules": [],
                                "fieldDisplay": {
                                    "backEnd": true,
                                    "frontEnd": true,
                                    "backEndOperation": true,
                                    "only": false,
                                    "miniprogramAdmin": true
                                },
                                "relationCondition": "and",
                                "columnHiding": false,
                                "checked": true,
                                "unWrite": false,
                                "filter": true,
                                "condition": {
                                    "value": "",
                                    "conditionSelected": { "key": "null", "value": "为空" }
                                },
                                "queryConditon": [
                                    { "key": "null", "value": "为空" },
                                    { "key": "not_null", "value": "不为空" }
                                ]
                            },
                            {
                                "name": "创建人",
                                "key": "create_user",
                                "model": "create_user",
                                "type": "input",
                                "options": { "dataType": "string" },
                                "read": true
                            },
                            {
                                "name": "创建时间",
                                "key": "create_time",
                                "model": "create_time",
                                "type": "date",
                                "options": { "dataType": "date" },
                                "read": true
                            },
                            {
                                "name": "更新时间",
                                "key": "update_time",
                                "model": "update_time",
                                "type": "date",
                                "options": { "dataType": "date" },
                                "read": true
                            }
                        ],
                        "exportType": "normal",
                        "correlationId": ""
                    },
                    "isAssociationFilter": false,
                    "associationFilterList": [],
                    "customFileName": true,
                    "exportFileName": active.name&&active.name!='全部'?"国华担保-"+active.name+"员工":"国华担保员工",
                    "inParams": [],
                    "funcName": "customExport"
                },
            }
            if(active.deptId) {
                ele.event.inParams =  [
                    {
                        "name": "",
                        "propKey": "deparadio_1713405599000_3421",
                        "key": "1728994772000_22968",
                        "paramType": "custom",
                        "propName": "部门",
                        "type": "deparadio",
                        "method": "any",
                        "param": active.deptId
                    }
                ]
            }
            EventService.resolveClick(ele, null, context)
        }
    } else if (funcName === 'xgxxsh_gh') {
        // 修改信息审核
        setStyle(`sortEle_${gh.filtrateId}`, 'display', 'none')
        setStyle(`sortEle_${gh.dynamicViewId}`, 'display', 'none')
        setStyle(`sortEle_${gh.formTableViewId}`, 'display', 'block')
        setStyle(`sortEle_${gh.operateBtnId}`, 'display', 'none')
        gh.columnList.forEach(v => {
            setColor(v.id, v.id !== '1728897612000_11547' ? '#666' : globalColor, gh.columnList)
        })
    } else if (gh.tabEvent.includes(funcName)) {
        ghRefreshData(context, funcName, EventService, _commonStore)
        opIds.forEach(v =>{
            setStyle(v, 'display', 'block')
        })
        _commonStore.setCustomerEventActiveBtn({type: "gh",value: funcName})
    } else if (gh.headEvent.includes(funcName)) {
        _commonStore.setCustomerEventActive(funcName)
        ghRefreshHeadData(context, funcName, EventService, _commonStore)
    } else if (funcName === 'initPage_gh') {
        ghInitPage(context, funcName, EventService, _commonStore)
    }
}
function ghRefreshData(context, funcName, EventService, _commonStore) {
    const btn = gh.btnList.find(item => item.eventName === funcName)
    if (btn) {
        let active = {
            deptId: btn.refreshValue,
            name: btn.value
        }
        _commonStore.setCustomerEventContainer(active)
        let conditionList = btn.refreshValue ? [
            {
                "field": "deparadio_1713405599000_3421",
                "method": "any",
                "type": "deparadio",
                "value": btn.refreshValue
            }
        ] : []
        EventService.proxy.bus.emit(gh.refreshId, {
            type: "refreshList",
            conditionList: conditionList,
            pageNum: 1,
            pageSize: 12
        });
        gh.btnList.forEach(v => {
            const btnEle = document.getElementById(v.id)
            if (v.id !== btn.id) {
                btnEle.classList.remove('btnActive')
            } else {
                btnEle.classList.add('btnActive')
            }
        })
        if (btn.eventName === 'all_gh') {
            setStyle(`sortEle_${gh.filtrateId}`, 'display', 'block')
            setStyle(`sortEle_${gh.rowViewId}`, 'display', 'block')
            gh.columnList.forEach(column => {
                setColor(column.id, column.id === '1728897612000_64748' ? globalColor : '#666', gh.columnList)
            })
        } else {
            setStyle(`sortEle_${gh.filtrateId}`, 'display', 'none')
            setStyle(`sortEle_${gh.rowViewId}`, 'display', 'none')
            _commonStore.setCustomerEventActive('')
        }
        _commonStore.setCustomerEventActive('qb_gh')
        gh.lines.forEach(v =>{
            if(funcName === 'all_gh') {
                setStyle(v, 'display', 'block')
            } else {
                setStyle(v, 'display', 'none')
            }
        })
        setStyle(`sortEle_${gh.dynamicViewId}`, 'display', 'block')
        setStyle(`sortEle_${gh.formTableViewId}`, 'display', 'none')
        opIds.forEach(v =>{
            setStyle(v, 'display','block')
        })
    }
}

function ghRefreshHeadData(context, funcName, EventService, _commonStore) {
    const btn = gh.columnList.find(item => item.eventName === funcName) || gh.columnList.find(item => item.eventName === _commonStore.customerEventActive)
    if (btn) {
        let conditionList = [
            {
                "field": "deparadio_1713405599000_3421",
                "method": "any",
                "type": "deparadio",
                "value": _commonStore.customerEventContainer && _commonStore.customerEventContainer.deptId ? _commonStore.customerEventContainer.deptId : "16,31,32,33,34,35,42,43,36,37,38,39"
            }
        ]
        if (btn.eventName !== 'qb_gh') {
            conditionList.push({
                "field": "select_1713337276000_66931",
                "method": "equal",
                "type": "select",
                "value": btnValueMap[btn.value]
            })
        }
        EventService.proxy.bus.emit(gh.refreshId, {
            type: "refreshList",
            conditionList: conditionList,
            pageNum: 1,
            pageSize: 12
        });
        gh.columnList.forEach(v => {
            setColor(v.id, v.id !== btn.id ? '#666' : globalColor, gh.columnList)
        })
        setStyle(`sortEle_${gh.dynamicViewId}`, 'display', 'block')
        setStyle(`sortEle_${gh.formTableViewId}`, 'display', 'none')
        setStyle(`sortEle_${gh.filtrateId}`, 'display', 'block')
        opIds.forEach(v =>{
            setStyle(v, 'display', btn.eventName === 'qb_gh' ? 'block' : 'none')
        })
    }
}

function ghInitPage(context, funcName, EventService, _commonStore) {
    setTimeout(() => {
        setStyle(`sortEle_${gh.formTableViewId}`, 'display', 'none')
        gh.btnList.forEach(v =>{
            const btnEle = document.getElementById(v.id)
            if(btnEle) {
                v.id != '1728896302000_48545' ? btnEle.classList.remove('btnActive') : btnEle.classList.add('btnActive')
            }
        })
        setColor('1728897612000_64748', globalColor, gh.columnList)
        let activeKey = _commonStore.customerEventActiveBtn['gh'] || "all_gh"
        if(!_commonStore.customerEventActiveBtn['gh']) {
            _commonStore.setCustomerEventActiveBtn({type: 'gh', value: "all_gh"})
        }
        ghRefreshData(context, activeKey, EventService, _commonStore)
    }, 100)

}

/**
 * 设置样式
 * @param id
 * @param key
 * @param style
 */
function setStyle(id, key, style) {
    const findEle = document.getElementById(id)
    if (findEle) {
        findEle.style[key] = style
    }
}

/**
 * 选中
 * @param columnId
 * @param color
 */
function setColor(columnId, color, list) {
    let find = list.find(item => item.id === columnId)
    if (find) {
        find.ids.forEach(id => {
            setStyle(id, 'color', color)
        })
    }
}


