({
    doSearch : function(component, event, helper) {
        var params = event.getParam("arguments");
        if (!params) {
            return;
        }
        component.set("v.boatTypeId", params.boatTypeId);
        helper.onSearch(component);        
    },

    onBoatSelect : function(component, event, helper) {
        // get event param
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
    }
})
