// alumni testimonial

const facultyData = [
  {
    Id: 1,
    fImg: "assets/purushottam-naidu.webp",
    fName: "Purushottam Naidu",
    fPosition: "HOD - Optimetry",
    fDegree: "B.Optm, Fellowship M.Optm, FIACLE, Ph.D ",
    fExperienced: "14+ Years ",
    fData1: "Reprented Papers national & international level",
    fData2:
      "Experience in speciality Electrodiagnostic Procedure, Contact lences Dispencing Optics, Vision therapy",
    fData3: "PGDM from ICFAI University",
    fData4:
      "Actively involved in Conducting Trining session workshops & research in Optimetry",
  },
  {
    Id: 1,
    fImg: "assets/ranjanamlt.webp",
    fName: "Ranjana Mhatre",
    fPosition: "HOD - MLT",
    fDegree: "DMLT, M.Sc(Chemistry), Ph.D in Analytical Chemistry(Pursuing)",
    fExperienced: "20+ Years ",
    fData1: "Reprented Papers national & international level",
    fData2: "Training, Workshops, Optometry",
    fData3:
      "Experience in speciality Electrodiagnostic Procedure, Contactlences Dispencing Optics, Vision therapy",
  },
  {
    Id: 1,
    fImg: "assets/Meenal-Rane.webp",
    fName: "Meenal Rane",
    fPosition: "Principal - Nursing",
    fDegree: " M.Sc in Nursing, Ph.D in Nursing(Pursuing)",
    fExperienced: "34+ Years ",
    fData1: "NAAC Accesor for Medical Stream and Accademic Council Member.",
    fData2: "Memeber Of Editorial board of Medical journal",
    fData3: "9+ Research Publications & 15 Articles",
  },
  {
    Id: 1,
    fImg: "assets/RAKESH-KAUSHAL.webp",
    fName: "Rakesh V. Kaushal",
    fPosition: "Assistent Professor",
    fDegree: "B.Optm, M.Optm, FIACLE",
    fExperienced: "34+ Years ",
    fData1: "Published Research Papers National & Internationl levels.",
    fData2: "Speciality in Contact Lenses & Dispensing Optics",
    fData3: "Mentoring Optometry Students International level",
  },
  {
    Id: 1,
    fImg: "assets/Jitendra-Shinde.webp",
    fName: "Jitendra Shinde",
    fPosition: "Assistent Professor - MLT",
    fDegree: "PG in Virology",
    fExperienced: "3+ Years ",
    fData1:
      "Research Fellowship at Dept. of Biochemestry AIIMS New Dehli Papers & State Gold Medalist.",
    fData2:
      "Junoir Research Fellow at Vaccine Research & Diseases Center, THSTI & DBT",
    fData3: "Reprented Research Papers national & international level.",
  },
  {
    Id: 1,
    fImg: "assets/GOWTHAMI-PATHALLAPALLI.webp",
    fName: "Gowthami Pathallpalli",
    fPosition: "Assistent Professor - MLT",
    fDegree: "PG in Microbiology, Executive MBA",
    fExperienced: "15+ Years ",
    fData1: "Worked with Govt. of NCT of Delhi.",
    fData2:
      "LSSSDc & NIESBUD Certified Trainer, UNDP Certified in Personality Development",
    fData3: " Papers Published at national level Conferences.",
  },
  {
    Id: 1,
    fImg: "assets/pooja.webp",
    fName: "Pooja Chouhan",
    fPosition: "Faculty - Optometry",
    fDegree: "B. Optometry, M. Optometry",
    fExperienced: "05+ Years ",
    fData1: "Academic excellence Award in 2016,17 & 2018, Cleared STE IACLE ",
    fData2: "Selected for Student Research Grant Scolarship",
    fData3: " Worked & Headed Vision centers.",
  },
  {
    Id: 1,
    fImg: "assets/swanandi.webp",
    fName: "Swanandi Gawade",
    fPosition: "Faculty - Optometry",
    fDegree: "B. Optom. PGDOVS in Binacular Vision & Neuro Optometry",
    fExperienced: "03+ Years ",
    fData1:
      "Experienced in performing eye examination patients & Orthoptic workup & vision therapy",
    fData2: "Conducting Clinical Research and Writting",
    fData3: " Research & Blogs publication in International journal.",
  },
  {
    Id: 1,
    fImg: "assets/Jamil-Akhtar.webp",
    fName: "Md Jamil Akhtar",
    fPosition: "Assistant Professor - Optometry",
    fDegree: "B. Optom. M.Optom PGDM MBA in HealthCare Management",
    fExperienced: "10+ Years ",
    fData1: "Represented Papers at National conferences",
    fData2: "Mentored 3000+ Students.",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Sumit-Kumar.webp",
    fName: "Sumit Kumar",
    fPosition: "Assistant Professor - Optometry",
    fDegree: "B. Optom. M.Optom",
    fExperienced: "05+ Years ",
    fData1:
      "He has taken many lectures on binocular vision and vision therapy.",
    fData2: " Represented Papers at National conferences",
    fData3: "Mentored 1000+ Students.",
  },
  {
    Id: 1,
    fImg: "assets/Ayushi-Chaturvedi.webp",
    fName: "Ayushi Chaturvedi",
    fPosition: "Tutor Cum Clinical Instructor",
    fDegree: "B.Optometry",
    fExperienced: "01+ Years ",
    fData1: "Covid Assistance Award for 6 months for Monitoring Vitals.",
    fData2: "Won Academic Award for Excellence.",
    fData3: "Mentored 500+ Students.",
  },
  {
    Id: 1,
    fImg: "assets/Anuradha-Gurav.webp",
    fName: "Anuradha Gurav",
    fPosition: "Tutor Cum Clinical Instructor (MLT)",
    fDegree: "Master in Microbiology, PG Diploma in Medical Lab Technology",
    fExperienced: "01+ Years ",
    fData1: "Worked at SRL Dignostics.",
    fData2: "Mentored 1000+ Students.",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Harshada-Jadhav.webp",
    fName: "Harshada Jadhav",
    fPosition: "Tutor Cum Clinical Instructor",
    fDegree: "B.Sc, MLT, DMLT Master In Microbiology",
    fExperienced: "03+ Years ",
    fData1: "Awarded as Pat on Back in Feb 2020 in Employee Award Ceremony.",
    fData2: "Mentored 500+ Students.",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Rajvi-Mehta.webp",
    fName: "Rajvi Mehta",
    fPosition: "Tutor Cum Clinical Instructor",
    fDegree: "B.Optometry",
    fExperienced: "01+ Years ",
    fData1: "Baush + Lomb Mastermind in Campus.",
    fData2: " Won Academic Award of Excellence",
    fData3: "Mentored 500+ Students.",
  },
  {
    Id: 1,
    fImg: "assets/Priya-Dias.webp",
    fName: "Priya Dias",
    fPosition: "Clinical Instructor/Tutor College of Nursing",
    fDegree: "M.Sc Nurshing",
    fExperienced: "03+ Years ",
    fData1: "Br.Nath Pai College Of Nursing, Kudal.",
    fData2: "Mentored 500+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Naina-Kedare.webp",
    fName: "Naina Kedare",
    fPosition: "Clinical Instructor/Tutor College of Nurshing",
    fDegree: "M.Sc Nursing",
    fExperienced: "04+ Years ",
    fData1: "Pratibha Institute Of Nursing, Mumbai.",
    fData2: "Mentored 5000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Nutan-Panpatil.webp",
    fName: "Nutan Panpatil",
    fPosition: "Clinical Instructor/Tutor College of Nursing",
    fDegree: "M.Sc Nurshing",
    fExperienced: "04+ Years ",
    fData1: "K. K. Wagh College Of Nursing, Nashik.",
    fData2: "Mentored 5000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Hemangi-Patil.webp",
    fName: "Hemangi Patil",
    fPosition: "Clinical Instructor/Tutor College of Nurshing",
    fDegree: "M.Sc Nursing",
    fExperienced: "03+ Years ",
    fData1: "Life Line School Of Nursing, Mumbai.",
    fData2: "Mentored 3000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Mavis-Sagar.webp",
    fName: "Mavis Sagar",
    fPosition: "Assistant Professor College of Nurshing",
    fDegree: "M.Sc Nurshing, Ph.D in Nursing(Pursuing)",
    fExperienced: "13+ Years ",
    fData1: "Granthamm College Of Nursing, MP.",
    fData2: "Mentored 3000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Shital-Bhalerao.webp",
    fName: "Shital Bhalerao",
    fPosition: "Assistant Professor College of Nurshing",
    fDegree: "M.Sc Nurshing",
    fExperienced: "12+ Years ",
    fData1: "Seva Mandal Education Society, Mumbai.",
    fData2: "Mentored 3000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Bharti-Salunkhe.webp",
    fName: "Bharti Salunkhe",
    fPosition: "Assistant Professor College of Nurshing",
    fDegree: "M.Sc Nurshing",
    fExperienced: "08+ Years ",
    fData1: "Pratibha Institute ot Nursing, Mumbai.",
    fData2: "Mentored 1000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/Trupti-Mhatre.webp",
    fName: "Trupti Mhatre",
    fPosition: "Associate Professor College of Nurshing",
    fDegree: "M.Sc Nurshing, Ph.D in Nurshing( Persuing)",
    fExperienced: "13+ Years ",
    fData1: "MGM College of Nursing, Mumbai.",
    fData2: "Mentored 3000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/manali.webp",
    fName: "Manali Parmar",
    fPosition: "Faculty - Optometry",
    fDegree: "M.Sc Nurshing, Ph.D in Nurshing( Persuing)",
    fExperienced: "01+ Years ",
    fData1: "Eye Care & Dispencing in Optometry",
    fData2: "Mentored 1000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/sadichha.webp",
    fName: "Sadichha Deepak Jadhav",
    fPosition: "Tutor Cum Clinical Instructor - MLT",
    fDegree: "M.Sc Microbiology, B.Sc Microbiology",
    fExperienced: "01+ Years ",
    fData1: "PET Exam Cleared",
    fData2: "Mentored 1000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/sayali.webp",
    fName: "Sayali Mahendra Mohite",
    fPosition: "Assistant Professor",
    fDegree: "Ph.D(Pursuing), M.Sc Zoology, B.Sc Zoology, DMLT",
    fExperienced: "05+ Years ",
    fData1: "-",
    fData2: "Mentored 1000+ Students. ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/ankita.webp",
    fName: "Ankita Baburav Patil",
    fPosition: "Tutor Cum CLinical Instructor - MLT",
    fDegree: " M.Sc Medical Biochemestry",
    fExperienced: "01+ Years ",
    fData1: "-",
    fData2: "Mentored 1000+ Students. ",
    fData3: "-",
  },
];

