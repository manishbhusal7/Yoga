// import React from 'react'

// import './About.css'

// export default function About() {
//     return (
//         <div className="about-container">
//             <h1 className="about-heading">About</h1>
//             <div className="about-main">
//                 <p className="about-content">
//                     This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
//                     I created this as a personal project, and I have also deployed this project
//                     so people can use it and mainly the developers can who are learning AI can learn 
//                     from this project and make their own AI or they can also improve in this project.
                
//                     This AI first predicts keypoints or coordinates of different parts of the body(basically where
//                     they are present in an image) and then it use another classification model to classify the poses if 
//                     someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
//                     doing correctly(by making virtual skeleton green). I have used Tensorflow pretrained Movenet Model To Predict the 
//                     Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

//                     I have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
//                     the keras/tensorflow model to tensorflowJS.
//                 </p>
//                 <div className="developer-info">
//                     <h4>About Developer</h4>
//                     <p className="about-content">I am Manish, I am Full Stack Developer, AI Enthusiastic, Content Creator, Tutor,
//                         I love to work with technology, 
//                         I hope this project will help you. 
//                     </p>
//                     <h4>Contact</h4>
//                     <a href="https://www.instagram.com/codedharsh75/"><p className="about-content">Instagram</p></a>
//                     <a href="https://www.youtube.com/channel/UCiD7kslR7lKSaPGSQ-heOWg"><p  className="about-content">Youtube</p></a>
//                     <a href="https://github.com/harshbhatt7585"><p  className="about-content">GitHub</p></a>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About</h1>
      <div className="about-main">
        <p className="about-content">
          This is a real-time AI-based Yoga Trainer that detects your pose and evaluates how well you are performing it. I created this as a personal project and have also deployed it so that people can use it. Primarily, it is intended for developers who are learning AI and want to learn from this project, make their own AI applications, or even improve upon this project.
        </p>
        <p className="about-content">
          The AI first predicts keypoints or coordinates of different body parts (basically, where they are present in an image). It then uses another classification model to classify the poses. If someone is doing a pose and the AI detects it with more than 95% probability, it will notify you that you are doing it correctly (by making the virtual skeleton green). I have used the Tensorflow pre-trained MoveNet Model to predict the keypoints and built a neural network on top of it, which uses these coordinates to classify yoga poses.
        </p>
        <p className="about-content">
          I have trained the model in Python because, thanks to TensorflowJS, we can leverage browser support. So, I converted the Keras/Tensorflow model to TensorflowJS.
        </p>
        <div className="developer-info">
          <h4>About the Developer</h4>
          <p className="about-content">
            I am Manish, a Full Stack Developer, AI Enthusiast, Content Creator, and Tutor. I love to work with technology, and I hope this project will help you.
          </p>
          <h4>Contact</h4>
          <a href="https://www.instagram.com/codedharsh75/">
            <p className="about-content">Instagram</p>
          </a>
          <a href="https://www.youtube.com/channel/UCiD7kslR7lKSaPGSQ-heOWg">
            <p className="about-content">YouTube</p>
          </a>
          <a href="https://www.linkedin.com/in/manishbhusal/">
            <p className="about-content">Linkedin</p>
          </a>
        </div>
      </div>
    </div>
  )
}