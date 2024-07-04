document.addEventListener('DOMContentLoaded',function(){
    const gallery = document.getElementById('gallery')
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&').then((res=>res.json()))
    .then(data=>{
        data.forEach(element => {
            const img = document.createElement('img')
            img.src = element.url
            img.addEventListener('click',()=>{
                img.classList.toggle('enlarged')

            })
            gallery.appendChild(img)
        })
    }).catch(error=>console.error('error',error))
})