
export default function List() {
    const countries = [
        {name: "Rwanda", code: 250 },
        {name: "Kenya", code: 254 },
        {name: "Uganda", code: 256 },
    ]
  return (
    <div>
        {countries.map((country)=> <div key={country.code}> name: {country.name}, code: {country.code} </div>)}

    </div>
  )
}
