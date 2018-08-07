var is_mobile = false;

$(function() {
  if ($(".stats").css("display") == "none") {
    is_mobile = true;
  }  else {
$(function() {
    $('.as').each(function() {
      let name = $(this).attr('src')
        $(this).qtip({
            style: {
                classes: 'qtip-dark qtip-shadow rounded'
            },
        show: {
            effect: function() {
                $(this).fadeTo(500, 1);
            }
        },
        hide: {
            effect: function() {
                $(this).fadeOut(200);
            }
        },
            position: {
                target: 'mouse', 
                
              adjust: {
               x :10, y: -50
            }
    },
            content: {
                
                text: function(event, api) {
                    var url = $(this).attr("href")
                    
                    axios.get("http://localhost:1337/anime/detailAnimeM/"+ url.replace("http://localhost:1337/detail-anime/", "")).then(function(r) {
                        api.set('content.text', `<div class="thumbnail"><img width="120px" src="/images/anime/${r.data.photo_url}" /></div>
                        <div class="carddata" ><b style="font-size:16px;color:#fad91c;">${r.data.nama_anime}</b><br />
                        <b>Type :${r.data.type}</b>
                        <b style="margin-top:5px;">Status : ${r.data.status}</b>
                        <b style="margin-top:5px;">Tahun : ${r.data.tahun_terbit}</b>  
                        <b style="margin-top:5px;">Genre : ${r.data.genre}</b>
                        <b style="margin-top:5px;">Score : ${r.data.score}</b>
                        <div class="dropdown-divider"></div>
                        <p><b style="text-align:justify;">${r.data.deskripsi.substring(0,145)} ... </b></p>
                        
</div>`)
                    })
                    return "Loading ...";
                },
            }
        })
    })
})
  } 
}); 

$(function() {
  if (is_mobile == true) {
    $(".item a").each(function() {
      $(this).attr("href",$(this).find("img").attr("src")).addClass("fancybox");
      $(this).qtip('destroy')
    });
    $('.qtip').remove();
    $(".fancybox").fancybox();
  }
});

$(window).on("resize", function() {
  is_mobile = $(".stats").css("display") == "none";
  if (is_mobile == true) {
    $(".item a").each(function(index) {
      $(this).attr("href",$(this).find("img").attr("src")).addClass("fancybox").qtip('destroy');
      $(this).qtip('destroy');
    });
    $(".fancybox").fancybox();
  }
});