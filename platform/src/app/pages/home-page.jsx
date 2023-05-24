import { ThemeButton, ThemedPanel } from "../component/theme-switts"
import { gql, useQuery } from "@apollo/client";
import {useRef} from 'react'
import { useThemeContext } from '../context/theme.context';
const GET_AUTHUSER = gql`
query AuthUser($where: AuthUserWhereUniqueInput!) {
  authUser(where: $where) {
    email
    userName
    password
    avatar
  }
}
`;
const HomePage = () => {
    const myRef = useRef(0);
  
    const { isDarkMode } = useThemeContext();
    const handleClick = (ev) => {
      myRef.current++;
    };
    const userId = "Minluv";
    const { loading, error, data } = useQuery(GET_AUTHUSER, {
      variables: {
        where: {
          userName: `${userId}`,
        },
      },
    });
    return(
        <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
        <h1>Home</h1>
        <ThemeButton />
        <ThemedPanel />
        {error && <p>{error.toString()}</p>}
      {data && data.authUser && (
        <div className="container">
          <p>{data.authUser.userName}</p>
          <p>{data.authUser.email}</p>
          <img src={data.authUser.avatar} alt="avatar"/>
        </div>
      )}
        </div>
    )
    }
    
    export default HomePage