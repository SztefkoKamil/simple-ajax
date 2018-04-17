function goWork(){

    var $pullBtn = document.querySelector(".pullBtn");
    $pullBtn.onclick = function(){

        var newXHR = new XMLHttpRequest();
        newXHR.open("GET", "feedback.php?q=pull", true);
        newXHR.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                document.querySelector(".name").innerText = this.responseText;
            }
        }
        newXHR.send();

    }

}

window.onload = goWork();