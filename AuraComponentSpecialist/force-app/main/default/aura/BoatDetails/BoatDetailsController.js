({
    onBoatSelected : function(component, event, helper) {
        // get event param
        var boatSelected = event.getParam("boatSelected");
        component.set("v.id", boatSelected.Id);
        // reload data record
        component.find("service").reloadRecord();
    },

    onBoatReviewAdded : function(component, event, helper) {
        // refresh reviews
        var reviewsCmp = component.find("reviews");
        var auraMethodResult = reviewsCmp.refresh(component.get("v.boat"));
        var boatdetailstab = component.set("v.selectedtabid", "boatreviewtab");
    },

    onRecordUpdated : function(component, event, helper) {
        // refresh reviews
        var reviewsCmp = component.find("reviews");
        if (reviewsCmp) {
            var auraMethodResult = reviewsCmp.refresh(component.get("v.boat"));
        }
    }
})
