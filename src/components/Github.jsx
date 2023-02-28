import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <>
    <h1 style={{color:"rgb(55,199,193)"}}>Github Statistics</h1>
    <div className='github_stats'>
      {/* <div> */}
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=debasishbihari&hide_border=true&theme=react&hide_border=true&bg_color=0D1117" alt="stat" />
      {/* </div>
      <div> */}
      <img src="https://github-readme-stats.vercel.app/api?username=debasishbihari&show_icons=true&theme=radical" alt="stats" />
      {/* </div> */}
    </div>
    <h1 style={{color:"rgb(55,199,193)"}}>Github Calender</h1>
    <div className='github_calender'>
    <GitHubCalendar
          username="debasishbihari"
          
          blockSize={15}
          blockMargin={5}
        />
    </div>
    </>
  )
}

export default Github
