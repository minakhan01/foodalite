var camera = {
  cameraWidth: window.innerWidth - 20,

  takePhoto: function () {
    imageSettings = {
      width: this.cameraWidth,
      height: this.cameraWidth,
      quality: 85
    }

    CameraPreview.takePicture(imageSettings, function (base64PictureData) {
      imgData = 'data:image/jpeg;base64,' + base64PictureData;
      document.getElementById("photo").src = imgData;
      console.log(document.getElementById("photo").src);
      CameraPreview.stopCamera();
    });

  },

  setDisplayPhotoFormat: function () {
    margin = (window.innerWidth - this.cameraWidth) / 2;

    photoBackground = document.getElementById("photoBackground");
    photoBackground.style.width = this.cameraWidth + "px";
    photoBackground.style.height = this.cameraWidth + "px";
    photoBackground.style.marginLeft = margin - 8 + "px";
    photoBackground.style.marginTop = "50px";
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
    document.getElementById("btn_restartCamera").addEventListener('click', this.startCamera);


    this.startCamera();
    this.setDisplayPhotoFormat();
  }
}

document.addEventListener('deviceready', function () {
  camera.init();
}, false);