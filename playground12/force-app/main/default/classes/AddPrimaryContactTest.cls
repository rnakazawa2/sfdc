@IsTest
public class AddPrimaryContactTest {

    @testSetup 
    public static void setup() {
        createData();
    }

    @IsTest
    public static void test() {

        Contact contact = new Contact();
        contact.Title = 'AAA Company';
        contact.LastName = 'ABC';

        Test.startTest();
        insert contact;
        AddPrimaryContact addPrimaryContact = new AddPrimaryContact(contact, 'CA');
        System.enqueueJob(addPrimaryContact);
        Test.stopTest();

        List<Contact> contactCA = [select title from contact where contact.account.billingstate = 'CA'];
        List<Contact> contactNY = [select title from contact where contact.account.billingstate = 'NY'];

        for (Contact con : contactCA) {
            System.assertEquals('AAA Company', con.Title);
        }
        System.assertEquals(0, contactNY.size());
    }

    private static void createData() {

        List<Account> accountsNY = new List<Account>();
        for (Integer i=0; i<50; i++) {
            Account account = new Account();
            account.Name = 'Account ' + i;
            account.BillingState = 'NY';
            accountsNY.add(account);
        }
        insert accountsNY;

        List<Account> accountsCA = new List<Account>();
        for (Integer i=50; i<100; i++) {
            Account account = new Account();
            account.Name = 'Account ' + i;
            account.BillingState = 'CA';
            accountsCA.add(account);
        }
        insert accountsCA;
    }

}
