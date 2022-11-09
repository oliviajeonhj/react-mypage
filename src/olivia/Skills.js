function Skills() {
  return (
    <ul>
      <li id="skill_1" >
        <div className="skills d-flex">
          <div className="imgarea col-4 order-1">
            <div className="skillpic">
              <img className="skillimg" src="./img/group.jpg" alt="skills"/>
            </div>
          </div>
          <div className="txtarea col-4 offset-2 order-0">
            <div className="icon_1">
              <img src="./img/question.png" alt="" className="img-fluid"/>
            </div>
            <h4>#소통 #협업</h4>
            <h5>수년간의 단체생활 및 팀 내 리더로서~~~~~</h5>
            <div>
              소통과 협업 태그에 대해 설명하겠슴다
            </div>
          </div>
        </div>
      </li>
      <li id="skill_2" >
      <div className="skills d-flex">
          <div className="imgarea col-4 offset-2">
            <div className="skillpic">
              <img className="skillimg" src="./img/haircut.gif" alt="skills" />
            </div>
          </div>
          <div className="txtarea col-4">
            <div className="icon_1">
              <img src="./img/question.png" alt="" className="img-fluid"/>
            </div>
            <h4>#따뜻한_기부</h4>
            <h5>모발 기부를 통한 마음 전달</h5>
            <div>
              3년간 길렀던 머리를 싹둑~~ 어머나 운동본부에 기증
            </div>
          </div>
        </div>
      </li>
      <li id="skill_3" >
      <div className="skills d-flex">
          <div className="imgarea col-4 order-1">
            <div className="skillpic">
              <img className="skillimg" src="./img/show.jpg" alt="skills" />
            </div>
          </div>
          <div className="txtarea col-4 offset-2 order-0">
            <div className="icon_1">
              <img src="./img/question.png" alt="" className="img-fluid"/>
            </div>
            <h4>#연습과_노력</h4>
            <h5>여러가지 공연을 하며 팀워크</h5>
            <div>
              공연을 위한 시간투자 열정 도전정신 꾸준한연습과 노력
            </div>
          </div>
        </div>
      </li>
      <li id="skill_4" >
      <div className="skills d-flex">
          <div className="imgarea col-4 offset-2">
            <div className="skillpic">
              <img className="skillimg" src="./img/sey.jpg" alt="skills" />
            </div>
          </div>
          <div className="txtarea col-4">
            <div className="icon_1">
              <img src="./img/question.png" alt="" className="img-fluid"/>
            </div>
            <h4>#편견없는사람 #OPEN-MINDED</h4>
            <h5>해외 유학생활 및 회사 생활 그리고 여행을 통해 활짝 열린 생각</h5>
            <div>
              타인에 대한 편견 없는 넓은 이해심 호호
            </div>
          </div>
        </div>
      </li>
    </ul>

  );
}

export default Skills;