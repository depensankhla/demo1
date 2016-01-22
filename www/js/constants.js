angular.module('starter')
 
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
 
.constant('USER_ROLES', {
  admin: 'admin_role',
  manager: 'manager_role',
  member: 'member_role',
  companyuser: 'companyuser_role',
  enduser: 'enduser_role',
  public: 'public_role'
});