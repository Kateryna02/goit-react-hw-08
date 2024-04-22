import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div class="placeholder">
      This page will showcase the functionality of the contacts book.
      <Link to='/contact'>Go Contact</Link>
    </div>
  )
}
