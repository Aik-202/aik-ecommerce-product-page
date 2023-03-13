class Navlist extends React.Component {
    render() {
        return(
            <ul className= "flex justify-between flex-row">
                <li className="m-5">Collections</li>
                <li className="m-5">Men</li>
                <li className="m-5">Women</li>
                <li className="m-5">About</li>
                <li className="m-5">Contact</li>
            </ul>
        )
    }
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
    return <figure className= "justify-self-end mt-2 w-10">
        <img src="./images/image-avatar.png"></img>
    </figure>
}

class Nav extends React.Component {
    render() {
        return (
            <nav id="header" className= "flex justify-between flex-row mx-w-full space-x-2 pl-16">
                <img src="./images/logo.svg" id= "logo" className= "w-21 h-9 mt-3 p-2"></img>
                <Navlist />
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
            <img src="./images/image-product-1.jpg" className= "rounded-lg"></img>
        </figure> 
        )
    }
}

class Slidermenu extends React.Component {
    render() {
        return(
            <nav className= "flex flex-row space-x-5">
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
            <section className= "flex flex-col space-y-5">
                <Bigimage />
                <Slidermenu />
            </section>
        )
    }
}

function Productdescription() {
    return <div role ="group" className= "flex flex-col space-y-8 mt-5">
        <h2 className= "text-xs font-bold">Sneaker Company</h2>
        <h3 className= "text-5xl font-bold">Fall Limited Edition Sneakers</h3>
        <p id="productdes" className= "leading-6 font-semi-bold">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <p className= "text-3xl leading-5 font-bold"> $125.00 <sup className= "text-sm rounded-md p-1">50%</sup> <br /> 
        <span id="price" className= "text-sm">$250.00</span>
        </p>
    </div>
}

class Buyitem extends React.Component {
    render() {
        return(
            <div role ="group" className= "flex flex-row space-x-5">
                <figure id="number" className= "flex flex-row rounded-lg space-x-10 px-5">
                    <img src="./images/icon-minus.svg" className= "w-3 h-1 justify-self-center self-center"></img>
                    <p className="justify-self-center self-center font-semi-bold">0</p>
                    <img src="./images/icon-plus.svg" className= "w-3 h-3 justify-self-center self-center"></img>
                </figure>
                <button className= "flex flex-row rounded-lg text-white p-2 px-10">
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
            <article className= "flex flex-col mt-10 space-y-8">
                <Productdescription />
                <Buyitem />
            </article>
        )
    }
}

class Body extends React.Component {
    render() {
        return(
            <section className= "flex flex-row mt-10 space-x-28">
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