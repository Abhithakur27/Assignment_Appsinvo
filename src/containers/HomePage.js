import React, { Component } from 'react'
import Header from '../components/Header'
import HeaderCarousel from '../components/HeaderCarousel'
import Request from  '../utils/request';
import _ from 'lodash';
import HomeProductSection from '../components/HomeProductSection';
import Footer from '../components/Footer';
export default class HomePage extends Component {
    constructor(props) {
        super()
        this.state={
            productList: {}
        }
       
    }

    componentDidMount= async ()=>{
       await this.getCategoryList()
        

        // this.setState({
        //     productList : _.get(await this.getProductList(), "data.products"),
        //     vegetableList: _.get(await this.getProductList([29]), "data.products"),
        //     fruitsList:  _.get(await this.getProductList([30]), "data.products")
        // })
    }

    getCategoryList = async () => {
        let params = {
            url: "product/category-list?page_no=1"
        }
          let {data}= await Request(params)
          let categories = _.get(data, "data.categories")


        // let categoriesIds = _.get(data, "data.categories").map(x => x.category_id)

        let productList = {...this.state.productList}
        for (let category of categories) {
                productList[category.category_name] = _.get(await this.getProductList([category.category_id]), "data.products")
        }

        console.log("-=-==-",productList,
        categories)
        this.setState({
            productList,
            categories
        })
    }

    getProductList = async (categoriesIds = [], pageNumber= 1) => {
        const ids = categoriesIds.map(x=>x).join(",");
        let params = {
            url: `product/product-list?category_id=${ids}&page_no=${pageNumber}`
        }
          let {data}= await Request(params)
          return data
    }

    render() {
        let productList = this.state.productList || {}
        return (
            <div>
                <Header categories={this.state.categories}/>
                <main class="page-wrapper">
                    <HeaderCarousel/>

                    {
                    
                        Object.keys(productList).map(function(keyName, keyIndex) {
                            // use keyName to get current key's name
                            // and a[keyName] to get its value
                            return (
                                <HomeProductSection key={keyIndex} products={productList[keyName]} sectionTitle={keyName} />
                            )
                          })
                          

                    }
                    {/* <HomeProductSection products={this.state.productList} sectionTitle="Recommended for you" />
                    <HomeProductSection products={this.state.vegetableList} sectionTitle="Vegetables" />
                    <HomeProductSection products={this.state.drinkList} sectionTitle="Drinks" /> */}

                    
                    <Footer />
                </main>
            </div>
        )
    }
}
