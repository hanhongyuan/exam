$ns("stgl.views");

stgl.views.ExaminfoFormView=function(){
	var me = $extend(mx.views.View);
	var base = {};
	base.init = me.init;
	me.init = function () {
		me.permissionID = "-1";
		base.init();
		_initControls();
	};
	
	//----声明mx组件变量------
	var _HSplit = null;
	var _HSplitArea0 = null;
	var _DetailToolBar = null;
	var _HSplitArea1 = null;
	var _DataForm = null;
	var _Window = null;
	
	function _initControls(){
		//---调用初始化函数-----
		_init_HSplit();
		_init_HSplitArea0();
		_init_DetailToolBar();
		_init_HSplitArea1();
		_init_DataForm();
	  
		me.on("activate", me.controller._onactivate);
	}
	
	//-----定义初始化函数-----
	function _init_HSplit(){
		_HSplit=new mx.containers.HSplit({borderThick:"0",padding:"0",orientation:"horizontal",width:"100%",id:"HSplit",rows:"25,auto",height:"100%"});
		me.addControl(_HSplit);
	}
	
	function _init_HSplitArea0(){
		_HSplitArea0 = new mx.containers.Container({
			layout:"mx.layouts.AbsoluteLayout",
			id:"HSplitArea0"
		});
		
		_HSplit.addControl(_HSplitArea0, 0);
	}
	
	function _init_DetailToolBar(){		
		_DetailToolBar = new mx.controls.ToolBar({
			itemAlign:"right",
			width:"100%",
			layoutConfigs:{},
			id:"DetailToolBar",
			direction:"horizontal",
			height:"24",
			items:[
				{imageKey:"save",width:"60",id:"SaveButton",text:"保存",droppedDown:false,useSymbol:true,height:"20",onclick:me.controller._saveButton_onclick}
			]
		});
		
		_HSplitArea0.addControl(_DetailToolBar);
	}
	
	function _init_HSplitArea1(){
		_HSplitArea1 = new mx.containers.Container({
			layout:"mx.layouts.AbsoluteLayout",
			id:"HSplitArea1"
		});
		
		_HSplit.addControl(_HSplitArea1, 1);
	}
	
	function _init_DataForm(){
		var formEntityContainer = new mx.datacontainers.FormEntityContainer({
			baseUrl:stgl.mappath("~/rest/examinfo/"),
			loadMeta:false,
			iscID:"-1",
			primaryKey:"examId",
			meta:
			[
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"examContentText",caption:"试题内容(文本)"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"examContentImg",caption:"试题内容(图片)"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"examTypeId",caption:"试题分类"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"examAnswer",caption:"试题答案"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"answerAnalyze",caption:"答案解析"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"examSubject",caption:"试题类型单选多选"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"examGrades",caption:"难易程度难度等级"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"examMark",caption:"试题分数"}
			]
		});
		
		_DataForm = new mx.datacontrols.DataForm({
			width:"100%",
			layoutConfigs:{},
			id:"DataForm",
			maxCols:1,
			height:"100%",
			fields:
			[
				[
					"[默认]",true,
					{lineBreak:false,name:"examContentText",caption:"试题内容(文本)",labelWidth:120,readOnly:false,id:"examContentText",height:"100",editorType:"RichTextEditor"},
					{lineBreak:false,name:"examContentImg",caption:"试题内容(图片)",labelWidth:120,readOnly:false,id:"examContentImg",height:"100",editorType:"RichTextEditor"},
					{lineBreak:false,name:"examAnswer",caption:"试题答案",labelWidth:120,readOnly:false,id:"examAnswer",height:"22",editorType:"TextEditor"},
					{lineBreak:false,name:"answerAnalyze",caption:"答案解析",labelWidth:120,readOnly:false,id:"answerAnalyze",height:"100",editorType:"RichTextEditor"},
					{lineBreak:false,name:"examSubject",caption:"试题类型单选多选",labelWidth:120,readOnly:false,id:"examSubject",height:"22",editorType:"DropDownEditor",nullable:false,
						displayMember: "name", valueMember: "id",  
						items: [ { name: "单选", id: "1" }, 
						         { name:"多选", id: "2" }
						       ]},
					{lineBreak:false,name:"examGrades",caption:"难易程度难度等级",labelWidth:120,readOnly:false,id:"examGrades",height:"22",editorType:"DropDownEditor",nullable:false,
									displayMember: "name", valueMember: "id",  
									items: [ { name: "容易", id: "01" },
										     { name: "偏易", id: "02" },
										     { name: "适中", id: "03" },
										     { name: "偏难", id: "04" },
									         { name:"复杂", id: "05" }
									       ]},
					{lineBreak:false,name:"examMark",caption:"试题分数",labelWidth:120,readOnly:false,id:"examMark",height:"22",editorType:"TextEditor"},
					{lineBreak:false,name:"optionsAText",caption:"试题选项A内容(文本)",labelWidth:120,readOnly:false,id:"optionsAText",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsAImg",caption:"试题选项A内容(图片)",labelWidth:120,readOnly:false,id:"optionsAImg",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsBText",caption:"试题选项B内容(文本)",labelWidth:120,readOnly:false,id:"optionsBText",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsBImg",caption:"试题选项B内容(图片)",labelWidth:120,readOnly:false,id:"optionsBText",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsCText",caption:"试题选项C内容(图片)",labelWidth:120,readOnly:false,id:"optionsCImg",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsCImg",caption:"试题选项C内容(图片)",labelWidth:120,readOnly:false,id:"optionsCImg",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsDText",caption:"试题选项D内容(图片)",labelWidth:120,readOnly:false,id:"optionsDImg",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsDImg",caption:"试题选项D内容(图片)",labelWidth:120,readOnly:false,id:"optionsDImg",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsEText",caption:"试题选项E内容(图片)",labelWidth:120,readOnly:false,id:"optionsEImg",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsEImg",caption:"试题选项E内容(图片)",labelWidth:120,readOnly:false,id:"optionsEImg",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsFText",caption:"试题选项F内容(图片)",labelWidth:120,readOnly:false,id:"optionsFImg",height:"120",editorType:"RichTextEditor"},
					{lineBreak:false,name:"optionsFImg",caption:"试题选项F内容(图片)",labelWidth:120,readOnly:false,id:"optionsFImg",height:"120",editorType:"RichTextEditor"}
				]
			],
			entityContainer: formEntityContainer
		});
		
		_HSplitArea1.addControl(_DataForm);
	}
	
	function _init_Window() {		
		if(_Window == null || ((_Window.reusable==false) && _Window.disposed==true)) {
			_Window = stgl.context.windowManager.create({
				title:"详细信息",
				reusable:true
			});
		}
		_Window.on("activate", function() {
			_Window.setView(me);
		});
		_Window.on("close", function(e){
		    $.each(_Window.controls, function(i, o){
				o.$e.detach();
			});
		});
	}
	
	me.getWindow = function() {
		_init_Window();
		return _Window;
	};
	
	
	me.findControlById = function(controlId){
		try{
			return me.findControl("id", controlId);
		} catch(err) {
			mx.indicate("info","未找到对应的mx控件:    "+ err.message);
			return null;
		}	
	};
    return me.endOfClass(arguments);
};