

import React from 'react';
import Image from "next/image"
import ai from "../../../public/assets/ai.jpeg"
import block from "../../../public/assets/images.jpeg"
import cnc from "../../../public/assets/cnc.png"
import ambcom from "../../../public/assets/ambcom.jpeg"
import gbf from "../../../public/assets/gbf.jpeg"

export const SpecializeProgram =[
  {
    slug:"wmd",
   header :"Web 3.0 (Blockchain) and Metaverse Specialization",
   description:"Web 3.0 is still being developed, so there isn't a universally accepted definition. Even the proper spelling isn't nailed down, with analyst firms like Forrester, Gartner and IDC toggling between Web3 and Web 3.0.",
   image:block,
   quaters:
    [ 
      {
         header: "Quater IV",
         description:"Blockchain computing with voice assistents anf Matter devices",
         
         number:"4"
       },
      {
         header: "Quater V",
         description:"the future with voice assistents anf Matter devices",
         number:"5"
       },
    ]
  },
  {
    slug:"ai",
   header :"Artificial Intelligence and Deep learning",
   description:"The AI and deep learning specialization focus on building APIs using APIs models.",
   image:ai,
   quaters:
    [ 
      {
         header: "Quater IV",
         description:"Generative AI with voice assistents anf Matter devices",
         number:"4"
       },
      {
         header: "Quater V",
         description:"Deep learningwith voice assistents anf Matter devices",
         number:"5"
       },
    ]
  },
  {
    slug :"cnc",
   header :"Cloud-Native Computing Specialization",
   description:"cloud-native computing in general, it refers to the design and deployment of applications that leverage cloud computing principles and take full advantage of cloud services. Cloud-native applications are typically designed to be scalable, resilient, and flexible, making use of containerization, microservices architecture, and automation to enhance development and deployment processes..",
   image:cnc,
   quaters:
    [ 
      {
         header: "Quater IV",
         description:"Cloud native computing specialization",
         number:"4"
       },
      {
         header: "Quater V",
         description:"Advanced concepts",
         number:"5"
       },
    ]
  },
  {
    slug:"amc",
   header :"Ambient Computing and IoT Specialization",
   description:"Ambient computing is a concept that revolves around the seamless integration of technology into our surroundings to automate tasks and enhance our daily lives. It leverages interconnected devices, data analytics, and artificial intelligence to create personalized experiences and improve efficiency...",
   image:ambcom,
   quaters:
    [ 
      {
         header: "Quater IV",
         description:" Ambient Computing and IoT specialization",
         number:"4"
       },
      {
         header: "Quater V",
         description:"Advanced concepts",
         number:"5"
       },
    ]
  },
  {
    slug:"gbf",
   header :"Genomics and Bioinformatics Specializations",
   description:" Primary Care, Third Edition is an invaluable resource on the state-of-the-art tools, technologies and policy issues.",
   image:gbf,
   quaters:
    [ 
      {
         header: "Quater IV",
         description:"Genomics and Bioinformatics specialization",
         number:"4"
       },
      {
         header: "Quater V",
         description:"Advanced concepts",
         number:"5"
       },
    ]
  },
]