@IsTest
public with sharing class LeadProcessorTest {

    @testSetup 
    public static void setup() {
        createData();
    }

    @IsTest
    public static void test() {

        Test.startTest();
        LeadProcessor processor = new LeadProcessor();
        Database.executeBatch(processor);
        Test.stopTest();

        List<Lead> leads = [select id, name, leadsource from lead];

        System.assertEquals(200, leads.size());

        for (Lead lead : leads) {
            System.assertEquals('Dreamforce', lead.LeadSource);
        }
    }

    private static List<Id> createData() {

        List<Id> ids = new List<Id>();
        List<Lead> leads = new List<Lead>();
        for (Integer i=0; i<200; i++) {
            Lead lead = new Lead();
            lead.LastName = 'Lead ' + i;
            lead.Company = 'Company ' + i;
            leads.add(lead);
        }

        insert leads;

        for (Lead lead : leads) {
            ids.add(lead.Id);
        }
        return ids;
    }

}
