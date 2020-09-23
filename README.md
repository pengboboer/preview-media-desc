# preview-image-video
## 微信小程序图片和视频浏览器

### 示例动图
<img src="/img/image_test.gif" width = "250" height = "555"/>   <img src="/img/image_video_test.gif" width = "250" height = "555"/><br><br>
这里实现了如下功能和细节：<br>
* 支持左右滑动
* 图片双指缩放
* 单击图片返回、双击放大缩小
* 图片视频混排
* 可以显示图片描述
##### 跟微信小程序的api wx.prevImage的体验有些差距，但是好在可以显示图片描述、图片视频进行混排显示<br>
# 使用方法<br>
* 将pages中的preview-image-video复制到您的项目中<br>
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
  url: '../../pages/preview-image-video/index',
})
```


[csdn原文：微信小程序图片视频混排、可添加图片描述的预览页]()<br>
### 如果对你有帮助，动动小手给个star,谢谢。
