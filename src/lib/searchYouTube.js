
var searchYouTube = function({key, query, max}, callback) {
  var results = [];
  var options = $.param({
    key: key,
    part: 'snippet',
    maxResults: max,
    q: query,
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