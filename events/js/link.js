
  var config = {
    apiKey: "AIzaSyBbLPkKSbUd_GWm_3XD5nP9bu3x0ywlWaY",
    authDomain: "pragyaa2019-dd5bc.firebaseapp.com",
    databaseURL: "https://pragyaa2019-dd5bc.firebaseio.com",
    projectId: "pragyaa2019-dd5bc",
    storageBucket: "pragyaa2019-dd5bc.appspot.com",
    messagingSenderId: "658070215084"
  };
  firebase.initializeApp(config);


function openModal(data){
  $('#mod1').find(".m1").html('DESCRIPTION');
  var desc = data.attr('data-desc');
   var rules = data.attr('data-rule');
   var gp = data.attr('data-gameplay');
   var contact = data.attr('data-contacts');
  $('.event_dis').html(desc);
  $('.event_rules').html(rules);
  $('.event_gp').html(gp);
  $('.events_contacts').html(contact);
  $(".mod").animate({
    height:"100%",
            width:"100%",
            opacity:"1"
  })

}
    $(document).ready(function() {
            


         var count = 1;

  var category = $(".swiper-container").attr("data-category");

  var collectionName = $(".swiper-container").attr("data-collection-name");
         var db = firebase.firestore();
          db.collection(collectionName).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          if(count == 1){
            $("#card1").find(".details").html(doc.data().name);
            $("#card1").attr("data-desc", doc.data().dis)
              .attr("data-rule", doc.data().rules)
              .attr("data-gameplay", doc.data().gp)
              .attr("data-contacts", doc.data().jointName1 + "<br/>"+ doc.data().jointNo1+"<br/>"+"<br/>"+doc.data().jointName2 + "<br/>"+ doc.data().jointNo2+"<br/>");
            //$('#card1').find('img').attr('src',doc.data().name+".png");
            }
        else{
        $("#card1").clone().attr("id","card"+count).appendTo(".swiper-wrapper");
        $("#card"+count).find(".details").html(doc.data().name);
       $("#card"+count).attr("data-desc", doc.data().dis)
              .attr("data-rule", doc.data().rules)
              .attr("data-gameplay", doc.data().gp)
              .attr("data-contacts",doc.data().jointName1 + "<br/>"+ doc.data().jointNo1+"<br/>"+"<br/>"+doc.data().jointName2 + "<br/>"+ doc.data().jointNo2+"<br/>");
           //$('#card1').find('img').attr('src',doc.data().name+".png");
            }

        

       $("#card"+(count)).click(function(){
        openModal($(this));
       });
        count++;

          

});
      var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 300,
        modifier: 3,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
});
        });