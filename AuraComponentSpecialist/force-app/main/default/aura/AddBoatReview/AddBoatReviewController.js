({
    doInit : function(component, event, helper) {
        helper.onInit(component);
    },

    onSave : function(component, event, helper) {

        component.set("v.boatReview.Id", component.get("v.recordId"));

        component.find("service").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // record is saved successfully
                var resultsToast = $A.get("e.force:showToast");

                if (resultsToast) {
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    resultsToast.fire();    
                } else {
                    alert("The record was saved.");
                }

            } else if (saveResult.state === "INCOMPLETE") {
                // handle the incomplete state
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                // handle the error state
                console.log('Problem saving boatreview, error: ' + 
                                JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });
        // init form
        helper.onInit(component);

        // event fire
        var boatReviewAdded =  $A.get("e.c:BoatReviewAdded");
        boatReviewAdded.fire();
        
    }
})
