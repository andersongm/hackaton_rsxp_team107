module.exports = {

    async index(req,res) {
        
        const data = {
            "id":1,
            "nome": 'Juca',
            "email":'juca@gmail.com'
        }
        
        res.json(data);
;    }

}