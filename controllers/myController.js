const volunteerModel = require('../models/volunteerModel');

const defaultCon = async(req, res) => {
    let data =await volunteerModel.find({});
    console.log("data",data);
    res.render('index', { volunteers: data });
};

const addCon = async(req, res) => {
    console.log("Volunteer added..");
    console.log("body", req.body);
    let data ={
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        skills: req.body.skills,
        complete: false
    }
    let volunteerM =new volunteerModel(data);
    await volunteerM.save();
    console.log("Added data??", volunteerM);
    res.redirect('/');
};

const updateCon = async(req, res) => {
    console.log("id", req.params);
    const { id } = req.params;
    const singleVolunteer = await volunteerModel.findOne({_id:id});
    console.log("single Rec??", singleVolunteer);
    res.render('edit', { singleVolunteer });
};

const editCon = async(req, res) => {
    console.log("EDIT..");
    let updatedVolunteeer= await volunteerModel.findByIdAndUpdate(req.body.id, req.body, {new:true});
    console.log("Updated Store", updatedVolunteeer);
    res.redirect('/');
};

const deleteCon = async(req, res) => {
    console.log("Delete..");
    const { id } = req.params;
    let deletedVolunteer= await volunteerModel.findByIdAndDelete(id)
    console.log("Updated Store After Deletion", deletedVolunteer);
    res.redirect('/');
};

const viewCon = async(req, res) => {
    console.log("View..");
    const { id } = req.params;
    const viewVolunteer =await volunteerModel.findOne({_id:id})
    res.render('select', { viewVolunteer });
};

module.exports = { defaultCon, addCon, updateCon, editCon, deleteCon, viewCon };
