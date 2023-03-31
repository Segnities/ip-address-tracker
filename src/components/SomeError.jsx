function SomeError(props) {
    const { code, message } = props;

    return (
        <div>
            <div>
                <h1>Error {code}!</h1>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default SomeError;