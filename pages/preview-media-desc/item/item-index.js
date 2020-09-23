// pages/preview-image-video/item/item-index.js
Component({

  observers: {
    'currentIndex': function(index) {
      let that = this
      console.log("currentIndex", index)
      console.log("我的index",that.data.item.index)

      // 这块代码的目的是为了获取视频的比例，这里是通过视频封面图片来获取的
      // 如果你们后台有直接返回了宽高比例，这里可以直接计算真是的video容器的高度
      let item = that.data.item
      if (index == item.index) {
        if (item.videoUrl != null && item.videoUrl != "") {
          wx.getImageInfo({
            src: item.picUrl,
            success: function(res){
              console.log(res)
              let scale = res.height / res.width
              let videoHeight = wx.getSystemInfoSync().windowWidth * scale
              that.setData({
                videoHeight: videoHeight
              })
            },
            fail: function(res){
              console.log(res)
            },
          })

        }
      }

      
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: null
    },
    scaleItem: {
      type: Number,
      value: 1.0
    },
    swiperHeight: {
      type: Number,
      value: 0
    },
    currentIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchStart (e) {
      this.triggerEvent("touchStart")
    },

    touchMove (e) {
      this.triggerEvent("touchMove")
    },

    touchEnd (e) {
      this.triggerEvent("touchEnd")
    },

    onClickBox (e) {
      this.triggerEvent("onClickBox", e.timeStamp)
    },

    movableChange (e) {
      this.triggerEvent("movableChange",e.detail.source)
    },
    
    onScale (e) {
      this.triggerEvent("onScale", e.detail.scale)
    }
  }
})
