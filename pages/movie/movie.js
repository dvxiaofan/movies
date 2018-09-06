// pages/movie/movie.js
Page({

  data: {
    currentTab: 0
  },

  switchNav: function(e) {
    var id = e.currentTarget.id;
    this.setData({
      currentTab: id
    });
  }
})