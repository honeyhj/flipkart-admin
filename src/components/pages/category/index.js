import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../redux/actions/categoryAction';
import Layout from '../../layouts/Layout'
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import {
    IoIosCheckboxOutline,
    IoIosCheckbox,
    IoIosArrowForward,
    IoIosArrowDown,
    // IoIosAdd,
    // IoIosTrash,
    // IoIosCloudUpload
} from 'react-icons/io'

export default function Category() {
    const [checked,setChecked] = useState([])
    const [expanded,setExpanded] = useState([])

    const categories = useSelector(state => state.categories.allCategories)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
    },[])
    console.log(categories);
    const showCategory = (categories) =>{
        const nodes = [{
        value: 'mars',
        label: 'Mars',
        children: [
            { value: 'phobos', label: 'Phobos' },
            { value: 'deimos', label: 'Deimos' },
        ],
    }];
        return nodes;
    }
    
    // console.log(showCategory(categories.categoryList[0]));
    // const nodes = [{
    //     value: 'mars',
    //     label: 'Mars',
    //     children: [
    //         { value: 'phobos', label: 'Phobos' },
    //         { value: 'deimos', label: 'Deimos' },
    //     ],
    // }];
    return (
        <Layout sidebar>
            <CheckboxTree
                nodes={showCategory(categories)}
                checked={checked}
                expanded={expanded}
                onCheck={checked => setChecked({ checked })}
                onExpand={expanded => setExpanded({ expanded })}
                icons={{
                    check: <IoIosCheckbox />,
                    uncheck: <IoIosCheckboxOutline />,
                    halfCheck: <IoIosCheckboxOutline />,
                    expandClose: <IoIosArrowForward />,
                    expandOpen: <IoIosArrowDown />
                    }}
            />
        </Layout>
    )
}
