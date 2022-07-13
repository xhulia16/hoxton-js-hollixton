import './style.css'

type Item={
id: number, 
type: string,
name: string,
image: string,
price: number,
discountedPrice: number| null,
dateEntered: string,
stock: number
}
type State={
items: Item[]
}
let state: State={
    items:[]
}

function getStoreItems(){
fetch('http://localhost:3005/store')
.then(resp => resp.json())
.then(dataFromServer =>{
    state.items=dataFromServer
    renderMain()
})
}

console.log(state)

function renderHeader(){
 //   <div class="left-header">
 //       <h1 class="title">HOLLIXTON</h1>
 //       <nav>
 //         <ul>
 //           <li>Girls</li>
 //           <li>Guys</li>
 //           <li>Sale</li>
 //         </ul>
 //       </nav>
 //     </div>
  //     <div class="right-header">
 //       <nav>
 //         <ul>
 //           <li>🔍</li>
 //           <li>👤</li>
 //           <li>🛍️</li>
 //         </ul>
 //       </nav>
 //     </div>

 let headerEl=document.querySelector('header')
 if (headerEl === null) return
 headerEl.textContent=''

 let leftHeaderEl=document.createElement('div')
 leftHeaderEl.className='left-header'

 let websiteTitleEl=document.createElement('h1')
 websiteTitleEl.className='title'
 websiteTitleEl.textContent='HOLLIXTON'

 let leftNavEl=document.createElement('nav')
 let leftUlEl=document.createElement('ul')

 let girlsMenuTab=document.createElement('li')
 girlsMenuTab.textContent='Girls'
 let guysMenuTab=document.createElement('li')
 guysMenuTab.textContent='Guys'
 let saleMenuTab=document.createElement('li')
 saleMenuTab.textContent='Sales'
 
 leftUlEl.append(girlsMenuTab, guysMenuTab, saleMenuTab)
 leftNavEl.append(leftUlEl)
 leftHeaderEl.append( leftNavEl)

 let rightHeaderEl=document.createElement('div')
 rightHeaderEl.className='right-header'

 let rightNavEl=document.createElement('nav')
 let rightUlEl=document.createElement('ul')

 let searchLiEl=document.createElement('li')
 searchLiEl.textContent='🔍'
 let userLiEl=document.createElement('li')
 userLiEl.textContent='👤'
 let shoppingCartLiEl=document.createElement('li')
 shoppingCartLiEl.textContent='🛍️'

 rightUlEl.append(searchLiEl, userLiEl, shoppingCartLiEl)
 rightNavEl.append(rightUlEl)
 rightHeaderEl.append( rightNavEl)
 headerEl.append( leftHeaderEl, rightHeaderEl)
}

function renderMain(){
    let mainEl=document.querySelector('main')
    if (mainEl === null) return
    mainEl.textContent=''
    
//    <h3 class="main-title">Home</h3>
//      <div class="products">
//        <div>
//          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png">
//          <h4>Name of product</h4>
//          <span>Old price</span>
//          <span>Current Price</span>
//        </div>
//      </div>

let mainTitleEl=document.createElement('h3')
mainTitleEl.textContent='Home'

let productDisplayEL=document.createElement('div')
productDisplayEL.className='products'

for(let item of state.items){

let productEl=document.createElement('div')
let productImgEl=document.createElement('img')
productImgEl.src=item.image
let productName=document.createElement('h4')
productName.textContent=item.name

let oldPriceEl=document.createElement('span')
oldPriceEl.textContent=`£${item.price}`


let currentPriceEl=document.createElement('span')
currentPriceEl.className='span-discount'
if(item.discountedPrice===undefined){
    currentPriceEl.textContent=''
}
else { 
currentPriceEl.textContent=`£${item.discountedPrice}`
oldPriceEl.className='old-price'
}


productEl.append(productImgEl, productName, oldPriceEl, currentPriceEl)
productDisplayEL.append(productEl)
mainEl.append(mainTitleEl, productDisplayEL)
}
}
function render(){
    renderHeader()
    renderMain()
}

render()
getStoreItems()