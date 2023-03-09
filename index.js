class Navlist extends React.Component {
    render() {
        return(
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        )
    }
}

class Shop extends React.Component {
    render() {
        return (
            <figure>
                <img src= "./images/icon-cart.svg"></img>
            </figure>
        )
    }
}

function Avatar() {
    return <figure>
        <img src="./images/image-avatar.png"></img>
    </figure>
}

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <h1>Sneakers</h1>
                <Navlist />
                <Shop />
                <Avatar />
            </nav>
        )   
    }
}

class Bigimage extends React.Component {
    render() {
        return(
            <figure>
            <img src="./images/image-product-1.jpg"></img>
        </figure> 
        )
    }
}

class Slidermenu extends React.Component {
    render() {
        return(
            <nav>
                <figure>
                <img src="./images/image-product-1-thumbnail.jpg"></img>
                </figure>
                <figure>
                <img src="./images/image-product-2-thumbnail.jpg"></img>
                </figure>
                <figure>
                <img src="./images/image-product-3-thumbnail.jpg"></img>
                </figure>
                <figure>
                <img src="./images/image-product-4-thumbnail.jpg"></img>
                </figure>
            </nav>
        )
    }
}

class Imagepreview extends React.Component {
    render() {
        return(
            <section>
                <Bigimage />
                <Slidermenu />
            </section>
        )
    }
}

function Productdescription() {
    return <div role ="group">
        <h2>Sneaker Company</h2>
        <h3>Fall Limited Edition Sneakers</h3>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <p> $125.00 <sup>50%</sup> </p>
        <p>$250.00</p>
    </div>
}

class Buyitem extends React.Component {
    render() {
        return(
            <div role ="group">
                <figure>
                    <img src="./images/icon-plus.svg"></img>
                    <p>0</p>
                    <img src="./images/icon-minus.svg"></img>
                </figure>
                <button>Add to cart</button>
            </div>
        )
    }
}

class Textualside extends React.Component {
    render() {
        return(
            <article>
                <Productdescription />
                <Buyitem />
            </article>
        )
    }
}

class Body extends React.Component {
    render() {
        return(
            <section>
                <Imagepreview />
                <Textualside />
            </section>
        )
    }
}

function Closing() {
    return <div className ="attribution">
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