import {DefectModel} from '../models/defects'
 exports.getalldefects = async (req, res) => {
     const alldefects =  await DefectModel.find();
    //console.log(alldefects);
    res.status(200).json({
        project: 'po',
        defects: alldefects});
};

    exports.adddefect = async (req, res) => {
      const defect = new DefectModel(req.body);  
  
        await defect.save();
    
      res.send(req.body)
    };