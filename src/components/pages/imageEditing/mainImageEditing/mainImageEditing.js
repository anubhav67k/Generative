import React from "react";
import "./mainImageEditing.css";
function mainImageEditing() {
  // document.getElementById('colorPicker').addEventListener('input', function(){
  //    var selectedColor= this.value;
  //    console.log('Selected Color:',selectedColor);
  // });
  // document.getElementById('applyColor').addEventListener('click',function(){
  // });
  // document.getElementById('addText').addEventListener('click',function(){
  // });
  // document.getElementById('upsample').addEventListener('click',function(){
  // });
  // document.getElementById('removeBackground').addEventListener('click',function(){
  // });
  function loadImage(event) {
    var canvas = document.getElementById("imageCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
    };
    img.src = URL.createObjectURL(event.target.files[0]);
  }
  return (
    <>
      <div className="toolbar">
        <label for="colorPicker">Color</label>
        <input type="color" id="colorPicker" />
        <button id="applyColor">Apply Color</button>
        <button id="upsample">Upsample</button>
        <button id="addText">Add Text</button>
        <button id="removeBackground">Remove Background</button>
      </div>
      <div id="CanvasContainer">
        <canvas id="imageCanvas"></canvas>
        <div id="imageUploadSection">
          <input
            type="file"
            id="imageUpload"
            accept="*/image"
            onChange="loadImage(event)"
          ></input>
          <label for="imageUpload" id="uploadButton">
            Upload Image
          </label>
        </div>
      </div>
    </>
  );
}
export default mainImageEditing;
