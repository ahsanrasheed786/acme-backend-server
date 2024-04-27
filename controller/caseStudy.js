import {CasestudyContent} from '../models/caseStudy.js';



export const AddCaseStudy = async (req, res)=> {
  const {
    // id,
    backgroundImage,
    moboImg,
    heading,
    text,
    path,
    bgColorfrom,
    bgColorTo,
    category,
    logImg1,
    logImg2,
    logImg3,
    detail,
    screenScreenshort,
    appTestLink,
    webTestLink,
    isoTestLink,
    clientReview,
    Process
  } = req.body;

  try {
    const savedContent = await CasestudyContent.create({
        // id,
        backgroundImage,
        moboImg,
        heading,
        text,
        path,
        bgColorfrom,
        bgColorTo,
        category,
        logImg1,
        logImg2,
        logImg3,
        detail,
        screenScreenshort,
        appTestLink,
        webTestLink,
        isoTestLink,
        clientReview,
        Process
    });

    res.status(201).json({
        success: true,
        message: 'content created',
        savedContent
    }
        );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const updateCaseStudy = async (req, res)=> {
    const {id} = req.params
    const {
    //   id,
      backgroundImage,
      moboImg,
      heading,
      text,
      path,
      bgColorfrom,
      bgColorTo,
      category,
      logImg1,
      logImg2,
      logImg3,
      detail,
      screenScreenshort,
      appTestLink,
      webTestLink,
      isoTestLink,
      clientReview,
      Process
    } = req.body;
  const finding = await CasestudyContent.findById(id);
  if (!finding) {
    return res.status(404).json({
      success: false,
      message: 'user not found',
      id,
      finding
    });
  }
    try {
      const savedContent = await CasestudyContent.create({id,
          backgroundImage,
          moboImg,
          heading,
          text,
          path,
          bgColorfrom,
          bgColorTo,
          category,
          logImg1,
          logImg2,
          logImg3,
          detail,
          screenScreenshort,
          appTestLink,
          webTestLink,
          isoTestLink,
          clientReview,
          Process
      });
  
      res.status(201).json({
          success: true,
          message: 'content created',
          savedContent
      }
          );
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


  export const getCaseStudy = async (req, res) => {
    try {
      const content = await CasestudyContent.find().select('backgroundImage heading text _id');
      res.json(content);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


  export const getSingleCaseStudy = async (req, res) => {
    try {
      const content = await CasestudyContent.findById(req.params.id);
      res.status(200).json({
        success: true,
        message: 'content found',
        content
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  export const deleteCaseStudy = async (req, res) => {
    const {id} = req.params;
    try {
      const found =await CasestudyContent.findByIdAndDelete(id);
      if (!found) {
        return res.status(404).json({
          success: false,
          message: 'content not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'content deleted',
        found
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.message,
      })}
  }