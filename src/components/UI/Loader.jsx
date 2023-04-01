import "../../assets/scss/Loader.scss";

function Loader({ title = 'Loading...' }) {
    return (
        <div className="page-wrapper">
            <h2 className="title">{title}</h2>
            <span className="loader" />
        </div>
    );
}

export default Loader;