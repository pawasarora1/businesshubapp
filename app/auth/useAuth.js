// import {useContext} from 'react';
// import auth from '@react-native-firebase/auth';
// import AuthContext from './AuthContext';

// export default useAuth = () => {
//   const {user, setUser} = useContext(AuthContext);

//   const login = user => {
//     setUser(user);
//   };

//   const logout = () => {
//     auth()
//       .signOut()
//       .then(() => {
//         setUser('');
//       })
//       .catch(error => {
//         setUser('');
//       });
//   };

//   return {user, setUser, logout, login};
// };
