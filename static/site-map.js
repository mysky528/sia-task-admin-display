(function () {
  window.API = {
    'CESHI_API_HOST': '127.0.0.1:10615',
    'CESHI_API_HOST_LOG': '10.143.131.86:5601'
  }
  Object.freeze(window.API)
  Object.defineProperty(window, 'API', {
    configurable: false,
    writable: false
  })
})()
