public with sharing class BoatTypeController {
    @AuraEnabled
    public static List<BoatType__c> getAllBoatTypes(){
        return [SELECT Id, Name FROM BoatType__c];
    }
}
