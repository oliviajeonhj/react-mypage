import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//컴퍼넌트 : 리액트 컨텐츠 단위
import Header from './olivia/page/Header';
import Footer from './olivia/page/Footer';
import Section2 from './olivia/page/Section2';
import Section from './olivia/page/Section';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Section2 />
    <Section />

    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
