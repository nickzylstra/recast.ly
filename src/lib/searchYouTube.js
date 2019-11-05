import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback = () => {}) => {

  let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true';

  const defaults = {
    max: 5,
    key: YOUTUBE_API_KEY,
  };

  _.assignWith(options, defaults, function(optionsValue, defaultsValue) {
    return optionsValue !== defaultsValue ? optionsValue : defaultsValue;
  });

  for (var key in options) {
    url += '&' + key + options[key];
  }

  const settings = {
    url: url,
    success: callback,
  };

  $.get(settings);
};

export default searchYouTube;
