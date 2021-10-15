$('#iconchange1').click(function(){
$(this).find('i').toggleClass('glyphicon glyphicon-chevron-down').toggleClass('glyphicon glyphicon-chevron-up');
$("div.table1").find("div.hiddenRow").toggleClass('hiddenRow2');
});

$('#iconchange2').click(function(){
$(this).find('i').toggleClass('glyphicon glyphicon-chevron-down').toggleClass('glyphicon glyphicon-chevron-up');
$("div.table2").find("div.hiddenRow").toggleClass('hiddenRow2');
});
