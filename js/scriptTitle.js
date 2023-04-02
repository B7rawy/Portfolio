$( document ).ready( function()
{
	$( '.buzz' ).each( function()
	{
		$( this ).attr( 'data-buzz' , $( this ).text() );
	} );
} );