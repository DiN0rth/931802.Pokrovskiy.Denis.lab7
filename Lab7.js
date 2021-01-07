DrawFigure = (name) => {
    if(name == "square") {
        k = document.querySelector("input").value;
        for (var i = 0; i < k; i++) {
            scale = Math.random() * 125 + 25 + "px";
            sq = document.createElement("div");
            sq.classList.add("square");
            sq.addEventListener("dblclick", DeleteFigure);
            sq.style.width = scale;
            sq.style.height = scale;
            sq.style.top = Math.random() * 600 + 100 + "px";
            sq.style.left = Math.random() * 1400 + 10 + "px";
            document.querySelector("main").append(sq);
        }
    }
    if(name == "triangle") {
        k = document.querySelector("input").value;
        for (var i = 0; i < k; i++) {
            scale = Math.random() * 125 + 25 + "px";
            tr = document.createElement("div");
            tr.classList.add("triangle");
            tr.addEventListener("dblclick", DeleteFigure);
            tr.style.borderLeftWidth = scale;
            tr.style.borderRightWidth = scale;
            tr.style.borderBottomWidth = scale;
            tr.style.top = Math.random() * 600 + 100 + "px";
            tr.style.left = Math.random() * 1400 + 10 + "px";
            document.querySelector("main").append(tr);
        }
    }
    if(name == "circle") {
        k = document.querySelector("input").value;
        for (var i = 0; i < k; i++) {
            scale = Math.random() * 125 + 25 + "px";
            cr = document.createElement("div");
            cr.classList.add("circle");
            cr.addEventListener("dblclick", DeleteFigure);
            cr.style.width = scale;
            cr.style.height = scale;
            cr.style.top = Math.random() * 600 + 100 + "px";
            cr.style.left = Math.random() * 1400 + 10 + "px";
            document.querySelector("main").append(cr);
        }
    }
};
DeleteFigure=(event)=>{
    event.target.style.display = "none";
}