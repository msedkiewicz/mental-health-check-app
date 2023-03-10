const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function (htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

// utils.convertDataSourceToDbJson = function(){
//   const productJson = [];
//   for(let key in dataSource.products){
//     productJson.push(Object.assign({id: key}, dataSource.products[key]));
//   }
// };

// utils.queryParams = function(params){
//   return Object.keys(params)
//     .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//     .join('&');
// };

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('joinValues', function (input, options) {
  return Object.values(input).join(options.fn(this));
});

export default utils;
