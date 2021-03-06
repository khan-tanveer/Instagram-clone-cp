import React, { useState } from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase/app";
import { db, storage } from "./firebase";
import "./ImageUpload.css";
// import { Label } from "@material-ui/core";
import { InputLabel, FormControl, Input } from "@material-ui/core";

const ImageUpload = ({ username }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state__changed",
      (snapshot) => {
        //progress function............................................
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error function.................................................
        console.log(error);
        alert(error.message);
      },
      () => {
        //complete function...................................................
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post the image inside the database........................................

            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });

            setImage(null);
            setProgress(0);
            setCaption("");
          });
      }
    );
  };

  return (
    <div className="imageUpload">
      {/* <p>{caption}</p> */}
      <progress className="imageUpload__progress" value={progress} max="100" />
      <FormControl>
        <InputLabel>Enter a caption</InputLabel>
        <Input
          type="text"
          placeholder="Enter a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <Input type="file" onChange={(e) => handleChange(e)} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUpload()}
        >
          Upload
        </Button>
      </FormControl>
    </div>
  );
};

export default ImageUpload;
