import MarleyNoodle from '../../images/MarleyNoodle.jpg'

const Header = () => {
    const headerStyle = {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     height: '100vh',
     textAlign: 'center'
    }

    const imgStyle = {
        width: '400px', // Adjust size as needed
        height: 'auto', // Maintain aspect ratio
        marginBottom: '20px', // Margin between image and heading
      }
 
   return (
     <div style={headerStyle}>
       <img src={MarleyNoodle} alt='Marley Schmidt' style={imgStyle}></img>
       <h1>Marley Schmidt</h1>
     </div>
   )
 }

 export default Header