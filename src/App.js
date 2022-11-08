import logo from './img/dool.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './olivia/olivia.css';


export default function Whiteapp() {
  return (
    <div className="container-fluid px-0">
      <header id="hd" className="border-bottom py-3 d-flex justify-content-between align-items-center">
        <h1 className="col-1">
        <a href="#none" >
          <img src={logo} className="img-fluid"/>
        </a>
        </h1>
        <ul className='d-flex align-items-center'>
          <li className='px-2'>메뉴</li>
          <li className='px-2'>메뉴</li>
          <li className='px-2'>메뉴</li>
          <li className='px-2'>메뉴</li>
        </ul>
        <button onClick={(e) => {alert('객체의 이벤트에 저장한 명령');}}>ALL</button>
      </header>
    </div>
  );
}

export function Activeapp() {
  return (
    <div className="container-fluid px-0">
      <header id="hd" className=" bg-dark py-3">
    
      </header>
      <p>둘리호이호힛</p>

    </div>
  );
}

