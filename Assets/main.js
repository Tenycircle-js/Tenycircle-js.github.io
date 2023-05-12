function include(htmlname, tagname) {
  fetch(htmlname)
  .then(response=>response.text())
  .then(data=>document.querySelector(`include#${tagname}`).innerHTML=data)
  .catch(console.error);
}
