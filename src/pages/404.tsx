import * as React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>
    </main>
  )
}

export default NotFoundPage
