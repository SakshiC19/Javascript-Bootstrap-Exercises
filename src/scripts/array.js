
let movies=['mardaani3' ,'scarlet'];

function LoadMovies( ){
    document.getElementById("lstMovies").innerHTML="";
    movies.map(function(movie){
        var option =document.createElement("option");
        option.text=movie.toUpperCase();
        option.value=movie;
        document.getElementById("lstMovies").appendChild(option);
    })
    document.getElementById("lblCount").textContent=`Total Count of Movies : ${movies.length}`;
}

function AddClick(){
    var movieName = document.getElementById("txtMovie").value;
    var movieIndex = movies.indexOf(movieName.toLowerCase());
    if(movieIndex===-1){

         movies.push(movieName.toLowerCase());
        alert(`${movieName}\nAdded to List`);
        LoadMovies();
        document.getElementById("txtMovie").value = "";
    } else {

        alert(`${movieName.toUpperCase()} Exists`);
    }
}

function SortAsc(){
    movies.sort();
    LoadMovies();
}

function SortDesc(){
    movies.sort();
    movies.reverse();
    LoadMovies();
}

function DeleteClick(){
    var selectedMovieName= document.getElementById("lstMovies").value;
    var selectedMovieIndex=movies.indexOf(selectedMovieName);
    var choice =confirm(`Are you sure ? Want to Delete ${selectedMovieName}`);
    if(choice==true){
        movies.splice(selectedMovieIndex,1);
        LoadMovies();
    }
}

function ClearClick(){
    movies.length = 0;
    LoadMovies();
}

function EditClick (){
    var selectedMovieName=document.getElementById("lstMovies").value;
    document.getElementById("txtEditMovie").value=selectedMovieName;
}

function SaveClick(){
    var selectedMovieName=document.getElementById("lstMovies").value;
    var selectedMovieIndex=movies.indexOf(selectedMovieName);
    var newName=document.getElementById("txtEditMovie").value;
    movies[selectedMovieIndex]=newName;
    alert('Movie updated..');
    LoadMovies();
}