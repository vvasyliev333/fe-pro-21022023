function req(method = "GET", url = "", callback) {
    document.querySelector(".box-loader").classList.add("active")
    const r = new XMLHttpRequest();

    r.open(method, url);
    r.send();
    r.addEventListener("readystatechange", () => {
        if (r.readyState === 4 && r.status >= 200 && r.status < 300) {
            setTimeout(() => {
                callback(JSON.parse(r.responseText))
                document.querySelector(".box-loader").classList.remove("active")
            }, 1500)
        } else if (r.readyState === 4) {
            console.error("Помилка з запитом")
        }
    })
}

const show = (data = []) => {
    const span = document.querySelector("span");
    console.log(data);
    data.forEach((el, i) => {
        const string = `
        <div>
       <span>${el.id}</span>
       <span>${el.name}</span>
       <span>${el.email}</span>
       <span>${el.body}</span>
       </div>
       `
       span.insertAdjacentHTML("beforeend", string)
       //tbody.append(string)
    })
}


req("GET", "https://jsonplaceholder.typicode.com/comments", show)
