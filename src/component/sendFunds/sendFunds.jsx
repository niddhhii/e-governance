import React, {useEffect} from 'react';
import './send_funds.css';
import Web3 from 'web3';
import $ from 'jquery';

const sendFunds = () => {
    let senderId, receiverId, schemeId, senderHash, receiverHash, contract,newLen;

    function startApp() {
        console.log(1);
        let abi = [
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_scheme",
                        "type": "string"
                    }
                ],
                "name": "transferFunds",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getLength",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "transactions",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "scheme",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];
        let fundsAddress = "0x7Ad7F110493CF073cD4611a9A18Bcd2349371dcf";
        let web3 = new Web3('http://localhost:8545');
        contract = new web3.eth.Contract(abi, fundsAddress);
        senderId = $('#senderId').html();
        receiverId = $('#deptId').html();
        // senderHash = getDeptAddr(senderId);
        // receiverHash = getDeptAddr(receiverId);
        receiverHash = '0x4A746fe073C1B1e024B96e1D4bB435f51aC7541a';
        newLen = 0;
        schemeId = $('#schemeId').html();
    }
    startApp();
    function timeConverter(unixTimestamp) {
        var options = {day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
        var dateObj = new Date(unixTimestamp * 1000);
        return dateObj.toLocaleString('en-US', options);
    }
    function getBalance() {
        senderId = '0xCca7560Aa7362F49F3E3bA3CC6f248f6d34900Ee';
        contract.methods.balanceOf(senderId).call().then(function (bal) {
            $('#balance').html(bal);
        })
    }
    window.setInterval(function () {
        // getBalance();
        // getTransactions();
        // track();
    }, 100);

    function wait(time) {
        for (let i = 0; i < time; i++){
        }
    }
    function getTransactions() {
        var notifs;
        var transactions = new Array();
        contract.methods.getLength().call().then(function (length) {
            if (newLen != length) {
                for (let transid = newLen; transid < length; transid++) {
                    contract.methods.transactions(transid).call((err, trans) => {
                        if (trans && trans.receiver == receiverHash) {
                            notifs = $('#notifs').html();
                            notifs += trans.sender + '&nbsp;&nbsp;' + trans.receiver + '&nbsp;&nbsp;' + timeConverter(trans.timestamp) + '&nbsp;&nbsp;' + trans.amount + '&nbsp;&nbsp;' + trans.scheme + '<br>';
                            $('#notifs').html(notifs);
                        }
                    });
                    wait(10000000);
                }
                newLen = length;
            }
        })
    }

    function track() {
        var notifs;
        var transactions = new Array();
        contract.methods.getLength().call().then(function (length) {
            if (newLen != length) {
                for (let transid = newLen; transid < length; transid++) {
                    contract.methods.transactions(transid).call((err, trans) => {
                        if (trans && trans.scheme == schemeId) {
                            notifs = $('#notifs').html();
                            notifs += trans.sender + '&nbsp;&nbsp;' + trans.receiver + '&nbsp;&nbsp;' + timeConverter(trans.timestamp) + '&nbsp;&nbsp;' + trans.amount + '&nbsp;&nbsp;' + trans.scheme + '<br>';
                            $('#notifs').html(notifs);
                        }
                    });
                    wait(10000000);
                }
                newLen = length;
            }
        })
    }

    function downloadCsv(dataTable) {
        let tableHeaders = ["Date", "Sender", "Receiver", "Scheme", "Amount"];
        dataTable.unshift(tableHeaders);
        console.log(dataTable);
        let csvContent = "data:text/csv;charset=utf-8,";
        var i = 0;
        dataTable.forEach(function (rowArray) {
            let row = rowArray.join(",");
            console.log(i);
            i++;
            csvContent += row + "\r\n";
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.style.display = 'none';
        link.setAttribute("download", "myCSV.csv");
        link.innerHTML = "Click Here to download";
        document.body.appendChild(link);

        // link.click();
        // link.remove();
    }
    function sendTransaction() {
        var receiver, userAccount;
        var amt = $('#amt').val();
        var scheme = $('#schemeId').html();
        function getData() {
            receiver = '0xC94a06CaC980aedD3246fb4296589BA932EeA5F3';
            userAccount = '0xCca7560Aa7362F49F3E3bA3CC6f248f6d34900Ee';
            if (amt > 0 && !isNaN(amt)) {
                $("#txStatus").text("Sending the money. This may take a while...");
                return contract.methods.transferFunds(receiver, amt, scheme)
                    .send({ from: userAccount })
                    .on("receipt", function (receipt) {
                        $("#txStatus").text("Successfully sent money to " + receiver + "!");
                    })
                    .on("error", function (error) {
                        $("#txStatus").text(error);
                    });
            } else {
                $('#amt').val('');
                $("#txStatus").text("Enter a valid number");
            }
        }
        getData();
    }
    const handleKeyPress = (event) => {
        return event.charCode >= 48;
    };
    return (
        <div onLoad={() => {startApp()}}>
            <h3 id='senderId'>CM</h3>
            <h4 id='deptId'>MHD</h4><br/>
            <h5 id='schemeId'>Health For All</h5>
            Enter Amount:
            <input type="number" id="amt" min='1' step="1" onKeyPress={handleKeyPress}/>
            <button type="submit" onClick={sendTransaction}>Submit</button>
            <br/><br/>
            <p id="txStatus"></p>

            <p id="balance"></p><br/>
            <button onClick={getTransactions}>Inbox</button>
            <p id='notifs'></p>
            <button onClick={track}>Track</button>
            <p id='track'></p>
        </div>
    );
};

export default sendFunds;