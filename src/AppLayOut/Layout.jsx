import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
function Layout() {
    return (
        <>
            hi
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
