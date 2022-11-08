import logo from '../img/logo_KR.svg';
import './olivia.css';


export default function Header() {
  return (
    <div className="container-fluid px-0">
      <header id="hd" className="py-3 px-5 d-flex justify-content-between align-items-center">
        <h1 className="col-1">
        <a href="#none" >
          <img src={logo} className="img-fluid"/>
        </a>
        </h1>
        <ul className='hdul d-flex align-items-center'>
          <li className='hdli'><a href='#about'>ABOUT</a></li>
          <li className='hdli'><a href='#skills'>SKILLS</a></li>
          <li className='hdli'><a href='#portfolio'>PORTFOLIO</a></li>
          <li className='hdli'><a href='#interview'>PRE-INTERVIEW</a></li>
          <li className='hdli'><a href='#keyword'>KEYWORD</a></li>
          <li className='hdli'><a href='#ft'>CONTACT</a></li>
        </ul>
        <button onClick={(e) => {alert('객체의 이벤트에 저장한 명령');}}>ALL</button>
      </header>
    </div>
  );
}

