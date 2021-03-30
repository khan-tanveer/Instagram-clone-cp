import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { db, storage } from "./firebase";

const ImageUpload = () => {
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

    uploadTask.on("state__changed", (snapshot) => {
      //progress function
    });
  };

  return (
    <div>
      {/* I want to have a.... */}
      {/* caption input */}
      {/* file picker */}
      {/* postt button */}
      <h1>hi image uploader</h1>
      <input
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default ImageUpload;
