import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
// 메타마스크 연결하려고 사용함 설치한 @web3-react/core에서 제공하는 Web3ReactProvider를 App root의 provider로 제공하고 web3 객체를 인스턴스화 하는 getLibrary 함수를 정의하여 props로 전달.
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");
  return library;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </BrowserRouter>
);


reportWebVitals();
