window.addEventListener("load",_=>{
  document.querySelectorAll("include").forEach(element=>{
    switch(element.getAttribute("type")) {
      case "html": {
        fetch(element.getAttribute("href"))
        .then(response=>response.text())
        .then(data=>element.innerHTML=data)
        .catch(console.error)
        break
      }
      case "js":
      case "javascript": {
        let script = document.createElement("script")
        script.setAttribute("src",element.getAttribute("href"))
        document.head.appendChild(script)
        break
      }
      case "css":{ 
        let link = document.createElement("link")
        link.setAttribute("rel","stylesheet")
        link.setAttribute("href",element.getAttribute("href"))
        document.head.appendChild(link)
        break
      }
    }
  })
})
