({
    doInit : function(component, event, helper) {
        // new display
        if ($A.get("e.force:createRecord")) {
            component.set("v.newDisplay", true);
        }

        // Create the action
        var action = component.get("c.getAllBoatTypes");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },

    createRecord : function(component, event, helper) {
        var createBoatEvent = $A.get("e.force:createRecord");

        // get input value
        var inputField = component.find("searchform");
        var boatType = inputField.get("v.value");
        if (boatType !== "") {
            createBoatEvent.setParams({
                "entityApiName": "Boat__c",
                "defaultFieldValues": {
                    'BoatType__c' : boatType
                }
            });    
        } else {
            createBoatEvent.setParams({
                "entityApiName": "Boat__c"
            });    
        }
        createBoatEvent.fire();
    },

    onFormSubmit : function(component, event, helper) {
        var formData = $A.get("e.c:FormSubmit");

        // get input value
        var inputField = component.find("searchform");
        var boatType = inputField.get("v.value");
        
        formData.setParams({
            "formData" : boatType
        });
        formData.fire();
    }
})
