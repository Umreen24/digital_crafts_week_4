
let menuListDiv = document.getElementById("menuListDiv")
let dropDownMenu = document.getElementById("dropDownMenu")

let startersListMenu = dishes.map(appy => {

    let starterItemDiv =`<div>
                            <h3>${appy.title}</h3>
                            <img src='${appy.imageURL}'></img>
                            <span>${appy.description}</span>
                            <p>${appy.price}</p>
                        </div>`

    return starterItemDiv
})

menuListDiv.innerHTML = startersListMenu.join(' ')

dropDownMenu.addEventListener('change', function() {

    let course = this.value
    console.log(this.value)
    let filteredDishes = dishes.filter(dish => dish.course == course)
    if(course == "all-items"){
        filteredDishes = dishes
    }
    
    let filteredDish = filteredDishes.map(dish => {

        let filteredDishDiv = `<div>
                                    <h3>${dish.title}</h3>
                                    <img src='${dish.imageURL}'></img>
                                    <span>${dish.description}<span>
                                    <p>${dish.price}<p>
                                <div>`
        return filteredDishDiv
    })
    menuListDiv.innerHTML = filteredDish.join('')
})
