import { useAuth0 } from '@auth0/auth0-react';
import "../../styles/left-nav.css";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
      <div className="nav-item" onClick={() => logout()}>
        Sign out
      </div>
  )
}