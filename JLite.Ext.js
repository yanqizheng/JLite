JLite.extendStatic(String,{
		format:function(formatStr){
			if(!formatStr)return "";
			var matches=formatStr.match(/\{(\d+)\}/g);
			if(matches.length==0)return formatStr;
			var args=[];
			for(var i=1;i<format.arguments.length;i++){
				args.push(format.arguments[i]);
			}
			return formatStr.replace(/\{(\d+)\}/g,function(match,sub){
				return args[parseInt(sub)];
			});
		}
	}
);
