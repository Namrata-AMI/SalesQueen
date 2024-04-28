document.addEventListener('DOMContentLoaded', function() {
    const dashes = document.getElementsByClassName("dashClick");
    const main = document.getElementsByClassName("main")[0];
    const loader = document.getElementsByClassName("loader")
    for (let i = 0; i < dashes.length; i++) {
        dashes[i].addEventListener('click', () => {
            console.log("Clicked");
            if(main.style.visibility==="hidden"){
                main.style.visibility ="visible";
                loader[i].style.visibility="visible";
            }
            else{
                main.style.visibility="hidden";
                loader[i].style.visibility="hidden";
            }
        });
    }
});
