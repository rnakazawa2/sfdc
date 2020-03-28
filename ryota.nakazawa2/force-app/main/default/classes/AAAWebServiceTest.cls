@isTest
public class AAAWebServiceTest {
    testMethod static void testAccountCreate() {
        AAAWebService.AccountInfo info = new AAAWebService.AccountInfo();
        info.AcctName = 'Ryota Nakazawa';
        info.AcctNumber = 12345;
        Account acct = AAAWebService.createAccount(info);
        System.assert(acct != null);
    }
}