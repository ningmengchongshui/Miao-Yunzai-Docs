---
sidebar_position: 3
---

# 模块

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::tip 提示

所有行为都应该是从推荐的模块中导出，这是统一的接口规范。

:::


## 核心


```ts
import * as Core from 'yunzai/core'
```

<Tabs>
  <TabItem value="apple" label="函数应用" default>

```ts title="./message.ts"
import { Messages } from 'yunzai/core'
const message = new Messages({
  event: 'message.group'
})
message.response(/^(#|\/)?你好/, async e => {
    e.reply('你好')
})
export default message
```

  </TabItem>
  <TabItem value="orange" label="类应用">

```ts title="./message.ts"
import { Plugin } from 'yunzai/core'
export default class App extends Plugin {
  constructor () {
    super()
    this.priority = 700
    this.rule = [
        {
          reg:/^(#|\/)?你好/,
          fnc: this.hello.name
        },
      ]
  }
  async hello () {
    this.e.reply('你好')
  }
}
```

  </TabItem>
  <TabItem value="banana" label="动态函数应用(基本)">

```ts title="./message.ts"
import { Messages } from 'yunzai/core'

// 表 YourFuncs 可以预定义，也可运行时动态构建
const YourFuncs = new Map([
    [/^(#|\/)?你好呀/, async (e) => {
        e.reply('你好呀');
    }],
    [/^(#|\/)?你好哇/, async (e) => {
        e.reply('你好哇');
    }],
    [/^(#|\/)?嘎嘎/, async (e) => {
        e.reply('嘎嘎');
    }]
]);

const message = new Messages({
  event: 'message.group'
});

for (const [pattern, callback] of YourFuncs) {
  message.response(pattern, callback)
}

export default message
```

  </TabItem>
  <TabItem value="banana" label="动态函数应用(复杂)">

```ts title="./message.ts"
import { Messages } from 'yunzai/core'

// 对象 YourApps 可以预定义，也可运行时动态构建
const YourApps = {
  YourFuncs1: new Map([
    [/^(#|\/)?你好呀/, async (e) => {
        e.reply('你好呀');
    }],
    [/^(#|\/)?你好哇/, async (e) => {
        e.reply('你好哇');
    }],
]),
  YourFuncs2: new Map([
    [/^(#|\/)?你好/, async (e) => {
        e.reply('你好');
    }],
    [/^(#|\/)?Hello/, async (e) => {
        e.reply('Hello');
    }],
]),
};

const apps = {};

for (const name in YourApps) {
  const message = new Messages({
    event: 'message.group'
  });
  for (const [pattern, callback] of YourFuncs[name]) {
    message.response(pattern, callback)
  }
  apps[name] = message.ok
}
export apps
```

  </TabItem>
</Tabs>

## 配置

```ts 
import * as Config from 'yunzai/config'
```

配置模块主要分为`系统性常量`和`系统配置器`

- 系统性常量

```ts
import { BOT_NAME } from 'yunzai/config'
```

这是无法修改的,存在于内容,且运行后不变的

- 系统配置器

```ts
import { ConfigController } from 'yunzai/config'
```

配置器包含了配置文件内的所有参数.

## 工具

```ts 
import * as Utils from 'yunzai/utils'
```

该模块是与机器人运行无关的,但与config系统有关的.

主要辅助开发者更快的实现业务,而不再需要关注方法的实现


## 数据

>不推荐使用， Redis ，Sqlite 未来不再主动连接

```ts 
import * as DB from 'yunzai/db'
```

当前数据分为`Redis`和`Sqlite`数据库

## 原神


> 不推荐使用，未来版本将废弃

```ts 
import * as MYS from 'yunzai/mys'
```

米游接口 -- 非米游插件禁止使用
