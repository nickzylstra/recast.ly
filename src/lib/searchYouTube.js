import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback = () => {}) => {

  // let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true';

  // const defaults = {
  //   maxResults: 5,
  //   key: YOUTUBE_API_KEY,
  //   q: '',
  // };

  // if (options.max !== undefined) {
  //   options.maxResults = options.max;
  //   delete options.max;
  // }

  // if (options.query !== undefined) {
  //   options.q = options.query;
  //   delete options.query;
  // }

  // _.assignWith(options, defaults, function(optionsValue, defaultsValue) {
  //   return optionsValue !== defaultsValue ? optionsValue : defaultsValue;
  // });

  // for (var key in options) {
  //   url += '&' + key + '=' + options[key];
  // }


  const settings = {
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    dataFilter: (data, dataType) => {
      const responseObj = JSON.parse(data);
      const items = responseObj.items;
      return JSON.stringify(items);
    },
    data: {
      maxResults: options.max || 5,
      key: options.key || YOUTUBE_API_KEY,
      q: options.query || '',
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
    },
    success: callback,
    error: (data) => { console.log(data); },
  };

  $.ajax(settings);
};

export default searchYouTube;
