import Course from '../models/courses.js'; // Ensure the path is correct
import mongooseHelper from '../../until/mongoose.js';
class SiteController {
    // [GET] /news
    async index(req, res, next) {
      Course.find({})
            .then(courses =>res.render('home',{
                courses:mongooseHelper.mutipleMongooseToObject(courses)
            }))
            .catch(error => next(error))

  }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
