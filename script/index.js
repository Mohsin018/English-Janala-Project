const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all") //return's promise of response
    .then(res=> res.json()) //promise of json data
    .then((json) => displayLesson(json.data))
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    // .then(data => console.log(data));
    .then((data) => displayLevelWord(data.data));
};



// {
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
// }

const displayLevelWord = (words) =>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML="";

    words.forEach(word => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5">
            <h2 class="font-bold text-2xl mb-2">${word.word}</h2>
            <p class="font-semibold mb-2">Meaning /Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">"আগ্রহী / ইগার"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>

            </div>
        </div>
        `;
        
        wordContainer.append(card);
    });

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
    <button onclick= "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson ${lesson.level_no}</button>
    `
       
    // 4
    labelContainer.append(newDiv);
    }
}

loadLessons();