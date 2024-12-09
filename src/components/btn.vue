<template>
  <view class="flex-view-btn">
    <view
      v-for="ele in showBtns"
      :key="ele.id"
      style="box-sizing: border-box; padding: 0px; margin: 0px; height: auto"
    >
      <buttonView
        v-if="ele.class == 'button'"
        :activePath="activePath"
        @menuSwitch="$emit('menuSwitch', $event)"
        :ele="ele"
        :record="record"
        :isComponentActive="isComponentActive(ele)"
      />
    </view>
  </view>
</template>

<script>
import buttonView from "../buttonView.vue";
import { isVisible, isAppVisible } from "@/utils/viewVisible";
import pinia from "@/stores";
import { commonStore } from "@/stores/common";
import { pageStore } from "@/stores/page";
const _commonStore = commonStore(pinia);
const _pageStore = pageStore(pinia);
import Taro from "@tarojs/taro";
export default {
  props: {
    record: Object,
    recordIndex: Number,
    activePath: {
      typs: String,
      default: "",
    },
    conditions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showList: [
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          parentClass: "flexView",
          id: "1716951147000_42566",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 34,
            outParams: [
              {
                name: "id",
                propType: "_id",
                type: "dynamic",
                propKey: "_id",
                key: "1706261254000_36146",
              },
              {
                name: "xuqiuID",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1707034833000_39464",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                dynamicObj: {
                  formId: "647ce159-1da1-44bb-8671-c415e1e59f40",
                  sourceId: "1706182700000_87356",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "fef40d66-37dc-442c-b375-daf81f2900dc",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "客户信息",
                  authId: "3",
                },
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
              },
              {
                dynamicObj: {
                  formId: "647ce159-1da1-44bb-8671-c415e1e59f40",
                  sourceId: "1706182700000_87356",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "fef40d66-37dc-442c-b375-daf81f2900dc",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "客户信息",
                  authId: "3",
                },
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  refreshList: [
                    {
                      condition: [],
                      formType: "form",
                      name: "表单列表",
                      id: "1706182700000_87356",
                    },
                  ],
                  type: 42,
                  refreshIdList: ["1706182700000_87356"],
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "LiuZhuanXiangQing",
            pageType: 0,
            trggerList: {
              name: "来料质检合格",
              formButtonid: "1705480761000_14398",
              customName: "质检合格",
            },
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "right",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "97cba44d-44f1-4119-9080-66495e6be08e",
            logicParams: ["recordId"],
            paramList: [
              {
                id: "1715568058000_95482",
                key: "recordId",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "_id",
              },
            ],
            outputParams: [
              {
                key: "status",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "status",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "允许修改",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 26,
                  event: {
                    type: 42,
                    refreshList: [
                      {
                        id: "1716889460000_3006",
                        condition: [],
                        name: "表单列表",
                        formType: "form",
                      },
                    ],
                    refreshIdList: ["1716889460000_3006"],
                    cacheFilteren: true,
                  },
                  dynamicObj: {
                    dbName: "vs31c8p3w996",
                    systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                    systemName: "鹏雷实业-常州工厂",
                    formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                    formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                    formName: "物料流转卡",
                    formType: "form",
                    authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                    sourceId: "1716889460000_3006",
                  },
                  trggerList: {
                    name: "来料修订",
                    formButtonid: "1715563651000_8873",
                    customName: "确认修改",
                  },
                },
                dynamicObj: {
                  dbName: "vs31c8p3w996",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  systemName: "鹏雷实业-常州工厂",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  formName: "物料流转卡",
                  formType: "form",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                  sourceId: "1716889460000_3006",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
              {
                rel: "and",
                conditionList: [
                  {
                    key: "status",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "不允许修改",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 45,
                  showToast_title: "当前数据状态异常，请刷新列表后查看",
                  showToast_duration: "1500",
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "来料修订",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
            noMatchShow: false,
            model: "",
            rules: [
              {
                conditionList: [
                  {
                    condition: {
                      conditionSelected: {
                        value: "等于",
                        key: "equal",
                      },
                      value: "来料入库",
                    },
                    name: "流转状态",
                    options: {
                      remoteFunc: "func_1705299870000_2556",
                      defaultValue: "",
                      remoteOptions: [],
                      dataType: "Object",
                      remote: "0",
                      lineWidth: "100%",
                      showLabel: false,
                      required: false,
                      props: {
                        label: "label",
                        value: "value",
                      },
                      inline: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          textColor: "#f95858",
                          key: "客户确认",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          textColor: "#e27e6e",
                          key: "已排产",
                        },
                        {
                          value: "待生产",
                          textColor: "#eedf43",
                          key: "待生产",
                        },
                        {
                          value: "生产中",
                          textColor: "#c291e3",
                          key: "生产中",
                        },
                        {
                          value: "成品入库",
                          textColor: "#818eec",
                          key: "成品入库",
                        },
                        {
                          value: "成品出库",
                          textColor: "#cb5075",
                          key: "成品出库",
                        },
                        {
                          value: "成品验收",
                          textColor: "#0dcbaf",
                          key: "成品验收",
                        },
                      ],
                      width: "",
                      inputkey: "",
                    },
                    model: "radio_1705299870000_2556",
                    isSub: false,
                    type: "radio",
                  },
                  {
                    model: "radio_1705299668000_85585",
                    type: "radio",
                    name: "来料质检",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#3f95f2",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#3f95f2",
                        },
                        {
                          value: "合格",
                          key: "合格",
                        },
                        {
                          value: "不合格",
                          key: "不合格",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705299668000_85585",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待处理",
                    },
                  },
                ],
                show: true,
                rel: "and",
              },
            ],
          },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 8,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            justify: "left",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          permissions: {
            type: "role",
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
          },
          unAuthLimit: "hide",
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          parentClass: "flexView",
          id: "1718963615000_95788",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 34,
            outParams: [
              {
                name: "id",
                propType: "_id",
                type: "dynamic",
                propKey: "_id",
                key: "1706261254000_36146",
              },
              {
                name: "xuqiuID",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1707034833000_39464",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                dynamicObj: {
                  formId: "647ce159-1da1-44bb-8671-c415e1e59f40",
                  sourceId: "1706182700000_87356",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "fef40d66-37dc-442c-b375-daf81f2900dc",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "客户信息",
                  authId: "3",
                },
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
              },
              {
                dynamicObj: {
                  formId: "647ce159-1da1-44bb-8671-c415e1e59f40",
                  sourceId: "1706182700000_87356",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "fef40d66-37dc-442c-b375-daf81f2900dc",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "客户信息",
                  authId: "3",
                },
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  refreshList: [
                    {
                      condition: [],
                      formType: "form",
                      name: "表单列表",
                      id: "1706182700000_87356",
                    },
                  ],
                  type: 42,
                  refreshIdList: ["1706182700000_87356"],
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "LiuZhuanXiangQing",
            pageType: 0,
            trggerList: {
              name: "来料质检合格",
              formButtonid: "1705480761000_14398",
              customName: "质检合格",
            },
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "right",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
            msgActions: ["executeEnd"],
            msgToast: "执行中，请勿重复点击。",
            logicId: "9cbd14bb-563b-4597-a3a9-000eb17fb696",
            logicParams: ["recordId"],
            paramList: [
              {
                id: "1718963649000_92871",
                key: "recordId",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "_id",
              },
            ],
            outputParams: [
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "message",
                    condition: {
                      conditionSelected: {
                        key: "non-null",
                        value: "非空",
                      },
                      value: "",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                  ],
                  refreshIdList: ["1716889460000_3006"],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  dbName: "vs31c8p3w996",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  systemName: "鹏雷实业-常州工厂",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  formName: "物料流转卡",
                  formType: "form",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                  sourceId: "1716889460000_3006",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "转为毛坯",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
            noMatchShow: false,
            model: "",
            rules: [
              {
                conditionList: [
                  {
                    condition: {
                      conditionSelected: {
                        value: "等于",
                        key: "equal",
                      },
                      value: "来料入库",
                    },
                    name: "流转状态",
                    options: {
                      remoteFunc: "func_1705299870000_2556",
                      defaultValue: "",
                      remoteOptions: [],
                      dataType: "Object",
                      remote: "0",
                      lineWidth: "100%",
                      showLabel: false,
                      required: false,
                      props: {
                        label: "label",
                        value: "value",
                      },
                      inline: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          textColor: "#f95858",
                          key: "客户确认",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          textColor: "#e27e6e",
                          key: "已排产",
                        },
                        {
                          value: "待生产",
                          textColor: "#eedf43",
                          key: "待生产",
                        },
                        {
                          value: "生产中",
                          textColor: "#c291e3",
                          key: "生产中",
                        },
                        {
                          value: "成品入库",
                          textColor: "#818eec",
                          key: "成品入库",
                        },
                        {
                          value: "成品出库",
                          textColor: "#cb5075",
                          key: "成品出库",
                        },
                        {
                          value: "成品验收",
                          textColor: "#0dcbaf",
                          key: "成品验收",
                        },
                      ],
                      width: "",
                      inputkey: "",
                    },
                    model: "radio_1705299870000_2556",
                    isSub: false,
                    type: "radio",
                  },
                  {
                    model: "radio_1705299668000_85585",
                    type: "radio",
                    name: "来料质检",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#3f95f2",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#3f95f2",
                        },
                        {
                          value: "合格",
                          key: "合格",
                        },
                        {
                          value: "不合格",
                          key: "不合格",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705299668000_85585",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待处理",
                    },
                  },
                  {
                    model: "radio_1713775806000_32261",
                    type: "radio",
                    name: "批次类型",
                    isSub: false,
                    options: {
                      inline: true,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "毛坯",
                        key: "毛坯",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "毛坯",
                          key: "毛坯",
                        },
                        {
                          value: "返工件",
                          key: "返工件",
                        },
                      ],
                      required: true,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1713775806000_32261",
                      dataType: "Object",
                      inputvalue: null,
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "返工件",
                    },
                  },
                ],
                show: true,
                rel: "and",
              },
            ],
          },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 8,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(249,174,43, 1)",
                className: "predefine-69441705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(249,174,43, 1)",
                className: "predefine-69441705371162949",
                fontWeight: "normal",
              },
            },
            justify: "left",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          permissions: {
            type: "role",
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
          },
          unAuthLimit: "hide",
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          parentClass: "flexView",
          id: "1718964236000_85094",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 34,
            outParams: [
              {
                name: "id",
                propType: "_id",
                type: "dynamic",
                propKey: "_id",
                key: "1706261254000_36146",
              },
              {
                name: "xuqiuID",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1707034833000_39464",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                dynamicObj: {
                  formId: "647ce159-1da1-44bb-8671-c415e1e59f40",
                  sourceId: "1706182700000_87356",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "fef40d66-37dc-442c-b375-daf81f2900dc",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "客户信息",
                  authId: "3",
                },
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
              },
              {
                dynamicObj: {
                  formId: "647ce159-1da1-44bb-8671-c415e1e59f40",
                  sourceId: "1706182700000_87356",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "fef40d66-37dc-442c-b375-daf81f2900dc",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "客户信息",
                  authId: "3",
                },
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  refreshList: [
                    {
                      condition: [],
                      formType: "form",
                      name: "表单列表",
                      id: "1706182700000_87356",
                    },
                  ],
                  type: 42,
                  refreshIdList: ["1706182700000_87356"],
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "LiuZhuanXiangQing",
            pageType: 0,
            trggerList: {
              name: "来料质检合格",
              formButtonid: "1705480761000_14398",
              customName: "质检合格",
            },
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "right",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
            msgActions: ["executeEnd"],
            msgToast: "执行中，请勿重复点击。",
            logicId: "9cbd14bb-563b-4597-a3a9-000eb17fb696",
            logicParams: ["recordId"],
            paramList: [
              {
                id: "1718963649000_92871",
                key: "recordId",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "_id",
              },
            ],
            outputParams: [
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "message",
                    condition: {
                      conditionSelected: {
                        key: "non-null",
                        value: "非空",
                      },
                      value: "",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                  ],
                  refreshIdList: ["1716889460000_3006"],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  dbName: "vs31c8p3w996",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  systemName: "鹏雷实业-常州工厂",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  formName: "物料流转卡",
                  formType: "form",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                  sourceId: "1716889460000_3006",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "转为返工",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
            noMatchShow: false,
            model: "",
            rules: [
              {
                conditionList: [
                  {
                    condition: {
                      conditionSelected: {
                        value: "等于",
                        key: "equal",
                      },
                      value: "来料入库",
                    },
                    name: "流转状态",
                    options: {
                      remoteFunc: "func_1705299870000_2556",
                      defaultValue: "",
                      remoteOptions: [],
                      dataType: "Object",
                      remote: "0",
                      lineWidth: "100%",
                      showLabel: false,
                      required: false,
                      props: {
                        label: "label",
                        value: "value",
                      },
                      inline: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          textColor: "#f95858",
                          key: "客户确认",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          textColor: "#e27e6e",
                          key: "已排产",
                        },
                        {
                          value: "待生产",
                          textColor: "#eedf43",
                          key: "待生产",
                        },
                        {
                          value: "生产中",
                          textColor: "#c291e3",
                          key: "生产中",
                        },
                        {
                          value: "成品入库",
                          textColor: "#818eec",
                          key: "成品入库",
                        },
                        {
                          value: "成品出库",
                          textColor: "#cb5075",
                          key: "成品出库",
                        },
                        {
                          value: "成品验收",
                          textColor: "#0dcbaf",
                          key: "成品验收",
                        },
                      ],
                      width: "",
                      inputkey: "",
                    },
                    model: "radio_1705299870000_2556",
                    isSub: false,
                    type: "radio",
                  },
                  {
                    model: "radio_1705299668000_85585",
                    type: "radio",
                    name: "来料质检",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#3f95f2",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#3f95f2",
                        },
                        {
                          value: "合格",
                          key: "合格",
                        },
                        {
                          value: "不合格",
                          key: "不合格",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705299668000_85585",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待处理",
                    },
                  },
                  {
                    model: "radio_1713775806000_32261",
                    type: "radio",
                    name: "批次类型",
                    isSub: false,
                    options: {
                      inline: true,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "毛坯",
                        key: "毛坯",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "毛坯",
                          key: "毛坯",
                        },
                        {
                          value: "返工件",
                          key: "返工件",
                        },
                      ],
                      required: true,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1713775806000_32261",
                      dataType: "Object",
                      inputvalue: null,
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "毛坯",
                    },
                  },
                ],
                show: true,
                rel: "and",
              },
            ],
          },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 8,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(249,174,43, 1)",
                className: "predefine-69441705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(249,174,43, 1)",
                className: "predefine-69441705371162949",
                fontWeight: "normal",
              },
            },
            justify: "left",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          permissions: {
            type: "role",
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
          },
          unAuthLimit: "hide",
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          unAuthLimit: "hide",
          permissions: {
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
            type: "role",
          },
          parentClass: "flexView",
          id: "1716951147000_46312",
          clickStopTip: "暂无权限，请联系管理员",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 34,
            outParams: [
              {
                name: "id",
                propType: "_id",
                type: "dynamic",
                propKey: "_id",
                key: "1706261254000_36146",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1706855366000_23451",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                      remark: "物料流转卡",
                    },
                  ],
                  refreshIdList: ["1706855366000_23451"],
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "DanChuang032024013014553096534_2024041817310357387_2024042221064778188",
            pageType: 0,
            trggerList: {
              name: "风险告知单",
              formButtonid: "1713757430000_33266",
              customName: "同意加工",
              isConfirmSetting: true,
              doubleConfirm: true,
            },
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "middle",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "ec022b9f-9d79-466d-8f44-2a77f4e2afd3",
            logicParams: ["id", "userId"],
            paramList: [
              {
                id: "1714371584000_42633",
                key: "id",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "sn_1705298950000_74081",
              },
              {
                id: "1714371584000_64002",
                key: "userId",
                type: "userId",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "",
              },
            ],
            outputParams: [
              {
                key: "flag",
              },
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "flag",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "success",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                    {
                      id: "1717165805000_39029",
                      condition: [],
                      name: "指标卡片",
                    },
                    {
                      id: "1717166848000_42951",
                      condition: [],
                      name: "指标卡片",
                    },
                    {
                      id: "1717166939000_63899",
                      condition: [],
                      name: "指标卡片",
                    },
                  ],
                  refreshIdList: [
                    "1716889460000_3006",
                    "1717165805000_39029",
                    "1717166848000_42951",
                    "1717166939000_63899",
                  ],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "退回出库",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
            noMatchShow: false,
            model: "",
            rules: [
              {
                conditionList: [
                  {
                    model: "radio_1705299870000_2556",
                    type: "radio",
                    name: "流转状态",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          key: "客户确认",
                          textColor: "#f95858",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          key: "已排产",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "待生产",
                          key: "待生产",
                          textColor: "#eedf43",
                        },
                        {
                          value: "生产中",
                          key: "生产中",
                          textColor: "#c291e3",
                        },
                        {
                          value: "成品入库",
                          key: "成品入库",
                          textColor: "#818eec",
                        },
                        {
                          value: "成品出库",
                          key: "成品出库",
                          textColor: "#cb5075",
                        },
                        {
                          value: "成品验收",
                          key: "成品验收",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "来料退回",
                          key: "来料退回",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705299870000_2556",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "来料退回",
                    },
                  },
                  {
                    model: "input_1705300164000_30069",
                    type: "input",
                    name: "出库批次",
                    isSub: false,
                    options: {
                      width: "100%",
                      lineWidth: "100%",
                      defaultValue: null,
                      required: false,
                      dataType: "string",
                      pattern: "",
                      placeholder: "",
                      remote: "0",
                      disabled: false,
                      maxlength: "",
                      msgCheck: false,
                      privacy: false,
                      getPhoneNumber: false,
                      getInvoiceTitle: false,
                      remoteFunc: "func_1705300164000_30069",
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "null",
                        value: "空值",
                      },
                      value: "",
                    },
                  },
                ],
                show: true,
                rel: "and",
              },
            ],
          },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 0,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(254,98,99, 1)",
                className: "predefine-19951705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(254,98,99, 1)",
                className: "predefine-19951705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          unAuthLimit: "hide",
          permissions: {
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "f5ba4d9f-5a73-4029-9f34-c1f39e550153",
              "1c1fb3f9-8382-4ccc-9fca-09c0ef58a004",
              "9735eb77-f558-4c64-a560-a7a6f4d09de0",
              "50c492b9-3c7b-4fd3-80b0-c76064d483f0",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
            type: "role",
          },
          parentClass: "flexView",
          id: "1716951147000_65772",
          clickStopTip: "暂无权限，请联系管理员",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 18,
            outParams: [
              {
                name: "id",
                propKey: "sn_1705298950000_74081",
                key: "1714394455000_69892",
                type: "dynamic",
                propType: "sn",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  type: 42,
                  cacheFilteren: true,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                  ],
                  refreshIdList: ["1716889460000_3006"],
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "DanChuang032024013014553096534_2024041817310357387_2024042917495654940_2024042920062231355",
            pageType: 0,
            trggerList: {
              name: "来料质检合格",
              formButtonid: "1705480761000_14398",
              customName: "质检合格",
            },
            customPage: false,
            name: "生产计划",
            id: "462cfa24-3c75-4cdf-bb27-ab1ec50c92ee",
            dialogPropsPosition: "right",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
          },
          class: "button",
          value: "查看计划",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
            noMatchShow: false,
            model: "",
            rules: [
              {
                conditionList: [
                  {
                    condition: {
                      conditionSelected: {
                        value: "等于",
                        key: "equal",
                      },
                      value: "已来料检",
                    },
                    name: "流转状态",
                    options: {
                      remoteFunc: "func_1705299870000_2556",
                      defaultValue: "",
                      remoteOptions: [],
                      dataType: "Object",
                      remote: "0",
                      lineWidth: "100%",
                      showLabel: false,
                      required: false,
                      props: {
                        label: "label",
                        value: "value",
                      },
                      inline: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          textColor: "#f95858",
                          key: "客户确认",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          textColor: "#e27e6e",
                          key: "已排产",
                        },
                        {
                          value: "待生产",
                          textColor: "#eedf43",
                          key: "待生产",
                        },
                        {
                          value: "生产中",
                          textColor: "#c291e3",
                          key: "生产中",
                        },
                        {
                          value: "成品入库",
                          textColor: "#818eec",
                          key: "成品入库",
                        },
                        {
                          value: "成品出库",
                          textColor: "#cb5075",
                          key: "成品出库",
                        },
                        {
                          value: "成品验收",
                          textColor: "#0dcbaf",
                          key: "成品验收",
                        },
                      ],
                      width: "",
                      inputkey: "",
                    },
                    model: "radio_1705299870000_2556",
                    isSub: false,
                    type: "radio",
                  },
                  {
                    model: "radio_1705455584000_13864",
                    type: "radio",
                    name: "生产阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#0dcbaf",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "待生产",
                          key: "待生产",
                        },
                        {
                          value: "上料中",
                          key: "上料中",
                          textColor: "#eedf43",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705455584000_13864",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待生产",
                    },
                  },
                ],
                show: true,
                rel: "and",
              },
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1714355178000_47827",
                    type: "radio",
                    name: "质检阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#cb5075",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#cb5075",
                        },
                        {
                          value: "待成品检验",
                          key: "待成品检验",
                        },
                        {
                          value: "待品质确认",
                          key: "待品质确认",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "返工",
                          key: "返工",
                        },
                        {
                          value: "待重工确认",
                          key: "待重工确认",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1714355178000_47827",
                      dataType: "Object",
                      inputvalue: null,
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "返工",
                    },
                  },
                  {
                    model: "radio_1705455584000_13864",
                    type: "radio",
                    name: "生产阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#0dcbaf",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "待生产",
                          key: "待生产",
                        },
                        {
                          value: "上料中",
                          key: "上料中",
                          textColor: "#eedf43",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705455584000_13864",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "完结",
                    },
                  },
                ],
              },
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1705299870000_2556",
                    type: "radio",
                    name: "流转状态",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          key: "客户确认",
                          textColor: "#f95858",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          key: "已排产",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "待生产",
                          key: "待生产",
                          textColor: "#eedf43",
                        },
                        {
                          value: "生产中",
                          key: "生产中",
                          textColor: "#c291e3",
                        },
                        {
                          value: "成品入库",
                          key: "成品入库",
                          textColor: "#818eec",
                        },
                        {
                          value: "成品出库",
                          key: "成品出库",
                          textColor: "#cb5075",
                        },
                        {
                          value: "成品验收",
                          key: "成品验收",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "来料退回",
                          key: "来料退回",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705299870000_2556",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "已排产",
                    },
                  },
                  {
                    model: "radio_1705455584000_13864",
                    type: "radio",
                    name: "生产阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#0dcbaf",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "待生产",
                          key: "待生产",
                        },
                        {
                          value: "上料中",
                          key: "上料中",
                          textColor: "#eedf43",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705455584000_13864",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待生产",
                    },
                  },
                ],
              },
            ],
          },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 0,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          unAuthLimit: "hide",
          permissions: {
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
            type: "role",
          },
          parentClass: "flexView",
          id: "1718624512000_38920",
          clickStopTip: "暂无权限，请联系管理员",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 34,
            outParams: [
              {
                name: "id",
                propType: "_id",
                type: "dynamic",
                propKey: "_id",
                key: "1706261254000_36146",
              },
              {
                name: "xuqiuID",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1707034833000_39464",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                dynamicObj: {
                  formId: "647ce159-1da1-44bb-8671-c415e1e59f40",
                  sourceId: "1706182700000_87356",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "fef40d66-37dc-442c-b375-daf81f2900dc",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "客户信息",
                  authId: "3",
                },
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
              },
              {
                dynamicObj: {
                  formId: "647ce159-1da1-44bb-8671-c415e1e59f40",
                  sourceId: "1706182700000_87356",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "fef40d66-37dc-442c-b375-daf81f2900dc",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "客户信息",
                  authId: "3",
                },
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  refreshList: [
                    {
                      condition: [],
                      formType: "form",
                      name: "表单列表",
                      id: "1706182700000_87356",
                    },
                  ],
                  type: 42,
                  refreshIdList: ["1706182700000_87356"],
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "LiuZhuanXiangQing",
            pageType: 0,
            trggerList: {
              name: "来料质检合格",
              formButtonid: "1705480761000_14398",
              customName: "质检合格",
            },
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "right",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "906c0961-9be4-4663-a74e-9c5c41314b91",
            logicParams: ["id", "userId"],
            paramList: [
              {
                id: "1715398699000_13246",
                key: "id",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "sn_1705298950000_74081",
              },
              {
                id: "1715398699000_83384",
                key: "userId",
                type: "userId",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "",
              },
            ],
            outputParams: [
              {
                key: "suc",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "suc",
                    condition: {
                      conditionSelected: {
                        key: "non-null",
                        value: "非空",
                      },
                      value: "",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                  ],
                  refreshIdList: ["1716889460000_3006"],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "跳过上料",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
            noMatchShow: false,
            model: "",
            rules: [
              {
                conditionList: [
                  {
                    model: "radio_1705455584000_13864",
                    type: "radio",
                    name: "生产阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#0dcbaf",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "待生产",
                          key: "待生产",
                        },
                        {
                          value: "上料中",
                          key: "上料中",
                          textColor: "#eedf43",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705455584000_13864",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待生产",
                    },
                  },
                  {
                    model: "date_1705582663000_38096",
                    type: "date",
                    name: "排产时间",
                    isSub: false,
                    options: {
                      defaultValue: "",
                      readonly: false,
                      disabled: false,
                      editable: true,
                      clearable: true,
                      placeholder: "",
                      startPlaceholder: "",
                      endPlaceholder: "",
                      type: "datetime",
                      format: "yyyy-MM-dd HH:mm:ss",
                      valueFormat: "yyyy-MM-dd HH:mm:ss",
                      timestamp: false,
                      required: false,
                      width: "",
                      lineWidth: "100%",
                      dataType: "date",
                      remoteFunc: "func_1705582663000_38096",
                      currentTime: false,
                      inputvalue: null,
                      remote: "0",
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "non-null",
                        value: "非空",
                      },
                      value: "",
                    },
                  },
                ],
                show: true,
                rel: "and",
              },
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1714355178000_47827",
                    type: "radio",
                    name: "质检阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#cb5075",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#cb5075",
                        },
                        {
                          value: "待成品检验",
                          key: "待成品检验",
                        },
                        {
                          value: "待品质确认",
                          key: "待品质确认",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "返工",
                          key: "返工",
                        },
                        {
                          value: "待重工确认",
                          key: "待重工确认",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1714355178000_47827",
                      dataType: "Object",
                      inputvalue: null,
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "返工",
                    },
                  },
                  {
                    model: "radio_1705455584000_13864",
                    type: "radio",
                    name: "生产阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#0dcbaf",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "待生产",
                          key: "待生产",
                        },
                        {
                          value: "上料中",
                          key: "上料中",
                          textColor: "#eedf43",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705455584000_13864",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待生产",
                    },
                  },
                ],
              },
            ],
          },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 0,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          remarks: "成品检验",
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          unAuthLimit: "hide",
          permissions: {
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
            type: "role",
          },
          parentClass: "flexView",
          id: "1718281772000_24725",
          clickStopTip: "暂无权限，请联系管理员",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 18,
            outParams: [
              {
                name: "id",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1706261254000_36146",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                    {
                      id: "1717165805000_39029",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1717166848000_42951",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1717166939000_63899",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1718605298000_65184",
                      condition: [],
                      name: "指标卡片",
                    },
                  ],
                  refreshIdList: [
                    "1716889460000_3006",
                    "1717165805000_39029",
                    "1717166848000_42951",
                    "1717166939000_63899",
                    "1718605298000_65184",
                  ],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "DanChuang032024013014553096534_2024041817310357387_2024060309234151409",
            pageType: 0,
            trggerList: {
              name: "来料质检合格",
              formButtonid: "1705480761000_14398",
              customName: "质检合格",
            },
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "right",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "78e0154a-19a8-4a71-9583-6f3b0de5a694",
            logicParams: ["id"],
            paramList: [
              {
                id: "1713427170000_61241",
                key: "id",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "sn_1705298950000_74081",
              },
            ],
            outputParams: [
              {
                key: "flag",
              },
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "flag",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "success",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  cacheFilteren: true,
                  refreshList: [
                    {
                      id: "1706855366000_23451",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                      remark: "物料流转卡",
                    },
                  ],
                  refreshIdList: ["1706855366000_23451"],
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
            redirect: false,
          },
          class: "button",
          value: "成品入库",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
    noMatchShow: false,
    model: "",
    rules: [
      {
        show: true,
        rel: "and",
        conditionList: [
          {
            model: "radio_1717377427000_26699",
            type: "radio",
            name: "成品入库阶段",
            isSub: false,
            options: {
              inline: false,
              lineWidth: "100%",
              defaultValue: {
                value: "待处理",
                key: "待处理",
              },
              showLabel: false,
              options: [
                {
                  value: "待处理",
                  key: "待处理",
                },
                {
                  value: "已部分入库",
                  key: "已部分入库",
                },
                {
                  value: "已入库",
                  key: "已入库",
                },
              ],
              required: false,
              width: "",
              remote: "0",
              remoteOptions: [],
              props: {
                value: "value",
                label: "label",
              },
              remoteFunc: "func_1717377427000_26699",
              dataType: "Object",
              inputkey: "",
            },
            condition: {
              conditionSelected: {
                key: "not_equal",
                value: "不等于",
              },
              value: "已入库",
            },
          },
          {
            model: "radio_1705299870000_2556",
            type: "radio",
            name: "流转状态",
            isSub: false,
            options: {
              inline: false,
              lineWidth: "100%",
              defaultValue: {
                value: "待处理",
                key: "待处理",
              },
              showLabel: false,
              options: [
                {
                  value: "待处理",
                  key: "待处理",
                },
                {
                  value: "来料入库",
                  key: "来料入库",
                },
                {
                  value: "客户确认",
                  key: "客户确认",
                  textColor: "#f95858",
                },
                {
                  value: "已来料检",
                  key: "已来料检",
                },
                {
                  value: "已排产",
                  key: "已排产",
                  textColor: "#e27e6e",
                },
                {
                  value: "生产中",
                  key: "生产中",
                  textColor: "#c291e3",
                },
                {
                  value: "待成品检验",
                  key: "待成品检验",
                },
                {
                  value: "待重工确认",
                  key: "待重工确认",
                },
                {
                  value: "成品待入库",
                  key: "成品待入库",
                },
                {
                  value: "成品入库",
                  key: "成品入库",
                  textColor: "#818eec",
                },
                {
                  value: "成品待出库",
                  key: "成品待出库",
                },
                {
                  value: "成品出库",
                  key: "成品出库",
                  textColor: "#cb5075",
                },
                {
                  value: "成品验收",
                  key: "成品验收",
                  textColor: "#0dcbaf",
                },
                {
                  value: "来料退回",
                  key: "来料退回",
                },
                {
                  value: "来料已退回",
                  key: "来料已退回",
                },
              ],
              required: false,
              width: "",
              remote: "0",
              remoteOptions: [],
              props: {
                value: "value",
                label: "label",
              },
              remoteFunc: "func_1705299870000_2556",
              dataType: "Object",
              inputkey: "",
              inputvalue: null,
            },
            condition: {
              conditionSelected: {
                key: "equal",
                value: "等于",
              },
              value: "生产中",
            },
          },
        ],
      },
      {
        show: true,
        rel: "and",
        conditionList: [
          {
            model: "radio_1717377427000_26699",
            type: "radio",
            name: "成品入库阶段",
            isSub: false,
            options: {
              inline: false,
              lineWidth: "100%",
              defaultValue: {
                value: "待处理",
                key: "待处理",
              },
              showLabel: false,
              options: [
                {
                  value: "待处理",
                  key: "待处理",
                },
                {
                  value: "已部分入库",
                  key: "已部分入库",
                },
                {
                  value: "已入库",
                  key: "已入库",
                },
              ],
              required: false,
              width: "",
              remote: "0",
              remoteOptions: [],
              props: {
                value: "value",
                label: "label",
              },
              remoteFunc: "func_1717377427000_26699",
              dataType: "Object",
              inputkey: "",
            },
            condition: {
              conditionSelected: {
                key: "not_equal",
                value: "不等于",
              },
              value: "已入库",
            },
          },
          {
            model: "radio_1705299870000_2556",
            type: "radio",
            name: "流转状态",
            isSub: false,
            options: {
              inline: false,
              lineWidth: "100%",
              defaultValue: {
                value: "待处理",
                key: "待处理",
              },
              showLabel: false,
              options: [
                {
                  value: "待处理",
                  key: "待处理",
                },
                {
                  value: "来料入库",
                  key: "来料入库",
                },
                {
                  value: "客户确认",
                  key: "客户确认",
                  textColor: "#f95858",
                },
                {
                  value: "已来料检",
                  key: "已来料检",
                },
                {
                  value: "已排产",
                  key: "已排产",
                  textColor: "#e27e6e",
                },
                {
                  value: "生产中",
                  key: "生产中",
                  textColor: "#c291e3",
                },
                {
                  value: "待成品检验",
                  key: "待成品检验",
                },
                {
                  value: "待重工确认",
                  key: "待重工确认",
                },
                {
                  value: "成品待入库",
                  key: "成品待入库",
                },
                {
                  value: "成品入库",
                  key: "成品入库",
                  textColor: "#818eec",
                },
                {
                  value: "成品待出库",
                  key: "成品待出库",
                },
                {
                  value: "成品出库",
                  key: "成品出库",
                  textColor: "#cb5075",
                },
                {
                  value: "成品验收",
                  key: "成品验收",
                  textColor: "#0dcbaf",
                },
                {
                  value: "来料退回",
                  key: "来料退回",
                },
                {
                  value: "来料已退回",
                  key: "来料已退回",
                },
              ],
              required: false,
              width: "",
              remote: "0",
              remoteOptions: [],
              props: {
                value: "value",
                label: "label",
              },
              remoteFunc: "func_1705299870000_2556",
              dataType: "Object",
              inputkey: "",
              inputvalue: null,
            },
            condition: {
              conditionSelected: {
                key: "equal",
                value: "等于",
              },
              value: "成品待入库",
            },
          },
        ],
      },
      {
        show: true,
        rel: "and",
        conditionList: [
          {
            model: "radio_1718180624000_59630",
            type: "radio",
            name: "是否有返工",
            isSub: false,
            options: {
              inline: false,
              lineWidth: "100%",
              defaultValue: {
                value: "无返工",
                key: "无返工",
              },
              showLabel: false,
              options: [
                {
                  value: "返工中",
                  key: "返工中",
                },
                {
                  value: "无返工",
                  key: "无返工",
                },
              ],
              required: false,
              width: "",
              remote: "0",
              remoteOptions: [],
              props: {
                value: "value",
                label: "label",
              },
              remoteFunc: "func_1718180624000_59630",
              dataType: "Object",
              inputvalue: null,
            },
            condition: {
              conditionSelected: {
                key: "equal",
                value: "等于",
              },
              value: "返工中",
            },
          },
          {
            model: "radio_1717377427000_26699",
            type: "radio",
            name: "成品入库阶段",
            isSub: false,
            options: {
              inline: false,
              lineWidth: "100%",
              defaultValue: {
                value: "待处理",
                key: "待处理",
              },
              showLabel: false,
              options: [
                {
                  value: "待处理",
                  key: "待处理",
                },
                {
                  value: "已部分入库",
                  key: "已部分入库",
                },
                {
                  value: "已入库",
                  key: "已入库",
                },
              ],
              required: false,
              width: "",
              remote: "0",
              remoteOptions: [],
              props: {
                value: "value",
                label: "label",
              },
              remoteFunc: "func_1717377427000_26699",
              dataType: "Object",
              inputkey: "",
            },
            condition: {
              conditionSelected: {
                key: "equal",
                value: "等于",
              },
              value: "已入库",
            },
          },
        ],
      },
      {
        show: true,
        rel: "and",
        conditionList: [
          {
            model: "radio_1717377427000_26699",
            type: "radio",
            name: "成品入库阶段",
            isSub: false,
            options: {
              inline: false,
              lineWidth: "100%",
              defaultValue: {
                value: "待处理",
                key: "待处理",
              },
              showLabel: false,
              options: [
                {
                  value: "待处理",
                  key: "待处理",
                },
                {
                  value: "已部分入库",
                  key: "已部分入库",
                },
                {
                  value: "已入库",
                  key: "已入库",
                },
              ],
              required: false,
              width: "",
              remote: "0",
              remoteOptions: [],
              props: {
                value: "value",
                label: "label",
              },
              remoteFunc: "func_1717377427000_26699",
              dataType: "Object",
              inputkey: "",
            },
            condition: {
              conditionSelected: {
                key: "equal",
                value: "等于",
              },
              value: "已部分入库",
            },
          },
          {
            model: "radio_1705299870000_2556",
            type: "radio",
            name: "流转状态",
            isSub: false,
            options: {
              inline: false,
              lineWidth: "100%",
              defaultValue: "",
              showLabel: false,
              options: [
                {
                  value: "待处理",
                  key: "待处理",
                },
                {
                  value: "来料入库",
                  key: "来料入库",
                },
                {
                  value: "客户确认",
                  key: "客户确认",
                  textColor: "#f95858",
                },
                {
                  value: "已来料检",
                  key: "已来料检",
                },
                {
                  value: "已排产",
                  key: "已排产",
                  textColor: "#e27e6e",
                },
                {
                  value: "生产中",
                  key: "生产中",
                  textColor: "#c291e3",
                },
                {
                  value: "待去氢",
                  key: "待去氢",
                },
                {
                  value: "待成品检验",
                  key: "待成品检验",
                },
                {
                  value: "待重工确认",
                  key: "待重工确认",
                },
                {
                  value: "成品待入库",
                  key: "成品待入库",
                },
                {
                  value: "成品入库",
                  key: "成品入库",
                  textColor: "#818eec",
                },
                {
                  value: "成品待出库",
                  key: "成品待出库",
                },
                {
                  value: "成品出库",
                  key: "成品出库",
                  textColor: "#cb5075",
                },
                {
                  value: "成品验收",
                  key: "成品验收",
                  textColor: "#0dcbaf",
                },
                {
                  value: "来料退回",
                  key: "来料退回",
                },
                {
                  value: "来料已退回",
                  key: "来料已退回",
                },
              ],
              required: false,
              width: "",
              remote: "0",
              remoteOptions: [],
              props: {
                value: "value",
                label: "label",
              },
              remoteFunc: "func_1705299870000_2556",
              dataType: "Object",
              inputkey: "",
              inputvalue: null,
            },
            condition: {
              conditionSelected: {
                key: "equal",
                value: "等于",
              },
              value: "成品出库",
            },
          },
        ],
      },
    ],
  },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 0,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          remarks: "分批入库备份",
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          unAuthLimit: "hide",
          permissions: {
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "f5ba4d9f-5a73-4029-9f34-c1f39e550153",
              "1c1fb3f9-8382-4ccc-9fca-09c0ef58a004",
              "9735eb77-f558-4c64-a560-a7a6f4d09de0",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
            type: "role",
          },
          parentClass: "flexView",
          id: "1718698775000_23516",
          clickStopTip: "暂无权限，请联系管理员",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 18,
            outParams: [
              {
                name: "id",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1706261254000_36146",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                  ],
                  refreshIdList: ["1716889460000_3006"],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "DanChuang032024013014553096534_2024041817310357387_2024060309234151409_2024060509575274038",
            pageType: 0,
            trggerList: {
              name: "来料质检合格",
              formButtonid: "1705480761000_14398",
              customName: "质检合格",
            },
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "middle",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "78e0154a-19a8-4a71-9583-6f3b0de5a694",
            logicParams: ["id", "userId"],
            paramList: [
              {
                id: "1717146712000_19593",
                key: "userId",
                type: "sysUserId",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "_id",
                dynamicKey: "",
              },
              {
                id: "1717146712000_13081",
                key: "id",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "sn_1705298950000_74081",
              },
            ],
            outputParams: [
              {
                key: "flag",
              },
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "flag",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "success",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  cacheFilteren: true,
                  refreshList: [
                    {
                      id: "1706855366000_23451",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                      remark: "物料流转卡",
                    },
                  ],
                  refreshIdList: ["1706855366000_23451"],
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "成品质检",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
            noMatchShow: false,
            model: "",
            rules: [
              {
                show: true,
                rel: "or",
                conditionList: [
                  {
                    model: "radio_1714355178000_47827",
                    type: "radio",
                    name: "质检阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#cb5075",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#cb5075",
                        },
                        {
                          value: "待成品检验",
                          key: "待成品检验",
                        },
                        {
                          value: "待品质确认",
                          key: "待品质确认",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "返工",
                          key: "返工",
                        },
                        {
                          value: "待重工确认",
                          key: "待重工确认",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1714355178000_47827",
                      dataType: "Object",
                      inputvalue: null,
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待成品检验",
                    },
                  },
                  {
                    model: "radio_1714355178000_47827",
                    type: "radio",
                    name: "成品质检阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                        textColor: "#cb5075",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                          textColor: "#cb5075",
                        },
                        {
                          value: "成品检验中",
                          key: "成品检验中",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "待成品检验",
                          key: "待成品检验",
                        },
                        {
                          value: "待品质确认",
                          key: "待品质确认",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "返工",
                          key: "返工",
                        },
                        {
                          value: "待重工确认",
                          key: "待重工确认",
                        },
                        {
                          value: "完结",
                          key: "完结",
                          textColor: "#818eec",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1714355178000_47827",
                      dataType: "Object",
                      inputvalue: null,
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "成品检验中",
                    },
                  },
                ],
              },
            ],
          },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 0,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          remarks: "成品检验",
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
          newIndex: 11,
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 12,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          parentClass: "flexView",
          id: "1718281767000_85656",
          event: {
            clickDelayTime: 3000,
            type: 18,
            outParams: [
              {
                name: "id",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1707034833000_39464",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                    {
                      id: "1717165805000_39029",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1717166848000_42951",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1717166939000_63899",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1718605298000_65184",
                      condition: [],
                      name: "指标卡片",
                    },
                  ],
                  refreshIdList: [
                    "1716889460000_3006",
                    "1717165805000_39029",
                    "1717166848000_42951",
                    "1717166939000_63899",
                    "1718605298000_65184",
                  ],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "DanChuang032024013014553096534_2024041817310357387_2024060309234151409_2024060610444664163",
            pageType: 0,
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "right",
            event: {
              type: -1,
            },
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            trggerList: [],
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "556fa536-18ff-417c-95b4-32673cecceb0",
            logicParams: ["id_xuqiu", "userId"],
            paramList: [
              {
                id: "1712939803000_84778",
                key: "id_xuqiu",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "sn_1705298950000_74081",
              },
              {
                id: "1712939803000_32411",
                key: "userId",
                type: "userId",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "",
              },
            ],
            outputParams: [
              {
                key: "flag",
              },
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "flag",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "success",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1706855366000_23451",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                      remark: "物料流转卡",
                    },
                  ],
                  refreshIdList: ["1706855366000_23451"],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "成品出库",
          fromData: false,
          propKey: "sn_1705298950000_74081",
          propName: "流转卡号",
          propType: "sn",
          showByData: true,
          showRules: {
            model: "",
            rules: [
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1717583877000_17038",
                    type: "radio",
                    name: "是否可出库",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "不可出库",
                        key: "不可出库",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "不可出库",
                          key: "不可出库",
                        },
                        {
                          value: "可出库",
                          key: "可出库",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1717583877000_17038",
                      dataType: "Object",
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "可出库",
                    },
                  },
                ],
              },
            ],
            noMatchShow: false,
          },
          isPermissions: true,
          permissions: {
            type: "role",
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
          },
          unAuthLimit: "hide",
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
          newIndex: 11,
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 12,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "86",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          parentClass: "flexView",
          id: "1718281762000_91558",
          event: {
            clickDelayTime: 3000,
            type: 18,
            outParams: [
              {
                name: "id",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1707034833000_39464",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                  ],
                  refreshIdList: ["1716889460000_3006"],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "DanChuang032024013014553096534_2024041817310357387_2024060309234151409_2024060610444664163_2024061111011896183",
            pageType: 0,
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "middle",
            event: {
              type: -1,
            },
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            trggerList: [],
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "556fa536-18ff-417c-95b4-32673cecceb0",
            logicParams: ["id_xuqiu", "userId"],
            paramList: [
              {
                id: "1712939803000_84778",
                key: "id_xuqiu",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "sn_1705298950000_74081",
              },
              {
                id: "1712939803000_32411",
                key: "userId",
                type: "userId",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "",
              },
            ],
            outputParams: [
              {
                key: "flag",
              },
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "flag",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "success",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1706855366000_23451",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                      remark: "物料流转卡",
                    },
                  ],
                  refreshIdList: ["1706855366000_23451"],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
            closeOnClickBlank: true,
          },
          class: "button",
          value: "查看检验单",
          fromData: false,
          propKey: "sn_1705298950000_74081",
          propName: "流转卡号",
          propType: "sn",
          showByData: true,
          showRules: {
            model: "",
            rules: [
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1717381400000_95951",
                    type: "radio",
                    name: "成品出库阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "已部分出库",
                          key: "已部分出库",
                        },
                        {
                          value: "已出库",
                          key: "已出库",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1717381400000_95951",
                      dataType: "Object",
                      inputvalue: null,
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: {
                        key: "not_equal",
                        value: "不等于",
                      },
                      value: "待处理",
                    },
                  },
                ],
              },
            ],
            noMatchShow: false,
          },
          isPermissions: true,
          permissions: {
            type: "role",
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
            ],
          },
          unAuthLimit: "hide",
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
          newIndex: 11,
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 12,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(0,149,255, 1)",
                className: "predefine-8061705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          parentClass: "flexView",
          id: "1721736721000_54313",
          event: {
            clickDelayTime: 3000,
            type: 26,
            outParams: [
              {
                name: "id",
                propType: "sn",
                type: "dynamic",
                propKey: "sn_1705298950000_74081",
                key: "1707034833000_39464",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                    {
                      id: "1717165805000_39029",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1717166848000_42951",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1717166939000_63899",
                      condition: [],
                      name: "指标卡片",
                      formType: "form",
                    },
                    {
                      id: "1718605298000_65184",
                      condition: [],
                      name: "指标卡片",
                    },
                  ],
                  refreshIdList: [
                    "1716889460000_3006",
                    "1717165805000_39029",
                    "1717166848000_42951",
                    "1717166939000_63899",
                    "1718605298000_65184",
                  ],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "DanChuang032024013014553096534_2024041817310357387_2024060309234151409_2024060610444664163",
            pageType: 0,
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "right",
            event: {
              type: 42,
              refreshList: [
                {
                  id: "1716889460000_3006",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                },
              ],
              refreshIdList: ["1716889460000_3006"],
            },
            dynamicObj: {
              dbName: "vs31c8p3w996",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              systemName: "鹏雷实业-常州工厂",
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              formName: "物料流转卡",
              formType: "form",
              authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
              sourceId: "1716889460000_3006",
            },
            trggerList: {
              name: "去氢完成",
              formButtonid: "1721634130000_97306",
              customName: "去氢",
            },
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "556fa536-18ff-417c-95b4-32673cecceb0",
            logicParams: ["id_xuqiu", "userId"],
            paramList: [
              {
                id: "1712939803000_84778",
                key: "id_xuqiu",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "sn_1705298950000_74081",
              },
              {
                id: "1712939803000_32411",
                key: "userId",
                type: "userId",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "",
              },
            ],
            outputParams: [
              {
                key: "flag",
              },
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "flag",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "success",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1706855366000_23451",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                      remark: "物料流转卡",
                    },
                  ],
                  refreshIdList: ["1706855366000_23451"],
                  cacheFilteren: true,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "去氢",
          fromData: false,
          propKey: "sn_1705298950000_74081",
          propName: "流转卡号",
          propType: "sn",
          showByData: true,
          isPermissions: true,
          permissions: {
            type: "role",
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
          },
          unAuthLimit: "hide",
          showRules: {
            model: "",
            rules: [
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1705299870000_2556",
                    type: "radio",
                    name: "流转状态",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: "",
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          key: "客户确认",
                          textColor: "#f95858",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          key: "已排产",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "生产中",
                          key: "生产中",
                          textColor: "#c291e3",
                        },
                        {
                          value: "待去氢",
                          key: "待去氢",
                        },
                        {
                          value: "待成品检验",
                          key: "待成品检验",
                        },
                        {
                          value: "待重工确认",
                          key: "待重工确认",
                        },
                        {
                          value: "成品待入库",
                          key: "成品待入库",
                        },
                        {
                          value: "成品入库",
                          key: "成品入库",
                          textColor: "#818eec",
                        },
                        {
                          value: "成品待出库",
                          key: "成品待出库",
                        },
                        {
                          value: "成品出库",
                          key: "成品出库",
                          textColor: "#cb5075",
                        },
                        {
                          value: "成品验收",
                          key: "成品验收",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "来料退回",
                          key: "来料退回",
                        },
                        {
                          value: "来料已退回",
                          key: "来料已退回",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705299870000_2556",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "待去氢",
                    },
                  },
                ],
              },
            ],
            noMatchShow: false,
          },
        },
        {
          componentId: "dffe9479ed10dacb1ce1f1e679a4cfd6",
          newIndex: 11,
          hoverEvent: {
            type: -1,
          },
          fManUrl: "https://www.veish.com",
          eventlist: [
            {
              frontEvent: {
                type: -1,
              },
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: {
                type: -1,
              },
            },
            {
              frontEvent: {
                type: -1,
              },
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: {
                type: -1,
              },
            },
          ],
          unAuthLimit: "hide",
          permissions: {
            roleIdList: [
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
            ],
            type: "role",
          },
          parentClass: "flexView",
          id: "1722330212000_23279",
          clickStopTip: "暂无权限，请联系管理员",
          event: {
            clickDelayTime: 3000,
            dynamicObj: {
              formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
              sourceId: "1706855366000_23451",
              systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
              formType: "form",
              customBtnId: [],
              formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
              systemName: "鹏雷实业-常州工厂",
              dbName: "vs31c8p3w996",
              formName: "物料流转卡",
              authId: "4",
            },
            type: 34,
            outParams: [
              {
                name: "id",
                propType: "_id",
                type: "dynamic",
                propKey: "_id",
                key: "1706261254000_36146",
              },
            ],
            h5PageUrl: "",
            canRepeatClick: true,
            popEvent: [
              {
                name: "close",
                id: "pop_1703581053000_89484",
                event: {
                  type: 36,
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581057000_91183",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1706855366000_23451",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                      remark: "物料流转卡",
                    },
                  ],
                  refreshIdList: ["1706855366000_23451"],
                },
                dynamicObj: {
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  sourceId: "1706855366000_23451",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  formType: "form",
                  customBtnId: [],
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  systemName: "鹏雷实业-常州工厂",
                  dbName: "vs31c8p3w996",
                  formName: "物料流转卡",
                  authId: "4",
                },
              },
            ],
            dialogPropsOverlay: true,
            path: "DanChuang032024013014553096534_2024041817310357387_2024042221064778188",
            pageType: 0,
            trggerList: {
              name: "风险告知单",
              formButtonid: "1713757430000_33266",
              customName: "同意加工",
              isConfirmSetting: true,
              doubleConfirm: true,
            },
            customPage: false,
            name: "流转详情",
            id: "c9ef056a-225a-48c7-a4aa-b5c870da9086",
            dialogPropsPosition: "middle",
            event: {
              type: 42,
              cacheFilteren: true,
              refreshList: [
                {
                  id: "1706855366000_23451",
                  condition: [],
                  name: "表单列表",
                  formType: "form",
                  remark: "物料流转卡",
                },
              ],
              refreshIdList: ["1706855366000_23451"],
            },
            msgActions: [],
            msgToast: "执行中，请勿重复点击。",
            logicId: "16e2782d-14b2-49e3-ac67-58dfc5180728",
            logicParams: ["recordId", "formName", "userId"],
            paramList: [
              {
                id: "1722332020000_82",
                key: "recordId",
                type: "dynamic",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "_id",
              },
              {
                id: "1722332020000_85709",
                key: "formName",
                type: "custom",
                pageParamsKey: "",
                customValue: "物料流转卡",
                sysUserKey: "",
                dynamicKey: "",
              },
              {
                id: "1722332020000_45956",
                key: "userId",
                type: "userId",
                pageParamsKey: "",
                customValue: "",
                sysUserKey: "",
                dynamicKey: "",
              },
            ],
            outputParams: [
              {
                key: "message",
              },
            ],
            outputParamsList: [
              {
                rel: "and",
                conditionList: [
                  {
                    key: "message",
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "success",
                      valueType: "string",
                    },
                  },
                ],
                event: {
                  type: 26,
                  event: {
                    type: 42,
                    refreshList: [
                      {
                        id: "1716889460000_3006",
                        condition: [],
                        name: "表单列表",
                        formType: "form",
                      },
                    ],
                    refreshIdList: ["1716889460000_3006"],
                  },
                  dynamicObj: {
                    dbName: "vs31c8p3w996",
                    systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                    systemName: "鹏雷实业-常州工厂",
                    formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                    formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                    formName: "物料流转卡",
                    formType: "form",
                    authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                    sourceId: "1716889460000_3006",
                  },
                  trggerList: {
                    name: "删除数据",
                    formButtonid: "1722329980000_8345",
                    customName: "确认删除",
                  },
                },
                dynamicObj: {
                  dbName: "vs31c8p3w996",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  systemName: "鹏雷实业-常州工厂",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  formName: "物料流转卡",
                  formType: "form",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                  sourceId: "1716889460000_3006",
                },
                class: "button",
                hoverEvent: {
                  type: -1,
                },
                eventlist: [
                  {
                    appType: "h5",
                    appTypeName: "H5",
                    show: true,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                  {
                    appType: "wx",
                    appTypeName: "微信小程序",
                    show: false,
                    event: {
                      type: -1,
                    },
                    frontEvent: {
                      type: -1,
                    },
                  },
                ],
                frontEvent: {
                  type: -1,
                },
              },
            ],
          },
          class: "button",
          value: "删除",
          showByData: true,
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          showRules: {
            noMatchShow: false,
            model: "",
            rules: [
              {
                conditionList: [
                  {
                    model: "radio_1705299870000_2556",
                    type: "radio",
                    name: "流转状态",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: {
                        value: "待处理",
                        key: "待处理",
                      },
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          key: "客户确认",
                          textColor: "#f95858",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          key: "已排产",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "待生产",
                          key: "待生产",
                          textColor: "#eedf43",
                        },
                        {
                          value: "生产中",
                          key: "生产中",
                          textColor: "#c291e3",
                        },
                        {
                          value: "成品入库",
                          key: "成品入库",
                          textColor: "#818eec",
                        },
                        {
                          value: "成品出库",
                          key: "成品出库",
                          textColor: "#cb5075",
                        },
                        {
                          value: "成品验收",
                          key: "成品验收",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "来料退回",
                          key: "来料退回",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705299870000_2556",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "来料入库",
                    },
                  },
                  {
                    model: "userradio_1705474018000_89120",
                    type: "userradio",
                    name: "制单人",
                    isSub: false,
                    options: {
                      width: "100%",
                      lineWidth: "100%",
                      defaultValue: {
                        userIds: "",
                      },
                      remote: "0",
                      sinmulti: false,
                      statswe: 2,
                      dataType: "string",
                      required: false,
                      remoteFunc: "func_1705474018000_89120",
                      inputvalue: null,
                      defCurrent: true,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "currentUser",
                    },
                  },
                ],
                show: true,
                rel: "and",
              },
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1705299870000_2556",
                    type: "radio",
                    name: "流转状态",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: "",
                      showLabel: false,
                      options: [
                        {
                          value: "待处理",
                          key: "待处理",
                        },
                        {
                          value: "来料入库",
                          key: "来料入库",
                        },
                        {
                          value: "客户确认",
                          key: "客户确认",
                          textColor: "#f95858",
                        },
                        {
                          value: "已来料检",
                          key: "已来料检",
                        },
                        {
                          value: "已排产",
                          key: "已排产",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "生产中",
                          key: "生产中",
                          textColor: "#c291e3",
                        },
                        {
                          value: "待去氢",
                          key: "待去氢",
                        },
                        {
                          value: "待成品检验",
                          key: "待成品检验",
                        },
                        {
                          value: "待重工确认",
                          key: "待重工确认",
                        },
                        {
                          value: "成品待入库",
                          key: "成品待入库",
                        },
                        {
                          value: "成品入库",
                          key: "成品入库",
                          textColor: "#818eec",
                        },
                        {
                          value: "成品待出库",
                          key: "成品待出库",
                        },
                        {
                          value: "成品出库",
                          key: "成品出库",
                          textColor: "#cb5075",
                        },
                        {
                          value: "成品验收",
                          key: "成品验收",
                          textColor: "#0dcbaf",
                        },
                        {
                          value: "来料退回",
                          key: "来料退回",
                        },
                        {
                          value: "来料已退回",
                          key: "来料已退回",
                        },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                      },
                      remoteFunc: "func_1705299870000_2556",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "已来料检",
                    },
                  },
                  {
                    model: "userradio_1705474018000_89120",
                    type: "userradio",
                    name: "制单人",
                    isSub: false,
                    options: {
                      width: "100%",
                      lineWidth: "100%",
                      defaultValue: {
                        userIds: "",
                      },
                      remote: "0",
                      sinmulti: false,
                      statswe: 2,
                      dataType: "string",
                      required: false,
                      remoteFunc: "func_1705474018000_89120",
                      inputvalue: null,
                      defCurrent: true,
                    },
                    condition: {
                      conditionSelected: {
                        key: "equal",
                        value: "等于",
                      },
                      value: "currentUser",
                    },
                  },
                ],
              },
            ],
          },
          fDependComponent: "formsView",
          parentId: "1716951147000_55651",
          frontEvent: {
            type: -1,
          },
          fVersion: "1.0.5",
          name: "按钮",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          style: {
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            margin: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 0,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(254,98,99, 1)",
                className: "predefine-19951705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: {
                width: 0,
                style: "solid",
                radius: 4,
              },
              boxShadow: {
                hShadow: 0,
                blur: 0,
                vShadow: 0,
              },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(254,98,99, 1)",
                className: "predefine-19951705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "48",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          isPermissions: true,
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
        },
        {
          name: "按钮",
          class: "button",
          value: "毛坯入库",
          style: {
            padding: { top: 0, left: 0, bottom: 0, right: 0 },
            margin: { top: 0, left: 0, bottom: 0, right: 0 },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 0,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: { width: 0, style: "solid", radius: 4 },
              boxShadow: { hShadow: 0, blur: 0, vShadow: 0 },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(249,174,43, 1)",
                className: "predefine-69441705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: { width: 0, style: "solid", radius: 4 },
              boxShadow: { hShadow: 0, blur: 0, vShadow: 0 },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(249,174,43, 1)",
                className: "predefine-69441705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          event: {
            type: 18,
            path: "DanChuang022024011614524619535",
            popEvent: [
              {
                name: "close",
                id: "pop_1703581041000_10206",
                event: { type: 36 },
                dynamicObj: {
                  dbName: "vs31c8p3w996",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  systemName: "鹏雷实业-常州工厂",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  formName: "物料流转卡",
                  formType: "form",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                  sourceId: "1716889460000_3006",
                },
              },
              {
                name: "refresh",
                id: "pop_1703581045000_22838",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                  ],
                  refreshIdList: ["1716889460000_3006"],
                },
                dynamicObj: {
                  dbName: "vs31c8p3w996",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  systemName: "鹏雷实业-常州工厂",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  formName: "物料流转卡",
                  formType: "form",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                  sourceId: "1716889460000_3006",
                },
              },
            ],
            dialogPropsPosition: "right",
            dialogPropsOverlay: true,
            outParams: [
              {
                name: "id",
                propKey: "sn_1705298950000_74081",
                key: "1726121706000_2471",
                type: "dynamic",
                propType: "sn",
              },
            ],
          },
          newIndex: 11,
          id: "1726121259000_93460",
          componentId: "e2bcd7d9-15f5-4289-9682-36cdee6f9a7c",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          eventlist: [
            {
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: { type: -1 },
              frontEvent: { type: -1 },
            },
            {
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: { type: -1 },
              frontEvent: { type: -1 },
            },
          ],
          fVersion: "1.1.2",
          fDependComponent: "formsView",
          fManUrl: "https://www.veish.com",
          parentId: "1716951132000_90340",
          parentClass: "rowView",
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
          hoverEvent: { type: -1 },
          frontEvent: { type: -1 },
          isPermissions: true,
          permissions: {
            type: "role",
            roleIdList: [
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
            ],
          },
          unAuthLimit: "hide",
          showByData: true,
          showRules: {
            model: "",
            rules: [
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1705299870000_2556",
                    type: "radio",
                    name: "流转状态",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: "",
                      showLabel: false,
                      options: [
                        { value: "待处理", key: "待处理" },
                        { value: "来料入库", key: "来料入库" },
                        {
                          value: "客户确认",
                          key: "客户确认",
                          textColor: "#f95858",
                        },
                        { value: "已来料检", key: "已来料检" },
                        {
                          value: "已排产",
                          key: "已排产",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "生产中",
                          key: "生产中",
                          textColor: "#c291e3",
                        },
                        { value: "待去氢", key: "待去氢" },
                        { value: "待成品检验", key: "待成品检验" },
                        { value: "待重工确认", key: "待重工确认" },
                        { value: "成品待入库", key: "成品待入库" },
                        {
                          value: "成品入库",
                          key: "成品入库",
                          textColor: "#818eec",
                        },
                        { value: "成品待出库", key: "成品待出库" },
                        {
                          value: "成品出库",
                          key: "成品出库",
                          textColor: "#cb5075",
                        },
                        {
                          value: "成品验收",
                          key: "成品验收",
                          textColor: "#0dcbaf",
                        },
                        { value: "来料退回", key: "来料退回" },
                        { value: "来料已退回", key: "来料已退回" },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1705299870000_2556",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                      disabled: false,
                    },
                    condition: {
                      conditionSelected: { key: "equal", value: "等于" },
                      value: "生产中",
                    },
                  },
                  {
                    model: "radio_1717377427000_26699",
                    type: "radio",
                    name: "成品入库阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: { value: "待处理", key: "待处理" },
                      showLabel: false,
                      options: [
                        { value: "待处理", key: "待处理" },
                        { value: "已部分入库", key: "已部分入库" },
                        { value: "已入库", key: "已入库" },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1717377427000_26699",
                      dataType: "Object",
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: { key: "not_equal", value: "不等于" },
                      value: "已入库",
                    },
                  },
                ],
              },
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1717377427000_26699",
                    type: "radio",
                    name: "成品入库阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: { value: "待处理", key: "待处理" },
                      showLabel: false,
                      options: [
                        { value: "待处理", key: "待处理" },
                        { value: "已部分入库", key: "已部分入库" },
                        { value: "已入库", key: "已入库" },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1717377427000_26699",
                      dataType: "Object",
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: { key: "not_equal", value: "不等于" },
                      value: "已入库",
                    },
                  },
                  {
                    model: "radio_1705299870000_2556",
                    type: "radio",
                    name: "流转状态",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: "",
                      showLabel: false,
                      options: [
                        { value: "待处理", key: "待处理" },
                        { value: "来料入库", key: "来料入库" },
                        {
                          value: "客户确认",
                          key: "客户确认",
                          textColor: "#f95858",
                        },
                        { value: "已来料检", key: "已来料检" },
                        {
                          value: "已排产",
                          key: "已排产",
                          textColor: "#e27e6e",
                        },
                        {
                          value: "生产中",
                          key: "生产中",
                          textColor: "#c291e3",
                        },
                        { value: "待去氢", key: "待去氢" },
                        { value: "待成品检验", key: "待成品检验" },
                        { value: "待重工确认", key: "待重工确认" },
                        { value: "成品待入库", key: "成品待入库" },
                        {
                          value: "成品入库",
                          key: "成品入库",
                          textColor: "#818eec",
                        },
                        { value: "成品待出库", key: "成品待出库" },
                        {
                          value: "成品出库",
                          key: "成品出库",
                          textColor: "#cb5075",
                        },
                        {
                          value: "成品验收",
                          key: "成品验收",
                          textColor: "#0dcbaf",
                        },
                        { value: "来料退回", key: "来料退回" },
                        { value: "来料已退回", key: "来料已退回" },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1705299870000_2556",
                      dataType: "Object",
                      inputkey: "",
                      inputvalue: null,
                      disabled: false,
                    },
                    condition: {
                      conditionSelected: { key: "equal", value: "等于" },
                      value: "成品待入库",
                    },
                  },
                ],
              },
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1718180624000_59630",
                    type: "radio",
                    name: "是否有返工",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: { value: "无返工", key: "无返工" },
                      showLabel: false,
                      options: [
                        { value: "返工中", key: "返工中" },
                        { value: "无返工", key: "无返工" },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1718180624000_59630",
                      dataType: "Object",
                      inputvalue: null,
                    },
                    condition: {
                      conditionSelected: { key: "equal", value: "等于" },
                      value: "返工中",
                    },
                  },
                  {
                    model: "radio_1717377427000_26699",
                    type: "radio",
                    name: "成品入库阶段",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: { value: "待处理", key: "待处理" },
                      showLabel: false,
                      options: [
                        { value: "待处理", key: "待处理" },
                        { value: "已部分入库", key: "已部分入库" },
                        { value: "已入库", key: "已入库" },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1717377427000_26699",
                      dataType: "Object",
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: { key: "equal", value: "等于" },
                      value: "已入库",
                    },
                  },
                ],
              },
            ],
            noMatchShow: false,
          },
        },
        {
          name: "按钮",
          class: "button",
          value: "毛坯出库",
          style: {
            padding: { top: 0, left: 0, bottom: 0, right: 0 },
            margin: { top: 0, left: 0, bottom: 0, right: 0 },
            absoluteWidth: 150,
            textAlign: "center",
            animationEffectType: "none",
            animationEffectStart: "intoPage",
            deviation: 0,
            fill: true,
            animationEffectSpeed: "1s",
            animationEffectCustomSpeed: 1,
            hover: {
              border: { width: 0, style: "solid", radius: 4 },
              boxShadow: { hShadow: 0, blur: 0, vShadow: 0 },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(255,255,255, 1)",
                deg: 0,
                toColor: "",
                className: "predefine-89981705371162949",
                fromColor: "",
                bgImage: "",
                type: 0,
              },
              font: {
                size: 14,
                color: "rgba(249,174,43, 1)",
                className: "predefine-69441705371162949",
                fontWeight: "normal",
              },
            },
            default: {
              border: { width: 0, style: "solid", radius: 4 },
              boxShadow: { hShadow: 0, blur: 0, vShadow: 0 },
              svg: {
                site: "left",
                margin: 4,
                drawerType: "svg",
                color: "#FFFFFF",
                show: false,
                name: "system00123",
                fontSize: 14,
                iconPath: "/accessory/system/系统/system00123.svg",
              },
              background: {
                bgColor: "rgba(248, 125, 24, 1)",
                deg: 0,
                toColor: "",
                fromColor: "",
                bgImage: "",
                type: 3,
              },
              font: {
                size: 14,
                color: "rgba(249,174,43, 1)",
                className: "predefine-69441705371162949",
                fontWeight: "normal",
              },
            },
            justify: "center",
            width: "72",
            x: 0,
            absoluteHeight: 35,
            y: 0,
            position: "unset",
            height: 32,
          },
          event: {
            type: 18,
            path: "popup042024091216431189512",
            popEvent: [
              {
                id: "pop_1703581095000_61809",
                name: "close",
                event: { type: 36 },
                dynamicObj: {
                  dbName: "vs31c8p3w996",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  systemName: "鹏雷实业-常州工厂",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  formName: "物料流转卡",
                  formType: "form",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                  sourceId: "1716889460000_3006",
                },
              },
              {
                id: "pop_1703581099000_98351",
                name: "refresh",
                event: {
                  type: 42,
                  refreshList: [
                    {
                      id: "1716889460000_3006",
                      condition: [],
                      name: "表单列表",
                      formType: "form",
                    },
                  ],
                  refreshIdList: ["1716889460000_3006"],
                },
                dynamicObj: {
                  dbName: "vs31c8p3w996",
                  systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
                  systemName: "鹏雷实业-常州工厂",
                  formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
                  formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
                  formName: "物料流转卡",
                  formType: "form",
                  authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
                  sourceId: "1716889460000_3006",
                },
              },
            ],
            dialogPropsPosition: "right",
            dialogPropsOverlay: true,
            outParams: [
              {
                name: "id",
                propKey: "sn_1705298950000_74081",
                key: "1726121706000_2471",
                type: "dynamic",
                propType: "sn",
              },
            ],
          },
          newIndex: 11,
          id: "1726131210000_59877",
          componentId: "e2bcd7d9-15f5-4289-9682-36cdee6f9a7c",
          adaptApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          originalApp: ["h5", "wx", "qywx", "ali", "bd", "tt"],
          eventlist: [
            {
              appType: "wx",
              appTypeName: "微信小程序",
              show: false,
              event: { type: -1 },
              frontEvent: { type: -1 },
            },
            {
              appType: "h5",
              appTypeName: "H5",
              show: true,
              event: { type: -1 },
              frontEvent: { type: -1 },
            },
          ],
          fVersion: "1.1.2",
          fDependComponent: "formsView",
          fManUrl: "https://www.veish.com",
          parentId: "1716951132000_90340",
          parentClass: "rowView",
          dynamicObj: {
            dbName: "vs31c8p3w996",
            systemId: "ee191c4b-834d-48a9-af48-7e92c2fa0b77",
            systemName: "鹏雷实业-常州工厂",
            formGrounpId: "af8850b3-fb6b-4ffb-a74e-22c3a2c329a6",
            formId: "1dd2f9a3-c91b-43d0-86d7-4162616326c8",
            formName: "物料流转卡",
            formType: "form",
            authId: "dc4da1d0-8f28-4293-8c88-07c44fc49eb6",
            sourceId: "1716889460000_3006",
          },
          hoverEvent: { type: -1 },
          frontEvent: { type: -1 },
          isPermissions: true,
          permissions: {
            type: "role",
            roleIdList: [
              "b768860c-4bf1-475b-96f5-8b7c99aa31e8",
              "999154f4-d287-43d9-a93b-d7e82f4a3806",
              "33c3ea07-6b7e-4a23-ab4a-e584676aff6f",
            ],
          },
          unAuthLimit: "hide",
          showByData: true,
          showRules: {
            model: "",
            rules: [
              {
                show: true,
                rel: "and",
                conditionList: [
                  {
                    model: "radio_1717583877000_17038",
                    type: "radio",
                    name: "是否可出库",
                    isSub: false,
                    options: {
                      inline: false,
                      lineWidth: "100%",
                      defaultValue: { value: "不可出库", key: "不可出库" },
                      showLabel: false,
                      options: [
                        { value: "不可出库", key: "不可出库" },
                        { value: "可出库", key: "可出库" },
                      ],
                      required: false,
                      width: "",
                      remote: "0",
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1717583877000_17038",
                      dataType: "Object",
                      inputkey: "",
                    },
                    condition: {
                      conditionSelected: { key: "equal", value: "等于" },
                      value: "可出库",
                    },
                  },
                ],
              },
            ],
            noMatchShow: false,
          },
        },
      ],
    };
  },
  provide: {
    responsive: true,
  },
  components: {
    buttonView,
  },
  computed: {
    showBtns() {
      return this.showList.filter((v) => !v.hidden);
    },
    /**
     * 当组件处在分组管理中的时候
     * 会有激活态;
     */
    isComponentActive() {
      return function (ele) {
        if (!ele.event) return false;
        const { refreshIdList, type } = ele.event;
        if (type != 42 || !refreshIdList) return false;
        if (!refreshIdList.length) return false;
        let _copmId = ele.id;
        if (this.record && this.record._id) {
          _copmId += "_" + this.record._id;
        }
        let componentsStateGroup = _pageStore.componentsStateGroup;
        let options = componentsStateGroup.find(
          (v) => v.target == refreshIdList[0]
        );
        if (options) {
          const activeBtn = options.source.find((v) => v.id == ele.id);
          if (!activeBtn) {
            return false;
          }
        } else {
          return false;
        }
        return _pageStore.componentsManager[refreshIdList[0]] === _copmId;
      };
    },
  },
  created() {
    let array = this.showList;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      this.hiddenJudge(element);
    }
  },
  methods: {
    hiddenJudge(ele) {
      // 动态数组组件中 元素的显示隐藏
      const { showByData, showRules, dynamicObj } = ele;
      let needHidden = isVisible(
        ele,
        this.record,
        this.recordIndex,
        this.conditions
      );
      if (
        ele.permissions ||
        ele.class == "flexColumnView" ||
        ele.class == "tab"
      ) {
        if (_commonStore.roleIdList && _commonStore.roleIdList.length > 0) {
          if (ele.class != "flexColumnView" && ele.class != "tab") {
            ele.hidden =
              needHidden ||
              this.dealPermission(
                ele,
                ele.permissions.roleIdList,
                _commonStore.roleIdList
              );
          } else {
            if (ele.permissions) {
              this.hidden =
                needHidden ||
                this.dealPermission(
                  ele,
                  ele.permissions.roleIdList,
                  _commonStore.roleIdList
                );
            } else {
              if (needHidden) {
                ele.hidden = true;
              }
            }
            this.dealPanelPermission(ele, _commonStore.roleIdList);
          }
        } else {
          const targetId = this.record ? ele.id + this.record._id : ele.id;
          this.bus.onByType(
            targetId + "_roleAuth",
            "roleListSuccess",
            (res) => {
              if (ele.class != "flexColumnView" && ele.class != "tab") {
                ele.hidden =
                  needHidden ||
                  this.dealPermission(ele, ele.permissions.roleIdList, res);
              } else {
                if (ele.permissions) {
                  ele.hidden =
                    needHidden ||
                    this.dealPermission(ele, ele.permissions.roleIdList, res);
                } else {
                  if (needHidden) {
                    ele.hidden = true;
                  }
                }
                this.dealPanelPermission(ele, res);
              }
            }
          );
        }
      } else {
        ele.hidden = needHidden;
      }
    },
    dealPanelPermission(ele, currentRoles) {
      const { list } = ele;
      if (!list || !Array.isArray(list)) return;
      for (let index = 0; index < list.length; index++) {
        const e = list[index];
        const { permission } = e;
        if (!permission) continue;
        const { role, open } = permission;
        if (!open) continue;
        const hasRole = currentRoles.filter((v) => {
          return role.indexOf(v) != -1;
        });
        e.hidden = hasRole.length ? false : true;
      }
      ele.list = list.filter((v) => !v.hidden);
    },
    dealPermission(ele, arr1, arr2) {
      var arr3 = arr1.filter(function (num) {
        return arr2.indexOf(num) != -1;
      });
      const { unAuthLimit } = ele;
      if (unAuthLimit == "clickStop") {
        return false;
      }
      return arr3.length ? false : true;
    },
  },
};
</script>

<style>
.flex-view-btn {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
