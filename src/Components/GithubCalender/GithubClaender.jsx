import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import "./Github.css"


export const GithubCalender = () => {



  return (
    <div className='GithubMain'>
      <h1>Github Calender</h1>
        <GitHubCalendar style={{ width: "100%", margin: "auto" }} username="devender0014" />
      <div className='github2'>
        <a href="https://github.com/devender0014/github-readme-stats"><img alt="devender Github Stats" src="https://github-readme-stats.vercel.app/api?username=devender0014&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117" /></a>
        <a href="https://github.com/devender0014/github-readme-stats"><img alt="devender Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=devender0014&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117" /></a>

      </div>
    </div>
  )
}
