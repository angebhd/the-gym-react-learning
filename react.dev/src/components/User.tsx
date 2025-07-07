
type User = {
    name: string;
    age: number;
}

const user:User = {
    name: "Ange", age: 14
}

export default function User() {
  return (
    <div>
        <p>
            Name : <span>{user.name}</span> <br />
            Age : <span>{user.age}</span> <br />
            Can vote : <span>{user.age >= 18 ? "Yes" : "No" }</span>
        </p>
    </div>
  )
}
