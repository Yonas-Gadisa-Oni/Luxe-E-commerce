export default function RegisterForm() {
  return (
    <form className="register-form">
      <label>Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button type="submit">Register</button>
    </form>
  )
}
