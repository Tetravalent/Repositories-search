let username = document.querySelector('.fill')
let enter = document.querySelector('.enter')
let form = document.querySelector('.form')
let repos = document.querySelector('.repos')
let avatar = document.querySelector('.avatar')
let namin = document.querySelector('.name')
let bio = document.querySelector('.bio')
let locationnn = document.querySelector('.location')
let twitter = document.querySelector('.twitter')
let tablerow = document.querySelector('.tablerow')
let tablehead = document.getElementsByTagName('th')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let reporow = Array.from(document.getElementsByClassName('reporow'))
    reporow.forEach((element, i) => {
        element.getElementsByClassName("id")[0].innerHTML = ""
        element.getElementsByClassName("name")[0].innerHTML = ""
        element.getElementsByClassName("url")[0].innerHTML = ""
        element.getElementsByClassName("language")[0].innerHTML = ""
    })

    tablehead[0].innerHTML = ""
    tablehead[1].innerHTML = ""
    tablehead[2].innerHTML = ""
    tablehead[3].innerHTML = ""

    let search = username.value
    let originalname = search.split(' ').join('')

    fetch("https://api.github.com/users/" + originalname)
        .then((response) => {
            return response.json()
        }).then((data) => {
            // console.log(data)
            let getrepos = data.repos_url
            // console.log(getrepos)

            avatar.src = data.avatar_url
            namin.innerHTML = data.login
            bio.innerHTML = data.bio
            locationnn.innerHTML = `<img src="location.png" alt="" width="25px">${data.location}`
            twitter.innerHTML = `<img src="twitter.png" alt="" width="25px"> ${data.twitter_username}`;

            repos.addEventListener('click', () => {
                tablehead[0].innerHTML = "ID"
                tablehead[1].innerHTML = "NAME"
                tablehead[2].innerHTML = "URL"
                tablehead[3].innerHTML = "LANGUAGE"

                let into= document.querySelector(".styledynam")
                let s= document.querySelector('.s')
                let t=document.querySelector('.t')
                let y=document.querySelector('.y')

                into.classList.add("addlist")
                s.classList.add("addlist")
                t.classList.add("addlist")
                y.classList.add("addlist")
                repos.classList.add('append')

                fetch(getrepos)
                    .then((response) => {
                        return response.json()
                    }).then((data) => {
                        let repodata = data
                        console.log(data[1].id)
                        console.log(repodata)

                        let reporow = Array.from(document.getElementsByClassName('reporow'))

                        reporow.forEach((element, i) => {
                            element.getElementsByClassName("id")[0].innerHTML = repodata[i].id
                            element.getElementsByClassName("name")[0].innerHTML = repodata[i].name
                            element.getElementsByClassName("url")[0].innerHTML = repodata[i].url
                            element.getElementsByClassName("language")[0].innerHTML = repodata[i].language
                        })
                    })
            })
        })
})


enter.addEventListener('click', () => {
    let stylebutton = {
        "background": "linear-gradient(267.49deg, rgba(100, 206, 19, 0.4), rgba(91, 35, 225, .25))",
        "border-radius": "5px",
        "width": "20vw",
        "height": "30px",
        "border-radius": "5px",
        "color": "silver",
        "font-family": "'Ubuntu Mono', monospace",
        "font-size": "15px",
        "font-weight": "500",
        "cursor": "pointer",
    }

    let followbutton = document.querySelector('.follow')
    Object.assign(followbutton.style, stylebutton);
    followbutton.innerHTML = 'Follow'

})



