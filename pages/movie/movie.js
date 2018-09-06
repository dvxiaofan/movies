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
    });
    this.loadMovies();
  },

  switchNav: function(e) {
    var id = e.currentTarget.id;
    this.setData({
      currentTab: id
    });
  },

  loadMovies: function() {
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      method: 'GET',
      header: {
        'Content-Type': 'json'
      },
      success: function(res){
        var movies = res.data.subjects;
        var size = movies.length;
        var len = parseInt(size / 3);

        page.setData({
          movies: movies,
          scrHeight: (len + 1) * 230  // 动态设置电影内容高度
        });
      }
    });
  },

  loadDetail: function(e) {
    var id = e.currentTarget.id;

    wx.navigateTo({
      url: '../movieDetail/movieDetail?id=' + id
    });
  }
})