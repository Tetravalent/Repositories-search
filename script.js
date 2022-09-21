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
let pagination = document.querySelector(".pagination")
let heading = document.querySelector(".heading")


form.addEventListener('submit', (e) => {
    e.preventDefault()

    pagination.style.visibility = "hidden"
    heading.style.visibility = "hidden"


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
                heading.style.visibility = "visible"

                let into = document.querySelector(".styledynam")
                let s = document.querySelector('.s')
                let t = document.querySelector('.t')
                let y = document.querySelector('.y')

                into.classList.add("addlist")
                s.classList.add("addlist")
                t.classList.add("addlist")
                y.classList.add("addlist")
                repos.classList.add('append')

                pagination.style.visibility = "visible"



                fetch(getrepos)
                    .then((response) => {
                        return response.json()
                    }).then((data) => {
                        let repodata = data
                        console.log(data[1].id)
                        console.log(repodata)

                        enter.addEventListener('click', () => {
                            document.location.reload()

                        })



                        let reporow = Array.from(document.getElementsByClassName('reporow'))

                        reporow.forEach((element, i) => {

                            element.getElementsByClassName("id")[0].innerHTML = repodata[i].id
                            element.getElementsByClassName("name")[0].innerHTML = repodata[i].name
                            element.getElementsByClassName("url")[0].innerHTML = repodata[i].url
                            element.getElementsByClassName("language")[0].innerHTML = repodata[i].language

                            let one = document.querySelector(".one")
                            let two = document.querySelector(".two")
                            let three = document.querySelector(".three")
                            let four = document.querySelector(".four")
                            let five = document.querySelector(".five")



                            one.addEventListener('click', () => {
                                element.getElementsByClassName("id")[0].innerHTML = repodata[i].id
                                element.getElementsByClassName("name")[0].innerHTML = repodata[i].name
                                element.getElementsByClassName("url")[0].innerHTML = repodata[i].url
                                element.getElementsByClassName("language")[0].innerHTML = repodata[i].language
                                one.style.border = "5px solid #4bd28d"
                                if (((two || three || four || five).style.border) = "5px") {
                                    five.style.border = "1px solid #4bd28d"
                                    four.style.border = "1px solid #4bd28d"
                                    three.style.border = "1px solid #4bd28d"
                                    two.style.border = "1px solid #4bd28d"
                                }
                            })

                            two.addEventListener('click', () => {
                                element.getElementsByClassName("id")[0].innerHTML = repodata[i + 5].id
                                element.getElementsByClassName("name")[0].innerHTML = repodata[i + 5].name
                                element.getElementsByClassName("url")[0].innerHTML = repodata[i + 5].url
                                element.getElementsByClassName("language")[0].innerHTML = repodata[i + 5].language
                                two.style.border = "5px solid #4bd28d"
                                if (((one || three || four || five).style.border) = "5px") {
                                    five.style.border = "1px solid #4bd28d"
                                    four.style.border = "1px solid #4bd28d"
                                    three.style.border = "1px solid #4bd28d"
                                    one.style.border = "1px solid #4bd28d"
                                }
                            })


                            three.addEventListener('click', () => {
                                element.getElementsByClassName("id")[0].innerHTML = repodata[i + 10].id
                                element.getElementsByClassName("name")[0].innerHTML = repodata[i + 10].name
                                element.getElementsByClassName("url")[0].innerHTML = repodata[i + 10].url
                                element.getElementsByClassName("language")[0].innerHTML = repodata[i + 10].language
                                three.style.border = "5px solid #4bd28d"
                                if (((two || one || four || five).style.border) = "5px") {
                                    five.style.border = "1px solid #4bd28d"
                                    four.style.border = "1px solid #4bd28d"
                                    one.style.border = "1px solid #4bd28d"
                                    two.style.border = "1px solid #4bd28d"
                                }


                            })
                            four.addEventListener('click', () => {
                                element.getElementsByClassName("id")[0].innerHTML = repodata[i + 15].id
                                element.getElementsByClassName("name")[0].innerHTML = repodata[i + 15].name
                                element.getElementsByClassName("url")[0].innerHTML = repodata[i + 15].url
                                element.getElementsByClassName("language")[0].innerHTML = repodata[i + 15].language
                                four.style.border = "5px solid #4bd28d"
                                if (((two || three || one || five).style.border) = "5px") {
                                    five.style.border = "1px solid #4bd28d"
                                    one.style.border = "1px solid #4bd28d"
                                    three.style.border = "1px solid #4bd28d"
                                    two.style.border = "1px solid #4bd28d"
                                }


                            })
                            five.addEventListener('click', () => {
                                element.getElementsByClassName("id")[0].innerHTML = repodata[i + 20].id
                                element.getElementsByClassName("name")[0].innerHTML = repodata[i + 20].name
                                element.getElementsByClassName("url")[0].innerHTML = repodata[i + 20].url
                                element.getElementsByClassName("language")[0].innerHTML = repodata[i + 20].language
                                five.style.border = "5px solid #4bd28d"
                                if (((two || three || four || one).style.border) = "5px") {
                                    one.style.border = "1px solid #4bd28d"
                                    four.style.border = "1px solid #4bd28d"
                                    three.style.border = "1px solid #4bd28d"
                                    two.style.border = "1px solid #4bd28d"
                                }
                            })
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



