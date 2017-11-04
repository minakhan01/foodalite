var camera = {
  cameraWidth: window.innerWidth - 20,

  takePhoto: function () {
    console.log(document.getElementById("photo").childNodes[0].src)

    CameraPreview.stopCamera();

    imageSettings = {
      width: 640,
      height: 640,
      quality: 85
    }

    CameraPreview.takePicture(imageSettings, function (base64PictureData) {
      imgData = 'data:image/jpeg;base64,' + base64PictureData;
      document.getElementById("photo").childNodes[0].src = imgData;
    });
  },

  setDisplayPhotoFormat: function () {
    margin = (window.innerWidth - this.cameraWidth) / 2;

    photo = document.getElementById("photo");
    photo.style.width = this.cameraWidth + "px";
    photo.style.height = this.cameraWidth + "px";
    photo.style.marginLeft = margin - 8 + "px";
    photo.style.marginTop = "50px";
  },

  startCamera: function () {
    margin = (window.innerWidth - this.cameraWidth) / 2;
    cameraOptions = {
      x: margin,
      y: 50,
      camera: "front",
      width: this.cameraWidth,
      height: this.cameraWidth,
      toBack: false,
      tapPhoto: false,
    }
    CameraPreview.startCamera(cameraOptions);
  },

  showPreviewBox: function () {
    CameraPreview.show();
  },

  zoom: function () {

  },

  switchCamera: function () {
    CameraPreview.switchCamera();
  },

  focus: function () {

  },

  init: function () {
    document.getElementById("btn_takePhoto").addEventListener('click', this.takePhoto);


    this.startCamera();
    this.setDisplayPhotoFormat();
  }
}

document.addEventListener('deviceready', function () {
  camera.init();
}, false);