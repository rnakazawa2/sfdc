({
    onBoatSelected : function(component, event, helper) {
        // get event param
        var boatSelected = event.getParam("boatSelected");
        component.set("v.id", boatSelected.Id);
        // reload data record
        component.find("service").reloadRecord();
    }
})
