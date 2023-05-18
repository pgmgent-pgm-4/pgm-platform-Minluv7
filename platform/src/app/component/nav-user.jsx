import { useUserContext } from "../context/user.context";


// Styling
import './navigation.scss';

const NavUser = () => { 
  const {user, logIn, logOut} = useUserContext();

  return (
   
    <div className="nav-user">
      
      {user && 
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.avatarUrl} className={`avatar`} />
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => logOut()}>Logoff</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      }
      {!user && 
        <>
          <button onClick={() => logIn()}>Login</button>
        </>
      }
    </div>
  )
};


export default NavUser;

// const NavUser = ({ className }) => {
//   return (
//     <div className={`${className}`}>
//       <ul className="navbar-nav">
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             <img src={user.avatarUrl} className={`avatar`} />
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Profiel</a></li>
//             <li><a className="dropdown-item" href="#">Settings</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item" href="#">Uitloggen</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   )
// };

// export default NavUser;