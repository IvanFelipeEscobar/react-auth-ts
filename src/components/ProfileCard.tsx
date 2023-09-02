
type UserObj = {
    name?: string;
    email?: string;
    picture?: string;
  }
  interface UserProp {
    user: UserObj
  }

 const ProfileCard = ({user}:UserProp) => {
  return (
    <div className='profile-card flexy'>
        <h3>{user.name}</h3>
        <img src={user.picture} alt={user.name} />
        <p> Email: {user.email}</p>
    </div>
  )
}
export default ProfileCard