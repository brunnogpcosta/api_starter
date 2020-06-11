const mongoose = require('mongoose');



const Product = mongoose.model('Product');

module.exports = {

    // RETORNA TODOS OS REGISTROS    
    async index(req, res) {
        const { page } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.json(products)
    },

    //PROCURA UM REGISTRO PELO ID
    async show(req, res) {
        const product = await Product.findById(req.params.id)
        return res.json(product);

    },

    //CRIA UM NOVO REGISTRO
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    //ATUALIZA REGISTRO
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(product)

    },


    //EXCLUI REGISTRO
    async delete(req, res) {
        const product = await Product.findByIdAndRemove(req.params.id)
        return res.send("Registro Removido com Sucesso")
    }



};
