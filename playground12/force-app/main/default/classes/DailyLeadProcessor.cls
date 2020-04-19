global class DailyLeadProcessor implements Schedulable {

    global void execute(SchedulableContext ctx) {

        List<Lead> leads = [select leadsource from lead];
        for (Lead lead : leads) {
            lead.LeadSource = 'Dreamforce';
        }
        update leads;
    }

}
