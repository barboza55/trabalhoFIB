
export const urlBase = window.location.protocol + '//' +
(location.href.match('localhost') ? 'localhost:3002' :          
    (location.href.match('http:0.0.0.0:3005') ? 'http:0.0.0.0:3005' : 'http:0.0.0.0:3005'));
