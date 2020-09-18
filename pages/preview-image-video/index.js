// pages/preview-image-video/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    scaleList: [],
    scaleTempList: [],
    current: 0,
    currentIndex: 0,
    swiperDuration: "0",

    lastTapTime: 0,  // 最后一次单击事件点击发生时间
    singleClickFunc: null,
    isFingerMoved: false,
  },

  swiperChange (e) {
    let that = this
    console.log(e.detail)
    let current = e.detail.current
    that.setData({
      currentIndex: current
    })
  },

  touchStart (e) {
    this.data.isFingerMoved = false
  },

  touchMove (e) {
    this.data.isFingerMoved = true
  },

  touchEnd (e) {
    let that = this
    let currentIndex = that.data.currentIndex
    let scaleTemp = that.data.scaleTempList[currentIndex]
    let scaleChange = "scaleList[" + currentIndex + "]"
    // 仿微信自带prevImage 缩放到最小后恢复原样, 超过3倍后显示3倍
    if (scaleTemp < 1 || scaleTemp > 3) {
      that.setData({
        [scaleChange]: scaleTemp < 1 ? 1 : 3
      })
    }
  },

  onClickBox (e) {
    console.log(e)
    let that = this
    let curTime = e.detail
    let lastTime = that.data.lastTapTime
    let currentIndex = that.data.currentIndex
    let scaleTemp = that.data.scaleTempList[currentIndex]
    // 双击
    if (curTime - lastTime < 300) {
      clearTimeout(that.data.singleClickFunc)
      let scaleChange = "scaleList[" + currentIndex + "]"
      that.setData({
        [scaleChange]: scaleTemp == 1 ? 3 : 1
      })
    } else {
      if (scaleTemp < 1.1 && !that.data.isFingerMoved) {
        that.data.singleClickFunc = setTimeout(function(){
          wx.navigateBack({
            delta: 1
          })
        }, 350)
      }
      
    }
    that.data.lastTapTime = curTime
  },

  movableChange (e) {
    console.log(e)
    let that = this
    let currentIndex = that.data.currentIndex
    // 这个好像是微信的bug，经常触发不了out-of-bounds，也是头疼
    if (e.detail == "out-of-bounds") {
      if(currentIndex == 0 || currentIndex == that.data.list.length - 1) {
        return
      } 
      // 左边界
      if (e.detail.x == 0) {
        that.setData({
          current: that.data.currentIndex - 1
        })
      // 右边界
      } else {
        that.setData({
          current: that.data.currentIndex + 1
        })
      }
    } 
  },

  onScale (e) {
    console.log(e)
    let scaleTemp = "scaleTempList[" + this.data.currentIndex + "]"
    this.setData({
      [scaleTemp]: e.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      swiperHeight: wx.getSystemInfoSync().windowHeight,
    })

    let info = app.globalData.previewInfo
    app.globalData.previewInfo = null
    
    let scaleList = []
    let list = info.list.map(function(item, index){
      item.index = index
      scaleList.push(1.0)
      return item
    })
   
    that.setData({
      list: list,
      scaleList: scaleList,
      scaleTempList: scaleList
    })
    
    that.setData({
      current: info.current
    })
    that.setData({
      swiperDuration: '250'
    })
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