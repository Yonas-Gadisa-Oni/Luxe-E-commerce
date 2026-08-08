export default function LoginForm() {
  return (
    <form className="login-form">
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button type="submit">Sign In</button>
    </form>
  )
}
