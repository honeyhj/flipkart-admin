import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../redux/actions/categoryAction';
import Layout from '../../layouts/Layout';

const Product = () => {
    const [info,setInfo] = useState({
        name:'',
        price:'',
        quantity:'',
        description:'',
        productPictures:[],
        category:'',
    })
    const cate = useSelector(state => state.categories.allCategories)
    const dispatch = useDispatch()
    
    const showCategory = (categoriesset,options=[]) => {
        for (let category of categoriesset) {
            options.push(
                `<option value={category._id}>{category.name}</option>`
            )
            if(category.children.length > 0){
                showCategory(category.children,options)
            }
        }
        return options;
    }
    
    
    const handleChange = (e) => {
        const newUser = {...info}
        newUser[e.target.name] = e.target.value;
        setInfo(newUser)
    }
    return (
        <Layout sidebar>
            <form onSubmit="">
                <input type="text" name="name" id="" onChange={handleChange} placeholder="name"/>
                <br />
                <input type="text" name="price" id="" onChange={handleChange} placeholder="price"/>
                <br />
                <input type="text" name="quantity" id="" onChange={handleChange} placeholder="quantity"/>
                <br />
                <input type="text" name="description" id="" onChange={handleChange} placeholder="description"/>
                <br />
                <input type="file" name="productPictures" id="" multiple={true}/>
                <br />
                {
                    JSON.stringify(cate)
                }
                <select name="category" onChange={handleChange}>
                    {
                        // showCategory(cate)
                        JSON.stringify(cate)
                    }
                    <option value=''>select category</option>
                </select>
                <br />
            </form>
        </Layout>
    );
};

export default Product;