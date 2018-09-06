// pages/movieDetail/movieDetail.js
Page({
  data: {
    currentTab: 0,
    scrWidth: 0,
    scrHeight: 0,
    movie: {},
    casts: [],     //演员
    directors: [], // 导演
  },

  onLoad: function (e) {
    var page = this;

    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + e.id,
      method: 'GET', 
      header: {
        'Content-Type': 'json'
      },
      success: function(res){
        var movie = res.data;
        page.setData({
          movie: movie,
          casts: movie.casts,
          directors: movie.directors
        });
        wx.setNavigationBarTitle({
          title: movie.title
        }) 
      }
    });
    wx.getSystemInfo({
      success: function(res) {
        page.setData({
          scrWidth: res.screenWidth,
          scrHeight: res.screenHeight
        })
      }
    });
  }, 

  switchNav: function(e) {
    var id = e.currentTarget.id;
    this.setData({
      currentTab: id
    });
  }
})