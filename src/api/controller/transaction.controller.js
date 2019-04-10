import TransactionService from '../services/transaction.service';

const TransactionController = {
  addATransaction(req, res) {
    const newTransaction = req.body;
    const createdTransaction = TransactionService.addNewTransaction(newTransaction);
    return res.json({
      status: 201,
      data: createdTransaction,
    });
  },
};

export default TransactionController;
