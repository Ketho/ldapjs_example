const ldap = require('ldapjs');
const server = ldap.createServer();

server.bind('cn=root', (req, res, next) => {
  res.end();
  return next();
});

server.add('ou=users, o=myhost', [], (req, res, next) => {
  console.log(req.dn); // this is an empty object for me
});

server.listen(1389, '127.0.0.1', () => {
  console.log('example LDAP server up at: %s', server.url);
});
