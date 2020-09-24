# preview-image-video
## 微信小程序preview-media带有图片描述

### 示例动图
<img src="/img/test.gif" width = "250" height = "555"/><br><br>
##### 跟微信小程序的wx.prevImage或者wx.prevVideo的基本类似，大体功能类似，体验上稍微有一点点差距吧，但是好在可以显示图片描述<br>
这里实现了如下功能和细节：<br>
* 支持左右滑动
* 图片双指缩放
* 单击图片返回
* 双击放大缩小
* 图片视频混排
* 显示图片描述

# 使用方法<br>
* 将pages中的preview-media-desc复制到您的项目中<br>
* 在app.json中注册该page<br>
* 具体可以参照项目目录index中的用法<br>

```
app.globalData.previewInfo = {
  list: [
    {
      picUrl: "", 
      video: "",
      desc: ""
    }
  ],
  current: 0
}

wx.navigateTo({
  url: '../../pages/preview-media-desc/index',
})
```
# 特别说明：
* 如果你需要使用视频，那么将会涉及到一个视频的宽高比例问题，这里我使用wx.getImageInfo()来获取视频封面的宽高比，从而知道video容器的高度。使用wx.getImageInfo()来获取网络图片的宽高必须配置download域名，否则最好你的接口能直接返回video的宽高信息，然后通过屏幕宽度计算出video容器的高度，这样显示的视频就会是按比例铺满整个手机的宽度。
* 在preview-media-desc/item/item-index中可找到对应的代码


[csdn原文：微信小程序可添加图片描述的wx.previewMedia](https://blog.csdn.net/pengbo6665631/article/details/108768510)<br>
### 如果对你有帮助，动动小手给个star,谢谢。
