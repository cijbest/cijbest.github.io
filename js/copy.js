$(document).ready(function(){
	
	$('.copy_li').click(function(e){
		$('#copy_text').select(); //복사할 텍스트를 선택
		document.execCommand("copy"); //클립보드 복사 실행
		
		$('.copy_alert').show();
		 setTimeout(function(){
			$('.copy_alert').hide();
		}, 2000);
		
		console.log(x,y);
	});
});
 