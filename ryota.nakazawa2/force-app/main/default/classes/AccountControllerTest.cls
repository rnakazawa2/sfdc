// クラス、および、テストクラスは組織にデプロイされている必要がある。
// デバッガ
// https://developer.salesforce.com/tools/vscode/ja/apex/replay-debugger
// 以下の手順を実施する。
// 1. [SFDX: Toggle Checkpoint (SFDX: チェックポイントを切り替え)]
// 2. [SFDX: Update Checkpoints in Org (SFDX: 組織のチェックポイントを更新)]
// 3. [SFDX: Turn On Apex Debug Log for Replay Debugger (SFDX: Replay Debugger の Apex デバッグログをオン)] 
// 4. テスト実行
// 5. [SFDX: Get Apex Debug Logs (SFDX: Apex デバッグログを取得)]
// 6. [SFDX: Launch Apex Replay Debugger with Current File (SFDX: 現在のファイルを使用して Apex Replay Debugger を起動)] 
// 
@isTest private class AccountControllerTest {

    @isTest static void testcase1() {

        // テストデータを入れる必要あり。組織の登録してあるデータは取得できない。
        Account acc = new Account();
        acc.Name = 'Test Account 20200329';
        insert acc;

        List<Account> accList = AccountController.getAllActiveAccounts();

        for (Account account: accList) {
            System.debug(account.Name);
        }
        System.assertEquals(1, accList.size());
    }
}
