import { useState } from 'react'

export default function Togglable ({ children, buttoLabel }) {
  const [loginVisible, setLoginVisible] = useState(null)

  const hideWhenVisible = {
    display: loginVisible ? 'none' : ''
  }
  const showWhenVisible = {
    display: loginVisible ? '' : 'none'
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={
                    () => setLoginVisible(true)
                }
        >{buttoLabel}
        </button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={
                    () => setLoginVisible(false)
                }
        >not show
        </button>
      </div>
    </div>
  )
}
