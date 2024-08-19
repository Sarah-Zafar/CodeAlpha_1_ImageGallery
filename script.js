var fullimagebox = document.getElementById("fullimagebox");
var fullimage = document.getElementById("fullimage");

function openfullimage(pic) {
    fullimagebox.style.display = "flex";
    fullimage.src = pic;   
}

function closefullimage() {
    fullimagebox.style.display = "none";
}
