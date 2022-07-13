import './style.css'

let state={}

function render(){

}

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

renderHeader()