import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext<any>()
    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}
