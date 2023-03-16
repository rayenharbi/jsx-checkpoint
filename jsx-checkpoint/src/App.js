
import FullName from './component/Profile/FullName';
import Address from './component/Profile/Address';
import './App.css';
import ProfilePhoto from './component/Profile/ProfilePhoto';






function App() {
  const address="Rue du caire akouda sousse"
  return (
    <>
    <div className="grid-container">
      <div className='grid-item1'>
      <ProfilePhoto/>
      <FullName/>
      </div>
      <div className="grid-noitem">
       <h1>INFORMATION</h1>
       <div className="left">
        <div className="info">
        <div className="Email"><h2>Email</h2>
        <p>rayenharbi123@gmail.com</p></div>
        <div className="Phone"><h2>Phone</h2>
        <p>92289541</p></div>
        </div>
       </div>
       <div className="right">
       <div className="adress">
        <h2>Address</h2>
        <Address address={address}/>
        </div>
        <div className="about">
          <h2>About me</h2>
          <ul>Developer  Full-Stack Javascript Bootcampan <br></br> Baccalaureate in Economics and Management</ul>
        </div>
        </div>
      </div>
   
      
      
    </div> 
    

  </>
  );

}

export default App;
