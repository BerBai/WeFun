// download/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden:true
  },

  download: function() {
    this.setData({
      loadingHidden: false
    })  
    let _that = this;
    wx.downloadFile({
      url: 'https://lg-332ncmjq-1256907309.cos.ap-shanghai.myqcloud.com/stepking/a.xlsx',
      success: function(res) {
        var filePath = res.tempFilePath;
        console.log(res)     //页面显示加载动画        
        wx.openDocument({     
          filePath: filePath,
               success: function(res) {      
            _that.setData({       
              loadingHidden: true      
            })      
            console.log('打开文档成功')     
          }    
        })   
      }  
    }) 
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})