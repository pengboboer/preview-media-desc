// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onClickBtn (e) {
    let index = e.currentTarget.dataset.index

    if (index == 0) {

      app.globalData.previewInfo = {
        list: [
          {
            picUrl: "https://pic.008box.com/picture/20200918104001_2348.jpg", 
            desc: "这是一个微博长图"
          },
          {
            picUrl: "https://pic.008box.com/test/20200923152850_1409.jpg", 
            desc: "这里是图片描述哦，这里是图片描述哦，这里是图片描述哦，这里是图片描述哦"
          },
          {
            picUrl: "https://pic.008box.com/test/20200923152850_5256.jpg", 
            desc: "这里是图片描述哦，这里是图片描述哦，这里是图片描述哦，这里是图片描述哦"
          },
          {
            picUrl: "https://pic.008box.com/test/20200923152850_1958.jpg", 
            desc: ""
          }
        ],
        current: 3
      }

      wx.navigateTo({
        url: '../../pages/preview-image-video/index',
      })

    }




    if (index == 1) {

      app.globalData.previewInfo = {
        list: [
          {
            picUrl: "	https://pic.008box.com/test/20200923152453_9874.jpeg", 
            videoUrl: "https://pic.008box.com/test/20200923152451_0443.mp4",
            desc: "刘皇叔蹦迪......"
          },
          {
            picUrl: "https://pic.008box.com/test/20200923150733_2463.jpg", 
            desc: "你是我惊鸿一瞥的春光，也是我永恒追逐的星辰大海。"
          },
          {
            picUrl: "https://pic.008box.com/test/20200923152850_3681.jpg",
            desc: "我以为你是那一场春雨，谁知你是大雨之前的电闪雷鸣。"
          },
          {
            picUrl: "https://pic.008box.com/test/20200923150733_4419.jpeg", 
            videoUrl:"https://pic.008box.com/test/20200923150731_6834.mp4", 
            desc: "这是一个蜘蛛侠视频"
          }
        ],
        current: 0
      }

      wx.navigateTo({
        url: '../../pages/preview-image-video/index',
      })
      
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})