({
    onBoatClick : function(component, event, helper) {
        // get boat
        var boatCmp = component.get("v.boat");
        console.log(JSON.stringify(boatCmp));

//        var boatId = $A.get("e.c:BoatSelect");
        var boatSelect = component.getEvent("boatSelect");
        boatSelect.setParams({
            "boatId" : boatCmp.Id
        });
        boatSelect.fire();

        var boatSelected =  $A.get("e.c:BoatSelected");
//        var boatSelected = component.getEvent("boatSelected");
        boatSelected.setParams({
            "boat" : boatCmp
        });
        boatSelected.fire();

        // plot map event
        var plotmap = $A.get("e.c:PlotMapMarker");
//        var plotmap = component.getEvent("plotmap");
        plotmap.setParams({
            "sObjectId" : boatCmp.Id,
            "lat" : boatCmp.Geolocation__Latitude__s,
            "long" : boatCmp.Geolocation__Longitude__s,
            "label" : boatCmp.Name
        });
        plotmap.fire();

    }
})