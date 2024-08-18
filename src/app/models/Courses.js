import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String , maxLength: 600},
    image: { type: String , maxLength: 255},
    creatAt: { type: Date, default:Date.now},
    updateAt: { type: Date, default:Date.now}

  });
const Course = mongoose.model('Courses',CourseSchema );

export default Course
