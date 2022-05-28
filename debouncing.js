fetch("http://localhost:3000/tops")
    .then(res => res.json())
    .then(res => alldata(res))
    .catch(err => console.log(err))

function alldata(data) {
    data.forEach(element => {
        console.log(element)
        let div = document.createElement("div")
        div.id = "childContainer"
        let h1 = document.createElement("h1")
        h1.textContent = element.brand_name
        let img = document.createElement("Img")
        img.src = element.images[0]
        img.id = "divImg"
        div.append(img, h1)
        document.getElementById("container").append(div)
    });
}

const debounce = function(fn,delay){
    let timer;
    return function (){
        let main = this;
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(main,args)
        },delay)
    }
}

const getData=()=>{
    const val = document.getElementById("inputdata").value
    let q = val
    fetch(`http://localhost:3000/tops?q=${q}`)

}

const searchFunction= debounce()