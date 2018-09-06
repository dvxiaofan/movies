// pages/movie/movie.js
Page({

  data: {
    currentTab: 0,
    scrWidth: 0,
    scrHeight: 0,
    imgUrls: [
      '../images/haibao/1.jpg',
      '../images/haibao/2.jpg',
      '../images/haibao/3.jpg',
      '../images/haibao/4.jpg'
    ]
  },

  onLoad: function(e) {
    var page = this;

    wx.getSystemInfo({
      success: function(res) {
        page.setData({
          scrWidth: res.screenWidth,
          scrHeight: res.screenHeight
        });
      }
    })
  },

  switchNav: function(e) {
    var id = e.currentTarget.id;
    this.setData({
      currentTab: id
    });
  }
})