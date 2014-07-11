var selected = '';
var startedBurn = true;
function startBurn(that){
			$(that).addClass('btn-danger');
			setInterval(function(){
				$(that).parent().next().children().addClass('btn-warning');
				$(that).parent().prev().children().addClass('btn-warning');
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
			}, 2000);

			setTimeout(function(){
				$('.btn-warning').click();
			}, 4000);
			console.log('Burn Bitch')
}

$(function() {

	setInterval(function(){
		var allBtns = $('.btn');
		for (var i = 0; i < allBtns.length; i++) {
			if ($(allBtns[i]).attr('class').split('btn-primary').length > 1 ) {
				$(allBtns[i]).removeClass('btn-warning');
				$(allBtns[i]).removeClass('btn-danger');
			};
		};
	}, 1);

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
