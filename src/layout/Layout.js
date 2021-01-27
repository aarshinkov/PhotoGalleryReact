import Navbar from '../components/Navbar';

function Layout(props) {
    return <>
        <Navbar />
        <div className="container-fluid mt-4">
            <div className="row">
                {props.children}
            </div>
        </div>
    </>
}

export default Layout;