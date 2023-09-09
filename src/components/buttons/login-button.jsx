import { useAuth0 } from '@auth0/auth0-react';
import "../../styles/left-nav.css";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
      <div className="nav-item" onClick={() => loginWithRedirect()}>
        Sign In
      </div>
  )
}