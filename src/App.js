import { useState } from 'react';
import './App.css';
import Banner from './images/banner.png'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const SubmitFunc = (e) => {
    e.preventDefault()
  }

  return (
    <div className="page-container">
      <div className='banner-center'>
        <img src={Banner} alt="banner" />
      </div>
      <div className="form-container">
        <div className='form-wrapper'>
          <div className='title-container'>
            <h1>SCHEDULE A DEMO</h1>
            <p>Learn More About FloQast</p>
          </div>
          <div className='form-input__container'>
            <div className="edge"></div>
            <form onSubmit={SubmitFunc}>
              <div className="form-title">
                <h1>Learn How FloQast Can <span>Improve Your Month-End</span></h1>
              </div>
              <div className='input-wrapper'>
                <input type="text" placeholder='First Name*' value={name} onChange={e => setName(e.target.value)} required />
                <input type="email" placeholder='Email*' value={email} onChange={e => setEmail(e.target.value)} required />
                <button type="submit">SCHEDULE NOW</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
