// import React from 'react'

// import './Tutorials.css'

// import { tutorials, fixCamera } from '../../utils/data'

// export default function Tutorials() {
//     return (
//         <div className="tutorials-container">
//             <h1 className="tutorials-heading">Basic Tutorials</h1>
//             <div className="tutorials-content-container">
//                 {tutorials.map((tutorial) => (
//                     <p className="tutorials-content">{tutorial}</p>
//                 ))}
//             </div>
//             <h1 className="tutorials-heading">Camera Not Working?</h1>
//             <div className="tutorials-content-container">
//                 {fixCamera.map((points) => (
//                     <p className="tutorials-content">{points}</p>
//                 ))}
//             </div>
            
//         </div>
//     )
// }

import React from 'react'
import { fixCamera, tutorials } from '../../utils/data'
import './Tutorials.css'

export default function Tutorials() {
  return (
    <div className="tutorials-container">
      <section className="tutorials-section">
        <h2 className="tutorials-heading">Basic Tutorials</h2>
        <div className="tutorials-content-container">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="tutorial-item">
              <h3 className="tutorial-title">{tutorial.title}</h3>
              <p className="tutorials-content">{tutorial.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tutorials-section">
        <h2 className="tutorials-heading">Camera Not Working?</h2>
        <div className="tutorials-content-container">
          {fixCamera.map((point, index) => (
            <div key={index} className="tutorial-item">
              <h3 className="tutorial-title">{point.title}</h3>
              <p className="tutorials-content">{point.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tutorials-section">
        <h2 className="tutorials-heading">Additional Information</h2>
        <div className="tutorials-content-container">
          <div className="tutorial-item">
            <h3 className="tutorial-title">System Requirements</h3>
            <p className="tutorials-content">
              To ensure the best experience with this AI-based Yoga Trainer, it's recommended to use a modern web browser with WebGL support. Additionally, having a decent webcam and a stable internet connection will help with accurate pose detection.
            </p>
          </div>
          <div className="tutorial-item">
            <h3 className="tutorial-title">Disclaimer</h3>
            <p className="tutorials-content">
              While this AI-based Yoga Trainer can provide helpful guidance, it should not be considered a substitute for professional instruction from a certified yoga teacher. Always prioritize your safety and listen to your body.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}