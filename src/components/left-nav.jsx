import "../styles/left-nav.css";
import LogoutButton from "../components/buttons/logout-button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function LeftNav() {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <div className="left-nav-container">
      <div className="nav-items">
        { isAuthenticated ?
        <div>
        <Link to='/'><div className="nav-item">Home</div></Link>
        <Link to='/articles'><div className="nav-item">Articles</div></Link>
        <Link to='/admin'><div className="nav-item">Admin</div></Link>
        <Link to='/profile'><div className="nav-item">Profile</div></Link>

      </div>
      :
      null
      }
      </div>
      <div className="buttons">
        { isAuthenticated &&
        <LogoutButton className="nav-item" />
        }
      </div>
    </div>
  )
}
