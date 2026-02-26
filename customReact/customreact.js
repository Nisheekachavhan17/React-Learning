

function customRender(reactElement, container)
{
   /* const domElement = document.createElement
    (reactElement.type)

    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)*/

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if (prop==='children') continue;
        
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement)
}
   /*This is a customised element*/ const reactElement={
    type : 'a',// type of element 
    props:{//props is a object which tells the property of the elemnts
        href:'https://goggle.com',
        target:'_blank'
    },
    children:'Click here to visit goggle'
   }
   
   const mainContainer = document.querySelector('#root')
   customRender (reactElement,mainContainer)