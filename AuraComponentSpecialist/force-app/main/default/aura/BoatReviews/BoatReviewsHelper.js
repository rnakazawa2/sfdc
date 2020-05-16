({
    onInit : function(component) {
        // Create the action
        var action = component.get("c.getAll");
        var boat = component.get("v.boat");
        if (!boat) {
            return;
        }
        action.setParams({
            boatId : boat.Id
        });

        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(JSON.stringify(response.getReturnValue()));
                component.set("v.boatReviews", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }
})
