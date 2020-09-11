document.addEventListener('DOMContentLoaded', () => {


    const themeStylesheet = document.getElementById('theme');
    const storedTheme =localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'Css/dark-theme.css';
       
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'Css/light-theme.css';     
        }
      localStorage.setItem('theme',themeStylesheet.href) 
    })
})
