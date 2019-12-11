function loadMoreWork(){
    function hideWork(){
        $(".removeOne").remove();
        $(".removeTwo").remove();
    }
    let click=1;
    let clicksCount=0;
    let hide=false;
    
    $(".load-more-work__link").eq(0).on('click',function(event)
        {
            event.preventDefault();
            if (hide == false)
            {
                if (click==1)
                {
                    $(".section-work").eq(0).append("<div class='row removeTwo'><div class='col-12 col-sm-12 col-md-6 col-lg-6'><div class='row'><div class='col-6 square dark-grey'></div><div class='col-6 square light-grey'></div></div></div><div class='col-12 col-sm-12 col-md-6 col-lg-6'><div class='row'><div class='col-6 col-sm-6 order-12 order-sm-12 order-lg-1  order-md-1 square dark-grey'></div><div class='col-6 col-sm-6 order-1 order-sm-1 order-md-12 order-lg-12 square light-grey'></div></div></div></div>");
                    click=0;
                    clicksCount++;
                }
                else
                {
                    $(".section-work").eq(0).append("<div class='row removeOne'><div class='col-12 col-sm-12 col-md-6 col-lg-6'><div class='row'><div class='col-6 col-sm-6 order-12 order-sm-12 order-lg-1  order-md-1 square light-grey'></div><div class='col-6 col-sm-6 order-1 order-sm-1 order-md-12 order-lg-12 square dark-grey'></div></div></div><div class='col-12 col-sm-12 col-md-6 col-lg-6'><div class='row'><div class='col-6 square light-grey'></div><div class='col-6 square dark-grey'></div></div></div></div>");
                    click=1;
                    clicksCount++;
                }  
                if (clicksCount >= 2)
                {
                    $(".load-more-work__link").eq(0).text('Hide');
                    hide=true;
                }
            }
            else
            {
                hideWork();
                $(".load-more-work__link").eq(0).text('Load more work');
                hide=false;
                clicksCount=0;
            }

    });
    }

function videoClick(){
    $('#video-button').on('mousedown', function(){
        $('#video-button').children().eq(0).css('width','110px')
    });
    $('#video-button').on('mouseup', function(){
        $('#video-button').children().eq(0).css('width','130px')
    })
}

$(document).ready(function(){
    let navLinks=$(".navigation-item");
    for (let i=0; i<navLinks.length; i++)
    {
        $(".navigation-item").eq(i).on("click","a", function (event) {
            event.preventDefault();
            if (i > navLinks.length/2)
        {
            i=i-navLinks.length/2;
        }
            let id='#scroll'+i;
            let target=$(id);
            console.log(this, id, target)
            let to = $(target).offset().top;
            console.log(to)
    
            window.scrollBy({ top: to, behavior: 'smooth' });
        });
    }
    
});

loadMoreWork();
videoClick();

 
