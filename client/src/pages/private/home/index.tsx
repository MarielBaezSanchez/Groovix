import usersGlobalStore, { type UsersStoreType } from "../../../store/users-store";


function Homepage() {
  const {currentUser} = usersGlobalStore() as UsersStoreType;
  return (
    <div>
      <h1>HomePage</h1>
      <p>Welcome, {currentUser?.name}!</p>
    </div>
  )
}

export default Homepage