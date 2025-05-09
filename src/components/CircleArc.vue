<template>
  <section>
    <div class="container">
      <div class="box">
        <div class="img">
          <div class="imgBx" style="--i: 1">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt=""
            />
          </div>
          <div class="imgBx" style="--i: 2">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt=""
            />
          </div>
          <div class="imgBx" style="--i: 3">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt=""
            />
          </div>
          <div class="imgBx" style="--i: 4">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt=""
            />
          </div>
          <div class="imgBx" style="--i: 5">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt=""
            />
          </div>
          <div class="imgBx" style="--i: 6">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt=""
            />
          </div>
          <div class="imgBx" style="--i: 7">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt=""
            />
          </div>
          <div class="imgBx" style="--i: 8">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
section{
  /* display: flex; */
  width: 100vh;
  margin: 0 auto;
   /* justify-content: center;
   align-items: center; */
  min-height: 100vh;
  background: #222;
  overflow: hidden;
} 
.container{
  width: fit-content;
  /* margin: 0 auto; */
}
.box{
  position:relative;
  top: 0;
  width: 100vh;
  height: 100vh;
  animation: animate 15s linear infinite;
}
@keyframes animate {
  0%{
    rotate: 0deg;
  }
  100%{
    rotate: 360deg;
  }
}
.container:hover .box{
  animation-play-state: paused;
}
.img{
  position: relative;
  left:-50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.img .imgBx{
  position: absolute;
  width: 300px;
  height:400px;
  border-radius: 5%;
  box-shadow: 0 0 0 2px #fff;
  transform: rotate(calc(360deg/8 * var(--i)));
  transform-origin: 50vh;
}
.img .imgBx img{
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
  transform: rotate(calc(-360deg/8 * var(--i)));
  animation: animateImgBx 15s linear infinite;
}
.container:hover .img .imgBx img{
  animation-play-state: paused;
}
@keyframes animateImgBx {
  0%{
    rotate: 0deg;
  }
  100%{
    rotate: -360deg;
  }
}
</style>
