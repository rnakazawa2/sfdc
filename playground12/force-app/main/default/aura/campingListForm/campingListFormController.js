({
    myAction : function(component, event, helper) {
    },

    clickCreateItem : function(component, event, helper) {
        var validCamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);

        if(validCamping){
            // Create the new item
            var item = component.get("v.newItem");
            // copy object
            var newItem = JSON.parse(JSON.stringify(item));

            console.log("Create Camping: " + JSON.stringify(newItem));

            helper.createItem(component, newItem);
        }
    }
})
