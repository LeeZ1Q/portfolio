---

title: APIKnight - Build a mock service

date: 2023-08-29
---



## 背景

字节青训营的大项目

## 相关文档整理

[项目汇报文档](https://ww8m6f2mbb5.feishu.cn/docx/MdJed7yuvoG7Yfxg7NfcLkf8nRh)

![image-20230829220642171](https://s2.loli.net/2023/08/29/d3rj2HWf5yIM4Sl.png)



![image-20230829220727206](https://s2.loli.net/2023/08/29/IN5ELTQJn3tzu2X.png)

## Mock Service

![image-20230829220551226](https://s2.loli.net/2023/08/29/JLWBxEu1gj4Qmea.png)

**mock服务：**

**关于响应参数结构填写**

1. 参数属性包括：参数名（key）,参数类型，是否必填，备注，示例值（example）。
2. 基本参数类型有：`string`,`number`,`boolean`,`object`,`array`。
3. 如若参数类型选择对象或者对象数组（`array[object]`），则可以再选择子一级参数。
4. 暂不支持嵌套数组，若选择数组，那么数组里每个值类型都应该一样。

```js
response= {
  example: Object,
  params: Array[Param]
}

Param = {
  key: String,            // 参数名
  type: String,           // 参数类型，string|number|boolean|object|array
  comment: String,        // 备注
  example: String,        // 参数示例值
  items: {                // 当参数类型为array时，此字段生效
    type: String          // 数组的参数类型
    params: Array[Param]  // 当数组参数类型为object类型时，此字段生效，意义为数组内对象的参数模型
  }
}
```

**关于Mock**

**mock规则**

结合了[Mock.js](http://mockjs.com/)，拥有了mock随机假数据的能力。

如若设置了`Response`的`Example`，则会返回`Example`的值，如果当中写了[Mock.js](http://mockjs.com/examples.html)的语法，则会生成对应的数据。例如

```js
// example值为：
{
  "status|1-2": true,
  "number|1-100": 100
}
// 则会生成
{
  "status": false,
  "number": 40
}
// 或
{
  "status": true,
  "number": 99
}
// 或其他随机值
```

如果没有设置`Response`的`Example`，则会根据对应`params`产生mock数据。

1. 生成mock数据时，会优先使用`params`参数的示例值。
2. 若示例值未填写，则`String`类型参数mock数据为`"value"`，`Boolean`与`Number`会随机

```JSON
{
    params:[
        {
            key:id,
            type: string,
            example: "abc123"
        },
        {
           key:name,
           type:string
        }
     ]
}

生成：
    {
        "id": "abc124",
        "name": "value"
    }
```