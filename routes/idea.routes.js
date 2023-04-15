
const ideaController = require("../controllers/idea.controller");

/**
 * Define route for the calls like
 * 
 * Get 127.0.0.1:8080/ideaApp/v1/ideas
 * 
 */

module.exports = (app) =>{
    app.get("/ideaApp/v1/ideas", ideaController.fetchAllideas);

    app.post("/ideaApp/v1/ideas", ideaController.createIdea)
}


/**
 * Create new idea
 */
// module.exports = (app) =>{
//     app.post("/ideaApp/v1/ideas", ideaController.createIdea);
// }
/**
 * Update idea
 */
// module.exports = (app) => {
//     app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea);
//   }
/**
 * Delete idea
 */
// module.exports = (app) => {
//     app.delete("/ideaApp/v1/ideas/:id", ideaController.deleteIdea);
//   }