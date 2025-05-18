const button = document.getElementById('click');

button.addEventListener("click", async function () {
    const module = await import('./module.js');
    console.log(module);
    module.hello();    
})