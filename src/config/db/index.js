import mongoose from 'mongoose';

 async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/learn_nodejs');
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect failure')
    }
}

export default {connect}