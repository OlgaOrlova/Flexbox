var elements = document.getElementsByClassName("flex-element");

function onItemMouseOver(event) {
    console.log(event.target.id);
    document.getElementById(event.target.id).classList.add('flex-element');
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", onItemMouseOver);
}
