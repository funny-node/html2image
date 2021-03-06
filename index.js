const puppeteer = require('puppeteer')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  const { width, html, path } = ctx.request.body
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  try {
    await page.setViewport({width: +width, height: 50})
    await page.setContent(html)
    await page.screenshot({path, fullPage: true})
    await browser.close()
    
    ctx.body = {
      code: 200
    }
  } catch (err) {
    ctx.body = {
      code: 201,
      message: err,
    }
  }
})

app.listen(8888)
