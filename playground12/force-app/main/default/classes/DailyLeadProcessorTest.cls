@IsTest
public class DailyLeadProcessorTest {

    @testSetup 
    public static void setup() {
        createData();
    }

    @IsTest
    public static void test() {
        Test.startTest();
        DailyLeadProcessor processor = new DailyLeadProcessor();
        String sch = '0 0 * * * ?';
        String jobID = System.schedule('Daily Lead.', sch, processor);

        List<Lead> leads0 = [select id, name, leadsource from lead];
        for (Lead lead : leads0) {
            System.assertEquals(null, lead.LeadSource);
        }

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
