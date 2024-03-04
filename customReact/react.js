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
    
}
customRender(reactElement , mainContainer);
