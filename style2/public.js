function show_sync()
{
	$("#script").html("<script language='javascript' src='?c=index&a=sync'></scr"+"ipt>");
	return;
	$.ajax({
		type:'post',
		url: '?c=index&a=getNode',
		data: null,
		success:function(msg) {
			if (msg == '200' || msg['code'] ==200) {
				
			}
		}
	});
}

function functoin_checkon(url,data)
{
	if (confirm("确认要执行操作?") !== true) {
		return;
	}
	$.ajax({
		type:'post',
		url: url,
		data: data,
		success:function(msg) {
			if (msg != "成功") {
				alert(msg);
			}
			window.location.reload();
		},
		complete: function(msg){
			show_sync();				
		}
	});
}
function ajax_getdata(url,data)
{
	$.ajax({
		type:'post',
		url: url,
		data: data,
		success:function(msg) {
			return msg;
		}
	});
	
}
function close_piao(id)
{
	document.getElementById(id).style.display = 'none';
	document.getElementById(id).innerHTML = '';
}