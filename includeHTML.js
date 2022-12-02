function includeHTML()
{
    console.log("RUNNING");
    var file, xhttp;
    var elements = document.getElementsByTagName("*")

    for(var i = 0; i<elements.length; i++)
    {
        file = elements[i].getAttribute("add-prefab");
        if(file)
        {
            console.log(file);
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function()
            {
                console.log("AAA");
                if(this.readyState == 4)
                {
                    elements[i].remove("add-prefab");
                    if(this.status == 200) {elements[i].parentElement.innerHTML = this.responseText + elements[i].parentElement.innerHTML}
                    if(this.status == 404) {elements[i].innerHTML = "404ERROR"}
                    console.log(this.status);
                    
                    includeHTML();
                }
            }
            console.log("EHY");
            xhttp.open("GET", file, true)
            xhttp.send();
            console.log("A");
            return;
        }
    }
}