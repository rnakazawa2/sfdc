({
    myAction : function(component, event, helper) {
    },

    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getItems");
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

    handleAddItem: function(component, event, helper) {
        // register item
        var newItem = event.getParam("item");
        helper.createItem(component, newItem);
    }

    // clickCreateItem : function(component, event, helper) {
    //     var validCamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
    //         // Displays error messages for invalid fields
    //         inputCmp.showHelpMessageIfInvalid();
    //         return validSoFar && inputCmp.get('v.validity').valid;
    //     }, true);

    //     if(validCamping){
    //         // Create the new item
    //         var item = component.get("v.newItem");
    //         // copy object
    //         var newItem = JSON.parse(JSON.stringify(item));

    //         console.log("Create Camping: " + JSON.stringify(newItem));

    //         helper.createItem(component, newItem);

    //         // var campingList = component.get("v.items");
    //         // campingList.push(newItem);
    //         // component.set("v.items", campingList);

    //         // // reset newItem
    //         // component.set("v.newItem",{'sobjectType':'Camping_Item__c',
    //         //     'Name': '',
    //         //     'Quantity__c': 0,
    //         //     'Price__c': 0,
    //         //     'Packed__c': false});
    //     }
    // }
})
