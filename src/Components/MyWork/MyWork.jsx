import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { work } from '../../assets/work.js'

function MyWork() {
  return (
    <div id='works' className='mywork'>
      <div className="work-title">
        <h1>My works</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="work-container">
        {work.map((works, index) => {
          return (
            <div key={index} className='works'>
              <h3>{works.w_no}</h3>
              <h2>{works.w_name}</h2>
              <p>{works.w_desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyWork;