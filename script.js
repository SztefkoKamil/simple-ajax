function goWork(){

    var $pullBtn = document.querySelector(".pullBtn");
    $pullBtn.onclick = function(){

        var $input1 = document.getElementById("input1");
        $input1 = $input1.value;
        var $input2 = document.getElementById("input2");
        $input2 = $input2.value;

        var $url = "feedback.php?name="+$input1+"&about="+$input2;

        var newXHR = new XMLHttpRequest();

        newXHR.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                document.querySelector(".name").innerText = this.responseText;
            }
        }
        
        newXHR.open("GET", $url, true);
        newXHR.send();
        
    }


}

window.onload = goWork();