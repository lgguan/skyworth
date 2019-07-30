# custom tool bar

@skyworthcloud/sky-material-custom-tool-bar

自定义工具条

## API

| 参数名 | 说明 | 必填 |  类型  | 默认值 | 备注 |
| ------ | --------------- | ---- | ----  | ------ | ---- |
| config | 工具对象参数集合，详见ToolObject对象说明 | true | Array |   []   |      |
| getInstance | 获取实例函数，主要用于获取组件的filed属性，从而获得表单中的value值   | false | Function |  -  |      |

## ToolObject
| 参数名 | 说明 | 必填 |  类型  | 默认值 | 备注 |
| ------ | --------------- | ---- | ----  | ------ | ---- |
| label | 工具的前置标签 | true | String |   -   |  Button工具的label为显示标签    |
| key | 工具的key | true | String |   -   |     |
| field | 工具的表单字段 | false | String |   -   |     |
| defaultValue | 工具的表单字段默认值 | false | Object |   -   |     |
| component | 工具的类型 | true | String |   -   |  仅支持Input, Select, DatePicker, TimePicker, Button   |
| componentProps | 工具的所有自有属性 | false | Object |   {}   |     |

