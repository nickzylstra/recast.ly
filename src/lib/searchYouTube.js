import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback = () => {}) => {

  let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true';

  const defaults = {
    maxResults: 5,
    key: YOUTUBE_API_KEY,
    q: '',
  };

  if (options.max !== undefined) {
    options.maxResults = options.max;
    delete options.max;
  }

  if (options.query !== undefined) {
    options.q = options.query;
    delete options.query;
  }

  _.assignWith(options, defaults, function(optionsValue, defaultsValue) {
    return optionsValue !== defaultsValue ? optionsValue : defaultsValue;
  });

  for (var key in options) {
    url += '&' + key + '=' + options[key];
  }

  const settings = {
    url: url,
    success: callback,
  };

  $.get(settings);
};

export default searchYouTube;
