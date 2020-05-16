({
    doInit : function(component, event, helper) {
        helper.onInit(component);
    },

    refresh : function(component, event, helper) {
        var params = event.getParam("arguments");
        if (!params) {
            return;
        }
        component.set("v.boat", params.boat);
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
