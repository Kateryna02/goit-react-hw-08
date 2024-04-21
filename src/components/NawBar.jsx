import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors'
import { logoutUser } from '../redux/auth/operations';

export default function NawBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUser)
 const dispatch = useDispatch();
  return (
    <div className='header'>
      <Link to="/">
        React Auth
      </Link>
      <p>{user.email}</p>

      <ul className='nawBar'>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/registor">
                Registor
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutUser())} className='button'>
            Logout
          </button>
        )}
      </ul>
    </div>
  )
}
