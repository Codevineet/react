const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: ' _blank'
    }, 
    children: 'Open link',
}

const mainContainer = document.querySelector("#root");


function customRender(reactElement , mainContainer){
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href' , reactElement.props.href);
    domElement.setAttribute('target' , reactElement.props.target);

    mainContainer.appendChild(domElement);*/

    //The loop based code, cuz we can't set the attributes one by one
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);
}


customRender(reactElement , mainContainer);
