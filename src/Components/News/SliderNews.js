import React from 'react'
import './SliderNews.css'

const newsdata = [
  {
    title: "title",
    content: "Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.",
    link: ""
  },
  {
    title: "title",
    content: "The page will reload if you make edits.You will also see any lint errors in the console. npm test",
    link: ""
  },
  {
    title: "title",
    content: "Launches the test runner in the interactive watch mode.See the section about running tests for more information.",
    link: ""
  },
  {
    title: "title",
    content: "Builds the app for production to the build folder.",
    link: ""
  },
  {
    title: "title",
    content: "If you aren’t satisfied with the build tool and configuration choices, you can eject at any time.",
    link: ""
  },
  {
    title: "title",
    content: "Instead, it will copy all the configuration files and the transitive dependencies.",
    link: ""
  },
  {
    title: "title",
    content: "You don’t have to ever use eject. The curated feature set is suitable",
    link: ""
  },
  {
    title: "title",
    content: "Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.",
    link: ""
  },
  {
    title: "title",
    content: "The page will reload if you make edits.You will also see any lint errors in the console. npm test",
    link: ""
  },
  {
    title: "title",
    content: "Launches the test runner in the interactive watch mode.See the section about running tests for more information.",
    link: ""
  },
  {
    title: "title",
    content: "Builds the app for production to the build folder.",
    link: ""
  },
  {
    title: "title",
    content: "If you aren’t satisfied with the build tool and configuration choices, you can eject at any time.",
    link: ""
  },
  {
    title: "title",
    content: "Instead, it will copy all the configuration files and the transitive dependencies.",
    link: ""
  },
  {
    title: "title",
    content: "You don’t have to ever use eject. The curated feature set is suitable",
    link: ""
  }
]

const SliderNews = () => {
  return (

    <div className="slider">
      <div className="slide-track">

        {newsdata.map((obj, i) => {
          var pclass = "news news" + (i + 1);
          return (
            <div className="slide">
              <p className={pclass}>{obj.content}</p>
            </div>
          )
        })}

      </div>
    </div>

  )
}

export default SliderNews