const axios = require('axios')
const html = `
<p></p><p>我的<span><b>10%</b></span>父亲</p><p>&nbsp;</p><p>列举父亲的<span>10%</span>的生活日常，将父亲生活的日常通过<span>10%</span>来描述，打造一个经常陪客户吃饭，啤酒肚，商务父亲。</p><p>最后凸显出因为陪伴的过少，父亲在孩子心中的形象也只剩<span>10%</span>。</p><p>&nbsp;</p><p>文案示意：</p><p>&nbsp;</p><p>我的父亲比其他的父亲高<span>10%</span>，我的父亲比其他的父亲赚的要多<span>10%</span>，我的父亲比其他父亲胖<span>10%</span>，我的父亲比其他父亲忙<span>10%</span>，我的父亲酒量比其他父亲多<span>10%</span>。</p><p>&nbsp;</p><p>可我的父亲，在我的心中透明度也只有<span>10%</span>。</p><p>&nbsp;</p><p>我多么希望他能抽出<span>10%</span>的时间给我啊。</p><p><br></p><p>父亲错过了我第一次掉牙，错过了我第一次。。。。。</p><p>&nbsp;</p><p>最后引出，用臻迪相机，记录孩子的生活陪伴他的生活，成为他心中的<span>110%</span>好父亲。</p><p><br></p><p>

<style type="text/css">
p.p1 {margin: 0.0px 0.0px 2.0px 0.0px; text-align: center; font: 14.0px '.PingFang SC'; color: #454545}
p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #454545}
p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px '.PingFang SC'; color: #454545}
p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #454545; min-height: 14.0px}
span.s1 {font: 14.0px 'Helvetica Neue'}
span.s2 {font: 12.0px 'Helvetica Neue'}
</style>

</p><p>助力110%父亲，邀请好友助力，然后助力值达到110，即可获得免费的臻迪相机。还有随机京东优惠券，引导用户到京东购买。</p>
`

// 参数配置
const data = {
  width: 600,
  html,
  path: './hello.png' 
}

axios.post('http://127.0.0.1:8888', data)
  .then(res => {
    if (res.data.code === 200) {
      console.log('保存成功')
    } else {
      console.log('保存失败')
    }
  }).catch(err => {
    console.log(err)
  })