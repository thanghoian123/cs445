import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { storage } from '../../../../firebase/index';
import "./style.css";

function ProductForm(props) {
    const [category, setCategory] = useState([]);
    const [typeProduct, setTypeProduct] = useState({ code: '', listType: [] });
    const token = JSON.parse(localStorage.getItem("token")).accessToken || "";
    const [product, setProduct] = useState({
        nameProduct: '',
        prices: 0,
        description: '',
        quantities: 1,
        status: 'available',
        typeColor: '',
        productStatus: 'New Arrival',
        imgUrl: '',
        imgUrl_hover: '',
        img_Thumb: [
            "https://firebasestorage.googleapis.com/v0/b/upload-img-shoes.appspot.com/o/images%2Fpro_A61098_2-500x500.jpg?alt=media&token=4f7fb0d4-7357-47b2-97cd-d6306b9b9675",
            "https://firebasestorage.googleapis.com/v0/b/upload-img-shoes.appspot.com/o/images%2Fpro_A61098_2-500x500.jpg?alt=media&token=4f7fb0d4-7357-47b2-97cd-d6306b9b9675",
            "https://firebasestorage.googleapis.com/v0/b/upload-img-shoes.appspot.com/o/images%2Fpro_A61098_2-500x500.jpg?alt=media&token=4f7fb0d4-7357-47b2-97cd-d6306b9b9675",
            "https://firebasestorage.googleapis.com/v0/b/upload-img-shoes.appspot.com/o/images%2Fpro_A61098_2-500x500.jpg?alt=media&token=4f7fb0d4-7357-47b2-97cd-d6306b9b9675"
        ],
        typeCategory: []
    });

    useEffect(() => {
        axios.get("https://api-doan.herokuapp.com/api/v1/typeproduct/typeproducts").then(resp => {
            setCategory(resp.data);
        }).catch(err => console.error(err))
    }, []);

    useEffect(() => {
        if (!category) return;
        const newList = category.filter(item => {
            return item.code == typeProduct.code
        });
        { newList[0] ? setTypeProduct({ ...typeProduct, listType: newList[0].leaf }) : console.log(newList[0]); }
    }, [typeProduct.code]);



    const onHandleSubmit = (e) => {
        e.preventDefault();
        
        var data = JSON.stringify(product);

        var config = {
            method: 'post',
            url: 'https://api-doan.herokuapp.com/api/v1/product/products',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function onHandleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        const newP = { ...product, [name]: value };
        setProduct(newP);

    }

    function onHandleImgChange(e) {
        console.log(e.target.files[0]);
        if (e.target.files[0]) {
            const newP = { ...product, imgUrl: e.target.files[0] }

            setProduct(newP)
        }


    }

    function onHandleImgChange2(e) {
        if (e.target.files[0]) {
            const newP = { ...product, imgUrl_hover: e.target.files[0] }
            setProduct(newP)
        }
    }
    useEffect(() => {
        console.log(product);
    }, [product.imgUrl]);

    const onHandleUpload = () => {
        const uploadTask = storage.ref(`images/${product.imgUrl.name}`).put(product.imgUrl);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            err => {
                console.log(err);
            },
            () => {
                storage.ref("images").child(product.imgUrl.name).getDownloadURL().then(url => {
                    console.log(url,"url");
                    
                    const uploadTask2 = storage.ref(`images/${product.imgUrl_hover.name}`).put(product.imgUrl_hover);
                    uploadTask2.on(
                        "state_changed",
                        snapshot => { },
                        err => {
                            console.log(err);
                        },
                        () => {
                            storage.ref("images").child(product.imgUrl_hover.name).getDownloadURL().then(url2 => {
                                console.log(url2,"url2");
                                
                                setTimeout(()=>{
                                    setProduct({ ...product, imgUrl_hover: url2,imgUrl: url })
                                })
                            })
                        }
                    )
                })
            }
        )

        // upload img hover

    }

    return (
        <div className="text-center">
            <div className="box box-primary" style={{ width: "60%", margin: "0 auto" }}>
                <div className="box-header with-border">
                    <h3 className="box-title">Option</h3>
                </div>
                {/* /.box-header */}
                {/* form start */}
                <form onSubmit={onHandleSubmit}>
                    <div className="box-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value={product.nameProduct} name="nameProduct" placeholder="name" onChange={onHandleChange} />
                        </div>
                        <div className="form-group">
                            <label >Prices</label>
                            <input type="text" className="form-control" value={product.prices} name="prices" placeholder="Prices" onChange={onHandleChange} />
                        </div>
                        <div className="form-group">
                            <label >Description</label>
                            <input type="text" className="form-control" value={product.description} name="description" placeholder="Description" onChange={onHandleChange} />
                        </div>
                        <div className="form-group">
                            <label >Quantities</label>
                            <input type="text" className="form-control" value={product.quantities} name="quantities" placeholder="Quantities" onChange={(e) => setProduct({ ...product, quantities: parseInt(e.target.value) })} />
                        </div>
                        <div className="form-group">
                            <label >TypeColor</label>
                            <input type="text" className="form-control" value={product.typeColor} name="typeColor" placeholder="TypeColor" onChange={onHandleChange} />
                        </div>
                        <div className="form-group">
                            <label >Type</label>

                            <select className="form-control form-control-lg" name="categoryCode" onChange={(e) => setTypeProduct({ ...typeProduct, code: e.target.value })}>
                                <option value=""></option>
                                {category.map((item, index) => {
                                    return (
                                        <option key={index} value={item.code}>{item.label}</option>
                                    )
                                })}
                            </select>

                            <select className="form-control form-control-lg" name="typeCategory" onChange={(e) => setProduct({ ...product, typeCategory: [e.target.value] })}>
                                <option value=""></option>
                                {(typeProduct.listType || []).map((item, index) => {
                                    return (
                                        <option key={index} value={item.code}>{item.name}</option>
                                    )
                                })}
                            </select>

                        </div>
                        <div className="form-group">
                            <label >ImgUrl</label>
                            <input type="file" name="imgUrl" onChange={onHandleImgChange} />
                            <label >ImgUrl Hover</label>
                            <input type="file" name="imgUrl_hover" onChange={onHandleImgChange2} />
                            <p onClick={onHandleUpload} style={{ cursor: "pointer" }}>upload</p>

                        </div>

                    </div>
                    {/* /.box-body */}
                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default ProductForm;