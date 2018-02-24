// basic paging logic to demo the buttons

/*
var prev = document.querySelector( '.btn--prev' );
var next = document.querySelector( '.btn--next' );

prev.onclick = slide.bind( this, -1 );
next.onclick = slide.bind( this, 1 );
var index, total;
index = 0;
total = 18;

function slide(position) {
  index = Math.min( Math.max( index + position, 0 ), total - 1 );//?

  document.querySelector( '.pagination-counter' ).innerHTML = ( index + 1 ) + ' of ' + total;

  next.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
  prev.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
}

slide(0);
*/
/*

        var target = e.target
        var index = 0;
        var total = 5;
        var position = 0;

        index = Math.min(Math.max(index + position, 0), total - 1);
        document.querySelector('.pagination-counter').innerHTML = (index + 1) + ' of ' + total;

        
        var page = 1,
            recPerPage = 5,
            // Use Math.max to ensure that we at least start from record 0
            startRec = Math.max(page - 1, 0) * 5,
            // The end index of Array.splice doesn't have to be within boundaries,
            // But if you want to ensure that it does, then use 
            // Math.min(startRec + recPerPage, json.table.length)
            endRec = startRec + recPerPage,

        recordsToShow = this.posts.slice(startRec, endRec);
        console.log(startRec,endRec)
        //console.log(recordsToShow)

        */


        