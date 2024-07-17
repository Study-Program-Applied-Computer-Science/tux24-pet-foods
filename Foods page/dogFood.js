document.addEventListener("DOMContentLoaded", () => {
    const items =[
        {
            id: 1,
            name: 'Blue Buffalo Original'
        },
        {
            id: 2,
            name: 'Blue Buffalo puppy chicken'
        },
        {
            id: 3,
            name: 'Blue Buffalo beef'
        },
        {
            id: 4,
            name: 'Blue Buffalo Premium blend'
        },
        {
            id: 5,
            name: 'Royal Canin Relax'
        },
        {
            id: 6,
            name: 'Royal Canin Golden food'
        },
        {
            id: 7,
            name: 'Royal Canin Fam'
        },
        {
            id: 8,
            name: 'Royal Canin Premium'
        }
    ]

const addCart = document.querySelectorAll('.buyButton');


addCart.forEach((item) => { 
    item.addEventListener('click', (e) => {
        const itemId = e.target.dataset.id;
        const itemName = items.find(item => item.id === parseInt(itemId)).name;
        window.alert(`${itemName}` + "has been added to cart");
    });
})


})