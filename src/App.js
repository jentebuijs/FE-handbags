import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import Tile from "./Tile";
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonText="to the collection"
                    disabled={false}
                />
                <Button
                    buttonText="shop all bags"
                    disabled={false}
                />
                <Button
                    buttonText="pre-orders"
                    disabled={true}
                />
            </nav>
            <main>
                <Product
                    labelText="Best seller"
                    productImage={bag1}
                    bagName="The handy bag"
                    price="400,-"
                />
                <Product
                    labelText="Best seller"
                    productImage={bag2}
                    bagName="The stylish bag"
                    price="250,-"
                />
                <Product
                    labelText="New collection"
                    productImage={bag3}
                    bagName="The simple bag"
                    price="300,-"
                />
                <Product
                    labelText="New collection"
                    productImage={bag4}
                    bagName="The trendy bag"
                    price="150,-"
                />
            </main>
            <footer>
                <Tile
                    tileTitle = "The brand"
                    tileText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi aut culpa doloremque
                    eius laborum natus nostrum optio tempora unde!"
                    />
                <Tile
                    tileImage = {brand}
                    tileText= ''
                    tileTitle=''
                />
                <Tile
                    tileImage = {ourStory}
                    tileText=''
                    tileTitle=''
                />
                <Tile
                    tileTitle = "Our story"
                    tileText={"    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam distinctio, est " +
                        "hic odio praesentium quam sint sit vel voluptates.\n"}
                    />
            </footer>
        </>
    );
}

export default App;
