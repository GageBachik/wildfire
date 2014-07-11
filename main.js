var selected = '';
var startedBurn = true;
function startBurn(that){
			$(that).addClass('btn-danger');
			setInterval(function(){
				if (!($(that).parent().next().children().hasClass('btn-primary'))) {
					$(that).parent().next().children().addClass('btn-warning');
				}
				
				if (!($(that).parent().prev().children().hasClass('btn-primary'))) {
					$(that).parent().prev().children().addClass('btn-warning');
				}
				
				if (!($(that).parent()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.children().hasClass('btn-primary'))) {
				$(that).parent()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.prev()
				.children().addClass('btn-warning');
				}

				if (!($(that).parent()
				.next()
				.next()
				.next()
				.next()
				.next()
				.next()
				.next()
				.next()
				.next()
				.children().hasClass('btn-primary'))) {
				$(that).parent()
				.next()
				.next()
				.next()
				.next()
				.next()
				.next()
				.next()
				.next()
				.next()
				.children().addClass('btn-warning');
				}
				
			}, 2000);

			setTimeout(function(){
				$('.btn-warning').click();
			}, 4000);
			console.log('Burn Bitch')
}

$(function() {

	$('#lake').on('click', function(){
		if (selected === 'campfire') {
			$('#campfire').toggleClass('selected');
			$(this).toggleClass('selected');
			selected = 'lake';
		}else if (selected === 'lake') {
			$(this).toggleClass('selected');
			selected = '';
		}else{
			$(this).toggleClass('selected');
			selected = 'lake';
		}
	});

	$('#campfire').on('click', function(){
		if (selected === 'lake') {
			$('#lake').toggleClass('selected');
			$(this).toggleClass('selected');
			selected = 'campfire';
		}else if (selected === 'lake') {
			$(this).toggleClass('selected');
			selected = '';
		}else{
			$(this).toggleClass('selected');
			selected = 'campfire';
		}
	});

	$('.btn').on('click', function(){
		if (selected === 'lake') {
			$(this).addClass('btn-primary');
		}else if (selected === 'campfire'){
			var that = this;
			startBurn(that);
		}
	});

});
