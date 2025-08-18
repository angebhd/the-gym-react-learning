export async  function getVans(){
    const resp = await  fetch("/api/vans")
    if (!resp.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: resp.statusText,
            status: resp.status
        }
    }
    const data = await resp.json()
    return data.vans;
}