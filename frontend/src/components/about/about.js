// import React from 'react';
// import { Link } from 'react-router-dom';
//
// import './header.css';
//
// class About extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>О нас</h1>
//             </div>
//         )
//     }
// }
//
// const Header = ({ currentUser }) => (
//     <div className='header'>
//         <Link className='logo-container' to='/'>
//
//         </Link>
//         <div className='options'>
//             <Link className='option' to='/about' component={About}>
//                 ABOUT US
//             </Link>
//             <Link className='option'>
//                 ORDER
//             </Link>
//             {currentUser ? (
//                 <div className='option'>
//                     SIGN OUT
//                 </div>
//             ) : (
//                 <Link className='option'>
//                     SIGN IN
//                 </Link>
//             )}
//
//         </div>
//
//     </div>
// );
//
//
// export default Header;