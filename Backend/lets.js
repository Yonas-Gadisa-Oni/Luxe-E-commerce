const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const users = [];

function createAccount() {
    rl.question("Enter your name: ", (name) => {

        const user = {
            id: users.length + 1,
            name: name,
            acc_number: String(Math.floor(1000000000 + Math.random() * 9000000000)),
            balance: 0,
            transactions: []
        };

        users.push(user);

        console.log("\nAccount created successfully!");
        console.log("Account number:", user.acc_number);

        menu();
    });
}

function findUser(accNumber) {
    return users.find(user => user.acc_number === accNumber);
}

function deposit() {
    rl.question("Enter account number: ", (accNumber) => {

        const user = findUser(accNumber);

        if (!user) {
            console.log("Account not found.");
            return menu();
        }

        rl.question("Enter amount to deposit: ", (amount) => {

            amount = Number(amount);

            if (amount <= 0 || isNaN(amount)) {
                console.log("Invalid amount.");
                return menu();
            }

            user.balance += amount;

            user.transactions.push({
                type: "Deposit",
                amount: amount
            });

            console.log("Deposit successful.");
            console.log("New balance:", user.balance);

            menu();
        });
    });
}

function withdraw() {
    rl.question("Enter account number: ", (accNumber) => {

        const user = findUser(accNumber);

        if (!user) {
            console.log("Account not found.");
            return menu();
        }

        rl.question("Enter amount to withdraw: ", (amount) => {

            amount = Number(amount);

            if (amount <= 0 || isNaN(amount)) {
                console.log("Invalid amount.");
                return menu();
            }

            if (amount > user.balance) {
                console.log("Insufficient balance.");
                return menu();
            }

            user.balance -= amount;

            user.transactions.push({
                type: "Withdrawal",
                amount: amount
            });

            console.log("Withdrawal successful.");
            console.log("New balance:", user.balance);

            menu();
        });
    });
}

function transfer() {
    rl.question("Enter your account number: ", (fromAcc) => {

        const sender = findUser(fromAcc);

        if (!sender) {
            console.log("Sender account not found.");
            return menu();
        }

        rl.question("Enter receiver account number: ", (toAcc) => {

            const receiver = findUser(toAcc);

            if (!receiver) {
                console.log("Receiver account not found.");
                return menu();
            }

            rl.question("Enter amount: ", (amount) => {

                amount = Number(amount);

                if (amount <= 0 || isNaN(amount)) {
                    console.log("Invalid amount.");
                    return menu();
                }

                if (amount > sender.balance) {
                    console.log("Insufficient balance.");
                    return menu();
                }

                sender.balance -= amount;
                receiver.balance += amount;

                sender.transactions.push({
                    type: "Transfer sent",
                    amount: amount,
                    to: receiver.acc_number
                });

                receiver.transactions.push({
                    type: "Transfer received",
                    amount: amount,
                    from: sender.acc_number
                });

                console.log("Transfer successful.");

                menu();
            });
        });
    });
}

function checkBalance() {
    rl.question("Enter account number: ", (accNumber) => {

        const user = findUser(accNumber);

        if (!user) {
            console.log("Account not found.");
            return menu();
        }

        console.log("\nAccount:", user.acc_number);
        console.log("Name:", user.name);
        console.log("Balance:", user.balance);

        menu();
    });
}

function showAccounts() {

    if (users.length === 0) {
        console.log("No accounts found.");
        return menu();
    }

    console.log("\n===== ACCOUNTS =====");

    users.forEach(user => {
        console.log("--------------------");
        console.log("ID:", user.id);
        console.log("Name:", user.name);
        console.log("Account:", user.acc_number);
        console.log("Balance:", user.balance);
    });

    menu();
}

function transactionHistory() {
    rl.question("Enter account number: ", (accNumber) => {

        const user = findUser(accNumber);

        if (!user) {
            console.log("Account not found.");
            return menu();
        }

        console.log("\n===== TRANSACTION HISTORY =====");

        if (user.transactions.length === 0) {
            console.log("No transactions.");
        } else {
            user.transactions.forEach(transaction => {
                console.log(transaction);
            });
        }

        menu();
    });
}

function menu() {

    console.log(`
===== MINI BANK =====

1. Create account
2. Deposit
3. Withdraw
4. Transfer
5. Check balance
6. Show all accounts
7. Transaction history
8. Exit
`);

    rl.question("Choose an option: ", (choice) => {

        switch (choice) {

            case "1":
                createAccount();
                break;

            case "2":
                deposit();
                break;

            case "3":
                withdraw();
                break;

            case "4":
                transfer();
                break;

            case "5":
                checkBalance();
                break;

            case "6":
                showAccounts();
                break;

            case "7":
                transactionHistory();
                break;

            case "8":
                console.log("Goodbye!");
                rl.close();
                break;

            default:
                console.log("Invalid option.");
                menu();
        }
    });
}

menu();