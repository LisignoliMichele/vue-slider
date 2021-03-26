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
         slide: 'slideright',

      },
      methods:{
         nextImage: function(){
            this.imageIndex++;
            this.slide = "slideright";
            if (this.imageIndex == this.images.length) {
               this.imageIndex = 0
            }
         },
         prevImage: function(){
            this.imageIndex--;
            this.slide = "slideleft";
            if (this.imageIndex < 0) {
               this.imageIndex = this.images.length - 1
            }
         }
      }
   }
);