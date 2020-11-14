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
      <Header active='calculator' />
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
                <label>Latest fundraising round</label>
                <div className='checkbox-cont'>
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

            <div className='field'>
              <div className='mini-title bold'>Employee Info</div>
              <div className='input'>
                <label>Number of FT Employees</label>
                <select defaultValue='1'>
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                  <option value='4'>Option 4</option>
                  <option value='5'>Option 5</option>
                </select>
              </div>
            </div>
            <div className='field'>
              <div className='mini-title bold'>Logistics</div>
              <div className='input'>
                <label>Number of states you have employees in</label>
                <select defaultValue='1'>
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                  <option value='4'>Option 4</option>
                  <option value='5'>Option 5</option>
                </select>
              </div>
              <div className='input'>
                <label>Number of states that you have rent or assets</label>
                <select defaultValue='1'>
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                  <option value='4'>Option 4</option>
                  <option value='5'>Option 5</option>
                </select>
              </div>
              <div className='input'>
                <div>Number of states that you have $500k sales in</div>
                <div className='checkbox-cont'>
                  <div className='checkbox'>
                    <input type='radio' name='radio2' id='opt11' />
                    <label htmlFor='opt11'>Option 1</label>
                  </div>
                  <div className='checkbox'>
                    <input type='radio' name='radio2' id='opt21' />
                    <label htmlFor='opt21'>Option 2</label>
                  </div>
                  <div className='checkbox'>
                    <input type='radio' name='radio2' id='opt31' />
                    <label htmlFor='opt31'>Option 3</label>
                  </div>
                  <div className='checkbox'>
                    <input type='radio' name='radio2' id='opt41' />
                    <label htmlFor='opt41'>Option 4</label>
                  </div>
                </div>
              </div>
            </div>

            <div className='field'>
              <div className='mini-title bold'>Financials</div>
              <div className='input'>
                <label>Financial transactions per month</label>
                <select defaultValue='1'>
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                  <option value='4'>Option 4</option>
                  <option value='5'>Option 5</option>
                </select>
              </div>
            </div>
            <div className='title-cont'>
              <div className='title'>COST CALCULATED PER YEAR</div>
              <div className='title'>$ 63000</div>
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
