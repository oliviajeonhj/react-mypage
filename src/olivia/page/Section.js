import '../page/olivia.css';
import mainimg from '../img/wide2.jpg';

export default function Section() {
  return (
    <div className="container-fluid px-0" id="about">
        <div className='col-12'>
         <img src={mainimg} className="img-fluid" />
        </div>
    </div>
    
  );
}
