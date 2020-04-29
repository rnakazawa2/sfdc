({
    helperMethod : function() {

    },
    createItem : function(component, item) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var campingList = component.get("v.items");
                campingList.push(response.getReturnValue());
                component.set("v.items", campingList);
            }
        });
        $A.enqueueAction(action);
    }
})
