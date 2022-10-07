import React from "react";

export default function Darkmode() {
    let clickedClass = "clicked"
    let body = document.body
    let lightTheme = "light"
    let darkTheme = "dark"
    let theme:any;

    if (localStorage){
        theme = localStorage.getItem("theme");
    }

    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    let switchTheme = (e:any) =>{
        if (theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else{
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    }
  return (
    <div>
      <button 
      className={theme ==="dark" ? clickedClass : ""}
      id ="darkMode"
      onClick={(e) => switchTheme(e)} ></button>
    </div>
  );
}
