let grades = {
    midterm: { grade: 3.3, weight: 1},
    project: { grade: 4.0, weight: 1},
    final: { grade: 3.2, weight: 2}
  }
  
  function gpa(someGrades) {
    // write your code here

  let gradesToWeight = Object.keys(someGrades)
//   console.log("gradesToWeight", gradesToWeight);
  
  let gradeSum = 0;
  let weightSum = 0;

  gradesToWeight.forEach((key) => {
    // console.log("key", key);

    // console.log("Grade Value", someGrades[key].grade);
    gradeSum = gradeSum + someGrades[key].grade * (someGrades[key].weight);
    weightSum = weightSum + someGrades[key].weight; 

    // console.log(someGrades[key].weight)
  });

  console.log("Grade Sum", gradeSum);

    let weightedGrade = (gradeSum / weightSum);
    return weightedGrade

  }
  
  console.log('The final GPA is ' + gpa(grades));


//   should print: 'The final GPA is 3.425'