const { get } = require("http");

function Ajax(options) {
  var defaults = {
    type: get,
    url: '',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {},
    success: function() {

    }
  }
  Object.assign(defaults, options)
  var xhr = XMLHttpRequest()
  let params = ''
  for(let key in data) {
    params += key +"="+ data[key] + '&'
  }
  params = params.slice (0, params.length -1)
 
  if(defaults.type == 'get') {
    defaults.url = defaults.ulr + params
    xhr.open(defaults.type, defaults.url)
  }else if (defaults.type == 'post')
}