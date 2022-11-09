function Header() {
  return (
    <div className="container-fluid px-0">
      <header id="hd" className="py-3 px-5 d-flex justify-content-between align-items-center">
        <h1 className="col-1">
        <a href="#none" >
          <img src="./img/logo_KR.svg" className="img-fluid"/>
        </a>
        </h1>
        <ul className='hdul d-flex align-items-center'>
          <li className='hdli'><a href='#skills'>Skills</a></li>
          <li className='hdli'><a href='#portfolio'>Portfolio</a></li>
          <li className='hdli'><a href='#contact'>Contact</a></li>
          <li className='hdli'><a href='#etc'>Etc ,</a></li>

        </ul>
        <button onClick={(e) => {alert('객체의 이벤트에 저장한 명령');}}>ALL</button>
        
      </header>
    </div>
  );
}

export default Header;