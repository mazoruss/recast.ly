

var searchYoutube = function({q, maxResults}, callback) {
  var results = [];
  var options = $.param({
    key: window.YOUTUBE_API_KEY,
    part: 'snippet',
    maxResults: maxResults,
    q: q,
    type: 'video'
  });

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?' + options,
    type: 'GET',
    success: function(data) {
      callback(data.items);
    },
    error: function (error) {
      console.error(error);
    }
  });
};

// console.log(searchYoutube({search: 'Jace', maxResults: 1}));