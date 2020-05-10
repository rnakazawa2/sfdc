({
    doSearch : function(component, event, helper) {
        var params = event.getParam("arguments");
        if (!params) {
            return;
        }
        component.set("v.boatTypeId", params.boatTypeId);
        helper.onSearch(component);


        // // Create the action
        // var action = component.get("c.getBoats");
        // if (params) {
        //     action.setParams({
        //         boatTypeId : params.boatTypeId
        //     });
        // }

        // // Add callback behavior for when response is received
        // action.setCallback(this, function(response) {
        //     var state = response.getState();
        //     if (state === "SUCCESS") {
        //         component.set("v.items", response.getReturnValue());
        //     }
        //     else {
        //         console.log("Failed with state: " + state);
        //     }
        // });
        // // Send action off to be executed
        // $A.enqueueAction(action);
        
    }
})
