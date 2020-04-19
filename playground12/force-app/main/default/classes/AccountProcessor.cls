public with sharing class AccountProcessor {

    @future
    public static void countContacts(List<Id> recordIds) {
//        List<Account> accounts = [Select Id, Name from Account Where Id IN :recordIds];
        List<Account> accounts = [Select Id, Number_of_Contacts__c, (Select Id from Contacts) from Account Where Id IN :recordIds];

        for (Account account : accounts) {
            List<Contact> contacts = account.contacts;
            account.Number_of_Contacts__c = contacts.size();
        }

        update accounts;
    }
}
