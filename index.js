class Navlist extends React.Component {
    render() {
        return(
            <ul className= "hidden xl:flex justify-between flex-row">
                <li className="m-5">Collections</li>
                <li className="m-5">Men</li>
                <li className="m-5">Women</li>
                <li className="m-5">About</li>
                <li className="m-5">Contact</li>
            </ul>
        )
    }
}

function Hamburger() {
    return (
        <figure className= "ml-3 mt-6 xl:hidden">
            <img src= "./images/icon-menu.svg"></img>
        </figure>
    )
}

class Shop extends React.Component {
    render() {
        return (
            <figure className= "justify-self-end mt-4">
                <img src= "./images/icon-cart.svg"></img>
            </figure>
        )
    }
}

function Avatar() {
    return <figure className= "justify-self-end mt-2 mb-2 w-8 xl:mt-2 w-10">
        <img src="./images/image-avatar.png" className= "w-8"></img>
    </figure>
}

class Nav extends React.Component {
    render() {
        return (
            <nav id="header" className= "flex flex-row mx-w-full space-x-2 justify-between">
                <div role= "group" className= "flex flex-row space-x-2 xl:space-x-5">
                    <Hamburger />
                    <img src="./images/logo.svg" id= "logo" className= "w-21 h-9 mt-3 p-2"></img>
                    <Navlist />
                </div>
                <div role= "group" className= "flex flex-row space-x-7 mt-2">
                    <Shop />
                    <Avatar />
                </div>
            </nav>
        )   
    }
}

class Bigimage extends React.Component {
    render() {
        return(
            <figure>
            <img src="./images/image-product-1.jpg" className= "xl:rounded-lg"></img>
        </figure> 
        )
    }
}

class Slidermenu extends React.Component {
    render() {
        return(
            <nav className= "hidden xl:flex flex-row space-x-5">
                <figure>
                <img src="./images/image-product-1-thumbnail.jpg" className= "rounded-lg"></img>
                </figure>
                <figure>
                <img src="./images/image-product-2-thumbnail.jpg" className= "rounded-lg"></img>
                </figure>
                <figure>
                <img src="./images/image-product-3-thumbnail.jpg" className= "rounded-lg"></img>
                </figure>
                <figure>
                <img src="./images/image-product-4-thumbnail.jpg" className= "rounded-lg"></img>
                </figure>
            </nav>
        )
    }
}

class Imagepreview extends React.Component {
    render() {
        return(
            <section className= "xl:flex flex-col space-y-5">
                <Bigimage />
                <Slidermenu />
            </section>
        )
    }
}

function Productdescription() {
    return <div role ="group" className= "flex flex-col space-y-5 xl:space-y-8 mt-5">
        <h2 className= "tracking-widest font-bold text-xs">Sneaker Company</h2>
        <h3 className= "font-bold text-3xl xl:text-5xl">Fall Limited Edition Sneakers</h3>
        <p id="productdes" className= "font-semi-bold pr-7 xl:text-base leading-6 pr-0">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <p className= "flex justify-between flex-row font-bold text-3xl xl:flex-col xl:text-3xl leading-5">
            <span>$125.00 <sup className= "text-base ml-3 rounded-md xl:text-sm ml-0 p-1">50%</sup></span> 
            <span id="price" className= "text-base pr-7 xl:pr-0 text-sm">$250.00</span>
        </p>
    </div>
}

class Buyitem extends React.Component {
    render() {
        return(
            <div role ="group" className= "flex flex-col space-y-5 xl:flex-row xl:space-x-5">
                <figure id="number" className= "flex justify-between flex-row mr-5 rounded-lg space-x-5 py-3 px-5 xl:space-x-12 xl:py-0 xl:mr-0 xl:h-13 xl:mt-5">
                    <img src="./images/icon-minus.svg" className= "w-3 h-1 justify-self-center self-center"></img>
                    <p className="justify-self-center self-center font-semi-bold">0</p>
                    <img src="./images/icon-plus.svg" className= "w-3 h-3 justify-self-center self-center"></img>
                </figure>
                <button className= "flex justify-center flex-row rounded-lg text-white mr-5 p-2 py-3 px-10 xl:mr-0 xl:py-3">
                    <img src= "./images/icon-cart-2.svg" className= "pr-3"></img>
                    Add to cart
                </button>
            </div>
        )
    }
}

class Textualside extends React.Component {
    render() {
        return(
            <article className= "flex flex-col xl:mt-10 space-y-8">
                <Productdescription />
                <Buyitem />
            </article>
        )
    }
}

class Body extends React.Component {
    render() {
        return(
            <section className= "flex flex-col mt-3 space-x-5 xl:flex-row xl:mt-10 xl:space-x-28">
                <Imagepreview />
                <Textualside />
            </section>
        )
    }
}

function Closing() {
    return <div className ="attribution mt-5">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/Aik-202/aik-ecommerce-product-page.git">Assurance Ikogwe</a>.
    </div>
}

function App() {
    return <section>
        <Nav /> 
        <Body />
        <Closing />
    </section>
}

ReactDOM.render(<App />, document.getElementById('root'));