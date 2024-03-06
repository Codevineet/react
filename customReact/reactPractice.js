const element = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children: "Tap to switch"
}

const container = document.querySelector('#root');


function pushElement(element ,container ){
    let firstElement = document.createElement(element.type);
    firstElement.innerHTML = element.children;

    for (const key in element.props) {
        if(key === 'children') continue;
        firstElement.setAttribute(key , element.props[key]);
    }

    container.appendChild(firstElement);
}

pushElement(element , container);

