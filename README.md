## <span style="font-weight: 600; color: #49a9ee">SCHEMA</span>

- <span style="font-weight: 600; color: #49a9ee">查看 README 方式</span>
  * F1 -> 搜索 markdown -> 打开侧边栏预览
- 按需加载方案：<code>React.lazy</code> 与 <code>@loadable/component</code> 对比参见：https://www.smooth-code.com/open-source/loadable-components/docs/loadable-vs-react-lazy/ <code>react-loadable</code> 不再推荐使用；
- <code>React.lazy</code> 目前只支持用于 <code>export / export default</code> 导出的组件，这样能保证 <code>treeshaking</code> 正常使用。对于第三方库的组件和方法，不建议按需加载，采用传统的 <code>import</code> 写法引入即可，本项目的按需加载（<code>React.lazy</code>）用于项目内的自定义组件；
- <code>Eslint</code> 参考规则及处理方式：
  - <code>Eslint</code> 配置请参见：https://github.com/isChosen/webpack-onDemand-more/blob/master/README.md
  - <code>Eslint Rules</code> 参见官网：https://eslint.org/
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
    * <span style="color: #ce8512">* 命令中以 <code>:self</code> 结尾表示：该命令每次都执行对应的 dll 命令，即使 dll 文件已存在。</span>
  * 本地调试：
    - 命令：<code style="font-size: 17px; font-weight: 600; color: #f04134;">npm start</code>（<code>start</code> 比较特殊，写法上：<code>npm start</code> 等价于 <code style="font-size: 17px; font-weight: 600; color: #f04134;">npm run start</code> ）
    - <span style="color: #ce8512">如果 dll 文件已存在，建议使用命令 <code>npm run start:self </code></span>
  * 打包代码：
    - <span style="color: #ce8512">用于正式打包发布（内网/预发布/外网）</span>
    - 命令：<code style="font-size: 17px; font-weight: 600; color: #f04134;">npm run build</code>
  * <span style="font-size: 16px; font-weight: 600; color: #f04134;">提交注意 提交注意 提交注意</span>
    - 普通 commit：不要提交你本地 <code style="color: #f04134;">dist</code> 目录下的文件；
    - 构建 commit：执行了 <code>npm run build</code> 命令后，要发布到内网的情况，就需要连同 <code style="color: #f04134;">dist</code> 下的所有文件一并提交。
  * SVN 提交时，根目录下的 <span style="font-size: 16px; font-weight: 600; color: #f04134">.idea, analysis, cache, node_modules </span> 这些文件夹不需要提交。设置 <span style="color: #f04134">svn ignore</span> 方法：
  * 右键选中需要忽略的文件/夹，TortoiseSVN > Add to ignore list > 递归或者不递归；
  * 查看 ignore list：项目根目录右击空白，TortoiseSVN > Properties，即可看到。
- <span style="font-weight: 600; color: #49a9ee">技术框架</span>
  * <span style="color: #de9f41">webpack@4+</span>
    - 按需加载分割点：<code>react.lazy</code> 进一步分割点： <code>common-chunk</code>
    - 资源路径别名设置：<code>webpack.config.main.base > resolve.alias</code> ，省去 <code>'../../..'</code> 查找资源
  * <span style="color: #de9f41">react@16+</span>
    - <code>lazy</code> 配合 <code>Suspense</code>
  * <span style="color: #de9f41">react-router@4+</span>
    - 路由即组件，分散在自定义组件中
  * <span style="color: #de9f41">react-redux</span>
    - 数据管理框架，用其中的 <code>connect</code> 方法将组件的 <code>state</code> 和 <code>method</code> 映射成 <code>props</code>
  * <span style="color: #de9f41">react-saga</span>
    - redux 中间件，管理有<span style="color: #f04134">副作用</span>的 <code>action</code>
  * <span style="color: #de9f41">immutable</span>
    - 将 <code>state</code> 转成 <code>immutable</code> 对象，防止开发者无意识修改 <code>state</code>
- <span style="font-weight: 600; color: #49a9ee">目录结构</span>
  * 全局 <code>Store</code> ( <code>src\store</code> )
    - \| - <code>index</code> ：暴露 <code>store</code>，<code>react-redux</code> 利用在项目模块入口文件 ( <code>src\index.jsx</code> ) 中提供的 <code>Provider</code> 将其作为全局引入
    - \| - <code>actionTypes</code> ：全局 <code>action</code> 类型常量，<span style="font-size: 16px; font-weight: 600; color: #f04134;">瘦action胖reducer</span>，所以 <code>redux-saga</code> 中不处理业务，业务逻辑放在 <code>reducer</code> 中处理
    - \| - <code>reducer</code> ：全局 <code>reducer</code> 利用 <code>combineReducers</code> 方法组合分散在每个组件内的 <code>reducer</code>
    - \| - <code>hotelSaga</code> ：全局 <code>Redux-saga</code> ，用于处理副作用<code>action</code>，本项目目前只作为异步请求处理，详见官网第一句话描述：https://redux-saga.js.org/ 简单地改变 <code>state</code> 就不需要用 <code>redux-saga</code> 处理了。<code>redux-saga</code> 处理的范围由文件中的 <code>Generator</code> 函数：<code>hotelSaga</code> 定义
  * <span style="font-size: 16px; font-weight: 600; color: #f04134;">注意</span>： 在引入 <code>actionTypes</code> 类型常量时，只有在 <code>hotelSaga</code> 全部引入，而在每个组件中的 <code>actionCreator</code> 只引入该组件使用到的常量
  * 一个公用文件通常会暴露许多方法（如：methods.js）或常量（如：actionTypes.js），对其引入的方式需考虑：
    - <span style="color: #42a8b5">全部引入方式：<code>import * as objectName from 'path/module'</code></span>
    - <span style="color: #42a8b5">按需引入方式：<code>import { name } from 'path/module'</code></span>
    - <span style="color: #42a8b5">按需引入的方式，打包构建时，没使用到代码的会被 <code>webpack</code> 自动 <code>treeshaking</code> 除掉</span>
  * 每个组件中建议只包含如下文件和目录：
    - \| - <code>componentName.jsx</code> ：视情况可拆分为 <span style="color: #ce8512">容器组件</span> 和 <span style="color: #ce8512">UI组件</span>，能用 <span style="color: #ce8512">纯函数</span> 就用纯函数
    - \| - <code>componentName.less</code> ：组件的样式，如需修改第三方库的样式，添加 <code>:global</code> 书写格式如下：
      ```less
      .usercont {
        min-height: 100px;
        :global(.ant-empty) {
          color: rgba(0, 0, 0, 0.45);
          :global(.ant-empty-image) {
            height: 40px;
          }
        }
      }
      ```
    - \| - <code>store</code> ：关于组件的数据
      - \| - <code>actionCreator.js</code> ：创建组件的 <code>action</code>
      - \| - <code>reducer.js</code> ：业务逻辑处理
    - \| - <code>[descendant's component directory]</code> ：子组件目录，如果有的话
- <span style="font-weight: 600; color: #49a9ee">项目要点</span>
  * 进入页面方式，必须登录后才能打开页面，否则重定向回登录页面。即使是粘贴输入 <code>URL</code> ，权限路由 <code>AuthorizedRoute</code> 会发送一个请求验证是否登录有效
  * 输入 <code>URL</code> 打开页面，如果路径错误，则重定向到 <code>404</code> 页面
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
    * <code>render</code> 表现正常，刷不刷新子组件由 <code>shouldComponentUpdate</code> 返回结果决定，建议使用 <code>render</code>。
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
