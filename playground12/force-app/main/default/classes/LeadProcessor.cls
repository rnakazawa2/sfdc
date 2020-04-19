global class LeadProcessor implements Database.Batchable<sObject> {

    global Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('select LeadSource from Lead');
    }
    global void execute(Database.BatchableContext bc, List<Lead> records){

        for (Lead lead : records) {
            lead.LeadSource = 'Dreamforce';
        }

        update records;
    }    
    global void finish(Database.BatchableContext bc){
        // execute any post-processing operations
    } 

}
