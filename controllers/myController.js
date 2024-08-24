let volunteerStore = [];

const defaultCon = (req, res) => {
    res.render('index', { volunteers: volunteerStore });
};

const addCon = (req, res) => {
    console.log("Volunteer added..");
    console.log("body", req.body.volunteer);

    const volunteerObj = {
        id: volunteerStore.length + 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        skills: req.body.skills
    };

    volunteerStore.push(volunteerObj);

    console.log("Store", volunteerStore);
    
    res.redirect('/');
};

const updateCon = (req, res) => {
    console.log("id", req.params);

    const { id } = req.params;

    const singleVolunteer = volunteerStore.find(v => {
        return v.id == id;
    });

    console.log("single Rec", singleVolunteer);
    
    res.render('edit', { singleVolunteer });
};

const editCon = (req, res) => {
    console.log("EDIT..");

    const { id, name, email, phone, skills } = req.body;

    volunteerStore = volunteerStore.map(v =>
        v.id == id ? { ...v, name, email, phone, skills } : v
    );

    console.log("Updated Store", volunteerStore);

    res.redirect('/');
};

const deleteCon = (req, res) => {
    console.log("Delete..");

    const { id } = req.params;
    volunteerStore = volunteerStore.filter(v => v.id != id);

    console.log("Updated Store After Deletion", volunteerStore);

    res.redirect('/');
};

const viewCon = (req, res) => {
    console.log("View..");

    const { id } = req.params;
    const singleVolunteer = volunteerStore.find(v => v.id == id);

    res.render('select', { singleVolunteer });
};

module.exports = { defaultCon, addCon, updateCon, editCon, deleteCon, viewCon };
