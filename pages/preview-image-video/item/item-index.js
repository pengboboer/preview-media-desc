// pages/preview-image-video/item/item-index.js
Component({

  observers: {
    'currentIndex': function(index) {
      let that = this
      console.log("currentIndex", index)
      console.log("我的index",that.data.item.index)
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
