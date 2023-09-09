import useStore from '../store';

export default function Admin() {

  const { isAuthenticated } = useStore();

  return (
    <div className="admin-container">
      admin
    </div>
  )
}