({
    doInit : function(component, event, helper) {
        helper.onInit(component);
    },

    onUserInfoClick : function(component, event, helper) {
        var selectedItem = event.currentTarget;
        var userid = selectedItem.dataset.userid;

        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": userid
        });
        navEvt.fire();
    }
})
