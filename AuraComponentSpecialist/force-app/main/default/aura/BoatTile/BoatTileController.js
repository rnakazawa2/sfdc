({
    onBoatClick : function(component, event, helper) {
        // get boat
        var boatCmp = component.get("v.boat");
        console.log(JSON.stringify(boatCmp));

        var boatId = $A.get("e.c:BoatSelect");
        boatId.setParams({
            "boatId" : boatCmp.Id
        });
        boatId.fire();

        var boatSelected =  $A.get("e.c:BoatSelected");
        boatSelected.setParams({
            "boatSelected" : boatCmp
        });
        boatSelected.fire();
    }
})