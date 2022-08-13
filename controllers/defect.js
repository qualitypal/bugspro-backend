import {DefectModel} from '../models/defects'
 exports.getalldefects = async (req, res) => {
     const alldefects =  await DefectModel.find();
    //console.log(alldefects);
    res.json({
        project: 'po',
        defects: alldefects});

};