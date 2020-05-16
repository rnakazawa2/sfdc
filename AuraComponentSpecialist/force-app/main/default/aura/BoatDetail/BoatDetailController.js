({
    onFullDetails : function(component, event, helper) {
        var boat = component.get("v.boat");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": boat.Id
        });
        navEvt.fire();
    }
})