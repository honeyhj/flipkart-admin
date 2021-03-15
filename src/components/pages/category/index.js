import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../redux/actions/categoryAction';
import Layout from '../../layouts/Layout'

export default function Category() {
    const categories = useSelector(state => state.categories.allCategories)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
    },[])
    console.log(categories);
    const showCategory = (categories) =>{
        categories.map(cat =>{
            if(cat.parentId === undefined){
                return(
                    <ul>{cat.name}</ul>
                )
            }else{
                return(
                    <>
                        <ul>{cat.name}
                            <li>{showCategory(categories)}</li>
                        </ul>
                        
                    </>
                )
            }
        })
    }
    
    // console.log(showCategory(categories.categoryList[0]));
    
    return (
        <Layout sidebar>
            
        </Layout>
    )
}
