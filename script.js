const goods = [
    {title: 'Shirt', foto: 'example.jpeg', price: 150}, 
    {title: 'Socks', foto: 'example.jpeg', price: 50}, 
    {title: 'Jacket', foto: 'example.jpeg', price: 350}, 
    {title: 'Shoes', foto: 'example.jpeg', price: 250},
];
    
const renderGoodsItem = (title, foto, price,...anyInfo) => {
    return `<div class="goods-item">
                <h3 class = "title">${title}</h3>
                <h5>${[...anyInfo]}</h5>
                <img class = "goods-img" src="${foto}"></img> 
                <p>${price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};
    
const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title,item.foto,item.price, 'Качественные вещи от производителя')).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
} 

//При присваивании массива свойству .innerHTML, у него автоматически вызывается метод .toString, который эквивалентен вызову метода .join(',')


renderGoodsList(goods);
