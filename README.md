## <span style="font-weight: 600; color: #49a9ee">SCHEMA</span>

- <span style="font-weight: 600; color: #49a9ee">查看 README 方式</span>
  * F1 -> 搜索 markdown -> 打开侧边栏预览
- 按需加载方案：<code>React.lazy</code> 与 <code>@loadable/component</code> 对比参见：https://www.smooth-code.com/open-source/loadable-components/docs/loadable-vs-react-lazy/ <code>react-loadable</code> 不再推荐使用；
- <code>React.lazy</code> 目前只支持用于 <code>export / export default</code> 导出的组件，这样能保证 <code>treeshaking</code> 正常使用。对于第三方库的组件和方法，不建议按需加载，采用传统的 <code>import</code> 写法引入即可，本项目的按需加载（<code>React.lazy</code>）用于项目内的自定义组件；
- <code>Eslint</code> 参考规则及处理方式：
  - <code>Eslint</code> 配置请参见：https://github.com/isChosen/webpack-onDemand-more/blob/master/README.md
  - <code>Eslint Rules</code> 参见：https://eslint.org/
  - <code>Eslint React Rules</code> 参见：https://github.com/yannickcr/eslint-plugin-react
  - <span style="color: #d24949">注意：遇到 <code>Eslint</code> 报错时，请到以上网站查找原因，如果需要修改规则，请先跟组内同事讨论决定。确定要改的话，在 <code>.eslintrc.js</code> 中修改，务必加上注释，注释格式参考已有注释</span>

- <span style="font-weight: 600; color: #49a9ee">调试 & 构建</span>
  * 命令解释
    * <code>dll:dev</code> 把 React 编译成动态链接库文件，代码没压缩，用于开发调试时，提示/报错信息更友好
    * <code>dll:pro</code> 把 React 编译成动态链接库文件，代码已压缩，用于提交打包发布
    * <code>start</code> 本地开发调试，此命令<span style="color: #d24949">已包含</span> <code>dll:dev</code>
    * <code>start:self</code> 本地开发调试，此命令<span style="color: #d24949">不包含</span> <code>dll:dev</code>
    * <code>build:self</code> 打包构建，打包所得的文件中，代码已压缩，脚本文件名为 <code>chunk-[id]</code>，此命令<span style="color: #d24949">不包含</span> <code>dll:*</code>
    * <code>build:pro</code> 打包构建，打包所得的文件中，代码已压缩，脚本文件名为 <code>chunk-[id]</code>，此命令<span style="color: #d24949">已包含</span> <code>dll:pro</code>
    * <span style="color: #ce8512">* <code>build:self</code> 和 <code>build:pro</code> 的区别是：前者不对 dll 打包，后者每次都打包 dll，即使 dll 已被压缩。</span>
  * 本地调试：
    - 命令：<code style="font-size: 17px; font-weight: 600; color: #f04134;">npm run start</code>（<code>start</code> 比较特殊，写法上：<code>npm run start</code> 等价于 <code style="font-size: 17px; font-weight: 600; color: #f04134;">npm start</code> ）
  * 打包代码：
    - <span style="color: #ce8512">用于正式打包发布（内网/预发布/外网）</span>
    - 命令：<code style="font-size: 17px; font-weight: 600; color: #f04134;">npm run build</code>
  * <span style="font-size: 16px; font-weight: 600; color: #f04134;">提交注意 提交注意 提交注意</span>
    - 普通 commit：不要提交你本地 <code style="color: #f04134;">dist</code> 目录下的文件；
    - 构建 commit：执行了 <code>npm run build</code> 命令后，要发布到内网的情况，就需要连同 <code style="color: #f04134;">dist</code> 下的所有文件一并提交。
- <span style="font-weight: 600; color: #49a9ee">项目要点</span>
  * 全局 <code>Store</code> 路径：<code>src\store</code>
    - \| - <code>index</code> : 入口/出口，暴露 <code>store</code> 出去给 <code>react-redux</code>
    - \| - <code>actionTypes</code> : 全局 <code>action</code> 类型常量
    - \| - <code>reducer</code> : 全局 <code>reducer</code> 利用 <code>combineReducers</code> 方法组合分散在每个组件内的 <code>reducer</code>
    - \| - <code>hotelSaga</code> : <code>Redux-saga</code> 数据框架处理，本项目目前只作为异步请求处理，详见官网第一句话描述：https://redux-saga.js.org/ 简单地改变 <code>state</code> 就可以不需要用 <code>redux-saga</code> 处理了。<code>saga</code> 处理的范围由文件内的 <code>Generator</code> 函数 <code>hotelSaga</code> 定义
  * <span style="font-size: 16px; font-weight: 600; color: #f04134;">注意</span>： 在引入 <code>actionTypes</code> 类型常量时，只有在 <code>hotelSaga</code> 全部引入，而在每个组件中的 <code>actionCreator</code> 只引入该组件使用到的常量
  * 每个组件中建议只包含如下文件和目录：
    - \| - <code>[componentName].jsx</code>
    - \| - <code>[componentName].less</code>
    - \| - <code>store</code>
      - \| - <code>actionCreator.js</code>
      - \| - <code>reducer.js</code>
    - \| - <code>[descendant's component directory]</code>


## <span style="font-weight: 600; color: #f04134">ISSUES</span>
<span style="font-size: 16px; color: #d24949">1. react-router 4.x，正常写法时报 warnings，如下：</span>

```html
<Route path="/" exact component="{Home}" />
<Route path="/product" component="{Product}" />
<Route path="/about" component="{About}" />
<Route path="/login" component="{Login}" />
```
```javascript
Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
  in Route (created by App)
  in App
  in Router (created by BrowserRouter)
  in BrowserRouter
```
- <span style="font-size: 15px; color: #57a957">Solution</span>
  * 解决办法参见 github issue：https://github.com/ReactTraining/react-router/issues/6420
  * <code>component</code> 可以换成 <code>render</code> 两者的区别：
    * <code>component</code> 会强制刷新其下的子组件，不管子组件的 <code>shouldComponentUpdate</code> 是否 <code>return false</code>；
    * <code>render</code> 表现正常，刷不刷新子子组件由 <code>shouldComponentUpdate</code> 返回结果决定，建议使用 <code>render</code>。
  * 将其写成如下格式，即可 fix warning，如下：
````html
<Route path="/" exact component={props => <Home {...props} />} />
<Route path="/product" component={props => <Product {...props} />} />
<Route path="/about" component={props => <About {...props} />} />
<Route path="/login" component={props => <Login {...props} />} />
````

<span style="font-size: 16px; color: #d24949">2. react-router 4.x 刷新内嵌路由的页面报错，而刷新顶级路由没问题
- <span style="font-size: 15px; color: #57a957">Solution</span>
  * 把 <code>BrowserRouter</code> 换成 <code>HashRouter</code> 即可， 参见：https://blog.csdn.net/zwkkkk1/article/details/83411071
