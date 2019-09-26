# html2image

一个利用 puppeteer 将 html 转为图片的服务

适用于一些无法很好地解析富文本的场景，可以将富文本转为图片后供前端渲染

## 安装

先确保安装 node 环境 (version >= 8)

```bash
# 依赖安装
$ npm install

# 启动服务
$ npm start
```

服务默认跑在 8888 端口，端口冲突可自行修改

## 使用

服务启动后，默认接口地址即为 `ip:8888`，接受 post 请求

post 请求对象需提供三个参数

* `html` `{String}` 富文本 html 字符串
* `width` `{Number}` 需要生成的图片宽度
* `path` `{String}` 保存的路径
* return: `{Object}`
  * `code` `{Number}` 200 为保存成功，201 为保存失败


具体使用方式可查看 example 文件夹