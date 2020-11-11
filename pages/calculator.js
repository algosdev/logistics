import React from 'react'
import CalculatorBanner from '../components/CalculatorBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Truck, Plane, Earth } from '../components/svg'
import MenuTab from '../components/MenuTab'
import DownloadDetails from '../components/DownloadDetails'
import News from '../components/News'
function Calculator() {
  return (
    <div className='calculator-page'>
      <Header />
      <CalculatorBanner />
      <div className='container grid'>
        <div className='left'>
          <div className='calculator-cont'>
            <div className='field'>
              <div className='mini-title bold'>Company Info</div>
              <div className='input'>
                <label>Industry (required)</label>
                <select defaultValue='1'>
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                  <option value='4'>Option 4</option>
                  <option value='5'>Option 5</option>
                </select>
              </div>
              <div className='input'>
                <div>Latest fundraising round</div>
                <div class='checkbox-cont'>
                  <div className='checkbox'>
                    <input type='radio' name='radio' id='opt1' />
                    <label htmlFor='opt1'>Option 1</label>
                  </div>
                  <div className='checkbox'>
                    <input type='radio' name='radio' id='opt2' />
                    <label htmlFor='opt2'>Option 2</label>
                  </div>
                  <div className='checkbox'>
                    <input type='radio' name='radio' id='opt3' />
                    <label htmlFor='opt3'>Option 3</label>
                  </div>
                  <div className='checkbox'>
                    <input type='radio' name='radio' id='opt4' />
                    <label htmlFor='opt4'>Option 4</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <MenuTab />
          <DownloadDetails />
          <News />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Calculator
