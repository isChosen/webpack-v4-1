/*
 * @Author: liangchaoshun
 * @Date: 2019-01-28 15:49:12
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-18 09:27:43
 * @Description: 本地 mock data
 *   数据源： 需要要什么样的数据格式，请在当前目录下的 ./data 目录中新建 json 类型文件，示例如：example1.json
 *   接  口： 在此文件(mockConf.js) 新建 api 接口
 *   多人开发时 mock 数据，此文件必然会冲突，所以，尽量不要动别人的 api，在解决冲突时，选择 "保留双方更改"
 *   【特别注意】：本地 mock 数据，只限 get 请求，如果存在 post 请求，devServer.before 内的 post 将会拦截掉其他 post 请求（代理服务）导致其他
 *    post 请求发生错误。所以，mock 数据时请使用 get 方式
 */

const rank = require('./data/example1.json');
const girls = require('./data/example2.json');
const mockEnvirData = require('./data/mockEnvirData.json');

const Mock = app => {

  // ---------------  请不要删除示例，自定义接口请写在示例后面  ----------------

  // 示例-1
  app.get('/mock/example1', (req, res) => {
    res.json(rank);
  });

  // post 示例-2
  // 参数在 req.body 中，查询参数 req.query 与 body 字段属同一级
  app.get('/mock/example2', (req, res) => {
    const { query: { name } } = req;
    // console.log('mock name: ', name);
    let result = girls.data.find(el => el.name === name) || null;
    res.json(result);
  });

  // ----------------  自定义 mock 接口，请在下方继续添加 ----------------

  // 与本地 node 服务是同一个 api，最终返回的是 mock 数据，验证了 devServer.before 相比于 proxy 优先级更高
  app.get('/api/getEnvirData', (req, res) => {
    res.json(mockEnvirData);
  });

  // 主页获取随机数
  app.get('/mock/getRandom', (req, res) => {
    const selectFrom = (lv, uv) => {
      const choices = uv - lv + 1;
      return Math.floor(Math.random() * choices + lv);
    }
    const number = selectFrom(2, 9);
    res.json({ code: 2, data: number })
  });

};

module.exports = Mock;
