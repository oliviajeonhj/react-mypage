import '../page/olivia.css';


export default function Footer() {
  return (
    <div className="container-fluid px-0">
      <footer id="ft" className='d-flex align-items-center justify-content-center'>
        <ul className='d-flex align-items-center justify-content-center' id="ftul">
          <li><span>카톡</span></li>
          {/* i태그 넣을 예정 */}
          <li><span>인스타</span></li>
          <li><span>노션</span></li>
          <li><span>깃허브</span></li>
        </ul>
      </footer>
    </div>
  );
}

