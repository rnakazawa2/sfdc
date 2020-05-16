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

        // plot map event
        var plotmap = $A.get("e.c:PlotMapMarker");
        plotmap.setParams({
            "sObjectId" : boatCmp.Id,
            "lat" : boatCmp.Geolocation__Latitude__s,
            "long" : boatCmp.Geolocation__Longitude__s,
            "label" : boatCmp.Name
        });
        plotmap.fire();

    }
})