import React from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import type { Van } from "../../utils/types"

export default function HostVanDetail() {


    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState<Van>()


    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans[0]))
    }, [])


    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    // console.log(currentVan)
    return (
        (
            <section>
                <Link
                    to=".."
                    className="back-button">
                    &larr;<span>Back to all vans</span>
                </Link>

                <div className="host-van-detail-layout-container">
                    <div className="host-van-detail">
                        <img src={currentVan.imageUrl} />
                        <div className="host-van-detail-info-text">
                            <i
                                className={`van-type van-type-${currentVan.type}`}
                            >
                                {currentVan.type}
                            </i>
                            <h3>{currentVan.name}</h3>
                            <h4>${currentVan.price}/day</h4>
                        </div>
                    </div>
                    <nav className="host-van-detail-nav">
                        <NavLink
                            to="."
                            end
                            style={({ isActive }) => isActive ? activeStyles : undefined}
                        >
                            Details
                        </NavLink>

                        <NavLink
                            to="pricing"
                            style={({ isActive }) => isActive ? activeStyles : undefined}
                        >
                            Pricing
                        </NavLink>

                        <NavLink
                            to="photos"
                            style={({ isActive }) => isActive ? activeStyles : undefined}
                        >
                            Photos
                        </NavLink>

                    </nav>
                    <Outlet context={{currentVan}} />
                </div>
            </section>
        )
    )
}
