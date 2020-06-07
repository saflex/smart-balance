$(function () { 
	// Dock initialize
	$('#dock').Fisheye(
		{
			maxWidth: 200,
			items: 'a',
			itemsText: 'span',
			container: '.dock-container',
			itemWidth: 150,
			proximity: 60,
			alignment : 'left',
			valign: 'bottom',
			halign : 'center'
		}
	);
});