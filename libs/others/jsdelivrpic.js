var name = "BlueSky01st";
var repository = "bluesky01st.github.io";
if(document.domain != 'localhost'){
    for (var key in document.getElementById("articleContent").getElementsByTagName('img')){
        if (isNaN(key)){
            break;
        }
    	document.getElementById("articleContent").getElementsByTagName('img')[key].src = document.getElementById("articleContent").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
    }
}