import Togglable from './Togglable'

export default function RenderLoginForm ({
  handleSubmit,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange
}) {
  return (
    <Togglable buttoLabel='SHOW LOGIN'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={username}
            placeholder='Username'
            name='Username'
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            placeholder='Password'
            name='Password'
            onChange={handlePasswordChange}
          />
        </div>
        <button>login</button>
      </form>
    </Togglable>
  )
}
