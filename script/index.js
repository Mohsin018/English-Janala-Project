const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all") //return's promise of response
    .then(res=> res.json()) //promise of json data
    .then((json) => displayLesson(json.data))
}

displayLesson= (lessons) =>{

    // 1.get the container and empty that
    // 2. get into every lessons
    // 3.create element 
    // 4.append into container

    // 1
    const labelContainer = document.getElementById("label-container")
    labelContainer.innerHTML = "";

    // 2
    for( let lesson of lessons){

    

    // 3
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `
    <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson ${lesson.level_no}</button>
    `
       
    // 4
    labelContainer.append(newDiv);
    }
}

loadLessons();