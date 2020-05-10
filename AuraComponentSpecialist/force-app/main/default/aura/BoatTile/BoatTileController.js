({
    onBoatClick : function(component, event, helper) {
        var boatId = $A.get("e.c:BoatSelect");
        // get value
        var selectedBoatId = event.getSource().get("v.value");
        boatId.setParams({
            "boatId" : selectedBoatId
        });
        boatId.fire();
    }
})