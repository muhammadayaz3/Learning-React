function customReader(reactele,container){
/*const DomElement=document.createElement(reactele.type)

DomElement.innerHTML=reactele.children
DomElement.setAttribute('href',reactele.props.href)
DomElement.setAttribute('target',reactele.props.target)

container.appendChild(DomElement)
*/
    const DomElement=document.createElement(reactele.type)
    DomElement.innerHTML=reactele.children
    for (const key in reactele.props) {
        DomElement.setAttribute(key,reactele.props[key])
    }
    container.appendChild(DomElement)
}


const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to vist google'
}
const mainCounter = document.querySelector('#root')

customReader(ReactElement,mainCounter)


