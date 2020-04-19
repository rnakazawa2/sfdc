public class AddPrimaryContact implements Queueable {

    private Contact contact;
    private String state;
    public AddPrimaryContact(Contact contact, String state) {
        this.contact = contact;
        this.state = state;
    }

    public void execute(QueueableContext context) {
        List<Account> accounts = [select id, name from account where billingstate =:this.state];

        List<Contact> contacts = new List<Contact>();
        for (Account account : accounts) {
            Contact tmp = this.contact.clone();
            tmp.Account = account;
            contacts.add(tmp);
        }
        insert contacts;

        // for (Account account : accounts) {
        //     List<Contact> contacts = new List<Contact>();
        //     contacts.add(this.contact.clone());
        //     account.Contacts = contacts;
        // }
        // update accounts;

    }
}
