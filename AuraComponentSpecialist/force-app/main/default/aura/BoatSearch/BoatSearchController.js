({
    onFormSubmit : function(component, event, helper) {
        // get event param
        var formData = event.getParam("formData");

        var searchCmp = component.find("search");
        // call the aura:method in the child component
        var auraMethodResult = searchCmp.search(formData.boatTypeId);
    }
})
