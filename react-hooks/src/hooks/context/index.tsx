import Parent from './Parent';
import { UserContext } from './UserContext'

export default function Context() {
  const user = {
    name: "Ange Buhendwa",
    age: 25
  }
  return (

    <UserContext value={user}>
      <Parent />
    </UserContext>
  )
}
