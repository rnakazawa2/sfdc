@IsTest
public with sharing class AccountProcessorTest {
    public AccountProcessorTest() {

    }

    @IsTest
    public static void test() {

        List<Id> accounts = createData();

        Test.startTest();
        AccountProcessor.countContacts(accounts);
        Test.stopTest();

        List<Account> resultAccounts = [Select Id, Name, Number_of_Contacts__c from Account Where Id IN :accounts Order By Name];

        System.assertEquals(resultAccounts.get(0).Number_of_Contacts__c, 1);
        System.assertEquals(resultAccounts.get(1).Number_of_Contacts__c, 2);


    }


    private static List<Id> createData() {
        Account a = new Account();
        a.Name = 'Test Account A';
        insert a;

        Contact cont_a = new Contact();
        cont_a.FirstName ='Bob 1';
        cont_a.LastName ='Masters 1';
        cont_a.AccountId = a.Id;
        insert cont_a;

        Account b = new Account();
        b.Name = 'Test Account B';
        insert b;

        Contact cont_b1 = new Contact();
        cont_b1.FirstName ='Bob 2';
        cont_b1.LastName ='Masters 2';
        cont_b1.AccountId = b.Id;
        insert cont_b1;


        Contact cont_b2 = new Contact();
        cont_b2.FirstName ='Bob 3';
        cont_b2.LastName ='Masters 3';
        cont_b2.AccountId = b.Id;
        insert cont_b2;

        List<Id> accounts = new List<Id>();
        accounts.add(a.Id);
        accounts.add(b.Id);

        return accounts;
    }
}
