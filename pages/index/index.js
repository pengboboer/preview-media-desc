// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onClickBtn (e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    if (index == 0) {
      app.globalData.previewInfo = {
        list: [
          {
            picUrl: "https://pic.008box.com/picture/20200918104001_2348.jpg", 
            desc: "哈哈"
          },
          {
            picUrl: "https://pic.008box.com/picture/20200902140503_6323.jpg", 
            desc: "我的"
          },
          {
            picUrl: "https://pic.008box.com/test/20200818140820_2175.jpg", 
            desc: "哇哦到我到我啊到底"
          },
          {
            picUrl: "https://pic.008box.com/test/20200818141517_5938.jpg", 
            desc: ""
          }
        ],
        current: 1
      }
      wx.navigateTo({
        url: '../../pages/preview-image-video/index',
      })
    }

    if (index == 1) {
      app.globalData.previewInfo = {
        list: [
          {
            picUrl: "https://pic.008box.com/test/20200701092915_1072.jpg", 
            videoUrl: "https://pic.008box.com/test/20200701092916_0600.mp4",
            desc: "哈哈"
          },
          {
            picUrl: "https://pic.008box.com/test/20200701092915_1072.jpg", 
            videoUrl: "https://pic.008box.com/test/20200701092916_0600.mp4",
            desc: "我的"
          },
          {
            picUrl: "https://pic.008box.com/test/20200818140820_2175.jpg",
            desc: "哇哦到我到我啊到底"
          },
          {
            picUrl: "https://pic.008box.com/test/20200818141517_5938.jpg", 
            videoUrl:"https://pic.008box.com/test/20200818141518_5970.mp4", 
            desc: "这是一个视频"
          }
        ],
        current: 3
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