const Error = ({children}) => {
    return (
        <div className="bg-danger text-white text-center p-3 text-uppercase font-weight-bold mb-3 rounded-md">
            {children}
        </div>
    )
}

export default Error
