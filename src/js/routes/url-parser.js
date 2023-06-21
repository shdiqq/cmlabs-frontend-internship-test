const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.pathname.toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    const combinerUrl = this._urlCombiner(splitedUrl);
    return combinerUrl;
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    if (urlsSplits[1].indexOf('.html') === -1 && urlsSplits[1] !== '') {
      return {
        resource: `${urlsSplits[1]}/${urlsSplits[2]}` || null,
        params: urlsSplits[3] || null,
        verb: urlsSplits[4] || null,
      };
    }
    return {
      resource: urlsSplits[1] || null,
      params: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
      (splitedUrl.params ? '/:params' : '') +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
    );
  },
};

export default UrlParser;
