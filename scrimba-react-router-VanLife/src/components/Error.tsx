import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError() as any;

    return (
        <>
            <h1>{error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>

        </>

    )
}