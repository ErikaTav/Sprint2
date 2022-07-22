import ModelDicas from "../model/modelDicas.js"
import dicas from "../banco/banco.js"


class ControllerDicas {
    static ordem = (app) => {
        app.post("/create", (req, res) => {
            const dica = new ModelDicas(req.body.dicas)
            dicas.push(dica)
            res.status(201).json(dicas)
        })
    }
}

export default ControllerDicas;