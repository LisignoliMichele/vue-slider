var app = new Vue(
   {
      el: "#app",
      data:{
         images: [
            "https://www.canonclubitalia.com/comunicati-stampa/uploads/2016/10/Andrea-Shooter-Resta%E2%80%8E.jpg",
            "https://www.calendariovaltellinese.com/images/blog/chiavenna-andrea-resta.jpg",
            "https://www.calendariovaltellinese.com/images/eventi/chiavenna-a-resta.jpg",
            "https://www.calendariovaltellinese.com/images/eventi/chiavenna%20andrea%20shooter%20resta.jpg",
            "https://www.celesteprize.com/indi/_pics/8/3/2015-53851-27554_18316_4565_t.jpg?m=1433408930",
            "https://i.ytimg.com/vi/ysTSmeb7VRM/maxresdefault.jpg"
         ],
         imageIndex: 0,
         slideRight: "",
         slideLeft: "",
      },
      methods:{
         deleteClassSlideRight: function(){
            this.slideRight = "";
         },
         deleteClassSlideLeft: function(){
            this.slideLeft = "";
         },
         nextImage: function(){
            this.imageIndex++;
            this.slideLeft = "slideright";
            setTimeout(this.deleteClassSlideLeft,1000)
            if (this.imageIndex == this.images.length) {
               this.imageIndex = 0;
            }

         },
         prevImage: function(){
            this.imageIndex--;
            this.slideLeft = "slideleft";
            setTimeout(this.deleteClassSlideLeft,1000)
            if (this.imageIndex < 0) {
               this.imageIndex = this.images.length - 1;
            }
         }
      }
   }
);
// : salvare la classe in una variabile (una per quella di destra e una per quella di sinistra però) e valorizzarla quando clicchi
// 17:04
// e poi con un setTimeout, la rimetti a null/vuoto/quello che vuoi