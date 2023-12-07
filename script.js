function dragElement(terrariumElement){
    let picClientX;
    let picClientY;
    let pointerInitalClientX,pointerInitalClientY;

    terrariumElement.addEventListener('mousedown', (e) => {
        e.preventDefault();
        pointerInitalClientX = e.clientX;
        pointerInitalClientY = e.clientY;
        document.addEventListener('mousemove',move);
        document.addEventListener('mouseup',up);
    });
    function move(e){
        terrariumElement.style.top = terrariumElement.offsetTop + (e.clientY-pointerInitalClientY) + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft + (e.clientX-pointerInitalClientX) + 'px';
        pointerInitalClientX = e.clientX;
        pointerInitalClientY = e.clientY;
        console.log("拖动了"+terrariumElement.id);
    }
    function up(){
        document.removeEventListener('mousemove',move);
        document.removeEventListener('mouseup',up);
    }
}

dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

