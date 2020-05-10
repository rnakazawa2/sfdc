({
    onFormSubmit : function(component, event, helper) {
        // get event param
        var boatTypeId = event.getParam("formData");

        var searchCmp = component.find("search");
        // call the aura:method in the child component
        var auraMethodResult = searchCmp.doSearch(boatTypeId);
    }
})
