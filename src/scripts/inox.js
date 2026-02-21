function BookClick(){
    document.getElementById("btnContainer").style.display="none";
    document.getElementById("summaryContainer").style.display="block";

    movieName = document.getElementById("lstMovies").value;
    cinema = document.getElementById("lstCinema").value;
    date = document.getElementById("lstDate").value;
    timing = document.getElementById("lstTiming").value;
    image = document.getElementById("imgPoster");

    if(movieName=="MARDAANI 3"){
        image.src="../public/images/mardaani.jpg";
    } else{
        image.src="../public/images/vadh.jpg";
    }

    document.getElementById("lblMovie").textContent=movieName;
    document.getElementById("lblDate").textContent=date;
    document.getElementById("lblTiming").textContent=timing;
    document.getElementById("lblCinema").textContent=cinema;


}

function ModifyClick(){
    document.getElementById("lblTitle").innerHTML="Modify Booking";
    document.getElementById("btnBook").innerHTML="Save";
    document.getElementById("btnBook").className="btn btn-success";
}