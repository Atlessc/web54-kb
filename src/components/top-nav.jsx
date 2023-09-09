import '../styles/top-nav.css';

export default function TopNav() {
  return (
    <div className="top-nav-container">
      <div className='company-name'><span className='orange'>Web54</span> KB</div>
      {/* when adding the search bar, make sure its a ternary operator with "!isAuthenticated" */}
    </div>
  )
}