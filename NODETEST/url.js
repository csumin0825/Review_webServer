const url = require('url');

const {URL} = url;
const myURL = new URL('https://cyber.ptu.ac.kr/ilos/st/course/online_view_form.acl');
// WHATWG 방식 ()
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
console.log('-------------------');

const parsedUrl = url.parse('https://cyber.ptu.ac.kr/ilos/st/course/online_view_form.acl');
// parse : 주소분해 => 기존 노드 방식
console.log('url.parse(): ',parsedUrl);
console.log('url.format(): ', url.format(parsedUrl));