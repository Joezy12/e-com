import React, { useState } from "react";
import { app, database, storage} from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Form() {
    const [picData, setPicData] = useState({});
    const [picData2, setPicData2] = useState({});
    const collectionRef = collection(database, 'users');

    const [formData, setFormData] = useState({
       email: "",
       password: "",
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
            email: formData.email,
            password: formData.password,
        })
        .then(()=> {
            alert("unable to process request, try again later");
        })
        .catch((err)=> {
            console.log(err.message);
        })
       
    }

    return (
        <form onSubmit={handleSubmit} >
            <section className="form">
               <div>
                <h2>Your Email</h2>
                <input type="text" placeholder="Enter your Email" name="email" onChange={handleData}/>
               </div>
               <div>
                <h2>Your Password</h2>
                <input type="text" placeholder="Enter your Password" name="password"  onChange={handleData}/>
               </div>
            </section>
            <div className="btn">
            <button>Continue</button>
            </div>
        </form>
    )
}

export default Form;