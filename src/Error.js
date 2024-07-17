import { Link } from "react-router-dom";

const Error = () => {
  return(
    <main className="Missing">
      <h2>Page Not Found</h2>
      <p>Well, thats disappointing.</p>
      <p>
        <Link to='/'>Visit Our Homepage</Link>
      </p>
    </main>
  )
}

export default Error 