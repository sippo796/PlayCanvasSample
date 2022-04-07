var WebarSdkSurface=pc.createScript("WebarSdkSurface");

function Test(){
    this.TestObject.enabled=true;
}

WebarSdkSurface.attributes.add("webarSdkCamera",{title:"Webar Camera",type:"entity"});
WebarSdkSurface.attributes.add("webarSdkStage",{title:"Webar Stage",type:"entity"});
WebarSdkSurface.attributes.add("TestObject",{title:"TestObject",type:"entity"});


WebarSdkSurface.prototype.initialize=function(){
    WEBARSDK.InitPlaycanvas("application-canvas",this.webarSdkCamera,this.webarSdkStage);
    WEBARSDK.SetStageReadyCallback(Test());
};
