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

## CentOS 里部署

如需要在 CentOS 里部署，我遇到的几个坑如下：

1. `npm install` 在下载 puppeteer 的某个过程会提示没有权限，尝试用 `sudo npm install`
2. 用 pm2 启动服务后，马上 error，查看 pm2 log，是因为 CentOS 部署需要安装额外的模块，参考 [这里](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix)，我将其列出的 Dependencies 全部用 yum 安装后解决（某些教程可能会让你用 `ldd` 命令查看缺失的模块，但是 **这里例出的名称不一定就是直接可用来安装的名称**，具体查看 [这篇文章](https://github.com/wayou/wayou.github.io/issues/48)）
3. 继续报错，提示需要加上 `--no-sandbox`，参考 [这里](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#setting-up-chrome-linux-sandbox)
4. 截止目前应该可以正常截图了，但是少部分中文会无法显示，参考 [给 CentOS 安装中文字体](https://fbd.intelleeegooo.cc/install-chinese-font-on-centos/)（[备用](https://www.jianshu.com/p/f2ba4f5b8f36)）（有的服务器可能根本没有安装中文，就应该先安装中文，但是我的情况是中文已经安装过了，可以用 `locale` 查看安装的语言）