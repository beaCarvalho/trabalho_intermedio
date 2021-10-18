$('#iconchange').click(function(){
    $(this).find('i').toggleClass('glyphicon glyphicon-chevron-down').toggleClass('glyphicon glyphicon-chevron-up');
    $("tbody.collapse1").find("td.hiddenRow").toggleClass('hiddenRowRemove');
});

$('#iconchange2').click(function(){
    $(this).find('i').toggleClass('glyphicon glyphicon-chevron-down').toggleClass('glyphicon glyphicon-chevron-up');
    $("tbody.collapse2").find("td.hiddenRow").toggleClass('hiddenRowRemove');
});

$('#iconchange1').click(function(){
    $(this).find('i').toggleClass('glyphicon glyphicon-chevron-down').toggleClass('glyphicon glyphicon-chevron-up');
    $("div.table1").find("div.hiddenRow").toggleClass('hiddenRow2');
});
        
$('#iconchange2').click(function(){
    $(this).find('i').toggleClass('glyphicon glyphicon-chevron-down').toggleClass('glyphicon glyphicon-chevron-up');
    $("div.table2").find("div.hiddenRow").toggleClass('hiddenRow2');
});