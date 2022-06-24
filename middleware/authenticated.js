export default ({ app, redirect }) => {
  const token = app.$cookiz.get('_access_token')
  if (!token) {
    redirect('login');
  }
}
