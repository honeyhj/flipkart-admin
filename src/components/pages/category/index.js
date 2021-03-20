import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../../layouts/Layout'
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import {Container, Row,Col} from 'react-bootstrap'
import {
    IoIosCheckboxOutline,
    IoIosCheckbox,
    IoIosArrowForward,
    IoIosArrowDown,
    IoIosAdd,
    IoIosTrash,
    IoIosCloudUpload
} from 'react-icons/io'
import { getCategories } from '../../../redux/actions/categoryAction';
const Category=(props) =>{
    const [checked, setChecked] = useState([])
    const [expanded, setExpanded] = useState([])
    const categories = useSelector(state => state.categories.allCategories)
    const dispatch = useDispatch();
    console.log(categories,'ppp')
    const showCategory = (categories) => {
        let categoriesrenderlist = [];
        for (let category of categories) {
            categoriesrenderlist.push({
                value: category._id,
                label: category.name,
                children: category.children.length > 0 && showCategory(category.children)
            })
        }
        return categoriesrenderlist;

    }


    return (
        <Layout sidebar>

            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Category</h3>
                            <div className="actionBtnContainer">
                                <span>Actions: </span>
                                <button ><IoIosAdd /> <span>Add</span></button>
                                <button ><IoIosTrash /> <span>Delete</span></button>
                                <button ><IoIosCloudUpload /> <span>Edit</span></button>
                            </div>

                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        
                        
                        <CheckboxTree
                            nodes={showCategory(categories)}
                            checked={checked}
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}
                            icons={{
                                check: <IoIosCheckbox />,
                                uncheck: <IoIosCheckboxOutline />,
                                halfCheck: <IoIosCheckboxOutline />,
                                expandClose: <IoIosArrowForward />,
                                expandOpen: <IoIosArrowDown />
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
export default  Category;