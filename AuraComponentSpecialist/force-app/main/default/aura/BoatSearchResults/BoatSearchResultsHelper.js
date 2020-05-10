({
    onSearch : function(component) {
        // Create the action
        var action = component.get("c.getBoats");
        var boatTypeId = component.get("v.boatTypeId");

        if (!boatTypeId && boatTypeId !== "") {
            return;
        }
        action.setParams({
            boatTypeId : boatTypeId
        });

        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(JSON.stringify(response.getReturnValue()));
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }
})