let output = facultyData.map(showData).join("");
let list = document.getElementById("list");
list.innerHTML = output;

function showData(facultyData) {
  let listItems = `
  <li
  class="relative grid grid-cols-1 md:grid-cols-2 md:w-96 text-xs gap-1 px-3 py-3 w-80 border border-gray-300 cursor-pointer transition-all group hover:shadow-md group  h-auto hover:border-brand-red  rounded-md items-center justify-center max-w-sm ">
  <div class="flex flex-col w-full rounded-md border border-gray-300">
      <div class="flex w-full rounded-md">
          <img src= ${facultyData.fImg} class="flex w-full object-contain rounded-md" alt="">
      </div>
      <div class="flex flex-col px-2 py-3 w-full">
          <h4 class="flex w-full text-center items-center justify-center text-brand-red">
              ${facultyData.fName}
          </h4>
          <span class="flex w-full text-center items-center justify-center">${facultyData.fPosition}
          </span>
      </div>
  </div>
  <div class="flex flex-col w-full h-full pl-5 rounded-md gap-5 items-center justify-around">

      <ul class="flex flex-col w-full justify-around list-outside  gap-2">
      <li class="list-disc">${facultyData.fDegree}</li>
          <li class="list-disc">
             ${facultyData.fData1}
          </li>
          <li class="list-disc"> ${facultyData.fData2}  </li>
          <li class="list-disc">${facultyData.fData3}</li>
          <li class="list-disc"><strong>Experienced : </strong>${facultyData.fExperienced}</li>
      </ul>
  </div>
</li>            `;
  return listItems;
}
