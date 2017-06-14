const user = {
  username: 'dangdungcntt',
  name: 'Nguyen Dang Dung',
  fbid: ''
};
export function getLogin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 3000);
  });
}